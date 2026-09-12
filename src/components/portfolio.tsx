import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Beaker,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Download,
  FlaskConical,
  Gauge,
  GraduationCap,
  HeartPulse,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Pause,
  Play,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wind,
  Wrench,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import videoAsset from "@/assets/breatheassist-concept.mp4.asset.json";
import posterAsset from "@/assets/breatheassist-poster.jpg.asset.json";
import profileAsset from "@/assets/vagesh-raval-profile.pdf.asset.json";

const navItems = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["BreatheAssist", "breatheassist"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

const departments = [
  {
    name: "ICU",
    label: "Critical care systems",
    icon: HeartPulse,
    copy: "Lifecycle support for critical equipment where reliability, calibration and rapid troubleshooting directly support care teams.",
    tags: ["Critical equipment", "IEC 60601", "Risk management"],
  },
  {
    name: "Laboratories",
    label: "Analytical equipment",
    icon: FlaskConical,
    copy: "Maintenance and calibration within laboratory environments, backed by audit-ready documentation and quality controls.",
    tags: ["Calibration", "NABL", "ISO/IEC 17025"],
  },
  {
    name: "Radiology",
    label: "Diagnostic systems",
    icon: ScanLine,
    copy: "Technical support for diagnostic equipment with a focus on safety, performance, uptime and coordinated service response.",
    tags: ["Diagnostics", "IEC 60601", "Lifecycle support"],
  },
  {
    name: "Operation Theatre",
    label: "Perioperative equipment",
    icon: Stethoscope,
    copy: "Support across critical and non-critical theatre equipment, including anesthesia workstations and safety-focused maintenance.",
    tags: ["Anesthesia", "Patient safety", "ISO 14971"],
  },
  {
    name: "CSSD",
    label: "Sterilization systems",
    icon: ShieldCheck,
    copy: "Equipment support in sterile-services workflows with awareness of ethylene oxide and moist-heat sterilization standards.",
    tags: ["ISO 11135", "ISO 17665", "Compliance"],
  },
] as const;

const workflow = [
  ["01", "Understand", "Clarify the clinical need, system context and expected performance."],
  ["02", "Inspect", "Observe the equipment, interfaces, signals and physical condition."],
  ["03", "Diagnose", "Trace symptoms to root causes through structured technical analysis."],
  ["04", "Repair / Improve", "Restore function or refine the design with safety in focus."],
  ["05", "Test & Validate", "Verify performance, calibration and intended behavior."],
  ["06", "Document", "Create clear records for quality, compliance and knowledge transfer."],
] as const;

const skills = [
  ["Medical Equipment", "Lifecycle management", "Maintenance", "Service"],
  ["Respiratory & Critical Care", "Ventilators", "Anesthesia workstations", "Pneumatics"],
  ["Testing & Validation", "Prototype testing", "Calibration", "Performance verification"],
  ["Troubleshooting & RCA", "Root cause analysis", "FMEA", "Fault isolation"],
  ["Medical Device R&D", "Prototyping", "Product development", "Risk analysis"],
  ["Instrumentation", "Sensor systems", "Analytical instruments", "Measurement technology"],
  ["Standards & Compliance", "ISO 13485", "IEC 60601", "ISO 14971"],
  ["Collaboration", "R&D", "Quality assurance", "Clinical teams"],
] as const;

function SectionIntro({ index, kicker, title, text }: { index: string; kicker: string; title: string; text?: string }) {
  return (
    <div className="section-intro">
      <div className="section-kicker"><span>{index}</span>{kicker}</div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Vagesh Raval, home">
        <span>VR</span><strong>Vagesh Raval</strong>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <Button className="nav-contact" asChild><a href="#contact">Let&apos;s connect <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ChevronRight /></a>)}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play(); else video.pause();
    setPlaying(!video.paused);
  };
  return (
    <section className="hero" id="top">
      <video ref={videoRef} className="hero-video" src={videoAsset.url} poster={posterAsset.url} autoPlay muted loop playsInline aria-label="BreatheAssist ventilator concept visualization" />
      <div className="hero-shade" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <div className="eyebrow"><span className="status-dot" /> Biomedical engineer · Nuremberg, Germany</div>
        <h1>Engineering Across Healthcare.<br /><em>Focused on Better Breathing.</em></h1>
        <p>Respiratory care, critical care systems and medical equipment R&amp;D — shaped by hands-on hospital engineering and advanced sensor technology.</p>
        <div className="hero-actions">
          <Button size="lg" asChild><a href="#breatheassist">Explore my work <ArrowDown /></a></Button>
          <Button size="lg" variant="outline" asChild><a href="#contact">Let&apos;s connect <ArrowUpRight /></a></Button>
        </div>
      </div>
      <div className="hero-meta">
        <span>Current focus</span><strong>BreatheAssist</strong><small>Next-generation ICU ventilator concept</small>
      </div>
      <Button className="video-toggle" variant="outline" size="icon" onClick={toggleVideo} aria-label={playing ? "Pause background video" : "Play background video"}>
        {playing ? <Pause /> : <Play />}
      </Button>
    </section>
  );
}

