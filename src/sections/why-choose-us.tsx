import { useState } from "react";
import { motion } from "framer-motion"; 
import { Plus, Minus, HelpCircle, FileText, Globe2, Layers } from "lucide-react";

// Mock data array replacing real estate accordion items with conference FAQs
const conferenceFaqData = [
    {
        icon: <HelpCircle className="size-5 text-[#00A3E0]" />,
        title: "Conference Scope & Core Themes",
        description: "ICT 2027 brings together leading researchers, IEEE fellows, and urban tech leaders to explore 6G communications, AI-native networks, edge computing, and smart city infrastructure in Casablanca.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: <FileText className="size-5 text-[#00A3E0]" />,
        title: "Paper Submissions & EDAS Guidelines",
        description: "All submitted papers must adhere to standard IEEE double-column templates (up to 6 pages). All accepted and presented papers will be submitted for inclusion in IEEE Xplore.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: <Globe2 className="size-5 text-[#00A3E0]" />,
        title: "Venue & Host City: Casablanca",
        description: "Hosted in Casablanca, Morocco's financial and technological capital, the conference features keynote sessions, workshops, and direct interactions with municipal smart city leaders.",
        image: "https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=1200&auto=format&fit=crop"
    },
    {
        icon: <Layers className="size-5 text-[#00A3E0]" />,
        title: "9 Specialized Core Research Tracks",
        description: "Covering AI-native telecom, digital twins, 6G & spectrum, semantic ISAC, edge AI, cybersecurity, green communications, V2X mobility, and sustainable smart cities.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    }
];

export function WhyChooseUs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-16 mt-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-slate-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
                
                {/* Left Column */}
                <div className="flex flex-col">
                    <motion.div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00A3E0]/10 border border-[#00A3E0]/20 rounded-full w-fit" 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <HelpCircle size={14} className="text-[#00A3E0]" />
                        <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                            CONFERENCE FAQ & GUIDELINES
                        </span>
                    </motion.div>
                    
                    <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2545] mt-4 leading-[1.15] tracking-tight"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Essential Details for Authors & Attendees
                    </motion.h2>

                    {/* Accordion List */}
                    <div className="flex flex-col gap-4 mt-10 md:mt-12 w-full">
                        {conferenceFaqData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div key={index} className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow" 
                                    initial={{ y: 150, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between p-4 md:py-4 md:px-6 text-left hover:bg-slate-50/50 transition cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div>
                                                {item.icon}
                                            </div>
                                            <span className="text-sm md:text-base font-semibold text-slate-900">
                                                {item.title}
                                            </span>
                                        </div>
                                        <div>
                                            {isOpen ? (
                                                <Minus className="size-4 text-[#00A3E0]" />
                                            ) : (
                                                <Plus className="size-4 text-slate-500" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Expandable Description */}
                                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <p className="p-4 md:px-10 pt-0 text-xs md:text-sm text-slate-600 leading-relaxed bg-slate-50/30 font-normal">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between">
                    <motion.p className="text-slate-600 text-sm md:text-base max-w-115 md:mt-20 mb-8 font-normal leading-relaxed"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        Learn more about session tracks, submission guidelines, key dates, and venue details for ICT 2027 in Casablanca.
                    </motion.p>
                    
                    <motion.div className="relative w-121.5 h-102.75 rounded-xl overflow-hidden shadow-md bg-slate-100 max-w-full border border-slate-200" 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Default Image */}
                        <img 
                            src="https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=1200&auto=format&fit=crop" 
                            alt="Casablanca Host City" 
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                                openIndex === null ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                            }`}
                        />
                        {/* Accordion-specific images */}
                        {conferenceFaqData.map((item, index) => (
                            <img key={index} src={item.image} alt={item.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                                    openIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                                }`}
                            />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}