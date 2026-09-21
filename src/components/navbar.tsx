import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, FileText, Sparkles, Layers, GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const authorMenuItems = [
    {
        title: "Call for Papers",
        description: "Submit original technical & research papers (IEEE Xplore format)",
        icon: <FileText className="size-4 text-emerald-600" />,
        href: "#about"
    },
    {
        title: "Call for Demos and Posters",
        description: "Showcase live software prototypes, testbeds & visual posters",
        icon: <Sparkles className="size-4 text-emerald-600" />,
        href: "#about"
    },
    {
        title: "Call for Workshops & Special Sessions",
        description: "Propose targeted half-day or full-day specialized sessions",
        icon: <Layers className="size-4 text-emerald-600" />,
        href: "#faq"
    },
    {
        title: "Call for PhD Symposium papers",
        description: "Doctoral forum for early-stage PhD candidates and mentors",
        icon: <GraduationCap className="size-4 text-emerald-600" />,
        href: "#committee"
    },
    {
        title: "Instructions for CR Manuscripts",
        description: "Camera-ready IEEE formatting, copyright transfer & templates",
        icon: <BookOpen className="size-4 text-emerald-600" />,
        href: "#faq"
    }
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [authorsOpen, setAuthorsOpen] = useState(false);
    const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);
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
            <nav className={`fixed z-50 flex items-center justify-between left-1/2 -translate-x-1/2 transition-all duration-500 p-3.5 ${
                scrolled 
                    ? "lg:w-5xl w-[calc(100vw-16px)] bg-white/90 backdrop-blur-2xl rounded-full mt-4 pl-6 shadow-lg shadow-slate-900/5 border border-slate-200/90" 
                    : "md:px-16 lg:px-24 xl:px-32 w-full"
            }`}>
                {/* Brand Logo */}
                <a href="#home" className="flex items-center gap-2.5 select-none">
                    <img src="/logo.png" alt="ICT 2026 Logo" className="h-7 w-auto transition-all duration-500" />
                    <span className="font-bold text-base tracking-tight text-slate-900">
                        ICT 2026
                    </span>
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold">
                    <a href="#home" className="text-slate-700 hover:text-emerald-600 transition-colors duration-200">
                        Home
                    </a>
                    
                    <a href="#about" className="text-slate-700 hover:text-emerald-600 transition-colors duration-200">
                        About
                    </a>

                    <a href="#committee" className="text-slate-700 hover:text-emerald-600 transition-colors duration-200">
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
                            className={`flex items-center gap-1.5 transition-colors duration-200 cursor-pointer ${
                                authorsOpen ? "text-emerald-600" : "text-slate-700 hover:text-emerald-600"
                            }`}
                        >
                            <span>Authors</span>
                            <ChevronDown 
                                size={14} 
                                className={`transition-transform duration-200 ${authorsOpen ? "rotate-180 text-emerald-600" : "text-slate-400"}`} 
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
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
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
                                                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/70 transition-all duration-150"
                                                >
                                                    <div className="p-2 rounded-lg bg-emerald-50 group-hover:bg-emerald-100/80 border border-emerald-200/60 transition-colors shrink-0 mt-0.5">
                                                        {item.icon}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
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

                    <a href="#tracks" className="text-slate-700 hover:text-emerald-600 transition-colors duration-200">
                        Tracks
                    </a>

                    <a href="#speakers" className="text-slate-700 hover:text-emerald-600 transition-colors duration-200">
                        Speakers
                    </a>

                    <a href="#travel" className="text-slate-700 hover:text-emerald-600 transition-colors duration-200 flex items-center gap-1">
                        <span>Venue & Travel</span>
                    </a>

                    <a href="#faq" className="text-slate-700 hover:text-emerald-600 transition-colors duration-200">
                        FAQ
                    </a>

                    <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors duration-200">
                        Get In Touch
                    </a>
                </div>

                {/* Primary Action Button */}
                <a 
                    href="#about" 
                    className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 shadow-md shadow-emerald-600/20 cursor-pointer"
                >
                    <span>Submit Paper</span>
                </a>

                {/* Mobile Menu Toggle Button */}
                <button 
                    onClick={() => setMobileOpen(true)} 
                    aria-label="Open mobile menu"
                    className="md:hidden p-2 rounded-xl text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Drawer Overlay */}
            <div className={`${
                mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            } md:hidden fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300`}>
                <div className={`${
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                } absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between p-6 overflow-y-auto`}>
                    
                    <div className="flex flex-col">
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <img src="/logo.png" alt="ICT 2026 Logo" className="h-6 w-auto" />
                                <span className="font-bold text-slate-900">ICT 2026</span>
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
                            <a href="#home" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-emerald-600 py-1">Home</a>
                            <a href="#about" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-emerald-600 py-1">About</a>
                            <a href="#committee" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-emerald-600 py-1">Committees</a>
                            
                            {/* Mobile Authors Accordion */}
                            <div className="flex flex-col">
                                <button 
                                    onClick={() => setMobileAuthorsOpen(!mobileAuthorsOpen)}
                                    className="flex items-center justify-between text-slate-800 hover:text-emerald-600 py-1 font-semibold text-left"
                                >
                                    <span>Authors & Calls</span>
                                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileAuthorsOpen ? "rotate-180 text-emerald-600" : ""}`} />
                                </button>
                                
                                {mobileAuthorsOpen && (
                                    <div className="flex flex-col gap-2 pl-3 mt-2 border-l-2 border-emerald-500/40">
                                        {authorMenuItems.map((item, idx) => (
                                            <a 
                                                key={idx} 
                                                href={item.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="text-xs text-slate-600 hover:text-emerald-600 py-1"
                                            >
                                                {item.title}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <a href="#tracks" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-emerald-600 py-1">Tracks</a>
                            <a href="#speakers" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-emerald-600 py-1">Speakers</a>
                            <a href="#travel" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-emerald-600 py-1">Venue & Travel (Casablanca)</a>
                            <a href="#faq" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-emerald-600 py-1">FAQ</a>
                            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-slate-800 hover:text-emerald-600 py-1">Get In Touch</a>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                        <a 
                            href="#about"
                            onClick={() => setMobileOpen(false)}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                        >
                            <span>Submit Paper</span>
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}