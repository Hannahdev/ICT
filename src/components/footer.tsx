import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 mt-32 px-4 md:px-16 lg:px-24 xl:px-32 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

                    {/* Left Brand Details */}
                    <div className="lg:col-span-7 flex flex-col items-start gap-6">
                        <a href="#" className="select-none">
                            <img src="/LOGO-removebg-preview (2).png" alt="ICT Conference & Platform" className="h-10 w-auto" />
                        </a>
                        <p className="text-zinc-300 text-sm/5.5 max-w-md">
                            Driving regional digital transformation, AI for network intelligence, and sustainable ICT innovation across research, academia, and industry.
                        </p>
                    </div>

                    {/* Right Link Columns */}
                    <div className="lg:col-span-5 flex justify-between gap-8 flex-wrap">
                        {/* Program */}
                        <div className="flex flex-col gap-5">
                            <span className="text-white text-sm font-bold tracking-wider">Program</span>
                            <div className="flex flex-col gap-3 text-xs text-zinc-300">
                                <motion.a href="#" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Tracks & Topics
                                </motion.a>
                                <motion.a href="#speakers" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Keynote Speakers
                                </motion.a>
                                <motion.a href="#committee" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Organizing Committee
                                </motion.a>
                                <motion.a href="#" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Workshops
                                </motion.a>
                                <motion.a href="#travel" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Venue & Travel (Casablanca)
                                </motion.a>
                                <motion.a href="#" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Schedule & Agenda
                                </motion.a>
                                <motion.a href="#" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Proceedings
                                </motion.a>
                            </div>
                        </div>

                        {/* Network */}
                        <div className="flex flex-col gap-5">
                            <span className="text-white text-sm font-bold tracking-wider">Community</span>
                            <div className="flex flex-col gap-3 text-xs text-zinc-300">
                                <motion.a href="#" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    LinkedIn
                                </motion.a>
                                <motion.a href="#" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Twitter / X
                                </motion.a>
                                <motion.a href="#" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    YouTube Channel
                                </motion.a>
                                <motion.a href="#" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    GitHub Organization
                                </motion.a>
                            </div>
                        </div>

                        {/* Submissions */}
                        <div className="flex flex-col gap-5">
                            <span className="text-white text-sm font-bold tracking-wider">Authors & Calls</span>
                            <div className="flex flex-col gap-3 text-xs text-zinc-300">
                                <motion.a href="#about" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Call for Papers
                                </motion.a>
                                <motion.a href="#about" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Call for Demos & Posters
                                </motion.a>
                                <motion.a href="#faq" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    Call for Workshops
                                </motion.a>
                                <motion.a href="#about" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    EDAS Submission Portal
                                </motion.a>
                                <motion.a href="#faq" className="hover:text-white transition-colors duration-200" 
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                                >
                                    CR Manuscript Instructions
                                </motion.a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full h-px bg-zinc-800"></div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 text-xs text-zinc-300">
                    <p>© {new Date().getFullYear()} ICT Innovation Platform. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
                        <a href="#" className="hover:text-white transition-colors duration-200">Contact Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}