interface SponsorLogo {
    name: string;
    src: string;
    scale?: string;
}

// Add or replace with your local logo files inside the public/ folder (e.g. "/sponsors/ieee.png" or "/logo.png")
const sponsorLogos: SponsorLogo[] = [
    { name: "Sponsor 1", src: "/LOGO-removebg-preview (2).png" },
    { name: "Sponsor 2", src: "/logo-fsbVF1.png" },
    { name: "Sponsor 3", src: "https://www.univh2c.ma/sites/default/files/Logo_UHIIC_0.png" },
    { name: "Sponsor 4", src: "https://images.seeklogo.com/logo-png/31/3/universite-hassan-1er-settat-logo-png_seeklogo-315574.png" },
    { name: "Sponsor 5", src: "https://images.seeklogo.com/logo-png/53/3/fsac-fr-logo-png_seeklogo-531875.png", scale: "scale-135" },
];

export function Sponsors() {
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

            <section id="sponsors" className="py-8 md:py-10 w-full bg-slate-50 overflow-hidden">
                <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent" />
                    
                    <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "20s" }}>
                        <div className="flex items-center">
                            {[...sponsorLogos, ...sponsorLogos, ...sponsorLogos].map((sponsor, index) => (
                                <div key={index} className="flex items-center justify-center mx-8 shrink-0">
                                    <img
                                        src={sponsor.src}
                                        alt={sponsor.name}
                                        className={`h-10 md:h-12 w-auto max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-all duration-200 grayscale hover:grayscale-0 cursor-pointer ${sponsor.scale || ""}`}
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent" />
                </div>
            </section>
        </>
    );
}

export default Sponsors;
