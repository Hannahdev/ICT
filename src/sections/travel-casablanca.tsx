import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
    Compass, 
    Plane, 
    Train, 
    Passport, 
    Sun, 
    MapPin, 
    ExternalLink, 
    Camera, 
    Navigation,
    Info
} from "lucide-react";

interface Place {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    highlight: string;
    tag: string;
}

const placesToVisit: Place[] = [
    {
        id: 1,
        name: "Hassan II Mosque",
        category: "Iconic Landmark",
        tag: "Must Visit",
        description: "One of the largest and most magnificent mosques in the world, situated dramatically right on the edge of the Atlantic Ocean with a 210m minaret.",
        image: "https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=1000&auto=format&fit=crop",
        highlight: "Oceanfront platform & laser directed to Mecca"
    },
    {
        id: 2,
        name: "Habous Quarter (New Medina)",
        category: "Culture & Heritage",
        tag: "Shopping & Pastry",
        description: "Charming neighborhood designed in the 1920s blending traditional Moroccan artisanal souks with French colonial arches, famous for Bennis pastries.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop",
        highlight: "Artisanal leather, olives & traditional sweets"
    },
    {
        id: 3,
        name: "La Corniche & Ain Diab",
        category: "Coast & Leisure",
        tag: "Ocean Sunset",
        description: "A scenic seaside promenade lined with beach clubs, ocean-view cafés, rooftop lounges, and vibrant coastal dining along the Atlantic.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
        highlight: "Golden hour walks & oceanfront dining"
    },
    {
        id: 4,
        name: "Old Medina & Rick's Café",
        category: "Historic Quarter",
        tag: "Cinema & History",
        description: "Wander through the historic fortified city center and stop by the world-famous Rick's Café, recreated in homage to the 1942 classic film 'Casablanca'.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
        highlight: "Live jazz, piano bar & historic city gates"
    },
    {
        id: 5,
        name: "Sacré-Cœur & Art Deco Downtown",
        category: "Architecture",
        tag: "Art & Heritage",
        description: "Explore Casablanca's iconic Mauresque and Art Deco architectural heritage, centered around Mohammed V Square, the Cathedral, and Arab League Park.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
        highlight: "1930s neo-gothic cathedral & lush park"
    },
    {
        id: 6,
        name: "Morocco Mall & Anfa Park",
        category: "Modern City",
        tag: "Shopping & Parks",
        description: "Africa's premier destination mall featuring a giant marine aquarium, international luxury avenues, and nearby green jogging paths at Anfa Park.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        highlight: "Mega aquarium, music fountain & gardens"
    }
];

const travelTips = [
    {
        icon: <Plane className="size-5 text-emerald-600" />,
        title: "Airport & Arrival (CMN)",
        details: "Mohammed V International Airport (CMN) is located 30km south of the city, connected directly to downtown via the Al Bidaoui train in just 35 minutes."
    },
    {
        icon: <Train className="size-5 text-emerald-600" />,
        title: "City Transit & Trams",
        details: "Modern, air-conditioned Tramway lines (T1–T4) and red 'Petit Taxis' offer safe, affordable, and seamless connection to conference venues and hotels."
    },
    {
        icon: <Passport className="size-5 text-emerald-600" />,
        title: "Visa & Invitation Letter",
        details: "Many international nationalities enjoy visa-free or Moroccan eVisa entry. Registered ICT 2026 attendees can request official IEEE invitation letters."
    },
    {
        icon: <Sun className="size-5 text-emerald-600" />,
        title: "Weather & Hospitality",
        details: "Casablanca enjoys a sunny Atlantic climate (18°C–25°C). Experience legendary Moroccan hospitality, rich gastronomy, and multilingual accessibility."
    }
];

export function TravelCasablanca() {
    const [activeTab, setActiveTab] = useState<"places" | "tips">("places");

    return (
        <section id="travel" className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
            
            {/* Ambient Background Accents */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100/60 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-100/50 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col relative z-10">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col items-start max-w-2xl">
                        <motion.div 
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full"
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70 }}
                        >
                            <Compass size={14} className="text-emerald-600" />
                            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                                Host City & Travel Guide
                            </span>
                        </motion.div>

                        <motion.h2 
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 mt-4 leading-[1.15] tracking-tight"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 240, damping: 70 }}
                        >
                            Discover Casablanca, Morocco
                        </motion.h2>

                        <motion.p 
                            className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70 }}
                        >
                            Morocco’s dynamic economic and technological powerhouse on the Atlantic coast. Plan your visit with our curated highlights and essential delegate travel info.
                        </motion.p>
                    </div>

                    {/* View Switcher Toggle */}
                    <div className="flex items-center p-1 bg-slate-200/70 rounded-full self-start md:self-auto">
                        <button
                            onClick={() => setActiveTab("places")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                activeTab === "places" 
                                    ? "bg-white text-emerald-700 shadow-sm" 
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            <Camera size={15} />
                            <span>Top Places to Visit</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("tips")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                activeTab === "tips" 
                                    ? "bg-white text-emerald-700 shadow-sm" 
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            <Navigation size={15} />
                            <span>Travel & Logistics</span>
                        </button>
                    </div>
                </div>

                {/* Tab 1: Top Places to Visit Cards */}
                {activeTab === "places" && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
                    >
                        {placesToVisit.map((place, idx) => (
                            <motion.div
                                key={place.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
                            >
                                {/* Place Photo */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                                    <img 
                                        src={place.image} 
                                        alt={place.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                                    
                                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-slate-900 backdrop-blur-md shadow-sm">
                                        {place.category}
                                    </span>

                                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide bg-emerald-600/95 text-white backdrop-blur-md shadow-sm">
                                        {place.tag}
                                    </span>
                                </div>

                                {/* Place Details */}
                                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                            {place.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                                            {place.description}
                                        </p>
                                    </div>

                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                        <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                                            <MapPin className="size-3.5 text-emerald-600" />
                                            <span className="truncate">{place.highlight}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Tab 2: Travel & Logistics Guide */}
                {activeTab === "tips" && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
                    >
                        {travelTips.map((tip, idx) => (
                            <div 
                                key={idx}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5"
                            >
                                <div className="size-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                                    {tip.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-base font-bold text-slate-900">
                                        {tip.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                                        {tip.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* Conference Venue Info Callout */}
                <motion.div 
                    className="mt-14 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 pointer-events-none -z-0" />
                    
                    <div className="relative z-10 flex flex-col max-w-xl">
                        <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-1">
                            Official Conference Venue
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                            Faculty of Sciences Ben M'Sick (FSBM)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                            University Hassan II of Casablanca, Boulevard Cdt Driss Harti, Casablanca. Located with rapid access to downtown hotel quarters.
                        </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-4">
                        <a 
                            href="https://maps.google.com/?q=Faculty+of+Sciences+Ben+M'Sick+Casablanca" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors duration-200 shadow-lg shadow-emerald-600/30"
                        >
                            <span>Open in Google Maps</span>
                            <ExternalLink size={15} />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
