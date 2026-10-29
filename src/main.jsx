import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./styles.css";

const services = [
  "Exploratory Data Analysis",
  "Business Analytics",
  "Data Visualization",
  "Dashboard Development",
  "E-Commerce Analysis",
  "Logistics Analysis",
];

const clients = ["SHOPEE", "TOKOPEDIA", "LOGISTICS", "E-COMMERCE", "SMALL BUSINESS"];

function Visual({ type }) {
  if (type === "delivery") {
    return (
      <div className="visual visual-delivery">
        <div className="visual-window">
          <div className="window-top"><span /> <span /> <span /></div>
          <div className="window-title">DELIVERY PERFORMANCE</div>
          <div className="big-stat">91.8<span>%</span></div>
          <div className="bar-row">{[42, 68, 51, 86, 62, 92].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div>
        </div>
      </div>
    );
  }

  if (type === "shopee") {
    return (
      <div className="visual visual-shopee">
        <div className="orbit one" />
        <div className="orbit two" />
        <div className="orbit three" />
        <div className="orbit-center">SHOPEE<br /><small>DATA</small></div>
      </div>
    );
  }

  if (type === "tokopedia") {
    return (
      <div className="visual visual-tokopedia">
        <div className="line-grid" />
        <svg viewBox="0 0 600 300" preserveAspectRatio="none">
          <polyline points="0,240 70,210 120,220 180,160 240,180 300,125 360,150 420,80 490,110 550,45 600,65" />
        </svg>
        <span className="trend">+28.4%</span>
      </div>
    );
  }

  return (
    <div className="visual visual-dashboard">
      <div className="dash-card"><small>ORDERS</small><strong>12.8K</strong></div>
      <div className="dash-card"><small>RETURN</small><strong>4.2%</strong></div>
      <div className="dash-card"><small>SUCCESS</small><strong>91.8%</strong></div>
      <div className="dash-chart">{[30, 48, 42, 72, 58, 86, 67, 93].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div>
    </div>
  );
}

const experience = [
  {
    company: "Artha iValas Global Money Changer",
    period: "July 2026 — Present",
    role: "Staff Money Changer",
    description:
      "Supporting finance and office operations through petty cash management, vendor coordination, purchasing, and administrative support.",
    
    skills: [
      "Cash Handling",
      "Financial Administration",
      "Transaction Processing",
      "Data Entry",
      "Attention to Detail",
      "Customer Service",
    ],

  },

  {
    company: "Hope Channel Indonesia",
    period: "Additional Role",
    role: "Media Presenter & Production Support",
    description:
      "Supporting television and digital productions as an on-camera presenter, program host, and production support.",
    skills: [
      "Public Speaking",
      "Presentation",
      "Production"
    ]
  },

  {
    company: "1000 Missionary Movement",
    period: "Feb 2021 — Mar 2023",
    role: "Editorial Coordinator | English Interpreter | Program Coordinator",
    description:
      "Coordinating programs and communication across participants, regional offices, and internal teams while supporting editorial and interpretation work.",
    skills: [
      "Communication",
      "Program Coordination",
      "Presentation",
      "Problem Solving"
    ]
  },

  {
    company: "1000 Missionary Movement",
    period: "Jan 2020 — Jan 2021",
    role: "Community Service Missionary",
    description:
      "Supporting community programs through education, communication, outreach, and coordination.",
    skills: [
      "Communication",
      "Adaptability",
      "Problem Solving",
      "Community"
    ]
  },

  {
    company: "SMA Kristen Bitung · SMA Kristen Aertembaga · SMK Pelayaran Bitung",
    period: "2019 — 2020",
    role: "Guru Matematika",
    description:
      "Teaching mathematics at SMA Kristen Bitung, SMA Kristen Aertembaga, and SMK Pelayaran Bitung.",
    skills: [
      "Mathematics",
      "Teaching",
      "Education"
    ]
  }
];

const education = [
  {
    school: "Universitas Negeri Manado (UNIMA)",
    period: "2014 — 2019",
    degree: "S1 Pendidikan Matematika",
    detail: ""
  },  

  {
    school: "SMA Kristen Bitung",
    period: "2011 - 2014",
    degree: "Senior High School",
    detail: ""
  },

  {
    school: "SMP Kristen Bitung",
    period: "2008 - 2011",
    degree: "Junior High School",
    detail: ""
  },
  {
    school: "SD Inpres 10/73 Bitung",
    period: "2002 - 2008",
    degree: "Elementary School",
    detail: ""
  },

  
];

const skills = [
  "Data Analysis",
  "Data Visualization",
  "Excel",
  "SQL",
  "Dashboard Development",
  "Public Speaking",
  "Presentation",
  "Communication",
  "Problem Solving"
];




/* =====================================
   TRANSLATIONS (EN / ID)
===================================== */

const T = {
  en: {
    nav: { about: "ABOUT", resume: "RESUME", contact: "CONTACT" },
    hero: {
      l1: "IVANA",
      l2: "GEZALI.",
      desc: "Adaptable across education, administration, and business support.",
      cta: "VIEW MY WORK",
      based: "BASED IN",
      basedStrong: "INDONESIA",
      scroll: "SCROLL TO EXPLORE ↓"
    },
    about: {
      kicker: "HELLO THERE",
      n1: "I’m Ivana",
      n2: "Chrisoliem Gezali.",
      lead: "I enjoy supporting people and business operations, keeping tasks organized, and helping work run smoothly.",
      body: "I bring a versatile background in mathematics education, sales administration, and personal assistance. My experience has helped me develop strong organizational skills, attention to detail, communication, and the ability to adapt to different responsibilities.",
      loc: "Based in Tangerang, Indonesia."
    },
    resume: {
      title: "Resume",
      experience: "EXPERIENCE",
      education: "EDUCATION",
      skills: "SKILLS",
      exp: [
        {
          company: "Artha iValas Global Money Changer",
          link: "Artha iValas Global Money Changer ↗",
          period: "July 2026 — Present",
          role: "Staff Money Changer",
          desc: "Assisting customers with foreign currency exchange transactions, handling cash, verifying transaction amounts, and maintaining accurate transaction records.",
          tags: ["Foreign Currency", "Cash Handling", "Cash Counting & Verification", "Transaction Processing", "Customer Service", "Attention to Detail"]
        },
        {
          company: "Personal Assistant",
          period: "2022 — 2026",
          role: "Private Individual | Personal Assistant & Administrative Support",
          desc: "Provided personal and administrative support, assisted with daily coordination, managed tasks, and helped ensure activities and responsibilities were organized efficiently.",
          tags: ["Administrative Support", "Communication", "Problem Solving", "Management", "Confidentiality"]
        },
        {
          company: "PT Sari Usaha Mandiri",
          period: "2020 — 2022",
          role: "Sales Administrator",
          desc: "Experienced in sales administration and personal assistance, with a focus on organization, communication, and daily operational support.",
          tags: ["Administration", "Communication", "Adaptability", "Problem Solving"]
        },
        {
          company: "SMA Kristen Bitung · SMA Kristen Aertembaga · SMK Pelayaran Bitung",
          schools: ["SMA Kristen Bitung", "SMA Kristen Aertembaga", "SMK Pelayaran Bitung"],
          period: "2019 — 2020",
          role: "Mathematics Teacher",
          desc: "Teaching mathematics at SMA Kristen Bitung, SMA Kristen Aertembaga, and SMK Pelayaran Bitung.",
          tags: ["Mathematics", "Teaching", "Education"]
        }
      ],
      edu: [
        {
          school: "Universitas Negeri Manado (UNIMA)",
          link: "Universitas Negeri Manado ↗",
          period: "2014 — 2019",
          degree: "S1 Pendidikan Matematika"
        },
        {
          school: "SMA Kristen Bitung",
          label: "Senior High School",
          period: "2011 — 2014",
          degree: "SMA Kristen Bitung"
        },
        {
          school: "SMP Kristen Bitung",
          label: "Junior High School",
          period: "2008 — 2011",
          degree: "SMP Kristen Bitung"
        },
        {
          school: "SD Inpres 10/73 Bitung",
          label: "Elementary School",
          period: "2002 — 2008",
          degree: "SD Inpres 10/73 Bitung"
        }
      ],
      skillList: ["Administration", "Personal Assistance", "Communication", "Public Speaking", "Microsoft Office", "Education", "Sales Support", "Presentation", "Leadership", "Problem Solving"]
    },
    contact: {
      intro1: "Looking for",
      intro2: "someone reliable?",
      title: "Let’s Connect",
      sub: "CHAT WITH ME",
      email: "EMAIL",
      based: "BASED IN INDONESIA",
      open: "OPEN TO OPPORTUNITIES IN EDUCATION, ADMINISTRATION & BUSINESS SUPPORT",
      cta: "LET’S CONNECT"
    },
    footer: "2026 © IVANA CHRISOLIEM GEZALI"
  },

  id: {
    nav: { about: "TENTANG SAYA", resume: "RESUME", contact: "KONTAK" },
    hero: {
      l1: "IVANA",
      l2: "GEZALI.",
      desc: "Adaptif di bidang pendidikan, administrasi, dan dukungan bisnis.",
      cta: "LIHAT PENGALAMAN SAYA",
      based: "BERDOMISILI DI",
      basedStrong: "INDONESIA",
      scroll: "GULIR UNTUK MENJELAJAH ↓"
    },
    about: {
      kicker: "HALO",
      n1: "Saya Ivana",
      n2: "Chrisoliem Gezali.",
      lead: "Saya senang mendukung orang dan operasional bisnis, menjaga tugas tetap terorganisir, dan membantu pekerjaan berjalan lancar.",
      body: "Saya memiliki latar belakang yang luas di bidang pendidikan matematika, administrasi penjualan, dan asisten pribadi. Pengalaman tersebut mengasah keterampilan organisasi, ketelitian, komunikasi, serta kemampuan beradaptasi dengan berbagai tanggung jawab.",
      loc: "Berdomisili di Tangerang, Indonesia."
    },
    resume: {
      title: "Resume",
      experience: "PENGALAMAN KERJA",
      education: "PENDIDIKAN",
      skills: "KETERAMPILAN",
      exp: [
        {
          company: "Artha iValas Global Money Changer",
          link: "Artha iValas Global Money Changer ↗",
          period: "Juli 2026 — Sekarang",
          role: "Staff Money Changer",
          desc: "Melayani pelanggan dalam transaksi penukaran valuta asing, menangani uang tunai, memverifikasi jumlah transaksi, serta memastikan pencatatan transaksi dilakukan dengan akurat.",
          tags: ["Penukaran Valuta Asing", "Penanganan Uang Tunai", "Penghitungan dan Verifikasi Uang", "Pemrosesan Transaksi", "Pencatatan Transaksi", "Pelayanan Pelanggan", "Ketelitian"],
        },
        {
          company: "Asisten Pribadi",
          period: "2022 — 2026",
          role: "Perorangan | Asisten Pribadi & Dukungan Administrasi",
          desc: "Memberikan dukungan pribadi dan administrasi, membantu koordinasi harian, mengelola tugas, serta memastikan aktivitas dan tanggung jawab terorganisir dengan baik.",
          tags: ["Dukungan Administrasi", "Komunikasi", "Pemecahan Masalah", "Manajemen", "Kerahasiaan"]
        },
        {
          company: "PT Sari Usaha Mandiri",
          period: "2020 — 2022",
          role: "Admin Penjualan",
          desc: "Berpengalaman dalam administrasi penjualan dan asistensi pribadi, dengan fokus pada keteraturan, komunikasi, dan dukungan operasional harian.",
          tags: ["Administrasi", "Komunikasi", "Adaptabilitas", "Pemecahan Masalah"]
        },
        {
          company: "SMA Kristen Bitung · SMA Kristen Aertembaga · SMK Pelayaran Bitung",
          schools: ["SMA Kristen Bitung", "SMA Kristen Aertembaga", "SMK Pelayaran Bitung"],
          period: "2019 — 2020",
          role: "Guru Matematika",
          desc: "Mengajar matematika di SMA Kristen Bitung, SMA Kristen Aertembaga, dan SMK Pelayaran Bitung.",
          tags: ["Matematika", "Pengajaran", "Pendidikan"]
        }
      ],
      edu: [
        {
          school: "Universitas Negeri Manado (UNIMA)",
          link: "Universitas Negeri Manado ↗",
          period: "2014 — 2019",
          degree: "S1 Pendidikan Matematika"
        },
        {
          school: "SMA Kristen Bitung",
          label: "Sekolah Menengah Atas",
          period: "2011 — 2014",
          degree: "SMA Kristen Bitung"
        },
        {
          school: "SMP Kristen Bitung",
          label: "Sekolah Menengah Pertama",
          period: "2008 — 2011",
          degree: "SMP Kristen Bitung"
        },
        {
          school: "SD Inpres 10/73 Bitung",
          label: "Sekolah Dasar",
          period: "2002 — 2008",
          degree: "SD Inpres 10/73 Bitung"
        }
      ],
      skillList: ["Administrasi", "Asisten Pribadi", "Komunikasi", "Public Speaking", "Microsoft Office", "Pendidikan", "Dukungan Penjualan", "Presentasi", "Kepemimpinan", "Pemecahan Masalah"]
    },
    contact: {
      intro1: "Butuh orang yang",
      intro2: "dapat diandalkan?",
      title: "Mari Terhubung",
      sub: "HUBUNGI SAYA",
      email: "EMAIL",
      based: "BERDOMISILI DI INDONESIA",
      open: "TERBUKA UNTUK KESEMPATAN DI BIDANG PENDIDIKAN, ADMINISTRASI & DUKUNGAN BISNIS",
      cta: "MARI TERHUBUNG"
    },
    footer: "2026 © IVANA CHRISOLIEM GEZALI"
  }
};

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [cursorMode, setCursorMode] = React.useState("normal");
  const [lang, setLang] = React.useState("en");
  const t = T[lang];

  /* =====================================
     CURSOR POSITION
  ===================================== */

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothCursorX = useSpring(cursorX, {
    stiffness: 1800,
    damping: 45,
    mass: 0.12
  });

  const smoothCursorY = useSpring(cursorY, {
    stiffness: 1800,
    damping: 45,
    mass: 0.12
  });

  /* =====================================
     MOUSE MOVEMENT
  ===================================== */

  const pointerMove = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };


  /* =====================================
     CURSOR MODES
  ===================================== */

  const activateCursor = (mode) => {
    setCursorMode(mode);
  };

  const resetCursor = () => {
    setCursorMode("normal");
  };

  /* =====================================
     NAVIGATION
  ===================================== */

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });

    setMenuOpen(false);
  };
  return (
    <div className="site" onPointerMove={pointerMove}>
      <motion.div
        className={`custom-cursor ${cursorMode}`}
        style={{
          x: smoothCursorX,
          y: smoothCursorY
        }}
      >
        {cursorMode === "object" && (
          <>
            <span>VIEW</span>
            <ArrowUpRight size={16} />
          </>
        )}
      </motion.div>


      <header className="nav">
        <button className="logo" onClick={() => go("home")}>IVANA CHRISOLIEM GEZALI</button>

        <nav className={menuOpen ? "open" : ""}>
          <button
            onMouseEnter={() => activateCursor("object")}
            onMouseLeave={resetCursor}
            onClick={() => go("about")}
          >
            {t.nav.about}
          </button>
          <button
            onMouseEnter={() => activateCursor("object")}
            onMouseLeave={resetCursor}
            onClick={() => go("currently")}
          >
            {t.nav.resume}
          </button>
          <button
            onMouseEnter={() => activateCursor("object")}
            onMouseLeave={resetCursor}
            onClick={() => go("contact")}
          >
            {t.nav.contact}
          </button>
        </nav>

        <div className="nav-right">
          <div className="lang-switch" aria-label="Language switch">
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="lang-sep">|</span>
            <button
              className={lang === "id" ? "active" : ""}
              onClick={() => setLang("id")}
            >
              ID
            </button>
          </div>

          <button className="menu" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="billie-hero">
          
          <div className="hero-layout">
            <div className="hero-name">
              <motion.h1
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {t.hero.l1}<br />
                <em>{t.hero.l2}</em>
              </motion.h1>
            </div>

            <div className="hero-description">

              <div className="hero-photo">
                <img
                  src="./ivana.jpeg"
                  alt="Ivana Chrisoliem Gezali"
                />
              </div>

              <p>
                {t.hero.desc}
              </p>

              <button
                className="hero-primary"
                onClick={() => go("about")}
              >
                {t.hero.cta}
                <ArrowUpRight size={16} />
              </button>

            </div>
        
           
          </div>
          <span>{t.hero.based} <strong>{t.hero.basedStrong}</strong></span>
          <button className="hero-scroll" onClick={() => go("about")}>{t.hero.scroll}</button>
        </section>

        <section id="about" className="about-billie">

          <div className="about-top">
            <span>{t.about.kicker}</span>
          </div>

          <div className="about-card">

            <div className="about-card-title">
              <h2>
                {t.about.n1}<br />
                <em>{t.about.n2}</em>
              </h2>
            </div>

            <div className="about-card-content">

              <p className="about-lead">
                {t.about.lead}
              </p>

              <p>
                {t.about.body}
              </p>

              <p>
                {t.about.loc}
              </p>

            </div>

            <div className="about-card-photo">
              <img
                src="./ivana.jpeg"
                alt="Ivana Chrisoliem Gezali"
              />
            </div>

          </div>

        </section>


        
        <section id="currently" className="current">

        <div className="current-header">

          <h2>{t.resume.title}</h2>
        </div>

        {/* EXPERIENCE */}
        <div className="resume-section">

          <div className="resume-section-title">
            {t.resume.experience}
          </div>

          <div className="resume-timeline">

            {t.resume.exp.map((e, i) => (
              <motion.article
                key={e.company + i}
                className="resume-item"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="resume-left">
                  {e.schools ? (
                    <div className="resume-schools">
                      {e.schools.map(s => <strong key={s}>{s}</strong>)}
                    </div>
                  ) : (
                    <strong>{e.company}</strong>
                  )}

              

                  <span>{e.period}</span>
                </div>

                <div className="resume-dot"></div>

                <div className="resume-right">
                  <h3>{e.role}</h3>

                  {e.desc && <p>{e.desc}</p>}

                  <div className="resume-tags">
                    {e.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}

          </div>
        </div>


        {/* EDUCATION */}
        <div className="resume-section">

          <div className="resume-section-title">
            {t.resume.education}
          </div>

          <div className="resume-timeline">

            {t.resume.edu.map((ed, i) => (
              <motion.article
                key={ed.school + i}
                className="resume-item"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="resume-left">
                  <strong>{ed.school}</strong>

                  {ed.link && (
                    <a
                      href="https://www.unima.ac.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-company-link"
                    >
                      {ed.link}
                    </a>
                  )}

                  {ed.label && <span>{ed.label}</span>}
                  <span>{ed.period}</span>
                </div>

                <div className="resume-dot"></div>

                <div className="resume-right">
                  <h3>{ed.degree}</h3>
                </div>
              </motion.article>
            ))}

          </div>
        </div>


        {/* SKILLS */}
        <div className="resume-section">

          <div className="resume-section-title">
            {t.resume.skills}
          </div>

          <div className="resume-tags resume-skills">
            {t.resume.skillList.map(s => <span key={s}>{s}</span>)}
          </div>

        </div>

      </section>

        <section id="contact" className="contact-billie">
          <div className="contact-intro">
            {t.contact.intro1}<br />
            {t.contact.intro2}
          </div>
          <motion.a
            href="https://wa.me/628211898787"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => activateCursor("object")}
            onMouseLeave={resetCursor}
            className="contact-title"
            animate={{
              color: cursorMode === "object" ? "#9479B5" : "#FBF9FD",
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <span className="contact-title-main">{t.contact.title}</span>

            <span className="contact-title-sub">
              {t.contact.sub} <ArrowUpRight size={18} />
            </span>
          </motion.a>
          <div className="contact-bottom">
            <div>
              <a href="mailto:chrisoliemi@gmail.com">{t.contact.email}</a>
            </div>
            <div>
              <span>{t.contact.based}</span>
              <span>{t.contact.open}</span>
            </div>
          </div>
          <div className="contact-cta">

            <a href="mailto:chrisoliemi@gmail.com">{t.contact.cta} <ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="footer-billie">
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);



