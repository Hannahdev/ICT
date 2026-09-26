import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            organization: formData.get("organization"),
            inquiry_type: formData.get("inquiry_type"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus({ type: "success", msg: "Votre message a été envoyé avec succès !" });
                form.reset();
            } else {
                setStatus({ type: "error", msg: data.error || "Échec de l'envoi du message." });
            }
        } catch (err) {
            console.error("Fetch Error:", err);
            setStatus({ type: "error", msg: "Impossible de se connecter au serveur backend." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 w-full flex items-center justify-center bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-5xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Column: Contact Form */}
                <div className="flex flex-col">
                    <motion.div 
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00A3E0]/10 border border-[#00A3E0]/20 rounded-full w-fit"
                        initial={{ y: -10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="size-1.5 rounded-full bg-[#00A3E0]" />
                        <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                            GET IN TOUCH
                        </span>
                    </motion.div>

                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] mt-4 leading-[1.15] tracking-tight"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Connect with us <br />for ICT inquiries
                    </motion.h2>

                    <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-md leading-relaxed font-normal">
                        Have questions about sponsorship, registrations, or session proposals? Send us a message and our organizing committee will reach out.
                    </p>

                    {/* Status Feedback Banner */}
                    {status && (
                        <div className={`mt-4 p-3.5 rounded-lg text-xs font-semibold flex items-center gap-2.5 ${
                            status.type === "success" 
                                ? "bg-emerald-50 text-emerald-800 border border-emerald-200" 
                                : "bg-rose-50 text-rose-800 border border-rose-200"
                        }`}>
                            {status.type === "success" ? (
                                <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                            ) : (
                                <AlertCircle className="size-4 shrink-0 text-rose-600" />
                            )}
                            <span>{status.msg}</span>
                        </div>
                    )}

                    {/* Form */}
                    <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Name */}
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-slate-700 tracking-wider mb-2">
                                    FULL NAME
                                </label>
                                <input 
                                    name="name"
                                    type="text" 
                                    required
                                    placeholder="Dr. Sarah Alami" 
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors shadow-sm" 
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-slate-700 tracking-wider mb-2">
                                    WORK EMAIL
                                </label>
                                <input 
                                    name="email"
                                    type="email" 
                                    required
                                    placeholder="sarah.alami@institution.ma" 
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors shadow-sm" 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Organization/University */}
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-slate-700 tracking-wider mb-2">
                                    ORGANIZATION / UNIVERSITY
                                </label>
                                <input 
                                    name="organization"
                                    type="text" 
                                    placeholder="FSBM / Tech Institute" 
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors shadow-sm" 
                                />
                            </div>

                            {/* Inquiry Type */}
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-slate-700 tracking-wider mb-2">
                                    INQUIRY TYPE
                                </label>
                                <select 
                                    name="inquiry_type"
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors shadow-sm cursor-pointer"
                                >
                                    <option value="General Information">General Information</option>
                                    <option value="Keynote & Speaker Proposal">Keynote & Speaker Proposal</option>
                                    <option value="Sponsorship Opportunity">Sponsorship Opportunity</option>
                                    <option value="Press & Media Access">Press & Media Access</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-slate-700 tracking-wider mb-2">
                                MESSAGE
                            </label>
                            <textarea 
                                name="message"
                                rows={4} 
                                required
                                placeholder="Tell us how we can assist you..." 
                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-colors resize-none shadow-sm" 
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-2">
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="bg-[#00A3E0] hover:bg-[#0077C8] disabled:bg-slate-400 text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer shadow-md shadow-[#00A3E0]/20 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin" />
                                        <span>SENDING...</span>
                                    </>
                                ) : (
                                    <span>SEND MESSAGE</span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Column: Key Details Image Card */}
                <motion.div 
                    className="flex justify-center" 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="relative w-full max-w-[380px] h-[480px] overflow-hidden rounded-2xl shadow-xl border border-zinc-200/60 group">
                        {/* High-resolution conference image */}
                        <img 
                            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop" 
                            alt="ICT Conference Hall" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none brightness-90" 
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

                        {/* Details Content Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 z-10">
                            <span className="text-[11px] font-bold text-[#00E5FF] uppercase tracking-wider">
                                Organizing Committee Contacts
                            </span>
                            
                            <div className="flex flex-col gap-2.5 text-xs text-white/90">
                                <div className="flex items-start gap-2.5">
                                    <Mail className="size-4 text-[#00A3E0] shrink-0 mt-0.5" />
                                    <div className="flex flex-col gap-0.5">
                                        <a href="mailto:faouzia.benabbou@univh2c.ma" className="hover:text-[#00E5FF] transition-colors break-all">
                                            faouzia.benabbou@univh2c.ma
                                        </a>
                                        <a href="mailto:elfilalis@gmail.com" className="hover:text-[#00E5FF] transition-colors break-all">
                                            elfilalis@gmail.com
                                        </a>
                                        <a href="mailto:lailafetjah@gmail.com" className="hover:text-[#00E5FF] transition-colors break-all">
                                            lailafetjah@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5 text-slate-300">
                                    <MapPin className="size-4 text-[#00A3E0] shrink-0" />
                                    <span>Casablanca, Morocco</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}