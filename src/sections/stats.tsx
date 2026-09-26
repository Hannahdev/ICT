import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "../components/count-number";
import { 
    ArrowUpRight, 
    History, 
    Globe2, 
    ChevronDown, 
    Sparkles, 
    Cpu, 
    Building2, 
    ExternalLink, 
    Calendar, 
    MapPin, 
    CheckCircle2, 
    BookOpen, 
    Network,
    Zap,
    X,
    Download,
    ZoomIn
} from "lucide-react";

export function Stats() {
    const [showPastConferences, setShowPastConferences] = useState(false);
    const [activeTab, setActiveTab] = useState<"overview" | "theme" | "scope" | "program">("overview");
    const [isPosterOpen, setIsPosterOpen] = useState(false);

    const pastConferences = [
        { 
            edition: "The 32nd ICT", 
            location: "Thessaloniki, Greece", 
            year: "2026",
            url: "https://ict2026thessaloniki.org/", 
            type: "Official Website" 
        },
        { 
            edition: "The 31st ICT", 
            location: "Budva, Montenegro", 
            year: "2025",
            url: "https://ieeexplore.ieee.org/xpl/conhome/11046192/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 30th ICT", 
            location: "Amman, Jordan", 
            year: "2024",
            url: "https://ieeexplore.ieee.org/xpl/conhome/10606101/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 29th ICT", 
            location: "Toba, Indonesia", 
            year: "2023",
            url: "https://ieeexplore.ieee.org/xpl/conhome/10374015/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 28th ICT", 
            location: "London, United Kingdom", 
            year: "2021",
            url: "https://ieeexplore.ieee.org/xpl/conhome/9511499/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 27th ICT", 
            location: "Bali, Indonesia", 
            year: "2020",
            url: "https://ieeexplore.ieee.org/xpl/conhome/9239409/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 26th ICT", 
            location: "Hanoi, Vietnam", 
            year: "2019",
            url: "https://ieeexplore.ieee.org/xpl/conhome/8786770/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 25th ICT", 
            location: "Saint-Malo, France", 
            year: "2018",
            url: "https://ieeexplore.ieee.org/xpl/conhome/8411300/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 24th ICT", 
            location: "Limassol, Cyprus", 
            year: "2017",
            url: "https://ieeexplore.ieee.org/xpl/conhome/7990619/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 23rd ICT", 
            location: "Thessaloniki, Greece", 
            year: "2016",
            url: "https://ieeexplore.ieee.org/xpl/conhome/7495173/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 22nd ICT", 
            location: "Sydney, Australia", 
            year: "2015",
            url: "https://ieeexplore.ieee.org/xpl/conhome/7109533/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 21st ICT", 
            location: "Lisbon, Portugal", 
            year: "2014",
            url: "https://ieeexplore.ieee.org/xpl/conhome/6832895/proceeding", 
            type: "IEEE Xplore" 
        },
        { 
            edition: "The 20th ICT", 
            location: "Casablanca, Morocco", 
            year: "2013",
            url: "https://ieeexplore.ieee.org/xpl/conhome/6605691/proceeding", 
            type: "IEEE Xplore" 
        },
    ];

    const multidisciplinarySectors = [
        "Smart Mobility", "Digital Health", "Education", "Smart Agriculture", 
        "Industry 4.0", "Logistics & Supply Chain", "Environmental Monitoring", 
        "Disaster Resilience", "Cultural Heritage", "Digital Governance", "Sustainable Urban Development"
    ];

    const aiTelecomFocus = [
        "AI-Native Networks & Self-Optimizing Architectures",
        "Machine Learning for Spectrum & Radio Resource Allocation",
        "Autonomous Network Management & Orchestration",
        "Digital Twins for Communication Infrastructures",
        "Semantic Communications & Edge Intelligence",
        "Trustworthy AI & Resilient Network Cybersecurity",
        "Green Networking & Energy-Efficient 6G Systems",
        "AI-Driven Services for Frugal Social Smart Cities"
    ];

    return (
        <section id="about" className="py-16 md:py-24 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-slate-50 relative overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 right-0 w-96 h-96 bg-[#00A3E0]/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <motion.div 
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00A3E0]/10 border border-[#00A3E0]/30 rounded-full" 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70 }}
                    >
                        <Globe2 size={14} className="text-[#00A3E0]" />
                        <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                            About ICT 2027 • 33rd Edition
                        </span>
                    </motion.div>

                    <motion.div 
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0B2545] text-white rounded-full text-xs font-semibold shadow-sm"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70 }}
                    >
                        <Building2 size={13} className="text-[#00E5FF]" />
                        <span>Co-hosted with Smart City Casablanca 2027</span>
                    </motion.div>

                    <motion.div 
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-sm"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
                    >
                        <Calendar size={13} className="text-[#00A3E0]" />
                        <span>May 05–07, 2027</span>
                        <span className="text-slate-300">•</span>
                        <MapPin size={13} className="text-[#00A3E0]" />
                        <span>Casablanca, Morocco</span>
                    </motion.div>
                </div>

                {/* Main Headline */}
                <motion.h2 
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-[1.12] tracking-tight max-w-5xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70 }}
                >
                    Welcome to the 33rd International Conference on Telecommunications{" "}
                    <span className="bg-gradient-to-r from-[#00A3E0] to-[#0B2545] bg-clip-text text-transparent">
                        (ICT 2027)
                    </span>
                </motion.h2>

                {/* Official Theme Showcase Banner */}
                <motion.div 
                    className="mt-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#0D305C] to-[#07182C] text-white shadow-2xl relative overflow-hidden border border-[#00A3E0]/20"
                    initial={{ y: 25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                >
                    <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-[#00A3E0]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2 max-w-3xl">
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00E5FF] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-[#00E5FF]/30">
                                <Sparkles size={13} />
                                <span>Conference Official Theme</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
                                “ ICT 2027, Augmented Intelligence for Efficient Networks, Sustainable Cities and Resilient Communities”
                            </h3>
                            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed pt-1">
                                Exploring how AI-powered telecommunications support frugal, sustainable, sovereign, human-centric, and socially inclusive smart cities and territories.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-slate-100">
                                <Zap className="size-4 text-[#00E5FF] shrink-0" />
                                <span>Efficient & AI-Native Networks</span>
                            </div>
                            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-slate-100">
                                <Building2 className="size-4 text-[#00E5FF] shrink-0" />
                                <span>Sustainable Smart Cities</span>
                            </div>
                            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-slate-100">
                                <Network className="size-4 text-[#00E5FF] shrink-0" />
                                <span>Resilient Territories</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content & Poster Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-12 items-start">
                    
                    {/* Left 7 Columns: Interactive Story Tabs & Narrative */}
                    <div className="lg:col-span-7 flex flex-col">
                        
                        {/* Tab Selector Buttons */}
                        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/60 rounded-2xl mb-6 backdrop-blur-sm">
                            <button
                                onClick={() => setActiveTab("overview")}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                    activeTab === "overview"
                                        ? "bg-white text-[#0B2545] shadow-md shadow-[#0B2545]/5"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                                }`}
                            >
                                Overview & Legacy
                            </button>
                            <button
                                onClick={() => setActiveTab("theme")}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                    activeTab === "theme"
                                        ? "bg-white text-[#0B2545] shadow-md shadow-[#0B2545]/5"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                                }`}
                            >
                                AI & Smart Territories
                            </button>
                            <button
                                onClick={() => setActiveTab("scope")}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                    activeTab === "scope"
                                        ? "bg-white text-[#0B2545] shadow-md shadow-[#0B2545]/5"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                                }`}
                            >
                                Research Scope & AI
                            </button>
                            <button
                                onClick={() => setActiveTab("program")}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                                    activeTab === "program"
                                        ? "bg-white text-[#0B2545] shadow-md shadow-[#0B2545]/5"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                                }`}
                            >
                                Program & Sectors
                            </button>
                        </div>

                        {/* Tab Content Panels */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 text-slate-700 leading-relaxed text-sm sm:text-base min-h-[360px] flex flex-col justify-between">
                            
                            {activeTab === "overview" && (
                                <motion.div 
                                    key="tab-overview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="space-y-4"
                                >
                                    <p>
                                        Welcome to the <strong className="text-slate-950 font-bold">33rd International Conference on Telecommunications (ICT 2027)</strong> Co-hosted with <strong className="text-[#00A3E0] font-bold">Smart City Casablanca 2027</strong>, to be held <strong className="text-slate-950 font-semibold">May 05–07, 2027</strong>, in Casablanca, Morocco. Building on more than three decades of excellence since its establishment in <strong className="text-slate-900 font-semibold">1991</strong>, ICT has become one of the world's leading scientific forums for presenting pioneering research, fostering international collaboration, and shaping the future of telecommunications and digital technologies.
                                    </p>
                                    <p>
                                        Following the successful 32nd edition of ICT 2026 in Thessaloniki, Greece, ICT 2027 continues this long-standing tradition by bringing together researchers, academics, industry leaders, innovators, entrepreneurs, policymakers, and technology practitioners from around the world to exchange ideas, showcase breakthrough research, and discuss the challenges and opportunities of next-generation communication systems.
                                    </p>
                                    <p>
                                        Hosted in <strong className="text-slate-900 font-semibold">Casablanca</strong>, the economic capital of Morocco and one of Africa's fastest-growing innovation and technology hubs, ICT 2027 offers a unique platform at the crossroads of Africa, Europe, and the Middle East. Morocco has emerged as a strategic gateway for digital transformation, investing significantly in advanced telecommunications infrastructure, artificial intelligence, digital sovereignty, smart territories, and sustainable innovation. This dynamic environment provides an ideal setting for exploring the future of intelligent, inclusive, and sustainable communication networks.
                                    </p>
                                </motion.div>
                            )}

                            {activeTab === "theme" && (
                                <motion.div 
                                    key="tab-theme"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="space-y-4"
                                >
                                    <div className="p-4 rounded-2xl bg-[#00A3E0]/10 border border-[#00A3E0]/20">
                                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0B2545] flex items-center gap-2">
                                            <Cpu className="size-4 text-[#00A3E0]" />
                                            Augmented Intelligence & The Digital Backbone
                                        </h4>
                                        <p className="mt-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                                            Artificial Intelligence is profoundly transforming the design, operation, optimization, security, and management of communication networks.
                                        </p>
                                    </div>

                                    <p>
                                        At the same time, telecommunications are becoming the digital backbone of connected cities, intelligent infrastructures, and resilient territories.
                                    </p>
                                    <p>
                                        ICT 2027 aims to explore how AI-powered telecommunications can support the development of <strong className="text-slate-950 font-bold">frugal, sustainable, sovereign, human-centric, and socially inclusive smart cities and territories</strong>, particularly in emerging economies and rapidly urbanizing regions.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                                            <CheckCircle2 className="size-4 text-[#00A3E0] shrink-0" />
                                            <span>Human-Centric & Inclusive Tech</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                                            <CheckCircle2 className="size-4 text-[#00A3E0] shrink-0" />
                                            <span>Sovereign & Frugal AI Systems</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "scope" && (
                                <motion.div 
                                    key="tab-scope"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="space-y-4"
                                >
                                    <p>
                                        The conference welcomes original contributions covering the full spectrum of telecommunications research, including:
                                    </p>
                                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium">
                                        Physical-layer technologies, radio communications, signal processing, wireless and optical communications, networking protocols, Internet architectures, cloud-edge computing, network virtualization, cybersecurity, Internet of Things (IoT), satellite and non-terrestrial networks, future 6G communication systems, and semantic communications.
                                    </div>

                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2 flex items-center gap-2">
                                        <Sparkles className="size-4 text-[#00A3E0]" />
                                        Special Emphasis on AI & Telecom Intersection
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                        {aiTelecomFocus.map((item, idx) => (
                                             <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-blue-50/50 border border-blue-100 text-slate-800">
                                                 <div className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] mt-1.5 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "program" && (
                                <motion.div 
                                    key="tab-program"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="space-y-4"
                                >
                                    <p>
                                        ICT 2027 also encourages multidisciplinary contributions demonstrating how advanced telecommunications contribute to the well-being and sustainable development of societies and can accelerate innovation across strategic sectors:
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-1.5">
                                        {multidisciplinarySectors.map((sector, idx) => (
                                            <span key={idx} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded-lg text-xs font-medium">
                                                {sector}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-4 p-4 rounded-2xl bg-[#0B2545] text-white space-y-2">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#00E5FF] flex items-center gap-2">
                                            <BookOpen className="size-4" />
                                            Comprehensive Technical Program
                                        </h4>
                                        <p className="text-xs text-slate-300 leading-relaxed font-normal">
                                            The technical program will feature high-quality paper presentations, keynote speeches delivered by internationally renowned experts, visionary panels, tutorials, industrial sessions, demonstrations, doctoral forums, and numerous networking opportunities designed to strengthen collaboration between academia, industry, governments, and international organizations.
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Global Invitation Footnote */}
                            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                                <p className="text-xs sm:text-sm font-medium text-slate-700">
                                    We warmly invite the global telecommunications and AI communities to join us in Casablanca, Morocco, on May 05–07, 2027, to contribute to shaping the next generation of intelligent communication networks and to advance a shared vision of AI-powered telecommunications for connected frugal social smart cities and territories.
                                </p>
                                <p className="text-xs sm:text-sm font-semibold text-[#00A3E0] italic">
                                    We look forward to welcoming you to ICT 2027, where cutting-edge telecommunications research meets artificial intelligence, innovation, sustainability, and global collaboration.
                                </p>
                            </div>

                        </div>

                        {/* Action Buttons: Submit Paper + Past Conferences Drawer */}
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <a 
                                href="https://edas.info" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-[#00A3E0] hover:bg-[#008ec2] text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-200 shadow-xl shadow-[#00A3E0]/25 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2"
                            >
                                <span>Submit Paper to EDAS</span>
                                <ArrowUpRight size={16} />
                            </a>

                            <button
                                onClick={() => setShowPastConferences(!showPastConferences)}
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#00A3E0] bg-white border border-slate-200 hover:border-[#00A3E0]/50 px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
                            >
                                <History size={16} className="text-[#00A3E0]" />
                                <span>{showPastConferences ? "Hide Past Editions" : "Explore Past Conferences (1991–2026)"}</span>
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 text-slate-500 ${
                                        showPastConferences ? "rotate-180 text-[#00A3E0]" : ""
                                    }`}
                                />
                            </button>
                        </div>

                        {/* Expandable Past Conferences Drawer with Live Proceedings Links */}
                        <AnimatePresence>
                            {showPastConferences && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                    animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="w-full overflow-hidden"
                                >
                                    <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/60 space-y-4">
                                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                            <div className="flex items-center gap-2">
                                                <History className="size-4 text-[#00A3E0]" />
                                                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                                    Past ICT Conferences & IEEE Xplore Proceedings
                                                </h3>
                                            </div>
                                            <span className="text-[11px] font-bold text-[#0B2545] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                                                13 Documented Editions
                                            </span>
                                        </div>

                                        <p className="text-xs text-slate-500 font-normal">
                                            Click any edition below to open the official conference website or IEEE Xplore digital library proceedings:
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1 text-xs custom-scrollbar">
                                            {pastConferences.map((item, idx) => (
                                                <a 
                                                    key={idx} 
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200/80 hover:border-[#00A3E0]/30 transition-all text-slate-700 group shadow-2xs hover:shadow-sm"
                                                >
                                                    <div className="flex items-center gap-2.5 truncate">
                                                        <Globe2 className="size-4 text-[#00A3E0] shrink-0 group-hover:scale-110 transition-transform" />
                                                        <div className="flex flex-col truncate">
                                                            <span className="font-bold text-slate-900 group-hover:text-[#00A3E0] transition-colors">
                                                                {item.edition}
                                                            </span>
                                                            <span className="text-slate-500 text-[11px] truncate">
                                                                {item.location}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                                                        <span className="text-[10px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded-md border border-slate-200 group-hover:border-[#00A3E0]/30 group-hover:text-[#00A3E0]">
                                                            {item.type}
                                                        </span>
                                                        <ExternalLink className="size-3.5 text-slate-400 group-hover:text-[#00A3E0] transition-colors" />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* Right 5 Columns: Call For Papers Poster + Important Details */}
                    <div id="call-for-papers" className="lg:col-span-5 flex flex-col gap-6">
                        
                        {/* Call for Papers Card with Click to Expand */}
                        <motion.div 
                            className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 z-10 hover:shadow-[#00A3E0]/20 transition-all duration-300 relative group cursor-pointer"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            onClick={() => setIsPosterOpen(true)}
                        >
                            <img 
                                src="/WhatsApp Image 2026-09-26 at 00.55.23.jpeg" 
                                alt="ICT 2027 Call for Papers Poster" 
                                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
                            />
                            
                            {/* Hover overlay hint */}
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                <span className="bg-slate-950/80 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-xl">
                                    <ZoomIn size={14} className="text-[#00E5FF]" />
                                    Click to Enlarge Poster
                                </span>
                            </div>

                            {/* Overlay Badge */}
                            <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0B2545]/90 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between text-white text-xs">
                                <div>
                                    <p className="font-bold text-[#00E5FF]">ICT 2027 Call for Papers</p>
                                    <p className="text-[11px] text-slate-300">Submit via EDAS Portal</p>
                                </div>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsPosterOpen(true);
                                    }}
                                    className="px-3 py-1.5 bg-[#00A3E0] hover:bg-[#008ec2] text-white rounded-xl font-semibold flex items-center gap-1 text-[11px] transition-colors cursor-pointer"
                                >
                                    <span>View Poster</span>
                                    <ExternalLink size={12} />
                                </button>
                            </div>
                        </motion.div>

                        {/* Co-hosting & City Highlights Card */}
                        <motion.div 
                            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                                <Building2 className="size-4 text-[#00A3E0]" />
                                <span>Strategic Venue • Casablanca, Morocco</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Co-hosted with <strong>Smart City Casablanca 2027</strong> at the gateway of Africa, Europe, and the Middle East, fostering AI sovereignty, intelligent urban mobility, and next-generation 6G infrastructure.
                            </p>
                            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#00A3E0]">
                                <a href="/venue" className="flex items-center gap-1 hover:underline">
                                    <span>Explore Venue & Travel Guide</span>
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </motion.div>

                    </div>

                </div>

                {/* Metrics Counter Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16 md:mt-24 pt-10 border-t border-slate-200/80">
                    
                    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-slate-100 shadow-2xs">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                            <CountUp from={0} to={33} />rd
                        </span>
                        <span className="text-xs font-bold text-slate-600 mt-2 uppercase tracking-wider">
                            Edition Since 1991
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-slate-100 shadow-2xs">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#00A3E0] tracking-tight">
                            <CountUp from={0} to={9} />
                        </span>
                        <span className="text-xs font-bold text-slate-600 mt-2 uppercase tracking-wider">
                            Core Research Tracks
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-slate-100 shadow-2xs">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                            <CountUp from={0} to={800} />+
                        </span>
                        <span className="text-xs font-bold text-slate-600 mt-2 uppercase tracking-wider">
                            Expected Delegates
                        </span>
                    </div>

                    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-slate-100 shadow-2xs">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#00A3E0] tracking-tight">
                            <CountUp from={0} to={100} />%
                        </span>
                        <span className="text-xs font-bold text-slate-600 mt-2 uppercase tracking-wider">
                            Peer-Reviewed (IEEE)
                        </span>
                    </div>

                </div>

            </div>

            {/* Lightbox Modal for CFP Poster */}
            <AnimatePresence>
                {isPosterOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                        onClick={() => setIsPosterOpen(false)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative max-w-4xl max-h-[92vh] flex flex-col items-center bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header Bar */}
                            <div className="w-full flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-white/10 text-white">
                                <div className="flex items-center gap-2">
                                    <Sparkles size={16} className="text-[#00E5FF]" />
                                    <span className="font-bold text-sm sm:text-base">ICT 2027 Official Call for Papers</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a 
                                        href="/WhatsApp Image 2026-09-26 at 00.55.23.jpeg" 
                                        download="ICT_2027_Call_For_Papers.jpeg"
                                        className="p-2 rounded-xl bg-white/10 hover:bg-[#00A3E0] text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                                        title="Download Poster"
                                    >
                                        <Download size={15} />
                                        <span className="hidden sm:inline">Download</span>
                                    </a>
                                    <button 
                                        onClick={() => setIsPosterOpen(false)}
                                        className="p-2 rounded-xl bg-white/10 hover:bg-rose-600 text-white transition-colors cursor-pointer"
                                        aria-label="Close modal"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Poster Image Container */}
                            <div className="overflow-y-auto max-h-[calc(92vh-64px)] p-2 sm:p-4 flex items-center justify-center bg-slate-950">
                                <img 
                                    src="/WhatsApp Image 2026-09-26 at 00.55.23.jpeg" 
                                    alt="ICT 2027 Call for Papers Full Poster" 
                                    className="max-h-[82vh] w-auto object-contain rounded-xl shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}