import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CommitteeMember {
    name: string;
    role: string;
    affiliation?: string;
    image: string;
    linkedin?: string;
    email?: string;
}

const categories = [
    { id: "leadership", label: "General & Executive Leadership" },
    { id: "tpc", label: "TPC & Track Chairs" },
    { id: "keynotes", label: "Keynotes & Workshops" },
    { id: "local_ieee", label: "Local & IEEE Support" },
];

const committeeData: Record<string, CommitteeMember[]> = {
    leadership: [
        {
            name: "Pr. Hamid Aghvami",
            role: "Conference Co-Founder & Senior Advisor",
            affiliation: "King's College London, UK",
            image: "https://www.kcl.ac.uk/ImportedImages/Schools/NMS/NMS-Headshots/Abdol-Hamid-Aghvami-web.xc552ffc1.jpg?w=160&h=160&f=webp",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Farokh Marvasti",
            role: "Conference Co-Founder",
            affiliation: "Sharif University of Technology, Iran",
            image: "https://i1.rgstatic.net/ii/profile.image/273550377525263-1442230900434_Q512/Farokh-Marvasti.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Hikmet Sari",
            role: "Senior Advisor",
            affiliation: "Nanjing University, China • Past VP IEEE ComSoc",
            image: "https://icc2024.ieee-icc.org/sites/icc2024.ieee-icc.org/files/Hikmet-Sari.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Adel M. Alimi",
            role: "Senior Advisor",
            affiliation: "Former Director ENIS, University of Sfax, Tunisia",
            image: "https://r8.ieee.org/africa-council/wp-content/uploads/sites/155/2024/08/unnamed-5.png",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Periklis Chatzimisios",
            role: "Senior Advisor",
            affiliation: "International Hellenic University, Greece",
            image: "https://icc2026.ieee-icc.org/sites/icc2026.ieee-icc.org/files/Periklis-Chatzimisios.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Alexandros Iosifidis",
            role: "Senior Advisor",
            affiliation: "International Hellenic University, Greece",
            image: "https://www.tuni.fi/_next/image?url=https:%2F%2Fcontent-webapi.tuni.fi%2Fimage-style%2Flandscape%2Fproxy%2Fpublic%2F2025-02%2Falexandros-losifidis-2_web.jpg%3Fitok%3DFJaXS1OF&w=3840&q=75",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Izzat Darwazeh",
            role: "General Co-Chair",
            affiliation: "University College London (UCL), UK",
            image: "https://tse4.mm.bing.net/th/id/OIP.DvcH6u4uZCep8RTS0HCMJQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            linkedin: "https://linkedin.com"
        },
        {
            name: "CEO Mohamed Jouahri",
            role: "General Co-Chair",
            affiliation: "Casablanca Events & Animation, Morocco",
            image: "https://africaplacemarketing.com/assets/images/jouahri.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Aawatif Hayar",
            role: "General Co-Chair",
            affiliation: "UM6P / UH2C, Morocco",
            image: "/IMG-20251217-WA0009.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Abdelkrim Haqiq",
            role: "General Co-Chair",
            affiliation: "FST, Hassan 1st University Settat, Morocco",
            image: "/pr Haqiq.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Luis Orozco Barbosa",
            role: "General Co-Chair",
            affiliation: "Albacete Research Inst., UCLM, Spain",
            image: "https://conferencia2026.clei.org/wp-content/uploads/sites/6/2026/02/LuisOrozco-4.png",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Abdelaziz Soukri",
            role: "Executive Chair",
            affiliation: "Dean FSAC, University Hassan II of Casablanca",
            image: "https://i1.rgstatic.net/ii/profile.image/11431281084497993-1663224760437_Q512/Abdelaziz-Soukri.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Abdessalam El Bouari",
            role: "Executive Chair",
            affiliation: "Dean FSBM, University Hassan II of Casablanca",
            image: "https://tse3.mm.bing.net/th/id/OIP.AmjW6WY_v8CKbNUpw2QyRgHaGo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Ahmed Naddami",
            role: "Executive Chair",
            affiliation: "Director ENSEM, University Hassan II of Casablanca",
            image: "https://th.bing.com/th/id/OIP.N-dwaIdMTenP0QwPXG3KLAHaHa?w=108&h=108&c=1&bgcl=fc8239&r=0&o=7&dpr=2&pid=ImgRC&rm=3",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Rachid Essamoud",
            role: "Executive Chair",
            affiliation: "Director ESTC, University Hassan II of Casablanca",
            image: "https://th.bing.com/th/id/R.b65e08cb93ccd9f569a1078c312f6390?rik=PCnY%2bU988RVfDA&riu=http%3a%2f%2fwww.est-uh2c.ac.ma%2fmedia%2fimages%2fDrc_Essamoud.width-500.png&ehk=gjYwZjntXRzaE3oT7dN4GPyqlMl4ySXN%2bIJaKULEvMY%3d&risl=&pid=ImgRaw&r=0",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Latifa Mohair",
            role: "Executive Chair",
            affiliation: "Dean FSTM, University Hassan II of Casablanca",
            image: "https://www.fstm.ac.ma/images/equipe_de_gestion/doyennevf2.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Omar Bouattane",
            role: "Executive Chair",
            affiliation: "Director ENSET, University Hassan II of Casablanca",
            image: "https://tse2.mm.bing.net/th/id/OIP.yqDPY6d7k63Kv2uIv_mL5wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            linkedin: "https://ma.linkedin.com/in/omar-bouattane-39971960"
        }
    ],
    tpc: [
        {
            name: "Pr. Yansha Deng",
            role: "TPC Chair",
            affiliation: "King's College London (KCL), UK",
            image: "https://d3nwecxvwq3b5n.cloudfront.net/AcuCustom/Sitename/DAM/063/Yansha_Deng-modified1_Main.png",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Fouzia Benabbou",
            role: "TPC Chair & IEEE Contact",
            affiliation: "Head IA & Systems Lab, FSBM-UH2C, Morocco",
            image: "/R.png",
            linkedin: "https://linkedin.com",
            email: "faouzia.benabbou@univh2c.ma"
        },
        {
            name: "Pr. Said Jai Andaloussi",
            role: "TPC Chair",
            affiliation: "FSAC, University Hassan II of Casablanca, Morocco",
            image: "/1788649760700.png",
            linkedin: "https://www.linkedin.com/in/said-jai-andaloussi-5ba15776/"
        },
        {
            name: "Pr. Abderrahim Maizate",
            role: "TPC & Publication Chair",
            affiliation: "ESTC, University Hassan II of Casablanca, Morocco",
            image: "/pr maizate.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Youssef Mejdoub",
            role: "Publication Chair",
            affiliation: "ESTC, University Hassan II of Casablanca, Morocco",
            image: "https://cocia-conf.com/wp-content/uploads/elementor/thumbs/Mejdoub-rimd2q9395zz2js3jfvt8mo93got6b963e664w4jic.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Habib Kammoun",
            role: "Publicity Chair & IEEE Support",
            affiliation: "IEEE Region 8 Vice-Chair • University of Sfax",
            image: "https://tse4.mm.bing.net/th/id/OIP.Lg2ZERUdPS8foYqBsVe29gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            linkedin: "https://www.bing.com/ck/a?!&&p=1bc1f433e675beb8866229cc2a8e538ab7e5e7323a26965fed3f04f525307e82JmltdHM9MTc5MDM4MDgwMA&ptn=3&ver=2&hsh=4&fclid=2a3af3b0-f8da-69fe-377e-e420f99a6874&psq=Pr+Habib+Kammoun+IEEE+Region+8+Vice-Chair&u=a1aHR0cHM6Ly90bi5saW5rZWRpbi5jb20vaW4va2FtbW91bg"
        },
        {
            name: "Pr. Toya Acharya",
            role: "Publicity Chair",
            affiliation: "Prairie View A&M University, Texas, USA",
            image: "https://securecenter.pvamu.edu/wp-content/uploads/sites/160/2022/04/Toya-Acharya-300x300.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Karmela Aleksis Maslac",
            role: "Publicity Chair",
            affiliation: "Zagreb School of Economics & Management, Croatia",
            image: "https://tse4.mm.bing.net/th/id/OIP.IVaRwRcZSvledRD4dGobbQHaLI?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Eng. Bai Blyden",
            role: "Publicity Chair",
            affiliation: "Senior IEEE Member, USA",
            image: "https://icath-conf.org/wp-content/uploads/2025/12/WhatsApp-Image-2026-04-24-at-13.44.23-1000x1060.jpeg",
            linkedin: "https://www.bing.com/ck/a?!&&p=d7317b0a0cd12b1c5dbc6c550d59b01dd3bb85658659e9a5dce8dd083a8fa7d6JmltdHM9MTc5MDM4MDgwMA&ptn=3&ver=2&hsh=4&fclid=2a3af3b0-f8da-69fe-377e-e420f99a6874&psq=Eng.+Bai+Blyden+Publicity+Chair+Senior+IEEE+Member%2c+USA&u=a1aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2JhaS1rZW5kcmljay1ibHlkZW4tM2I5YmE"
        },
        {
            name: "Pr. Metin Akay",
            role: "Publicity Chair",
            affiliation: "Past Chair of IEEE EMBS • University of Houston, USA",
            image: "/pr metin akay.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Yasemin Akay",
            role: "Publicity Chair",
            affiliation: "University of Houston, USA",
            image: "https://cnecs.egr.uh.edu/sites/cnecs.egr.uh.edu/files/images/faculty/yakay.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Driss El Ouadrhri",
            role: "Industrial Liaison Co-Chair",
            affiliation: "Moulay Ismail University (UMI), Morocco",
            image: "https://th.bing.com/th/id/OIP.6SDGA6E4Ad5OEqcoV8BBSQAAAA?w=150&h=150&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Brahim Bhiri",
            role: "Industrial Liaison Co-Chair",
            affiliation: "Harmony, Morocco",
            image: "https://www.med-sc.org/assets/image/Smart%20Cities%20Hackathon%20Chair/Dr.%20Brahim%20EL%20BHIRI%20,%20Director%20R&D%20-%20EMSI-Rabat.jfif",
            linkedin: "https://linkedin.com"
        }
    ],
    keynotes: [
        {
            name: "Pr. Kettani Anas",
            role: "Keynotes & Panels Co-Chair",
            affiliation: "University Hassan II of Casablanca, Morocco",
            image: "/pr anas kettani.jpg",
            linkedin: "https://www.bing.com/ck/a?!&&p=7c45c231c570d4f9d57a4d88d65575613c70ab455512cae686b50fe23d6253c3JmltdHM9MTc5MDM4MDgwMA&ptn=3&ver=2&hsh=4&fclid=2a3af3b0-f8da-69fe-377e-e420f99a6874&psq=Pr.+Brahim+Bhiri+Industrial+Liaison+Co-Chair+Harmony%2c+Morocco&u=a1aHR0cHM6Ly9tYS5saW5rZWRpbi5jb20vaW4vYnJhaGltLWVsLWJoaXJpLXBoZC0zNzEwOTkxNTk"
        },
        {
            name: "Pr. Sanaa El Filali",
            role: "Keynotes & Panels Co-Chair",
            affiliation: "FSBM, University Hassan II of Casablanca, Morocco",
            image: "/profile-2026-07-11.png",
            linkedin: "https://www.linkedin.com/in/sanaa-el-filali-87816b8a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BhnE3vVXyRFqJJcuczuLU5w%3D%3D"
        },
        {
            name: "Pr. Laila Fetjah",
            role: "Keynotes & Panels Co-Chair",
            affiliation: "FSAC, University Hassan II of Casablanca, Morocco",
            image: "/pr laila fetjah.jpg",
            linkedin: "https://www.linkedin.com/in/laila-fetjah-8984161bb/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B%2FYp%2B0PkSTFutQn3nG6vskQ%3D%3D"
        },
        {
            name: "Pr. Mohammed Khalil",
            role: "Keynotes & Panels Co-Chair",
            affiliation: "FSTM, University Hassan II of Casablanca, Morocco",
            image: "/mohammed khalil.jpg",
            linkedin: "https://www.linkedin.com/in/mohammed-khalil-172b1981/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BNFpgi0f0T6yCQ0VGpdr6gA%3D%3D"
        },
        {
            name: "Mme Khadija Ouahimi",
            role: "Keynotes & Panels Co-Chair",
            affiliation: "Casablanca Events & Animation, Morocco",
            image: "https://archive.challenge.ma/wp-content/uploads/2017/04/wecasablanca-1024x682.jpeg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Ashraf Matrawy",
            role: "Best Paper Co-Chair",
            affiliation: "School of IT, Carleton University, Ottawa, Canada",
            image: "https://th.bing.com/th/id/OIP.IvN6hu4K_8LYeXfUqFD1LQAAAA?w=108&h=108&c=1&bgcl=38ee29&r=0&o=7&dpr=2&pid=ImgRC&rm=3",
            linkedin: "https://www.bing.com/ck/a?!&&p=725345750a38c6399c383bb439f9979c433421b80be56332e4e264b35fb0f372JmltdHM9MTc5MDM4MDgwMA&ptn=3&ver=2&hsh=4&fclid=2a3af3b0-f8da-69fe-377e-e420f99a6874&psq=Pr.+Ashraf+Matrawy+Best+Paper+Co-Chair+School+of+IT%2c+Carleton+University%2c+Ottawa%2c+Canada&u=a1aHR0cHM6Ly9jYS5saW5rZWRpbi5jb20vaW4vYXNocmFmLW1hdHJhd3ktNTkxN2I1Ng"
        },
        {
            name: "Pr. Noura Aknin",
            role: "Best Paper Co-Chair",
            affiliation: "Abdelmalek Essaâdi University (UAE), Morocco",
            image: "/pr noura aknin.jpg",
            linkedin: "https://www.linkedin.com/in/noura-aknin-218a5a9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Be9bB0G4aSPi%2BBK2l1W81LA%3D%3D"
        },
        {
            name: "Pr. Parathasaray Subashini",
            role: "Best Paper & Workshops Co-Chair",
            affiliation: "Avinashilingam University, India",
            image: "/pr subashini.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Krishnaveni Marimutu",
            role: "Best Paper Co-Chair",
            affiliation: "Avinashilingam University, India",
            image: "/image (1).png",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Mohamed Hanini",
            role: "Best Paper Co-Chair",
            affiliation: "FST, Hassan 1st University Settat, Morocco",
            image: "...",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Aurelio Bermúdez Marín",
            role: "Workshops & Special Sessions Co-Chair",
            affiliation: "Albacete Research Inst., UCLM, Spain",
            image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=FEvTMqkAAAAJ&citpid=1",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Rafael Casado González",
            role: "Workshops & Special Sessions Co-Chair",
            affiliation: "Albacete Research Inst., UCLM, Spain",
            image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=MPpzvdgAAAAJ&citpid=4",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. M.A. Jabbar",
            role: "Workshops & Special Sessions Co-Chair",
            affiliation: "Vardhaman College of Engineering, Hyderabad, India",
            image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=BSL5V8IAAAAJ&citpid=5",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Latif Ladid",
            role: "Tutorial Co-Chair",
            affiliation: "President IPv6 Forum, Luxembourg",
            image: "https://cdn.ttgtmedia.com/rms/onlineImages/ladid_latif.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Nizar Rokbani",
            role: "Tutorial Co-Chair",
            affiliation: "ISSAT, University of Sousse, Tunisia",
            image: "https://tse1.mm.bing.net/th/id/OIP.WxLNAqX0-8v9IZyJb9d5PwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Mohamed Youssfi",
            role: "Tutorial Co-Chair",
            affiliation: "University Hassan II of Casablanca, Morocco",
            image: "data:image/webp;base64,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",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Said El Kafhali",
            role: "Tutorial Co-Chair",
            affiliation: "FST, Hassan 1st University Settat, Morocco",
            image: "https://th.bing.com/th/id/OIP.-7Kl5g_z2bf6O4tn2iVS-gHaHa?w=188&h=189&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Ahmed Rebbani",
            role: "Demo & Poster Co-Chair",
            affiliation: "University Hassan II of Casablanca, Morocco",
            image: "/rebbani.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Mr. Younes Bahhar",
            role: "Demo & Poster Co-Chair",
            affiliation: "Casablanca Events & Animation, Morocco",
            image: "https://th.bing.com/th/id/OIP.Brg_uoKWPT0pE1ptAYnJxAAAAA?w=108&h=108&c=1&bgcl=6cdd10&r=0&o=7&dpr=2&pid=ImgRC&rm=3",
            linkedin: "https://linkedin.com"
        }
    ],
    local_ieee: [
        {
            name: "Pr. Sanaa El Filali",
            role: "Local Chair",
            affiliation: "FSBM, University Hassan II of Casablanca, Morocco",
            image: "/profile-2026-07-11.png",
            linkedin: "https://www.linkedin.com/in/sanaa-el-filali-87816b8a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BhnE3vVXyRFqJJcuczuLU5w%3D%3D"
        },
        {
            name: "Pr. Laila Fetjah",
            role: "Local Chair",
            affiliation: "FSAC, University Hassan II of Casablanca, Morocco",
            image: "/pr laila fetjah.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Zaina Zaroual",
            role: "Financial Chair & Local Chair",
            affiliation: "FSAC, University Hassan II of Casablanca, Morocco",
            image: "/pr zeroual.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Dr. Abdelahad Benhallam",
            role: "Local Chair",
            affiliation: "Expert Consultant, Casablanca, Morocco",
            image: "/pr hellam.png",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Feng Ye",
            role: "IEEE ComSoc TCGCC Chair",
            affiliation: "Technical Committee on Green Comms & Computing",
            image: "https://ye.ece.wisc.edu/wp-content/uploads/sites/2043/2023/09/ye_feng-fye38-1x1_remastered-e1693626535527.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Hikmet Sari",
            role: "IEEE ComSoc Past VP Conferences",
            affiliation: "Nanjing University, China",
            image: "https://icc2024.ieee-icc.org/sites/icc2024.ieee-icc.org/files/Hikmet-Sari.jpg",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Habib Kammoun",
            role: "IEEE Region & Vice-Chair",
            affiliation: "University of Sfax, Tunisia",
            image: "https://tse4.mm.bing.net/th/id/OIP.Lg2ZERUdPS8foYqBsVe29gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            linkedin: "https://linkedin.com"
        },
        {
            name: "Pr. Fouzia Benabbou",
            role: "IEEE Contact Chair",
            affiliation: "Head IA & Systems Lab, FSBM-UH2C, Morocco",
            image: "/R.png",
            linkedin: "https://linkedin.com",
            email: "faouzia.benabbou@univh2c.ma"
        },
        {
            name: "Pr. Mohamed El Kamili",
            role: "IEEE Contact Chair",
            affiliation: "ESTC, University Hassan II of Casablanca, Morocco",
            image: "https://th.bing.com/th/id/OIP.pBBo8pr894_yqgjem_rwbQHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            linkedin: "https://linkedin.com",
            email: "m.elkamili@ieee.org"
        }
    ]
};

