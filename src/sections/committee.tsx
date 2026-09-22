import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

interface CommitteeMember {
    id: number;
    name: string;
    role: string;
    category: "General Chairs" | "TPC Chairs" | "Local Organization" | "Steering Committee";
    institution: string;
    location: string;
    email?: string;
}

const committeeMembers: CommitteeMember[] = [
    {
        id: 1,
        name: "Prof. Mohamed Ben Ahmed",
        role: "General Conference Chair",
        category: "General Chairs",
        institution: "Faculty of Sciences Ben M'Sick, Casablanca",
        location: "Morocco",
        email: "m.benahmed@univh2c.ma"
    },
    {
        id: 2,
        name: "Prof. Elena Vasquez",
        role: "General Co-Chair",
        category: "General Chairs",
        institution: "Technical University of Madrid",
        location: "Spain",
        email: "e.vasquez@upm.es"
    },
    {
        id: 3,
        name: "Prof. Tariq Al-Mansoor",
        role: "TPC Chair",
        category: "TPC Chairs",
        institution: "King Fahd University of Petroleum & Minerals",
        location: "Saudi Arabia",
        email: "t.mansoor@kfupm.edu.sa"
    },
    {
        id: 4,
        name: "Dr. Sophie Laurent",
        role: "TPC Co-Chair — AI & Networks",
        category: "TPC Chairs",
        institution: "CNRS & Telecom Paris",
        location: "France",
        email: "s.laurent@telecom-paris.fr"
    },
    {
        id: 5,
        name: "Prof. Rachid Oulad",
        role: "Organizing Committee Chair",
        category: "Local Organization",
        institution: "University Hassan II of Casablanca",
        location: "Morocco",
        email: "r.oulad@univh2c.ma"
    },
    {
        id: 6,
        name: "Dr. Kenza Bouzid",
        role: "Publicity & Media Chair",
        category: "Local Organization",
        institution: "National School of Applied Sciences (ENSA)",
        location: "Morocco",
        email: "k.bouzid@ensa.ac.ma"
    },
    {
        id: 7,
        name: "Prof. Hiroshi Tanaka",
        role: "Steering Committee Member",
        category: "Steering Committee",
        institution: "Tokyo Institute of Technology",
        location: "Japan",
        email: "tanaka.h@titech.ac.jp"
    },
    {
        id: 8,
        name: "Prof. Dimitrios Katsaros",
        role: "Steering Committee Member",
        category: "Steering Committee",
        institution: "University of Thessaly",
        location: "Greece",
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
        <section id="committee" className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-white border-t border-slate-200/80">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Leadership & Governance</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Organizing Committee
                    </h2>
                    <p className="text-slate-500 text-sm mt-3 max-w-xl leading-relaxed">
                        Chairs, academics, and technical program leaders steering the scientific rigor and organization of ICT 2026.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="flex items-center gap-2 flex-wrap mb-8">
                    {categories.map((cat) => {
                        const isActive = selectedCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                    isActive
                                        ? "bg-slate-900 text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Members Table */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border border-slate-200 rounded-2xl overflow-hidden"
                    >
                        {filteredMembers.map((member, idx) => (
                            <div
                                key={member.id}
                                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 ${
                                    idx !== filteredMembers.length - 1 ? "border-b border-slate-100" : ""
                                } ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"} hover:bg-emerald-50/30 transition-colors`}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 flex-1">
                                    <div className="min-w-[200px]">
                                        <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                                        <p className="text-xs text-emerald-700 font-medium mt-0.5">{member.role}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-slate-600">{member.institution}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{member.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                    <span className="hidden sm:block text-[11px] font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                                        {member.category}
                                    </span>
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            title={`Contact ${member.name}`}
                                            className="text-slate-400 hover:text-emerald-600 transition-colors"
                                        >
                                            <Mail className="size-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Footer callout */}
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                    <p className="text-sm text-slate-500">
                        <span className="font-semibold text-slate-900">40+ global committee members</span> from 18+ countries & institutes.
                    </p>
                    <a
                        href="#contact"
                        className="text-xs font-semibold px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-emerald-600 transition-colors"
                    >
                        Apply as TPC Reviewer
                    </a>
                </div>

            </div>
        </section>
    );
}
