import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="py-20 md:py-28 w-full flex items-center justify-center bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-5xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Column: Contact Form */}
                <div className="flex flex-col">
                    <motion.div 
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full w-fit"
                        initial={{ y: -10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="size-1.5 rounded-full bg-emerald-600" />
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                            GET IN TOUCH
                        </span>
                    </motion.div>

                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 mt-4 leading-[1.15] tracking-tight"
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

                    {/* Form */}
                    <form className="mt-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Name */}
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-slate-700 tracking-wider mb-2">
                                    FULL NAME
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Dr. Sarah Alami" 
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-sm" 
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-slate-700 tracking-wider mb-2">
                                    WORK EMAIL
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="sarah.alami@institution.ma" 
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-sm" 
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
                                    type="text" 
                                    placeholder="FSBM / Tech Institute" 
                                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-sm" 
                                />
                            </div>

                            {/* Inquiry Type */}
                            <div className="flex flex-col">
                                <label className="text-xs font-semibold text-slate-700 tracking-wider mb-2">
                                    INQUIRY TYPE
                                </label>
                                <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors shadow-sm cursor-pointer">
                                    <option value="general">General Information</option>
                                    <option value="speakers">Keynote & Speaker Proposal</option>
                                    <option value="sponsorship">Sponsorship Opportunity</option>
                                    <option value="press">Press & Media Access</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <label className="text-xs font-semibold text-slate-700 tracking-wider mb-2">
                                MESSAGE
                            </label>
                            <textarea 
                                rows={4} 
                                placeholder="Tell us how we can assist you..." 
                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors resize-none shadow-sm" 
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-2">
                            <button 
                                type="submit" 
                                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer shadow-md shadow-emerald-600/10"
                            >
                                SEND MESSAGE
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
                    <div className="relative w-full max-w-[380px] h-[450px] overflow-hidden rounded-2xl shadow-xl border border-zinc-200/60 group">
                        {/* High-resolution conference image */}
                        <img 
                            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop" 
                            alt="ICT Conference Hall" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none brightness-90" 
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                        {/* Details Content Overlay */}
                        <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2 z-10">
                            
                            <div className="flex flex-col gap-2 text-sm text-white">
                                
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}