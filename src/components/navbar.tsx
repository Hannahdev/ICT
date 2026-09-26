import { useState, useEffect, useRef } from "react";
import { ChevronDown, FileText, Layers, GraduationCap, BookOpen, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const authorMenuItems = [
    {
        title: "Registration & Packages",
        description: "Paper registration (€300) & Gala Dinner accompanying pass (€50)",
        icon: <CreditCard className="size-4 text-[#00A3E0]" />,
        href: "#registration"
    },
    {
        title: "Call for Papers",
        description: "Submit original technical & research papers (IEEE Xplore format)",
        icon: <FileText className="size-4 text-[#00A3E0]" />,
        href: "#call-for-papers"
    },
    {
        title: "Call for Demos and Posters",
        description: "Showcase live software prototypes, testbeds & visual posters",
        icon: <FileText className="size-4 text-[#00A3E0]" />,
        href: "#call-for-papers"
    },
    {
        title: "Call for Workshops & Special Sessions",
        description: "Propose targeted half-day or full-day specialized sessions",
        icon: <Layers className="size-4 text-[#00A3E0]" />,
        href: "#faq"
    },
    {
        title: "Call for PhD Symposium papers",
        description: "Doctoral forum for early-stage PhD candidates and mentors",
        icon: <GraduationCap className="size-4 text-[#00A3E0]" />,
        href: "#committee"
    },
    {
        title: "Instructions for CR Manuscripts",
        description: "Camera-ready IEEE formatting, copyright transfer & templates",
        icon: <BookOpen className="size-4 text-[#00A3E0]" />,
        href: "#faq"
    }
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [authorsOpen, setAuthorsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setAuthorsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <nav className={`fixed z-50 flex items-center justify-between left-1/2 -translate-x-1/2 transition-all duration-500 py-2 px-3.5 ${
                scrolled 
                    ? "xl:max-w-6xl lg:max-w-5xl w-[calc(100vw-16px)] bg-white/90 backdrop-blur-2xl rounded-full mt-4 pl-6 shadow-lg shadow-slate-900/5 border border-slate-200/90" 
                    : "md:px-8 lg:px-16 xl:px-24 w-full"
            }`}>
                {/* Brand Logo */}
                <a href="#home" className="flex items-center select-none shrink-0">
                    <img 
                        src="/WhatsApp_Image_2026-09-25_at_18.07.36-removebg-preview.png" 
                        alt="ICT 2027 Logo" 
                        className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${
                            !scrolled ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" : ""
                        }`} 
                    />
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-2.5 xl:gap-4 text-xs xl:text-sm font-semibold">
                    <a 
                        href="#home" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        Home
                    </a>
                    
                    <a 
                        href="#about" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        About
                    </a>

                    <a 
                        href="#tracks" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        Tracks
                    </a>

                    <a 
                        href="#program" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        Program
                    </a>

                    <a 
                        href="#important-dates" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        Dates
                    </a>

                    <a 
                        href="#committee" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        Committees
                    </a>

                    {/* Authors Dropdown Menu */}
                    <div 
                        ref={dropdownRef}
                        className="relative"
                        onMouseEnter={() => setAuthorsOpen(true)}
                        onMouseLeave={() => setAuthorsOpen(false)}
                    >
                        <button 
                            onClick={() => setAuthorsOpen(!authorsOpen)}
                            aria-expanded={authorsOpen}
                            className={`flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                                authorsOpen 
                                    ? (scrolled ? "text-[#00A3E0]" : "text-[#00E5FF]") 
                                    : (scrolled ? "text-slate-700 hover:text-[#00A3E0]" : "text-white hover:text-[#00E5FF] drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]")
                            }`}
                        >
                            <span>Authors</span>
                            <ChevronDown 
                                size={14} 
                                className={`transition-transform duration-200 ${
                                    authorsOpen 
                                        ? "rotate-180 " + (scrolled ? "text-[#00A3E0]" : "text-[#00E5FF]") 
                                        : (scrolled ? "text-slate-400" : "text-white/80")
                                }`} 
                            />
                        </button>

                        {/* Animated Dropdown Menu Box */}
                        <AnimatePresence>
                            {authorsOpen && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.18, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80 lg:w-96 z-50"
                                >
                                    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-2.5 shadow-2xl border border-slate-200/90 overflow-hidden ring-1 ring-black/5">
                                        <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A3E0]">
                                                Author Guidelines & Calls
                                            </span>
                                            <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                                                IEEE Xplore
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-1 mt-1.5">
                                            {authorMenuItems.map((item, idx) => (
                                                <a
                                                    key={idx}
                                                    href={item.href}
                                                    onClick={() => setAuthorsOpen(false)}
                                                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#00A3E0]/10 transition-all duration-150"
                                                >
                                                    <div className="p-2 rounded-lg bg-[#00A3E0]/10 group-hover:bg-[#00A3E0]/20 border border-[#00A3E0]/20 transition-colors shrink-0 mt-0.5">
                                                        {item.icon}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#00A3E0] transition-colors">
                                                            {item.title}
                                                        </span>
                                                        <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                                                            {item.description}
                                                        </span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a 
                        href="#registration" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        Registration
                    </a>

                    <a 
                        href="#speakers" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        Speakers
                    </a>

                    <a 
                        href="/venue" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        Venue
                    </a>

                    <a 
                        href="#contact" 
                        className={scrolled ? "text-slate-700 hover:text-[#00A3E0] transition-colors duration-200" : "text-white hover:text-[#00E5FF] transition-colors duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"}
                    >
                        Contact
                    </a>
                </div>

                {/* Primary Action Button */}
                <a 
                    href="https://edas.info" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hidden lg:inline-flex items-center justify-center shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                        scrolled
                            ? "bg-[#00A3E0] text-white hover:bg-[#008ec2] shadow-md shadow-[#00A3E0]/20"
                            : "bg-white hover:bg-slate-100 text-[#0B2545] shadow-lg shadow-black/30 hover:scale-105 active:scale-95"
                    }`}
                >
                    <span>Submit Paper</span>
                </a>

                {/* Mobile Menu Toggle Button */}
                <button 
                    onClick={() => setMobileOpen(true)} 
                    aria-label="Open mobile menu"
                    className={`lg:hidden p-2 rounded-xl transition cursor-pointer ${
                        scrolled 
                            ? "text-slate-900 hover:bg-slate-100" 
                            : "text-white hover:bg-white/10 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Drawer Overlay */}
            <div className={`${
                mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            } lg:hidden fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300`}>
                <div className={`${
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                } absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between p-6 overflow-y-auto`}>
                    
                    <div className="flex flex-col">
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                            <div className="flex items-center">
                                <img 
                                    src="/WhatsApp_Image_2026-09-25_at_18.07.36-removebg-preview.png" 
                                    alt="ICT 2027 Logo" 
                                    className="h-14 w-auto object-contain" 
                                />
                            </div>
                            <button 
                                onClick={() => setMobileOpen(false)} 
                                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Drawer Links */}
                        <div className="flex flex-col gap-3.5 mt-6 text-sm font-semibold">
                            <a href="#home" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">Home</a>
                            <a href="#about" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">About</a>
                            <a href="#tracks" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">Research Tracks</a>
                            <a href="#program" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">Program at a Glance</a>
                            <a href="#important-dates" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">Important Dates</a>
                            <a href="#registration" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">Registration & Fees</a>
                            <a href="#committee" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">Committees</a>
                            <a href="#speakers" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">Speakers</a>
                            <a href="/venue" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">Venue & Travel</a>
                            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-[#00A3E0] py-1">Get In Touch</a>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex flex-col gap-2">
                        <a 
                            href="#registration"
                            onClick={() => setMobileOpen(false)}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                        >
                            <span>Registration Info (€300 / €50)</span>
                        </a>
                        <a 
                            href="https://edas.info"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-[#00A3E0] hover:bg-[#0077C8] text-white shadow-md shadow-[#00A3E0]/20"
                        >
                            <span>Submit Paper (EDAS)</span>
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}