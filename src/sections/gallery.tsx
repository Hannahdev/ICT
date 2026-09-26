import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface TrackItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const trackItems: TrackItem[] = [
    {
        id: 1,
        title: "AI-Native & Intelligent Telecom Networks",
        description: "Deep learning for PHY/MAC, generative AI in telecom, self-optimizing network intelligence, and cognitive radio architectures.",
        image: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Autonomous Network Management & Digital Twins",
        description: "Zero-touch network automation, intent-based orchestration, predictive telemetry, and real-time telecom digital twins.",
        image: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "6G, Emerging Wireless & Intelligent Spectrum",
        description: "Terahertz communications, reconfigurable intelligent surfaces (RIS), NTN/satellite integration, and dynamic spectrum sharing.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Semantic Communications & Integrated Sensing",
        description: "Task-oriented semantic transmission, Integrated Sensing and Communication (ISAC), and multi-modal wireless intelligence.",
        image: "https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Edge Intelligence & Distributed AI",
        description: "Federated learning over wireless, split computing, decentralized edge inference, and mobile edge computing (MEC).",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Trustworthy, Secure & Resilient Networks",
        description: "Zero-trust network architectures, quantum-safe cryptography, blockchain for telecom, intrusion defense, and resilient infrastructure.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Green, Energy-Efficient & Frugal Comms",
        description: "Net-zero telecom architectures, energy harvesting, frugal machine learning, and carbon-aware sustainable network design.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "Intelligent Connected & Vehicular Networks",
        description: "Cellular V2X (C-V2X), autonomous mobility fleets, UAV/drone mesh networking, and intelligent cooperative transport systems.",
        image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=800&h=400&auto=format&fit=crop"
    },
    {
        id: 9,
        title: "Frugal, Social & Sustainable Smart Cities",
        description: "Civic technologies, intelligent municipal utility grids, resilient urban infrastructures, and citizen-centric smart territories.",
        image: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=800&h=400&auto=format&fit=crop"
    }
];

export function Gallery() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Smooth horizontal wheel scrolling when scrolling inside the tracks container
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return;
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
            const current = scrollContainerRef.current.scrollLeft;
            if ((e.deltaY > 0 && current < maxScroll - 5) || (e.deltaY < 0 && current > 5)) {
                scrollContainerRef.current.scrollLeft += e.deltaY * 1.1;
            }
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
            
                #tracks, #tracks * {
                    font-family: 'Poppins', sans-serif;
                }

                .tracks-accordion-container {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .tracks-accordion-container::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <section id="tracks" className="py-20 md:py-28 px-4 md:px-12 lg:px-20 w-full bg-zinc-50 border-t border-zinc-100 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    
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

                    {/* Original Slim Expanding Accordion Track Cards (tight gap, close together, moves right on scroll) */}
                    <div 
                        ref={scrollContainerRef}
                        onWheel={handleWheel}
                        className="tracks-accordion-container flex flex-col md:flex-row items-stretch gap-2.5 md:gap-3 h-auto md:h-[420px] w-full mt-12 mx-auto overflow-x-auto select-none scroll-smooth pb-4 pt-1"
                    >
                        {trackItems.map((track, index) => (
                            <motion.div
                                key={track.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="relative group flex-grow transition-all duration-500 ease-out md:hover:grow-[5] w-full md:w-24 md:min-w-[95px] md:hover:min-w-[360px] lg:md:hover:min-w-[400px] h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer shrink-0"
                            >
                                <img
                                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    src={track.image}
                                    alt={track.title}
                                />
                                
                                {/* Always visible subtle title when collapsed */}
                                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent md:group-hover:opacity-0 transition-opacity duration-300">
                                    <span className="text-[11px] font-bold text-[#00E5FF] tracking-wider uppercase block md:hidden">
                                        Track 0{track.id}
                                    </span>
                                    <h3 className="text-lg md:text-base lg:text-lg font-medium text-white line-clamp-1">
                                        {track.title}
                                    </h3>
                                </div>

                                {/* Full content on hover */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white bg-gradient-to-t from-black/95 via-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#00E5FF] mb-1">
                                        Track 0{track.id}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-2 leading-snug">
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