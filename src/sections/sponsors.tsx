export function Sponsors() {
    const companyLogos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"];

    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <section id="sponsors" className="py-12 md:py-16 w-full bg-white border-y border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center mb-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Sponsored & Supported by Global Industry Leaders
                    </p>
                </div>

                <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                    <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "18s" }}>
                        <div className="flex items-center">
                            {[...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => (
                                <img
                                    key={index}
                                    src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                                    alt={company}
                                    className="h-8 md:h-10 w-auto object-contain mx-8 opacity-65 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
                                    draggable={false}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
                </div>
            </section>
        </>
    );
}

export default Sponsors;