export function OrganizingCommittee() {
    const [activeCategory, setActiveCategory] = useState("leadership");

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                #committee, #committee * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <section id="committee" className="py-20 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32 w-full bg-white border-t border-slate-200/80">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mx-auto">
                            Organizing Committee
                        </h2>
                        <p className="text-sm text-slate-500 text-center mt-2 max-w-xl mx-auto">
                            Meet the distinguished chairs, academics, and advisors driving ICT 2027 in Casablanca.
                        </p>
                    </motion.div>

                    {/* Category Selector */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                                    activeCategory === cat.id
                                        ? "bg-[#00A3E0] text-white shadow-md shadow-[#00A3E0]/20 scale-105"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Member Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20"
                        >
                            {committeeData[activeCategory]?.map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center"
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="size-20 aspect-square rounded-full object-cover shadow-sm ring-2 ring-[#00A3E0]/20"
                                    />
                                    <h3 className="text-lg font-bold text-[#0B2545] text-center mt-3">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-semibold text-[#00A3E0] text-center leading-tight">
                                        {member.role}
                                    </p>
                                    {member.affiliation && (
                                        <p className="text-xs text-slate-400 text-center mt-1 font-medium">
                                            {member.affiliation}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-2 text-slate-400 mt-2">
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${member.name} LinkedIn`}
                                                className="hover:-translate-y-0.5 hover:text-[#00A3E0] transition-all p-1"
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
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}

export default OrganizingCommittee;