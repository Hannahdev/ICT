import { Calendar, MapPin, ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section 
            id="home" 
            className="relative flex flex-col items-start min-h-screen justify-center bg-[#0B2545] px-6 sm:px-12 lg:px-20 w-full overflow-hidden pt-28 pb-16 selection:bg-[#00E5FF] selection:text-[#0B2545]"
        >
            {/* Background Image & Left-Weighted Shadow Gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                    src="/WhatsApp Image 2026-09-26 at 00.56.56.jpeg" 
                    alt="ICT 2027 Casablanca Smart City" 
                    className="w-full h-full object-cover object-top"
                />
                
                {/* Asymmetrical horizontal gradient: dark on the left, clear on the right */}
                <div 
                    className="absolute inset-0 pointer-events-none" 
                    style={{ 
                        background: `
                            linear-gradient(90deg, rgba(11, 37, 69, 0.92) 0%, rgba(11, 37, 69, 0.65) 35%, rgba(11, 37, 69, 0.1) 70%, transparent 100%),
                            linear-gradient(180deg, rgba(11, 37, 69, 0.4) 0%, rgba(11, 37, 69, 0.2) 50%, rgba(11, 37, 69, 0.6) 100%)
                        `
                    }}
                />
            </div>

            {/* Left-Aligned Text Content Container */}
            <div className="relative z-10 flex flex-col items-start max-w-4xl text-left">

                {/* Main Headline */}
                <motion.h1 
                    className="font-['Montserrat',sans-serif] text-[72px] sm:text-[100px] lg:text-[128px] font-black text-white tracking-tight leading-none uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    ICT 2027
                </motion.h1>

                {/* Main Subtitle */}
                <motion.h2 
                    className="mt-2 font-['Inter',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    33rd International Conference on Telecommunications
                </motion.h2>

                {/* Co-Host Line */}
                <motion.p 
                    className="mt-3 font-['Inter',sans-serif] text-base sm:text-xl font-medium text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    In conjunction with <span className="text-[#00E5FF] font-bold drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">Smart City Casablanca 2027</span>
                </motion.p>

                {/* Theme Quote with Left Accent Bar */}
                <motion.div 
                    className="mt-5 pl-4 border-l-2 border-[#00E5FF]"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <p className="font-['Inter',sans-serif] italic text-white/90 text-sm sm:text-base leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        “Augmented Intelligence for Efficient Networks, Sustainable Cities, and Resilient Communities”
                    </p>
                </motion.div>

                {/* Date & Location Line */}
                <motion.div 
                    className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-sm sm:text-base font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-[#00E5FF]" />
                        <span>May 05–07, 2027</span>
                    </div>
                    <span className="text-white/40">•</span>
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-[#00E5FF]" />
                        <span>Casablanca, Morocco</span>
                    </div>
                    <span className="text-white/40 hidden sm:inline">•</span>
                    <a 
                        href="#registration"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-xs font-bold text-white transition-all duration-200"
                    >
                        <span>Paper Reg: €300</span>
                        <span className="text-white/50">|</span>
                        <span>Gala: €50</span>
                    </a>
                </motion.div>

                {/* Simplified Hero Action Cluster: 2 Focused Actions */}
                <motion.div 
                    className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    {/* Primary CTA: Vibrant Cyan / Sky-Blue Glow Button */}
                    <a 
                        href="https://edas.info" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group w-full sm:w-auto bg-gradient-to-r from-[#00A3E0] to-[#00E5FF] hover:from-[#0092c8] hover:to-[#00d0e6] text-[#0B2545] font-extrabold px-8 py-3.5 rounded-xl text-base transition-all duration-200 shadow-xl shadow-[#00A3E0]/30 hover:shadow-[#00E5FF]/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
                    >
                        <span>Submit Paper</span>
                        <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                    
                    {/* Secondary CTA: Subtle Glassmorphism Link with Arrow */}
                    <a 
                        href="#call-for-papers" 
                        className="group w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/40 px-7 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
                    >
                        <FileText size={18} className="text-[#00E5FF]" />
                        <span>Call for Papers</span>
                        <ArrowRight size={16} className="text-white/60 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}