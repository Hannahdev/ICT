import { motion } from "framer-motion";
import { CheckCircle2, FileCheck, Users, CreditCard, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingTier {
    title: string;
    subtitle: string;
    price: number;
    currency: string;
    badge?: string;
    isPopular?: boolean;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
}

const registrationTiers: PricingTier[] = [
    {
        title: "Paper Author Registration",
        subtitle: "Full Conference & Publication Access",
        price: 300,
        currency: "€",
        badge: "Official CFP Registration",
        isPopular: true,
        description: "Mandatory for authors of accepted papers. Covers technical presentation and IEEE Xplore indexing.",
        features: [
            "Publication of accepted paper in IEEE Xplore",
            "Presentation slot in official technical track session",
            "Full access to all 4 conference days (Online + In-person)",
            "Access to all Keynotes, Plenaries & Industry Panels",
            "Included Lunches & Networking Coffee Breaks (May 5–7)",
            "Welcome Reception & Official Conference Delegate Kit",
            "Conference Banquet (Gala Dinner) pass included",
            "Official IEEE Certificate of Presentation & Attendance"
        ],
        buttonText: "Register via EDAS",
        buttonLink: "https://edas.info"
    },
    {
        title: "Accompanying Person",
        subtitle: "Gala Dinner & Social Events",
        price: 50,
        currency: "€",
        badge: "Guest Pass",
        isPopular: false,
        description: "Special pass for accompanying spouses, guests, or companions attending social evening functions.",
        features: [
            "Access to the prestigious Conference Gala Banquet",
            "Welcome Reception entrance",
            "Guided Casablanca cultural sightseeing / social visits",
            "Networking dinner & social receptions with delegates",
            "Commemorative conference gift"
        ],
        buttonText: "Book Accompanying Pass",
        buttonLink: "https://edas.info"
    }
];

export function Registration() {
    return (
        <section id="registration" className="py-20 md:py-28 px-4 md:px-12 lg:px-20 w-full bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
            
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A3E0]/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
                
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/20 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-4">
                        <CreditCard size={13} />
                        <span>Conference Registration & Fees</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2545] tracking-tight">
                        Registration Packages
                    </h2>
                    
                    <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
                        Transparent pricing for researchers, authors, and accompanying guests. Secure your participation for the 33rd ICT 2027 in Casablanca.
                    </p>
                </motion.div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-14 items-stretch">
                    {registrationTiers.map((tier, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                                tier.isPopular
                                    ? "bg-gradient-to-b from-[#0B2545] to-[#07182C] text-white shadow-2xl border-2 border-[#00A3E0]/60 ring-4 ring-[#00A3E0]/10"
                                    : "bg-white text-slate-800 shadow-xl border border-slate-200/90 hover:border-[#00A3E0]/40"
                            }`}
                        >
                            {/* Popular Pill */}
                            {tier.isPopular && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00A3E0] to-[#00E5FF] text-[#0B2545] font-extrabold text-xs tracking-wider uppercase shadow-md flex items-center gap-1.5">
                                    <Sparkles size={12} />
                                    <span>{tier.badge}</span>
                                </div>
                            )}

                            <div>
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <span className={`text-xs font-bold uppercase tracking-widest ${tier.isPopular ? "text-[#00E5FF]" : "text-[#00A3E0]"}`}>
                                        {tier.subtitle}
                                    </span>
                                    {!tier.isPopular && tier.badge && (
                                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                                            {tier.badge}
                                        </span>
                                    )}
                                </div>

                                <h3 className={`text-2xl sm:text-3xl font-black mt-2 tracking-tight ${tier.isPopular ? "text-white" : "text-[#0B2545]"}`}>
                                    {tier.title}
                                </h3>

                                <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${tier.isPopular ? "text-slate-300" : "text-slate-600"}`}>
                                    {tier.description}
                                </p>

                                {/* Price Display */}
                                <div className="mt-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                                        {tier.currency}{tier.price}
                                    </span>
                                    <span className={`text-xs sm:text-sm font-semibold ${tier.isPopular ? "text-slate-300" : "text-slate-500"}`}>
                                        / attendee
                                    </span>
                                </div>

                                {/* Feature Checklist */}
                                <div className="mt-6 space-y-3">
                                    <span className={`text-xs font-bold uppercase tracking-wider block ${tier.isPopular ? "text-slate-300" : "text-slate-700"}`}>
                                        What's included:
                                    </span>
                                    <ul className="space-y-2.5">
                                        {tier.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug">
                                                <CheckCircle2 
                                                    size={16} 
                                                    className={`shrink-0 mt-0.5 ${tier.isPopular ? "text-[#00E5FF]" : "text-[#00A3E0]"}`} 
                                                />
                                                <span className={tier.isPopular ? "text-slate-200" : "text-slate-700"}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="mt-8 pt-4">
                                <a
                                    href={tier.buttonLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-95 ${
                                        tier.isPopular
                                            ? "bg-white text-[#0B2545] hover:bg-slate-100 shadow-black/30"
                                            : "bg-[#0B2545] text-white hover:bg-[#00A3E0]"
                                    }`}
                                >
                                    <span>{tier.buttonText}</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Important Registration Notice Box */}
                <motion.div 
                    className="mt-12 w-full max-w-4xl p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm text-slate-700"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="p-2.5 rounded-xl bg-[#00A3E0]/10 text-[#00A3E0] shrink-0">
                        <ShieldCheck size={24} />
                    </div>
                    <div className="space-y-1">
                        <p className="font-bold text-[#0B2545]">Author Registration Policy (IEEE Xplore Indexing)</p>
                        <p className="text-slate-600 leading-relaxed font-normal">
                            To guarantee publication of an accepted paper in the conference proceedings and IEEE Xplore, at least one author must register at the full author rate (<strong className="text-slate-900 font-bold">€300</strong>) before the camera-ready deadline (<strong className="text-slate-900 font-semibold">March 31, 2027</strong>).
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Registration;
