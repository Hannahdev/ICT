import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00A3E0]/15 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      {/* Main Glassmorphic Container Card */}
      <div className="w-full max-w-5xl mx-auto rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200/80 p-8 sm:p-12 md:p-16 shadow-2xl shadow-blue-500/5 relative z-10 flex flex-col items-center">
        
        {/* Gallery Image Stack with Floating Hover FX */}
        <motion.div 
          className="relative w-full max-w-md h-48 md:h-56 mb-10 flex justify-center items-center group cursor-pointer select-none"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Left Floating Image */}
          <motion.img 
            src="/casablanca-4-tw14m4.jpg" 
            alt="ICT Conference Workshop" 
            variants={{
              rest: { x: -70, y: 10, rotate: -12, scale: 0.95 },
              hover: { x: -110, y: 0, rotate: -18, scale: 1 }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute w-44 md:w-56 h-28 md:h-36 object-cover rounded-2xl shadow-lg border-2 border-white ring-1 ring-slate-900/5 z-0" 
          />

          {/* Right Floating Image */}
          <motion.img 
            src="/hassan-2-mosque-casablanca-01-L.jpg" 
            alt="ICT Keynote Speaker" 
            variants={{
              rest: { x: 70, y: 10, rotate: 12, scale: 0.95 },
              hover: { x: 110, y: 0, rotate: 18, scale: 1 }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute w-44 md:w-56 h-28 md:h-36 object-cover rounded-2xl shadow-lg border-2 border-white ring-1 ring-slate-900/5 z-0" 
          />

          {/* Center Main Featured Image */}
          <motion.img 
            src="/casablanca-4-tw14m4.jpg" 
            alt="ICT Innovation Competition" 
            variants={{
              rest: { y: -5, scale: 1 },
              hover: { y: -15, scale: 1.05 }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute w-44 md:w-56 h-28 md:h-36 object-cover rounded-2xl shadow-2xl border-2 border-white ring-1 ring-slate-900/10 z-10" 
          />
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] tracking-tight max-w-2xl mb-4 leading-[1.15]"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Shape the Future of <span className="bg-gradient-to-r from-[#00A3E0] via-cyan-600 to-[#0B2545] bg-clip-text text-transparent">Telecom & Smart Cities</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-slate-600 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-normal"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join visionary researchers, student innovators, and industry leaders in Casablanca. Submit your research or explore the full program.
        </motion.p>

        {/* Blue Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://edas.info"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#00A3E0] hover:bg-[#0077C8] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#00A3E0]/25 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-98 cursor-pointer"
          >
            <span>Submit via EDAS</span>
            <MoveRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a 
            href="#program"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#00A3E0]/10 hover:bg-[#00A3E0]/20 text-[#0B2545] font-semibold text-sm sm:text-base border border-[#00A3E0]/30 transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
          >
            <span>View Program Schedule</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}