import { motion } from "framer-motion";

interface CommitteeMember {
    name: string;
    role: string;
    image: string;
    linkedin: string;
}

const committeeMembers: CommitteeMember[] = [
    {
        name: "Donald Jackman",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Michael Brown",
        role: "Head of Engineering",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        linkedin: "https://linkedin.com"
    },
    {
        name: "David Thompson",
        role: "Full-Stack Developer",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Olivia Martinez",
        role: "Product Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Liam Anderson",
        role: "Backend Developer",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
        linkedin: "https://linkedin.com"
    },
    {
        name: "Jordan Lee",
        role: "Marketing Lead",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
        linkedin: "https://linkedin.com"
    }
];

export function OrganizingCommittee() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                #committee, #committee * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <section id="committee" className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-white border-t border-slate-200/80">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-medium text-slate-800 text-center mx-auto">
                            Meet Our Team
                        </h2>
                        <p className="text-sm text-slate-500 text-center mt-2 max-w-xl mx-auto">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 mt-12">
                        {committeeMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="size-20 aspect-square rounded-full object-cover shadow-sm ring-2 ring-emerald-500/10"
                                />
                                <h3 className="text-lg font-medium text-slate-700 text-center mt-2">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-emerald-600 text-center">
                                    {member.role}
                                </p>
                                <div className="flex items-center gap-2 text-slate-400 mt-2">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${member.name} LinkedIn`}
                                        className="hover:-translate-y-0.5 hover:text-emerald-600 transition-all p-1"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.332 6.667a5 5 0 0 1 5 5V17.5h-3.333v-5.834a1.667 1.667 0 0 0-3.334 0V17.5H8.332v-5.834a5 5 0 0 1 5-5M5.001 7.5H1.668v10h3.333zM3.335 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default OrganizingCommittee;
