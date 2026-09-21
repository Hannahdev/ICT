import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section 
            id="home" 
            className="relative flex flex-col items-center min-h-screen justify-center bg-slate-50 px-4 sm:px-6 w-full overflow-hidden pt-36 pb-20 selection:bg-emerald-600 selection:text-white"
        >
            {/* Background Image - High Visibility Conference Venue */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
                    alt="ICT 2026 Conference Venue" 
                    className="w-full h-full object-cover object-center opacity-30 scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/60 to-slate-100" />
            </div>

            {/* Ambient Lighting Accent */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-200/40 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto text-center">

                {/* Impactful Title */}
                <motion.h1 
                    className="text-[48px] sm:text-[76px] lg:text-[96px] font-black text-slate-950 tracking-tighter leading-[0.95] max-w-5xl uppercase" 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 30 }}
                >
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                        <span>Telecom</span>
                        {/* Inline Keynote Speaker Preview Card */}
                        <span className="inline-flex items-center gap-2 bg-slate-900 text-white p-1.5 pr-4 rounded-full text-xs font-semibold normal-case tracking-normal align-middle shadow-lg border border-slate-800 my-1">
                            <div className="flex -space-x-2">
                                <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="Speaker 1" />
                                <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Speaker 2" />
                            </div>
                            <span className="text-emerald-400 font-bold">50+ Speakers</span>
                        </span>
                    </div>
                    <div className="mt-1 sm:mt-2">
                        <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-900 bg-clip-text text-transparent">
                            Conference
                        </span>
                    </div>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                    className="text-slate-700 text-base sm:text-xl max-w-2xl text-center mt-8 leading-relaxed font-medium" 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 30 }}
                >
                    33rd International Conference on Telecommunications. Uniting global network researchers, 6G architects, and optical engineers in Thessaloniki, Greece.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div 
                    className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                >
                    <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-200 shadow-xl shadow-emerald-600/30 hover:scale-[1.03] cursor-pointer flex items-center justify-center gap-2">
                        <span>Get Your Ticket</span>
                        <ArrowUpRight size={18} />
                    </button>
                    
                    <button className="w-full sm:w-auto bg-white/90 hover:bg-white text-slate-900 border-2 border-slate-200 hover:border-emerald-600/50 px-8 py-4 rounded-full text-base font-bold transition-all duration-200 shadow-sm cursor-pointer backdrop-blur-md">
                        Explore Tracks
                    </button>
                </motion.div>
            </div>
        </section>
    );
}