import { motion } from "framer-motion";

interface TrackItem {
    title: string;
    description: string;
    image: string;
}

const trackItems: TrackItem[] = [
    {
        title: "Artificial Intelligence",
        description: "Deep learning, generative AI, natural language processing, and ethical machine intelligence architectures.",
        image: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        title: "Data Science & Cloud",
        description: "Big data engineering, distributed analytics, cloud scale pipelines, and serverless computing.",
        image: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        title: "Software Engineering",
        description: "Scalable systems architecture, DevOps reliability, microservices, and modern web & mobile engineering.",
        image: "https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        title: "Cybersecurity & Networks",
        description: "Threat detection, cryptographic systems, zero trust architectures, and next-gen 5G/6G wireless networks.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=400&auto=format&fit=crop"
    }
];

export function Gallery() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                #tracks, #tracks * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <section id="tracks" className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-zinc-50 border-t border-zinc-100 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    
                    {/* Header */}
                    <motion.div
                        className="text-center max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 text-center">
                            Conference Research Tracks
                        </h2>
                        <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                            A curated collection of specialized research domains — each track designed to advance scientific rigor and real-world tech innovation.
                        </p>
                    </motion.div>

                    {/* Expanding Accordion Track Cards */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 h-auto md:h-[420px] w-full max-w-5xl mt-12 mx-auto">
                        {trackItems.map((track, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative group flex-grow transition-all duration-500 md:hover:w-full w-full md:w-52 h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer"
                            >
                                <img
                                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    src={track.image}
                                    alt={track.title}
                                />
                                
                                {/* Always visible subtle title when collapsed */}
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:group-hover:opacity-0 transition-opacity duration-300">
                                    <h3 className="text-xl font-medium text-white line-clamp-1">
                                        {track.title}
                                    </h3>
                                </div>

                                {/* Full content on hover */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                                        Track 0{index + 1}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                                        {track.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-md">
                                        {track.description}
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

export default Gallery;