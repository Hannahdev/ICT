import { motion } from "framer-motion";

const staticSpeakers = [
    {
        id: 1,
        name: "Dr. Amina El Idrissi",
        role: "Head of AI Research",
        company: "National Tech Lab",
        track: "Artificial Intelligence",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
    },
    {
        id: 2,
        name: "Karim Benjelloun",
        role: "VP of Engineering",
        company: "Cloud Scale Inc.",
        track: "Cloud & DevOps",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
    },
    {
        id: 3,
        name: "Sarah Tazi",
        role: "Principal Cyber Security Lead",
        company: "SecureNet Systems",
        track: "Cybersecurity",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
    },
    {
        id: 4,
        name: "Youssef Chraibi",
        role: "Director of Software Innovation",
        company: "Digital Future Co.",
        track: "Software Architecture",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
    }
];

export function SpeakersSection() {
    return (
        <section id="speakers" className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-zinc-50 border-t border-zinc-100 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col">
                
                {/* Header */}
                <div className="flex flex-col items-start max-w-3xl">
                    <motion.div 
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <span className="size-1.5 rounded-full bg-emerald-600" />
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                            Keynote & Guest Speakers
                        </span>
                    </motion.div>

                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 mt-4 leading-[1.15] tracking-tight"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Featured Event Speakers
                    </motion.h2>

                    <motion.p 
                        className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed font-normal"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Hear from visionary industry leaders, pioneering researchers, and tech innovators sharing insights on cutting-edge engineering, AI, and digital transformation.
                    </motion.p>
                </div>

                {/* Speaker Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
                    {staticSpeakers.map((speaker, index) => (
                        <motion.div 
                            key={speaker.id}
                            className="group flex flex-col bg-white rounded-xl border border-zinc-200/80 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-lg hover:shadow-emerald-500/5"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 60 }}
                        >
                            {/* Headshot */}
                            <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
                                <img 
                                    src={speaker.avatar} 
                                    alt={speaker.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-emerald-600/90 text-white backdrop-blur-md shadow-sm">
                                    {speaker.track}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-xs text-emerald-600 font-semibold mt-0.5">
                                        {speaker.role}
                                    </p>
                                    <p className="text-xs text-slate-500 font-medium">
                                        {speaker.company}
                                    </p>
                                </div>

                                {/* Social Link */}
                                <div className="pt-2 border-t border-zinc-100 flex items-center">
                                    <a 
                                        href={speaker.linkedin}
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label={`${speaker.name} LinkedIn`}
                                        className="p-1.5 rounded-md text-zinc-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                    >
                                        <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                
            </div>
        </section>
    );
}