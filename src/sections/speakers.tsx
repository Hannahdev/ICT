import { motion } from "framer-motion";

const speakers = [
    {
        id: 1,
        name: "Dr. Amina El Idrissi",
        role: "Head of AI Research",
        track: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
        linkedin: "https://linkedin.com"
    },
    {
        id: 2,
        name: "Karim Benjelloun",
        role: "VP of Engineering",
        track: "Cloud & DevOps",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
    },
    {
        id: 3,
        name: "Sarah Tazi",
        role: "Principal Security Lead",
        track: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
    },
    {
        id: 4,
        name: "Youssef Chraibi",
        role: "Director of Innovation",
        track: "Software Architecture",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
    }
];

export function SpeakersSection() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                #speakers, #speakers * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <section id="speakers" className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-zinc-50 border-t border-zinc-100 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    
                    {/* Header */}
                    <motion.div 
                        className="flex flex-col items-center text-center max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-medium text-slate-800 text-center">
                            Meet Our Speakers
                        </h2>
                        <p className="text-slate-500 text-center mt-2">
                            The visionary keynote leaders, researchers, and pioneers passionate about what they do.
                        </p>
                    </motion.div>

                    {/* Speaker Cards */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-12 w-full">
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={speaker.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="w-full sm:w-72 max-w-80 bg-black text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative -mt-px overflow-hidden rounded-2xl">
                                    <img 
                                        src={speaker.image} 
                                        alt={speaker.name} 
                                        className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" 
                                    />
                                    <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                                </div>
                                <div className="px-4 pb-6 text-center">
                                    <p className="mt-4 text-lg font-medium text-white">{speaker.name}</p>
                                    <p className="text-sm font-medium bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 text-transparent bg-clip-text">
                                        {speaker.role}
                                    </p>
                                    <p className="text-xs text-zinc-400 mt-1">
                                        {speaker.track}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}

export default SpeakersSection;