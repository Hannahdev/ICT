import { useEffect, useRef } from "react";

export function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const galleryItems = [
        {
            src: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&h=1000&auto=format&fit=crop",
            label: "Artificial Intelligence & Smart Systems"
        },
        {
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=1000&auto=format&fit=crop",
            label: "Cloud Computing & Modern DevOps"
        },
        {
            src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=1000&auto=format&fit=crop",
            label: "Cybersecurity & Network Resilience"
        },
        {
            src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=1000&auto=format&fit=crop",
            label: "IoT & Environmental Sensing"
        },
        {
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=1000&auto=format&fit=crop",
            label: "Data Science & Big Data Engineering"
        },
        {
            src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&h=1000&auto=format&fit=crop",
            label: "Software Engineering & Architecture"
        },
        {
            src: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?fit=crop&w=800&h=1000&q=80",
            label: "Digital Transformation & GovTech"
        },
        {
            src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?fit=crop&w=800&h=1000&q=80",
            label: "5G Infrastructure & Future Wireless"
        }
    ];

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            const totalHeight = rect.height;
            const scrolled = -rect.top;
            const maxScroll = totalHeight - viewHeight;

            if (maxScroll <= 0) return;

            // Clamped scroll progress (0 to 1)
            const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
            
            // Calculate limit (total scrollable horizontal width)
            const limit = Math.max(0, track.scrollWidth - window.innerWidth);
            
            // Apply horizontal transform on the track
            track.style.transform = `translateX(-${progress * limit}px)`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        
        // Timeout to ensure elements are measured after paint/images loaded
        const timer = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section id="tracks" ref={containerRef} className="relative h-[180vh] w-full bg-zinc-50 border-t border-zinc-100">
            {/* Sticky view wrapper */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                
                {/* Background ambient light effects */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-96 bg-emerald-500/10 blur-[120px] pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 size-96 bg-teal-500/10 blur-[120px] pointer-events-none" />

                {/* Section Header */}
                <div className="px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl w-full mx-auto mb-6 shrink-0 z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full">
                        <span className="size-1.5 rounded-full bg-emerald-600" />
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                            ICT CONFERENCE TRACKS
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 mt-4 leading-[1.15] tracking-tight">
                        Explore Key Technical Domains
                    </h2>
                </div>

                {/* Horizontal scroll track */}
                <div ref={trackRef} className="flex gap-6 px-4 md:px-16 lg:px-24 xl:px-32 py-4 will-change-transform transition-transform duration-300 ease-out z-10">
                    {galleryItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="relative w-80 md:w-96 h-[420px] md:h-[460px] rounded-2xl overflow-hidden shrink-0 group border border-zinc-200/80 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <img 
                                src={item.src} 
                                alt={item.label} 
                                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105" 
                            />
                            
                            {/* Subtle dark gradient overlay at bottom for text contrast */}
                            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none z-10" />
                            
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <h4 className="text-white text-base md:text-lg font-bold leading-snug">
                                    {item.label}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}