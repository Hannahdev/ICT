import { motion } from "framer-motion";

const speakers = [
    {
        id: 1,
        name: "Pr Mehdi Bennis",
        role: "VP of Engineering",
        track: "Cloud & DevOps",
        image: "data:image/webp;base64,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",
        linkedin: "https://linkedin.com"
    },
    {
        id: 2,
        name: "Pr Anderson Rocha",
        role: "Principal Security Lead",
        track: "Cybersecurity",
        image: "https://cdn.asp.events/CLIENT_William__AADC8E30_F363_0056_DE6E71696B61B261/sites/WAT-SA-2026/media/libraries/full-speaker-list/Anderson-Rocha.png",
        linkedin: "https://linkedin.com"
    },
    
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
                                    <p className="mt-4 text-lg font-bold text-white">{speaker.name}</p>
                                    <p className="text-sm font-semibold bg-gradient-to-r from-[#00E5FF] via-[#00A3E0] to-blue-400 text-transparent bg-clip-text">
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