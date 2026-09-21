import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "../components/count-number";
import { ArrowUpRight, History, Sparkles, Globe2, ChevronDown } from "lucide-react";

export function Stats() {
    const [showPastConferences, setShowPastConferences] = useState(false);

    const pastConferences = [
        { edition: "31st ICT", location: "Budva, Montenegro" },
        { edition: "30th ICT", location: "Amman, Jordan" },
        { edition: "29th ICT", location: "Toba, Indonesia" },
        { edition: "28th ICT", location: "London, United Kingdom" },
        { edition: "27th ICT", location: "Bali, Indonesia" },
        { edition: "26th ICT", location: "Hanoi, Vietnam" },
        { edition: "25th ICT", location: "Saint-Malo, France" },
        { edition: "24th ICT", location: "Limassol, Cyprus" },
        { edition: "23rd ICT", location: "Thessaloniki, Greece" },
        { edition: "22nd ICT", location: "Sydney, Australia" },
        { edition: "21st ICT", location: "Lisbon, Portugal" },
        { edition: "20th ICT", location: "Casablanca, Morocco" },
    ];

    return (
        <section id="about" className="py-16 md:py-24 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-slate-50 relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-100/60 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto relative z-10">
                
                {/* Left Column: Text Content, Actions & Expandable Past Conferences */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    
                    {/* Top Tagline */}
                    <motion.div 
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full" 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
                    >
                        <Sparkles size={14} className="text-emerald-600" />
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">About ICT 2026</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 mt-4 leading-[1.15] tracking-tight"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70 }}
                    >
                        Connecting Intelligence, Networks & Sustainable Cities
                    </motion.h2>

                    {/* Paragraph Content */}
                    <motion.div 
                        className="text-slate-600 text-sm sm:text-base mt-6 font-normal leading-relaxed space-y-4"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70 }}
                    >
                        <p>
                            Welcome to the <strong className="text-slate-900 font-semibold">32nd International Conference on Telecommunications (ICT)</strong>, an event with a long tradition of highlighting key advancements and pioneering research in telecommunications. Established in 1991, this annual conference gathers a global community of researchers, engineers, and industry leaders.
                        </p>
                        <p>
                            ICT 2026 aims to facilitate collaborations and knowledge exchange while revealing the latest trends in physical layers, MAC, networking, AI/ML, advanced signal processing, and 5G/6G systems.
                        </p>
                        <p className="italic font-medium text-emerald-700">
                            We look forward to welcoming you to ICT 2026 in Casablanca – where science meets inspiration!
                        </p>
                    </motion.div>

                    {/* Action Buttons: Submit Paper + Read More Toggle */}
                    <motion.div 
                        className="mt-8 flex flex-wrap items-center gap-4 w-full"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
                    >
                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-200 shadow-xl shadow-emerald-600/20 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2">
                            <span>Submit Paper to EDAS</span>
                            <ArrowUpRight size={16} />
                        </button>

                        {/* Modern Read More Button for Past Conferences */}
                        <button
                            onClick={() => setShowPastConferences(!showPastConferences)}
                            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-700 bg-white border border-slate-200/90 hover:border-emerald-500/50 px-5 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
                        >
                            <History size={15} className="text-emerald-600" />
                            <span>{showPastConferences ? "Hide Past Editions" : "Past ICT Conferences"}</span>
                            <ChevronDown
                                size={15}
                                className={`transition-transform duration-300 text-slate-500 ${
                                    showPastConferences ? "rotate-180 text-emerald-600" : ""
                                }`}
                            />
                        </button>
                    </motion.div>

                    {/* Expandable Past Conferences Drawer */}
                    <AnimatePresence>
                        {showPastConferences && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="w-full overflow-hidden"
                            >
                                <div className="bg-white p-5 md:p-6 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-4">
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                        <div className="flex items-center gap-2">
                                            <History className="size-4 text-emerald-600" />
                                            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                                Previous ICT Editions
                                            </h3>
                                        </div>
                                        <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                                            1991 – 2025
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1 text-xs custom-scrollbar">
                                        {pastConferences.map((item, idx) => (
                                            <div 
                                                key={idx} 
                                                className="flex items-center gap-2 p-2.5 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/60 border border-slate-100 hover:border-emerald-200 transition-colors text-slate-700 group"
                                            >
                                                <Globe2 className="size-3.5 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                                                <span>
                                                    <strong className="text-slate-900 font-bold group-hover:text-emerald-700 transition-colors">
                                                        {item.edition}
                                                    </strong>{" "}
                                                    <span className="text-slate-500">({item.location})</span>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                {/* Right Column: Full Call For Papers Poster */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
                    <motion.div 
                        className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 z-10 hover:shadow-emerald-500/10 transition-shadow duration-300"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img 
                            src="/CALL FOR.png" 
                            alt="ICT 2027 Call for Papers" 
                            className="w-full h-auto object-contain block"
                        />
                    </motion.div>
                </div>

            </div>

            {/* Metrics Counter Bar */}
            <div className="flex max-lg:flex-col max-lg:gap-8 justify-between items-center max-w-6xl mx-auto mt-16 md:mt-24 pt-10 border-t border-slate-200/80">
                
                <div className="flex flex-col items-center text-center">
                    <span className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                        <CountUp from={0} to={8} />
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-600 mt-2 uppercase tracking-wider">
                        Core Research Tracks
                    </span>
                </div>

                <div className="max-lg:hidden h-16 w-px bg-slate-200/80"></div>

                <div className="flex flex-col items-center text-center">
                    <span className="text-4xl md:text-5xl font-black text-emerald-600 tracking-tight">
                        <CountUp from={0} to={800} />+
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-600 mt-2 uppercase tracking-wider">
                        Expected Delegates
                    </span>
                </div>

                <div className="max-lg:hidden h-16 w-px bg-slate-200/80"></div>

                <div className="flex flex-col items-center text-center">
                    <span className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
                        <CountUp from={0} to={100} />%
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-600 mt-2 uppercase tracking-wider">
                        Peer-Reviewed Submissions
                    </span>
                </div>

            </div>
        </section>
    );
}