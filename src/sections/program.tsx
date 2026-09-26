import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, Coffee, Utensils, Award, BookOpen } from "lucide-react";

interface ScheduleSlot {
    time: string;
    day1: string;
    day2: string;
    day3: string;
    day4: string;
    isHighlight?: boolean;
    isBreak?: boolean;
}

const importantDates = [
    {
        date: "31 January 2027",
        title: "Full Paper Submission",
        subtitle: "Submit technical papers via EDAS",
        status: "Open for Submissions",
        active: true,
        icon: <BookOpen className="size-5 text-[#00A3E0]" />
    },
    {
        date: "15 March 2027",
        title: "Notification of Acceptance",
        subtitle: "Peer-review results & feedback",
        status: "Review Phase",
        active: false,
        icon: <Award className="size-5 text-[#00A3E0]" />
    },
    {
        date: "31 March 2027",
        title: "Final Paper Submission",
        subtitle: "Camera-ready & copyright transfer",
        status: "Final Registration",
        active: false,
        icon: <Sparkles className="size-5 text-[#00A3E0]" />
    },
    {
        date: "04 – 07 May 2027",
        title: "Conference Days",
        subtitle: "May 4 (Online) • May 5–7 (Casablanca)",
        status: "Main Event",
        active: false,
        icon: <Calendar className="size-5 text-[#00E5FF]" />,
        isMain: true
    }
];

const programSchedule: ScheduleSlot[] = [
    {
        time: "09:00 – 10:30",
        day1: "Morning Tutorials / Workshops",
        day2: "Opening Plenary / Keynote",
        day3: "Plenary / Keynote",
        day4: "Plenary / Keynote",
        isHighlight: true
    },
    {
        time: "10:30 – 11:00",
        day1: "Networking Break",
        day2: "Networking Break",
        day3: "Networking Break",
        day4: "Networking Break",
        isBreak: true
    },
    {
        time: "11:00 – 12:30",
        day1: "Morning Tutorials / Workshops",
        day2: "Technical / Panel Sessions",
        day3: "Technical / Panel Sessions",
        day4: "Technical / Panel Sessions"
    },
    {
        time: "12:30 – 14:00",
        day1: "Lunch (included with registration)",
        day2: "Lunch (included with registration)",
        day3: "Lunch (included with registration)",
        day4: "Lunch (included with registration)",
        isBreak: true
    },
    {
        time: "14:00 – 15:30",
        day1: "Afternoon Tutorials / Workshops",
        day2: "Technical / Panel Sessions",
        day3: "Technical / Panel Sessions",
        day4: "Technical / Panel Sessions"
    },
    {
        time: "15:30 – 16:00",
        day1: "Networking Break",
        day2: "Networking Break",
        day3: "Networking Break",
        day4: "Networking Break",
        isBreak: true
    },
    {
        time: "16:00 – 17:30",
        day1: "Afternoon Tutorials / Workshops",
        day2: "Technical / Panel Sessions",
        day3: "Technical / Panel Sessions",
        day4: "Technical / Panel Sessions"
    },
    {
        time: "17:30 – 19:00",
        day1: "—",
        day2: "Social events (visits)",
        day3: "Social events (visits)",
        day4: "—",
        isHighlight: true
    },
    {
        time: "19:00 – 21:00",
        day1: "Welcome Reception (Location to be announced)",
        day2: "Conference Banquet",
        day3: "Organizing Committee Dinner",
        day4: "—",
        isHighlight: true
    }
];

const dayMeta = [
    { id: "day1", label: "Day 1", fullDate: "May 4th, 2027", note: "Online Tutorials & Workshops" },
    { id: "day2", label: "Day 2", fullDate: "May 5th, 2027", note: "Co-hosted with Smart City Casablanca 2027" },
    { id: "day3", label: "Day 3", fullDate: "May 6th, 2027", note: "Co-hosted with Smart City Casablanca 2027" },
    { id: "day4", label: "Day 4", fullDate: "May 7th, 2027", note: "Closing Keynotes & Technical Panels" }
];

