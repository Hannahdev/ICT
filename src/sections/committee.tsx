import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Mail, Globe, GraduationCap, Building2 } from "lucide-react";

interface CommitteeMember {
    id: number;
    name: string;
    role: string;
    category: "General Chairs" | "TPC Chairs" | "Local Organization" | "Steering Committee";
    institution: string;
    location: string;
    avatar: string;
    email?: string;
    profileUrl?: string;
}

const committeeMembers: CommitteeMember[] = [
    {
        id: 1,
        name: "Prof. Mohamed Ben Ahmed",
        role: "General Conference Chair",
        category: "General Chairs",
        institution: "Faculty of Sciences Ben M'Sick, Casablanca",
        location: "Casablanca, Morocco",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        email: "m.benahmed@univh2c.ma"
    },
    {
        id: 2,
        name: "Prof. Elena Vasquez",
        role: "General Co-Chair",
        category: "General Chairs",
        institution: "Technical University of Madrid",
        location: "Madrid, Spain",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        email: "e.vasquez@upm.es"
    },
    {
        id: 3,
        name: "Prof. Tariq Al-Mansoor",
        role: "TPC Chair",
        category: "TPC Chairs",
        institution: "King Fahd University of Petroleum & Minerals",
        location: "Dhahran, Saudi Arabia",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        email: "t.mansoor@kfupm.edu.sa"
    },
    {
        id: 4,
        name: "Dr. Sophie Laurent",
        role: "TPC Co-Chair (AI & Networks)",
        category: "TPC Chairs",
        institution: "CNRS & Telecom Paris",
        location: "Paris, France",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        email: "s.laurent@telecom-paris.fr"
    },
    {
        id: 5,
        name: "Prof. Rachid Oulad",
        role: "Organizing Committee Chair",
        category: "Local Organization",
        institution: "University Hassan II of Casablanca",
        location: "Casablanca, Morocco",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        email: "r.oulad@univh2c.ma"
    },
    {
        id: 6,
        name: "Dr. Kenza Bouzid",
        role: "Publicity & Media Chair",
        category: "Local Organization",
        institution: "National School of Applied Sciences (ENSA)",
        location: "Rabat, Morocco",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
        email: "k.bouzid@ensa.ac.ma"
    },
    {
        id: 7,
        name: "Prof. Hiroshi Tanaka",
        role: "Steering Committee Member",
        category: "Steering Committee",
        institution: "Tokyo Institute of Technology",
        location: "Tokyo, Japan",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
        email: "tanaka.h@titech.ac.jp"
    },
    {
        id: 8,
        name: "Prof. Dimitrios Katsaros",
        role: "Steering Committee Member",
        category: "Steering Committee",
        institution: "University of Thessaly",
        location: "Volos, Greece",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
        email: "dkatsar@uth.gr"
    }
];

const categories = ["All", "General Chairs", "TPC Chairs", "Local Organization", "Steering Committee"] as const;

export function OrganizingCommittee() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filteredMembers = selectedCategory === "All"
        ? committeeMembers
        : committeeMembers.filter(m => m.category === selectedCategory);

    return (
        <section id="committee" className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-100/50 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-100/40 blur-[120px] rounded-full pointer-events-none" />

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
                            <Users size={14} className="text-emerald-600" />
                            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                                Leadership & Governance
                            </span>
                        </motion.div>

                        <motion.h2 
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 mt-4 leading-[1.15] tracking-tight"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 240, damping: 70 }}
                        >
                            Organizing Committee
                        </motion.h2>

                        <motion.p 
                            className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70 }}
                        >
                            Meet the distinguished chairs, academics, and technical program leaders steering the scientific rigor, peer review, and organization of ICT 2026.
                        </motion.p>
                    </div>

                    {/* Quick Stats Pill */}
                    <motion.div 
                        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm self-start md:self-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="size-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-lg">
                            40+
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-900">Global Committee Members</span>
                            <span className="text-[11px] text-slate-500">From 18+ Countries & Institutes</span>
                        </div>
                    </motion.div>
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-10 scrollbar-none">
                    {categories.map((cat) => {
                        const isActive = selectedCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                                    isActive
                                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                                        : "bg-white text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 border border-slate-200/80"
                                }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Committee Members Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredMembers.map((member, idx) => (
                            <motion.div
                                layout
                                key={member.id}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ delay: idx * 0.05, duration: 0.3 }}
                                className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-lg hover:shadow-emerald-500/5"
                            >
                                {/* Top Photo with Gradient & Role Badge */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                                    <img 
                                        src={member.avatar} 
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                                    
                                    {/* Role Badge */}
                                    <span className="absolute bottom-3 left-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide bg-emerald-600/95 text-white backdrop-blur-md text-center truncate shadow-sm">
                                        {member.role}
                                    </span>
                                </div>

                                {/* Content Details */}
                                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                            {member.name}
                                        </h3>
                                        
                                        <div className="flex items-start gap-1.5 text-xs text-slate-600 mt-1">
                                            <Building2 className="size-3.5 text-slate-400 shrink-0 mt-0.5" />
                                            <span className="leading-snug">{member.institution}</span>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium mt-0.5">
                                            <Globe className="size-3 text-emerald-600 shrink-0" />
                                            <span>{member.location}</span>
                                        </div>
                                    </div>

                                    {/* Contact / Action Links */}
                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                            {member.category}
                                        </span>
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                title={`Contact ${member.name}`}
                                                className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                                            >
                                                <Mail className="size-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Callout / TPC Call for Reviewers */}
                <motion.div 
                    className="mt-14 p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-2xl bg-emerald-100/80 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                            <GraduationCap className="size-6" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-base font-bold text-slate-900">
                                Interested in Joining the Technical Review Board?
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                                We welcome qualified researchers and reviewers across our 8 conference research tracks.
                            </p>
                        </div>
                    </div>

                    <a 
                        href="#contact" 
                        className="whitespace-nowrap px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-emerald-600 transition-colors duration-200 shadow-sm"
                    >
                        Apply as TPC Reviewer
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