function About() {
  return (
    <section className="section light-section" id="about">
      <div className="container about-grid">
        <SectionIntro index="01" kicker="Perspective" title="More Than One Device. A Broader Healthcare Perspective" />
        <div className="about-copy">
          <p className="lead">I work at the intersection of clinical need, engineering rigor and equipment reliability.</p>
          <p>With 4.4 years in the medical device industry, my experience spans therapeutic and diagnostic equipment, hospital lifecycle management, ventilator R&amp;D, prototype testing and sensor instrumentation.</p>
          <div className="about-facts">
            <div><strong>4.4</strong><span>Years of medical device experience</span></div>
            <div><strong>05</strong><span>Hospital departments supported</span></div>
            <div><strong>R&amp;D</strong><span>Current focus at FAU Erlangen-Nürnberg</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  const [active, setActive] = useState(0);
  const current = departments[active] ?? departments[0];
  const Icon = current.icon;
  return (
    <section className="section dark-section" id="expertise">
      <div className="container">
        <SectionIntro index="02" kicker="Healthcare equipment experience" title="Five Departments. One Standard of Care." text="A systems-level view built across critical and non-critical equipment at Apollo Hospitals Ahmedabad." />
        <div className="department-shell">
          <div className="department-tabs" role="tablist" aria-label="Hospital departments">
            {departments.map((item, index) => (
              <Button key={item.name} variant="ghost" role="tab" aria-selected={active === index} className={active === index ? "active" : ""} onClick={() => setActive(index)}>
                <span>0{index + 1}</span>{item.name}
              </Button>
            ))}
          </div>
          <div className="department-detail" role="tabpanel">
            <div className="department-icon"><Icon /></div>
            <div><span className="detail-label">{current.label}</span><h3>{current.name}</h3><p>{current.copy}</p></div>
            <div className="tag-stack">{current.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagnosticTherapy() {
  const [mode, setMode] = useState<"therapy" | "diagnosis">("therapy");
  const therapy = mode === "therapy";
  return (
    <section className="section split-section">
      <div className="container">
        <SectionIntro index="03" kicker="Clinical spectrum" title="From Diagnosis to Therapy" text="Engineering decisions change with clinical purpose. The discipline behind them does not." />
        <div className="mode-switch" aria-label="Choose clinical focus">
          <Button variant={therapy ? "default" : "ghost"} onClick={() => setMode("therapy")}><Wind /> Therapy</Button>
          <Button variant={!therapy ? "default" : "ghost"} onClick={() => setMode("diagnosis")}><Microscope /> Diagnosis</Button>
        </div>
        <div className="clinical-display">
          <div className="clinical-visual">
            {therapy ? <Wind /> : <Microscope />}
            <div className="signal-lines" aria-hidden="true"><i /><i /><i /><i /></div>
          </div>
          <div className="clinical-copy">
            <span>{therapy ? "Critical care · Respiratory therapy" : "Laboratory · Radiology diagnostics"}</span>
            <h3>{therapy ? "Supporting the systems that sustain life." : "Protecting the integrity of every measurement."}</h3>
            <p>{therapy ? "Ventilators, anesthesia workstations and pneumatic systems demand an exact understanding of performance, safety and clinical use." : "Diagnostic and analytical systems depend on calibration, signal integrity, maintenance and disciplined quality processes."}</p>
            <ul>{(therapy ? ["Ventilator testing", "Pneumatic systems", "Critical equipment reliability"] : ["Calibration", "Analytical instrumentation", "Diagnostic equipment support"]).map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Respiratory() {
  return (
    <section className="section respiratory-section">
      <div className="container respiratory-grid">
        <div>
          <SectionIntro index="04" kicker="Specialization" title="Where Engineering Meets Every Breath" />
          <p className="respiratory-lead">A focused practice in respiratory and critical care, grounded in hands-on service, pneumatic systems and ventilator development.</p>
        </div>
        <div className="breath-orbit" aria-label="Respiratory engineering capabilities">
          <div className="orbit-center"><Wind /><span>Breath</span></div>
          <span className="orbit-item orbit-one">Pneumatics</span><span className="orbit-item orbit-two">Ventilation modes</span><span className="orbit-item orbit-three">Testing</span><span className="orbit-item orbit-four">ISO 80601-2-12</span>
        </div>
      </div>
    </section>
  );
}

function BreatheAssist() {
  const stages = ["Clinical need", "System concept", "Prototype development", "Testing & refinement"];
  return (
    <section className="section project-section" id="breatheassist">
      <div className="container">
        <div className="project-heading"><SectionIntro index="05" kicker="Featured project" title="BreatheAssist" /><p>Next-generation ICU ventilator concept at FAU Erlangen-Nürnberg.</p></div>
        <div className="project-film">
          <video src={videoAsset.url} poster={posterAsset.url} controls muted loop playsInline aria-label="BreatheAssist concept film" />
          <div className="film-caption"><span>Concept visualization</span><span>FAU · MVC · Erlangen</span></div>
        </div>
        <div className="project-bottom">
          <div><span className="detail-label">Current research · Sept 2025—Present</span><h3>Turning respiratory insight into a new ICU ventilator concept.</h3><p>As a Student Research Assistant at FAU, I contribute to BreatheAssist through product development, testing and prototype-focused R&amp;D.</p></div>
          <ol>{stages.map((stage, index) => <li key={stage}><span>0{index + 1}</span>{stage}</li>)}</ol>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const [active, setActive] = useState(0);
  return (
    <section className="section workflow-section">
      <div className="container">
        <SectionIntro index="06" kicker="Engineering workflow" title="From Observation to Evidence" text="A repeatable process for equipment service, investigation and product improvement." />
        <div className="workflow-list">
          {workflow.map(([number, title, text], index) => (
            <Button key={number} variant="ghost" className={active === index ? "workflow-step active" : "workflow-step"} onClick={() => setActive(index)}>
              <span>{number}</span><strong>{title}</strong><p>{text}</p><ArrowUpRight />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const roles = [
    { period: "SEP 2025 — PRESENT", org: "FAU Erlangen-Nürnberg", role: "Student Research Assistant (HiWi)", place: "MVC · Erlangen, Germany", text: "BreatheAssist next-generation ICU ventilator concept, with a focus on medical device R&D, prototype development and testing.", tags: ["BreatheAssist", "Ventilator R&D", "Prototype testing"] },
    { period: "APR 2021 — SEP 2023", org: "Apollo Hospitals Ahmedabad", role: "Biomedical Engineer", place: "Ahmedabad, India", text: "Managed critical and non-critical equipment across ICU, OT, Radiology, Lab and CSSD. Handled maintenance, calibration, troubleshooting and JCI, NABL and FDA audits; contributed to the 2022 JCI audit.", tags: ["ISO 13485:2016", "IEC 60601", "ISO 14971", "ISO 11135", "ISO 17665"] },
    { period: "MAY 2019 — MAR 2021", org: "RHP Medical Services", role: "Production & Service Biomedical Engineer", place: "Ahmedabad, India", text: "Serviced ICU and respiratory devices including ventilators and anesthesia workstations. Contributed to ventilator R&D, pneumatic systems and testing during COVID-19.", tags: ["Hamilton", "Dräger", "Maquet", "Medtronic", "IEC 62304", "IEC 62366"] },
  ];
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionIntro index="07" kicker="Professional experience" title="Built in the Field. Advancing Through Research." />
        <div className="timeline">{roles.map((item, index) => <article key={item.org} className="role"><div className="role-index">0{index + 1}</div><div className="role-period">{item.period}</div><div className="role-main"><span>{item.place}</span><h3>{item.org}</h3><h4>{item.role}</h4><p>{item.text}</p><div className="role-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </div>
    </section>
  );
}

function Skills() {
  const [active, setActive] = useState<number | null>(0);
  const icons = [Wrench, Wind, Gauge, BrainCircuit, CircuitBoard, Activity, ShieldCheck, Sparkles];
  return (
    <section className="section skills-section">
      <div className="container">
        <SectionIntro index="08" kicker="Capabilities" title="Technical Range, Clinical Relevance" />
        <div className="skills-grid">{skills.map(([title, ...items], index) => { const Icon = icons[index] ?? Wrench; return <Button key={title} variant="ghost" className={active === index ? "skill-card active" : "skill-card"} onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}><div><Icon /><span>0{index + 1}</span></div><h3>{title}</h3><div className="skill-details">{items.map((item) => <span key={item}>{item}</span>)}</div><ChevronRight /></Button>; })}</div>
      </div>
    </section>
  );
}

function EducationJourney() {
  return (
    <section className="section education-section">
      <div className="container">
        <SectionIntro index="09" kicker="Education & journey" title="Different Equipment. Same Purpose." text="From hospital engineering to sensor technology and medical device innovation — each step strengthens the same commitment to safer, more effective healthcare." />
        <div className="journey-line">
          <article><span>2016—2019</span><GraduationCap /><h3>Ganpat University</h3><p>B.Tech. Biomedical Engineering</p></article>
          <article><span>2023—2026</span><BookOpen /><h3>Coburg University</h3><p>M.Eng. Analytical Instruments, Measurement and Sensor Technology</p></article>
          <article><span>MAR—JUL 2024</span><Beaker /><h3>Università degli Studi di Siena</h3><p>M.Eng. exchange study period</p></article>
          <article><span>2025—PRESENT</span><CircuitBoard /><h3>FAU Erlangen-Nürnberg</h3><p>BreatheAssist research</p></article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="container contact-grid">
        <div><span className="section-kicker"><span>10</span>Contact</span><h2>Let&apos;s engineer what healthcare needs next.</h2><p>Open to conversations around biomedical engineering, respiratory care, critical care systems and medical device R&amp;D.</p></div>
        <div className="contact-links">
          <a href="mailto:vagishraval1@gmail.com"><Mail /><span>Primary email<small>vagishraval1@gmail.com</small></span><ArrowUpRight /></a>
          <a href="mailto:vageshravalofficial@gmail.com"><Mail /><span>Alternate email<small>vageshravalofficial@gmail.com</small></span><ArrowUpRight /></a>
          <a href="https://www.linkedin.com/in/vagesh-raval-7a6035162" target="_blank" rel="noreferrer"><Linkedin /><span>LinkedIn<small>vagesh-raval-7a6035162</small></span><ArrowUpRight /></a>
          <div className="cv-action">
            <Dialog>
              <DialogTrigger asChild><Button variant="outline"><Download /> View &amp; download CV</Button></DialogTrigger>
              <DialogContent className="cv-dialog">
                <DialogHeader><DialogTitle>Vagesh Raval · Profile</DialogTitle><DialogDescription>Preview the verified profile or download a copy.</DialogDescription></DialogHeader>
                <iframe title="Vagesh Raval profile preview" src={profileAsset.url} />
                <Button asChild><a href={profileAsset.url} download="Vagesh-Raval-Profile.pdf"><Download /> Download PDF</a></Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="container footer-bottom"><span>Vagesh Raval · Biomedical Engineer</span><span><MapPin /> Nuremberg, Germany</span><a href="#top">Back to top <ArrowUpRight /></a></div>
    </footer>
  );
}

export function Portfolio() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".section-intro, .role, .skill-card, .journey-line article");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("revealed")), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <><Header /><main><Hero /><About /><Equipment /><DiagnosticTherapy /><Respiratory /><BreatheAssist /><Workflow /><Experience /><Skills /><EducationJourney /></main><Contact /></>;
}