export function Program() {
    const [selectedDay, setSelectedDay] = useState<number>(0);
    const [viewMode, setViewMode] = useState<"table" | "tabs">("table");

    return (
        <section id="program" className="py-24 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
            
            {/* Ambient Background Accents */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00A3E0]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0B2545]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* 1. SECTION: IMPORTANT DATES TIMELINE */}
                <div id="important-dates" className="mb-24">
                    <motion.div 
                        className="text-center max-w-3xl mx-auto mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/20 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-4">
                            <Clock size={13} />
                            Key Deadlines
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2545] tracking-tight">
                            Important Dates
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                            Mark these critical deadlines in your calendar for paper submissions, reviews, and conference registration.
                        </p>
                    </motion.div>

                    {/* Timeline Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {importantDates.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className={`relative rounded-3xl p-6 transition-all duration-300 ${
                                    item.isMain 
                                        ? "bg-gradient-to-br from-[#0B2545] to-[#04162e] text-white shadow-xl shadow-[#0B2545]/20 border border-[#00A3E0]/40" 
                                        : "bg-white text-slate-900 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-[#00A3E0]/50"
                                }`}
                            >
                                {/* Step number */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-2xl ${item.isMain ? "bg-white/10" : "bg-[#00A3E0]/10 border border-[#00A3E0]/20"}`}>
                                        {item.icon}
                                    </div>
                                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full ${
                                        item.isMain 
                                            ? "bg-[#00E5FF] text-[#0B2545]" 
                                            : "bg-slate-100 text-slate-700"
                                    }`}>
                                        {item.status}
                                    </span>
                                </div>

                                <span className={`text-xs font-bold uppercase tracking-wider block ${item.isMain ? "text-[#00E5FF]" : "text-[#00A3E0]"}`}>
                                    Step 0{idx + 1}
                                </span>
                                <h3 className={`text-2xl font-black mt-1 ${item.isMain ? "text-white" : "text-[#0B2545]"}`}>
                                    {item.date}
                                </h3>
                                <h4 className={`text-base font-bold mt-2 ${item.isMain ? "text-slate-100" : "text-slate-800"}`}>
                                    {item.title}
                                </h4>
                                <p className={`text-xs mt-1.5 leading-relaxed ${item.isMain ? "text-slate-300" : "text-slate-500"}`}>
                                    {item.subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. SECTION: SAMPLE PROGRAM AT A GLANCE */}
                <div id="schedule" className="pt-8">
                    <motion.div 
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/20 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
                                <Calendar size={13} />
                                Schedule Overview
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2545] tracking-tight">
                                Program
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                                Complete 4-day agenda spanning online tutorials, opening plenaries with Smart City Casablanca 2027, technical panels, and social banquets.
                            </p>
                        </div>

                        {/* View Switcher Controls */}
                        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
                            <button 
                                onClick={() => setViewMode("table")}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                    viewMode === "table" 
                                        ? "bg-[#0B2545] text-white shadow-md" 
                                        : "text-slate-600 hover:text-[#0B2545]"
                                }`}
                            >
                                Full 4-Day Matrix
                            </button>
                            <button 
                                onClick={() => setViewMode("tabs")}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                    viewMode === "tabs" 
                                        ? "bg-[#0B2545] text-white shadow-md" 
                                        : "text-slate-600 hover:text-[#0B2545]"
                                }`}
                            >
                                Day by Day View
                            </button>
                        </div>
                    </motion.div>

                    {/* VIEW 1: FULL 4-DAY SCHEDULE MATRIX TABLE */}
                    {viewMode === "table" && (
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[850px]">
                                    <thead>
                                        <tr className="bg-[#0B2545] text-white">
                                            <th className="py-5 px-5 font-bold text-xs uppercase tracking-wider text-slate-300 w-36 border-r border-white/10">
                                                Time (GMT+1)
                                            </th>
                                            <th className="py-5 px-5 font-bold text-xs uppercase tracking-wider border-r border-white/10 w-1/4">
                                                <span className="text-[#00E5FF] block font-black text-sm">Day 1 (Online)</span>
                                                <span className="text-[11px] text-slate-300 font-normal">May 4th, 2027</span>
                                            </th>
                                            <th className="py-5 px-5 font-bold text-xs uppercase tracking-wider border-r border-white/10 w-1/4">
                                                <span className="text-[#00E5FF] block font-black text-sm">Day 2 (In-Person)</span>
                                                <span className="text-[11px] text-slate-300 font-normal">May 5th • Co-hosted Smart City</span>
                                            </th>
                                            <th className="py-5 px-5 font-bold text-xs uppercase tracking-wider border-r border-white/10 w-1/4">
                                                <span className="text-[#00E5FF] block font-black text-sm">Day 3 (In-Person)</span>
                                                <span className="text-[11px] text-slate-300 font-normal">May 6th • Co-hosted Smart City</span>
                                            </th>
                                            <th className="py-5 px-5 font-bold text-xs uppercase tracking-wider w-1/4">
                                                <span className="text-[#00E5FF] block font-black text-sm">Day 4 (In-Person)</span>
                                                <span className="text-[11px] text-slate-300 font-normal">May 7th • Closing Plenaries</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                                        {programSchedule.map((slot, index) => {
                                            if (slot.isBreak) {
                                                return (
                                                    <tr key={index} className="bg-slate-50/80 font-semibold text-slate-700">
                                                        <td className="py-3.5 px-5 font-bold text-slate-500 border-r border-slate-100">
                                                            {slot.time}
                                                        </td>
                                                        <td colSpan={4} className="py-3.5 px-6 text-center text-slate-600 italic bg-slate-100/60">
                                                            <div className="flex items-center justify-center gap-2">
                                                                {slot.day1.includes("Lunch") ? <Utensils size={14} className="text-[#00A3E0]" /> : <Coffee size={14} className="text-[#00A3E0]" />}
                                                                <span>{slot.day1}</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            }

                                            return (
                                                <tr key={index} className={`hover:bg-slate-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}>
                                                    <td className="py-4 px-5 font-bold text-[#0B2545] border-r border-slate-100 whitespace-nowrap bg-slate-50/30">
                                                        <div className="flex items-center gap-1.5 text-xs">
                                                            <Clock size={13} className="text-[#00A3E0]" />
                                                            <span>{slot.time}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-5 border-r border-slate-100">
                                                        {slot.day1 !== "—" ? (
                                                            <span className={slot.day1.includes("Reception") ? "font-bold text-[#00A3E0]" : "text-slate-800"}>
                                                                {slot.day1}
                                                            </span>
                                                        ) : (
                                                            <span className="text-slate-300">—</span>
                                                        )}
                                                    </td>
                                                    <td className="py-4 px-5 border-r border-slate-100">
                                                        {slot.day2 !== "—" ? (
                                                            <span className={slot.day2.includes("Plenary") || slot.day2.includes("Banquet") ? "font-bold text-[#0B2545]" : "text-slate-800"}>
                                                                {slot.day2}
                                                            </span>
                                                        ) : (
                                                            <span className="text-slate-300">—</span>
                                                        )}
                                                    </td>
                                                    <td className="py-4 px-5 border-r border-slate-100">
                                                        {slot.day3 !== "—" ? (
                                                            <span className={slot.day3.includes("Plenary") || slot.day3.includes("Dinner") ? "font-bold text-[#0B2545]" : "text-slate-800"}>
                                                                {slot.day3}
                                                            </span>
                                                        ) : (
                                                            <span className="text-slate-300">—</span>
                                                        )}
                                                    </td>
                                                    <td className="py-4 px-5">
                                                        {slot.day4 !== "—" ? (
                                                            <span className={slot.day4.includes("Plenary") ? "font-bold text-[#0B2545]" : "text-slate-800"}>
                                                                {slot.day4}
                                                            </span>
                                                        ) : (
                                                            <span className="text-slate-300">—</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                    {/* VIEW 2: INTERACTIVE DAY TABS VIEW */}
                    {viewMode === "tabs" && (
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            {/* Day Tabs */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                {dayMeta.map((day, idx) => (
                                    <button
                                        key={day.id}
                                        onClick={() => setSelectedDay(idx)}
                                        className={`p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                                            selectedDay === idx 
                                                ? "bg-[#0B2545] text-white shadow-xl border-[#00A3E0]" 
                                                : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                                        }`}
                                    >
                                        <span className={`text-xs font-extrabold uppercase tracking-wider block ${selectedDay === idx ? "text-[#00E5FF]" : "text-[#00A3E0]"}`}>
                                            {day.label}
                                        </span>
                                        <h4 className="text-lg font-black mt-0.5">{day.fullDate}</h4>
                                        <p className={`text-xs mt-1 line-clamp-1 ${selectedDay === idx ? "text-slate-300" : "text-slate-500"}`}>
                                            {day.note}
                                        </p>
                                    </button>
                                ))}
                            </div>

                            {/* Timeline for Selected Day */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 divide-y divide-slate-100">
                                {programSchedule.map((slot, idx) => {
                                    const dayContent = selectedDay === 0 ? slot.day1 : selectedDay === 1 ? slot.day2 : selectedDay === 2 ? slot.day3 : slot.day4;
                                    if (dayContent === "—") return null;

                                    return (
                                        <div key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2.5 rounded-xl text-xs font-bold shrink-0 ${
                                                    slot.isBreak 
                                                        ? "bg-slate-100 text-slate-600" 
                                                        : slot.isHighlight 
                                                            ? "bg-[#00A3E0]/15 text-[#00A3E0]" 
                                                            : "bg-[#0B2545]/10 text-[#0B2545]"
                                                }`}>
                                                    <Clock size={15} />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-slate-500 block">
                                                        {slot.time}
                                                    </span>
                                                    <h4 className={`text-base font-bold ${
                                                        slot.isHighlight ? "text-[#0B2545]" : "text-slate-800"
                                                    }`}>
                                                        {dayContent}
                                                    </h4>
                                                </div>
                                            </div>

                                            {slot.isHighlight && (
                                                <span className="self-start sm:self-auto px-3 py-1 rounded-full text-[11px] font-bold bg-[#00A3E0]/10 text-[#00A3E0] border border-[#00A3E0]/20">
                                                    Featured Event
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                </div>

            </div>
        </section>
    );
}

export default Program;
