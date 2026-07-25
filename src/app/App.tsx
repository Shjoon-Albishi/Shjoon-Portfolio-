import { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Award,
  ChevronDown,
  Shield,
  Cpu,
  Menu,
  X,
  Zap,
  Lock,
  Rocket,
  Trophy,
  Users,
  Star,
  Crown,
  Flag,
  Network,
  GraduationCap,
  Briefcase,
  Code2,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import alrikabLogo from "@/imports/image.png";
import irthLogo from "@/imports/Screenshot_2026-07-21_202859.png";

// --- Circuit background ---
function CircuitPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1.5" fill="#1a3a8f" />
          <circle cx="0" cy="0" r="1" fill="#1a3a8f" />
          <circle cx="60" cy="0" r="1" fill="#1a3a8f" />
          <circle cx="0" cy="60" r="1" fill="#1a3a8f" />
          <circle cx="60" cy="60" r="1" fill="#1a3a8f" />
          <line x1="0" y1="30" x2="20" y2="30" stroke="#1a3a8f" strokeWidth="0.5" />
          <line x1="40" y1="30" x2="60" y2="30" stroke="#1a3a8f" strokeWidth="0.5" />
          <line x1="30" y1="0" x2="30" y2="20" stroke="#1a3a8f" strokeWidth="0.5" />
          <line x1="30" y1="40" x2="30" y2="60" stroke="#1a3a8f" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

function GradientOrb({ className }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.08) 50%, transparent 70%)" }}
    />
  );
}

// --- Nav ---
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Projects", "Certifications", "Beyond Tech", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(248,250,255,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,58,143,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Rocket-only logo mark */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-200 hover:scale-110"
            style={{ background: "linear-gradient(135deg, #1a3a8f, #06b6d4)", boxShadow: "0 4px 14px rgba(59,130,246,0.35)" }}
          >
            <Rocket className="w-4 h-4 text-white" style={{ transform: "rotate(45deg)" }} />
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="px-4 py-2 text-sm font-medium rounded-lg text-[#4a5a8a] hover:text-[#1a3a8f] hover:bg-[#eef2ff] transition-all duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #1a3a8f, #3b82f6)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Hire Me
          </button>
        </div>

        <button className="md:hidden p-2 rounded-lg text-[#1a3a8f]" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#eef2ff] px-6 py-4 space-y-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left px-4 py-3 text-sm font-medium rounded-lg text-[#4a5a8a] hover:text-[#1a3a8f] hover:bg-[#eef2ff] transition-all"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// --- Skill pill ---
function SkillPill({ label, color = "#1a3a8f" }: { label: string; color?: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105"
      style={{
        background: `${color}12`,
        color,
        border: `1px solid ${color}28`,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {label}
    </span>
  );
}

// --- Hero / About ---
function Hero() {
  const skillGroups = [
    {
      label: "Technical",
      color: "#1a3a8f",
      skills: ["AI Agents", "React", "Supabase", "REST APIs", "Power BI"],
    },
    {
      label: "Cybersecurity",
      color: "#0891b2",
      skills: ["Cyber Threat Intelligence", "Threat Hunting", "IOC Analysis", "MITRE ATT&CK", "Incident Response"],
    },
    {
      label: "Professional",
      color: "#6366f1",
      skills: ["Leadership", "Communication", "Problem Solving", "Adaptability", "Teamwork"],
    },
  ];

  const expBullets = [
    "Analyzed Indicators of Compromise (IOCs) and mapped threat behaviors using MITRE ATT&CK",
    "Investigated security alerts and documented incidents following SOC procedures",
    "Prepared incident summaries and analytical reports",
  ];

  return (
    <section id="about" className="relative overflow-hidden pt-24 pb-0 bg-[#f8faff]">
      <CircuitPattern />
      <GradientOrb className="w-[500px] h-[500px] -top-32 -right-32 opacity-70" />
      <GradientOrb className="w-[350px] h-[350px] bottom-10 -left-16 opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-6">

        {/* ── Top hero strip ── */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-8">

          {/* Left: identity */}
          <div>
            <h1
              className="text-5xl md:text-6xl font-black leading-[1.05] mb-4 text-[#0a1628]"
              style={{ fontFamily: "'Onest', sans-serif", letterSpacing: "-0.04em" }}
            >
              Shjoon
              <br />
              <span style={{ background: "linear-gradient(135deg, #1a3a8f 0%, #3b82f6 50%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Albishi
              </span>
            </h1>

            <div
              className="text-xs font-semibold mb-6 tracking-widest uppercase leading-relaxed"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3b82f6" }}
            >
              IT Graduate · Cybersecurity · Threat Intelligence · AI
            </div>

            <p className="text-[#4a5a8a] text-base leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Information Technology graduate from King Abdulaziz University (Second Class Honors, GPA 4.70/5.00) with a strong interest in cybersecurity, threat intelligence, and digital transformation. Gained hands-on cybersecurity experience through an internship at The Saudi Investment Bank (SAIB), working with SOC workflows, IOC analysis, and cyber risk practices. Demonstrated leadership through IEEE initiatives and national programs, with a proven ability to collaborate, solve problems, and contribute to impactful projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3.5 font-semibold rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #1a3a8f, #3b82f6)", fontFamily: "'Plus Jakarta Sans', sans-serif", boxShadow: "0 8px 30px rgba(59,130,246,0.3)" }}
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3.5 font-semibold rounded-xl transition-all duration-200 hover:bg-[#eef2ff] active:scale-[0.98]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#1a3a8f", border: "1.5px solid rgba(26,58,143,0.25)" }}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: profile card */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl opacity-40 blur-2xl" style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }} />
              <div className="relative rounded-3xl overflow-hidden" style={{ border: "2px solid rgba(59,130,246,0.18)" }}>
                <div
                  className="w-full flex flex-col items-center justify-center py-12 px-8 gap-5"
                  style={{ background: "linear-gradient(145deg, #0a1628 0%, #1a3a8f 55%, #0e7490 100%)" }}
                >
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20">
                    <Cpu className="w-10 h-10 text-cyan-300" />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg" style={{ fontFamily: "'Onest', sans-serif" }}>Shjoon Albishi</div>
                    <div className="text-cyan-300 text-[11px] mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>IT Graduate · Cybersecurity · AI</div>
                  </div>
                  {/* Stats row — evenly spaced, no crowding */}
                  <div className="flex w-full justify-center gap-3">
                    {[{ n: "4.70", sub: "GPA / 5.00" }, { n: "5+", sub: "Projects" }, { n: "3+", sub: "Certs" }].map((s, i) => (
                      <div
                        key={i}
                        className="flex-1 text-center py-3 px-2 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                      >
                        <div className="text-lg font-black text-white leading-none" style={{ fontFamily: "'Onest', sans-serif" }}>{s.n}</div>
                        <div className="text-[10px] text-cyan-200 mt-1 whitespace-nowrap" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="flex flex-col items-center gap-1.5 py-8 text-[#4a5a8a]">
        <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

// --- Custom SVG project logos ---
function IoTSecurityLogo() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M40 6L12 18V38C12 53.5 24.5 67.5 40 72C55.5 67.5 68 53.5 68 38V18L40 6Z" fill="url(#sg)" opacity="0.15" />
      <path d="M40 6L12 18V38C12 53.5 24.5 67.5 40 72C55.5 67.5 68 53.5 68 38V18L40 6Z" fill="none" stroke="url(#sg)" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="40" cy="38" r="5" fill="#0ea5e9" />
      <circle cx="24" cy="30" r="3" fill="#1a3a8f" opacity="0.8" />
      <circle cx="56" cy="30" r="3" fill="#1a3a8f" opacity="0.8" />
      <circle cx="28" cy="50" r="3" fill="#06b6d4" opacity="0.8" />
      <circle cx="52" cy="50" r="3" fill="#06b6d4" opacity="0.8" />
      <line x1="35" y1="36" x2="27" y2="31" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7" />
      <line x1="45" y1="36" x2="53" y2="31" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7" />
      <line x1="37" y1="42" x2="30" y2="48" stroke="#06b6d4" strokeWidth="1.5" opacity="0.7" />
      <line x1="43" y1="42" x2="50" y2="48" stroke="#06b6d4" strokeWidth="1.5" opacity="0.7" />
      <rect x="36" y="36" width="8" height="6" rx="1" fill="#0a1628" />
      <path d="M37.5 36V34.5C37.5 33.1 38.5 32 40 32C41.5 32 42.5 33.1 42.5 34.5V36" stroke="#0a1628" strokeWidth="1.8" fill="none" />
      <circle cx="40" cy="39" r="1" fill="#06b6d4" />
      <rect x="20" y="26" width="8" height="6" rx="1.5" fill="none" stroke="#1a3a8f" strokeWidth="1.2" />
      <rect x="52" y="26" width="8" height="6" rx="1.5" fill="none" stroke="#1a3a8f" strokeWidth="1.2" />
      <rect x="24" y="46" width="8" height="6" rx="1.5" fill="none" stroke="#06b6d4" strokeWidth="1.2" />
      <rect x="48" y="46" width="8" height="6" rx="1.5" fill="none" stroke="#06b6d4" strokeWidth="1.2" />
      <defs>
        <linearGradient id="sg" x1="12" y1="6" x2="68" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a3a8f" /><stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FakeNewsLogo() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="14" y="12" width="38" height="46" rx="4" fill="url(#ng)" opacity="0.12" />
      <rect x="14" y="12" width="38" height="46" rx="4" fill="none" stroke="url(#ng)" strokeWidth="1.8" />
      <line x1="21" y1="23" x2="45" y2="23" stroke="#1a3a8f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="21" y1="30" x2="45" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="21" y1="36" x2="38" y2="36" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M54 20C62 20 68 27 68 36C68 45 62 52 54 52" stroke="url(#ng)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="54" cy="30" r="2" fill="#06b6d4" />
      <circle cx="57" cy="38" r="2" fill="#3b82f6" />
      <circle cx="54" cy="46" r="2" fill="#1a3a8f" />
      <line x1="54" y1="30" x2="57" y2="38" stroke="#06b6d4" strokeWidth="1" opacity="0.7" />
      <line x1="57" y1="38" x2="54" y2="46" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
      <circle cx="52" cy="58" r="10" fill="url(#ng)" opacity="0.15" />
      <circle cx="52" cy="58" r="10" fill="none" stroke="url(#ng)" strokeWidth="2" />
      <path d="M47 58L51 62L57 54" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="21" y="42" width="4" height="10" rx="1" fill="#1a3a8f" opacity="0.5" />
      <rect x="27" y="38" width="4" height="14" rx="1" fill="#3b82f6" opacity="0.5" />
      <rect x="33" y="44" width="4" height="8" rx="1" fill="#06b6d4" opacity="0.5" />
      <defs>
        <linearGradient id="ng" x1="14" y1="12" x2="68" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a3a8f" /><stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LoanRiskLogo() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="40" cy="40" r="32" fill="url(#lg)" opacity="0.08" />
      <circle cx="40" cy="40" r="32" fill="none" stroke="url(#lg)" strokeWidth="1.5" />
      <polyline points="16,56 26,48 34,42 44,34 54,26 64,18" stroke="url(#lg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polygon points="16,56 26,48 34,42 44,34 54,26 64,18 64,60 16,60" fill="url(#lg)" opacity="0.07" />
      <line x1="16" y1="60" x2="64" y2="60" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="16" y1="16" x2="16" y2="60" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="44" cy="34" r="4" fill="#1a3a8f" />
      <circle cx="36" cy="40" r="3" fill="#3b82f6" opacity="0.8" />
      <circle cx="50" cy="30" r="3" fill="#06b6d4" opacity="0.8" />
      <circle cx="40" cy="38" r="2.5" fill="#0ea5e9" opacity="0.7" />
      <line x1="44" y1="34" x2="36" y2="40" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      <line x1="44" y1="34" x2="50" y2="30" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      <line x1="44" y1="34" x2="40" y2="38" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      <text x="20" y="36" fontSize="14" fontWeight="700" fill="#1a3a8f" opacity="0.6" fontFamily="serif">$</text>
      <path d="M56 24L64 18M64 18L58 18M64 18L64 24" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="lg" x1="8" y1="8" x2="72" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a3a8f" /><stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// --- Shared components ---
function Badge({ label, variant = "ai" }: { label: string; variant?: "ai" | "cyber" | "ml" | "startup" | "grad" | "award" }) {
  const styles: Record<string, { bg: string; color: string; border: string }> = {
    ai:      { bg: "rgba(99,102,241,0.1)",  color: "#6366f1", border: "rgba(99,102,241,0.25)" },
    cyber:   { bg: "rgba(6,182,212,0.1)",   color: "#0891b2", border: "rgba(6,182,212,0.25)" },
    ml:      { bg: "rgba(16,185,129,0.1)",  color: "#059669", border: "rgba(16,185,129,0.25)" },
    startup: { bg: "rgba(245,158,11,0.1)",  color: "#d97706", border: "rgba(245,158,11,0.25)" },
    grad:    { bg: "rgba(26,58,143,0.1)",   color: "#1a3a8f", border: "rgba(26,58,143,0.25)" },
    award:   { bg: "rgba(239,68,68,0.08)",  color: "#dc2626", border: "rgba(239,68,68,0.2)" },
  };
  const s = styles[variant];
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {label}
    </span>
  );
}

function CategoryHeader({ number, emoji, title, desc }: { number: string; emoji: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-5 mb-8">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
        style={{ background: "linear-gradient(135deg, #eef2ff, #dbeafe)", border: "1px solid rgba(26,58,143,0.14)" }}>
        {emoji}
      </div>
      <div>
        <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3b82f6" }}>
          Category {number}
        </div>
        <h3 className="text-2xl font-black text-[#0a1628] mb-1" style={{ fontFamily: "'Onest', sans-serif", letterSpacing: "-0.03em" }}>
          {title}
        </h3>
        <p className="text-sm text-[#4a5a8a] max-w-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
      </div>
    </div>
  );
}

// --- Project card — no tech pills ---
type ProjectCardProps = {
  logo: React.ReactNode;
  logoBg?: string;
  title: string;
  desc: string;
  badges: { label: string; variant: "ai" | "cyber" | "ml" | "startup" | "grad" | "award" }[];
  glowColor: string;
  borderColor: string;
  achievements?: string[];
  insight?: { problem: string; solution: string; result: string };
  accentColor: string;
  projectUrl?: string;
  githubUrl?: string;
  hideGithub?: boolean;
  hideViewProject?: boolean;
};

function ProjectCard({ logo, logoBg, title, desc, badges, glowColor, borderColor, achievements, insight, accentColor, projectUrl, githubUrl, hideGithub, hideViewProject }: ProjectCardProps) {
  return (
    <div
      className="group rounded-[20px] p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 h-full"
      style={{ background: "white", border: `1px solid ${borderColor}`, boxShadow: "0 4px 20px rgba(26,58,143,0.06)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 18px 50px ${glowColor}, 0 0 0 1.5px ${accentColor}40`; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(26,58,143,0.06)"; }}
    >
      {/* Logo */}
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{ background: logoBg ?? "#f0f4ff", border: `1px solid ${borderColor}` }}>
        {logo}
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-1.5">
        {badges.map((b) => <Badge key={b.label} label={b.label} variant={b.variant} />)}
      </div>

      {/* Title + desc */}
      <div>
        <h4 className="text-lg font-black text-[#0a1628] mb-2 leading-snug" style={{ fontFamily: "'Onest', sans-serif", letterSpacing: "-0.025em" }}>
          {title}
        </h4>
        <p className="text-[#4a5a8a] text-sm leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
      </div>

      {/* Key achievements */}
      {achievements && (
        <div className="rounded-xl p-4" style={{ background: `${accentColor}0d`, border: `1px solid ${accentColor}22` }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: accentColor }}>
            Key Achievements
          </p>
          <ul className="space-y-1.5">
            {achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#4a5a8a]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentColor }} />
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Insight */}
      {insight && (
        <div className="grid grid-cols-3 gap-2">
          {[{ label: "Problem", text: insight.problem }, { label: "Solution", text: insight.solution }, { label: "Result", text: insight.result }].map((item) => (
            <div key={item.label} className="rounded-xl p-2.5" style={{ background: `${accentColor}0a`, border: `1px solid ${accentColor}1a` }}>
              <p className="text-[10px] font-bold mb-1 uppercase tracking-wide" style={{ color: accentColor, fontFamily: "'JetBrains Mono', monospace" }}>{item.label}</p>
              <p className="text-[11px] text-[#4a5a8a] leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-wrap gap-2.5 pt-1 mt-auto">
        {!hideViewProject && (
          <a
            href={projectUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: accentColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <ExternalLink className="w-3.5 h-3.5" /> View Project
          </a>
        )}
        {!hideGithub && (
          <a
            href={githubUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all"
            style={{ color: accentColor, border: `1.5px solid ${accentColor}35`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${accentColor}0d`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}

// --- Projects ---
function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-[#f8faff]">
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.032]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a3a8f" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <GradientOrb className="w-[500px] h-[500px] top-10 -right-32 opacity-40" />
      <GradientOrb className="w-[400px] h-[400px] bottom-40 -left-20 opacity-35" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionLabel label="02 / Projects" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-3" style={{ fontFamily: "'Onest', sans-serif", letterSpacing: "-0.03em" }}>
              Projects
            </h2>
            <p className="text-[#4a5a8a] text-lg max-w-2xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              A collection of academic, AI, cybersecurity, and data science projects that demonstrate my technical skills and problem-solving abilities.
            </p>
          </div>
          <div className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold"
            style={{ background: "#eef2ff", color: "#1a3a8f", fontFamily: "'JetBrains Mono', monospace", border: "1px solid rgba(26,58,143,0.12)" }}>
            6 Projects
          </div>
        </div>

        {/* Category 01 — Cybersecurity & OS */}
        <div className="mb-20">
          <CategoryHeader number="01" emoji="🛡" title="Cybersecurity & Operating Systems"
            desc="Projects focused on security awareness, vulnerability analysis, secure systems, cyber defense, and system-level scripting." />
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <ProjectCard
              logo={<IoTSecurityLogo />}
              logoBg="linear-gradient(135deg, #0a1628, #1a3a8f)"
              projectUrl="https://www.linkedin.com/posts/shjoon-albishi_today-was-our-information-security-project-activity-7259860467043520512-U7iE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERP1_cByfOq5lpTzmwVKnj5BMPMAm7XYcE"
              hideGithub
              title="IoT Camera Security Awareness"
              desc="An Information Security course project raising awareness about IoT camera privacy and security risks. IoT cameras, while designed for security and remote monitoring, can expose users to serious privacy risks if not used securely. The project covered privacy concerns, common security vulnerabilities, and protection guidelines to help users make informed decisions about their devices."
              badges={[{ label: "Cybersecurity", variant: "cyber" }]}
              glowColor="rgba(6,182,212,0.2)"
              borderColor="rgba(6,182,212,0.15)"
              accentColor="#0891b2"
              achievements={[
                "Identified privacy risks from unsecure IoT camera use, including hacking and data exposure",
                "Highlighted common vulnerabilities: weak passwords, poor authentication, lack of encryption, inadequate physical security",
                "Analyzed real-world incidents (Georgia Ransom Attack, Mississippi Camera Hack, Verkada Camera Breach, Seattle Baby Monitor Hack) to demonstrate real-world impact",
              ]}
            />
            <ProjectCard
              logo={
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="10" y="14" width="60" height="52" rx="6" fill="url(#tg)" opacity="0.12" />
                  <rect x="10" y="14" width="60" height="52" rx="6" stroke="url(#tg)" strokeWidth="2" fill="none" />
                  <rect x="10" y="14" width="60" height="14" rx="6" fill="url(#tg)" opacity="0.25" />
                  <circle cx="22" cy="21" r="3" fill="#ef4444" opacity="0.8" />
                  <circle cx="32" cy="21" r="3" fill="#f59e0b" opacity="0.8" />
                  <circle cx="42" cy="21" r="3" fill="#10b981" opacity="0.8" />
                  <text x="18" y="46" fontSize="11" fontFamily="monospace" fill="#06b6d4" opacity="0.9">$ ./process</text>
                  <text x="18" y="58" fontSize="11" fontFamily="monospace" fill="#3b82f6" opacity="0.7">$ ./files</text>
                  <rect x="18" y="62" width="6" height="9" rx="1" fill="#06b6d4" opacity="0.7" />
                  <defs>
                    <linearGradient id="tg" x1="10" y1="14" x2="70" y2="66" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1a3a8f" /><stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              }
              logoBg="linear-gradient(135deg, #0a1628, #1a3a8f)"
              githubUrl="https://github.com/Shjoon-Albishi/linux-process-file-automation.git"
              hideViewProject
              title="Linux Process & File Management Automation"
              desc="A Linux shell scripting project simulating core operating system functions. Built two scripts: one for process management — listing running processes, allowing users to terminate a process immediately or after a delay, then confirming the updated process list — and one for file management, which organizes text files into a new directory and generates a structured summary file with file headers and content previews."
              badges={[{ label: "Operating Systems", variant: "cyber" }]}
              glowColor="rgba(6,182,212,0.2)"
              borderColor="rgba(6,182,212,0.15)"
              accentColor="#0891b2"
              achievements={[
                "Process management script: lists all running processes, lets the user terminate a process immediately or after a configurable delay, then displays the updated process list",
                "File management script: creates a new directory, moves all .txt files into it, and generates a structured summary file with file names as headers",
                "Built with user-friendly echo messages and clear section headings for a guided command-line experience",
              ]}
            />
          </div>
        </div>

        {/* Category 02 — AI */}
        <div className="mb-20">
          <CategoryHeader number="02" emoji="🤖" title="AI & Intelligent Systems"
            desc="Artificial intelligence solutions focused on automation, computer vision, and intelligent decision support." />
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <ProjectCard
              logo={<ImageWithFallback src={irthLogo} alt="IRTH project logo" className="w-full h-full object-contain p-2" />}
              logoBg="white"
              projectUrl="https://irth-saudi-architecture.vercel.app/"
              githubUrl="https://github.com/RanaAlsaggaf/irth2026.git"
              title="IRTH – AI Agent for Smart Architectural Compliance and Saudi Style Verification"
              desc="An AI-powered platform that evaluates architectural designs against the 19 official Saudi architectural styles. Engineering offices upload designs and receive a structured compliance report with detected characteristics, issues, and recommendations. Built with role-based dashboards for engineering offices, municipalities, and administrators — supporting Saudi Vision 2030."
              badges={[{ label: "Graduation Project", variant: "grad" }, { label: "AI", variant: "ai" }]}
              glowColor="rgba(26,58,143,0.2)"
              borderColor="rgba(26,58,143,0.13)"
              accentColor="#1a3a8f"
            />
            <ProjectCard
              logo={<ImageWithFallback src={alrikabLogo} alt="Alrikab project logo" className="w-full h-full object-contain p-1" />}
              logoBg="white"
              projectUrl="https://www.linkedin.com/posts/shjoon-albishi_after-an-incredible-journey-of-over-four-activity-7289858759185563650--4ke?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERP1_cByfOq5lpTzmwVKnj5BMPMAm7XYcE"
              githubUrl="https://github.com/YarahSaeedAlghamdi/Alrikabf.git"
              title="Alrikab – AI Sign Language Translation Startup"
              desc="A real-time sign language translation platform bridging communication between hearing-impaired and hearing individuals. Translates Arabic Sign Language into spoken and written text — recognized in the Top 10 of a national innovation competition."
              badges={[{ label: "Startup", variant: "startup" }, { label: "Top 10 Competition", variant: "award" }, { label: "AI", variant: "ai" }]}
              glowColor="rgba(99,102,241,0.2)"
              borderColor="rgba(99,102,241,0.13)"
              accentColor="#4f46e5"
            />
          </div>
        </div>

        {/* Category 04 — Data Science */}
        <div>
          <CategoryHeader number="03" emoji="📊" title="Data Science & Machine Learning"
            desc="Machine learning models and predictive analytics built using explainable AI and statistical methods." />
          <div className="grid md:grid-cols-2 gap-5 items-start">
            <ProjectCard
              logo={<FakeNewsLogo />}
              logoBg="linear-gradient(135deg, #f0fdf4, #dcfce7)"
              projectUrl="https://www.linkedin.com/posts/shjoon-albishi_techhub2024-techhub2024-activity-7237095000612761600-PJFt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERP1_cByfOq5lpTzmwVKnj5BMPMAm7XYcE"
              githubUrl="https://github.com/ShjoonAlbishi/Detect-Fake-News-using-SHAP.git"
              title="Fighting Fake News with Explainable AI"
              desc="A machine learning system addressing a key gap in fake news detection — most classifiers label content as 'fake' or 'true' without explaining why, leaving users skeptical. Built using Logistic Regression enhanced with SHAP (Shapley Additive Explanations) to provide transparent, feature-level insights into each classification and boost user trust. Presented at IEEE KAU SB as part of TechHub2024."
              badges={[{ label: "Machine Learning", variant: "ml" }]}
              glowColor="rgba(16,185,129,0.2)"
              borderColor="rgba(16,185,129,0.14)"
              accentColor="#059669"
              insight={{ problem: "Fake news classifiers label content without explaining why, reducing user trust", solution: "Logistic Regression model enhanced with SHAP for explainable, feature-level classification insights", result: "Delivered transparent predictions that help users understand and trust the classification" }}
            />
            <ProjectCard
              logo={<LoanRiskLogo />}
              logoBg="linear-gradient(135deg, #f5f3ff, #ede9fe)"
              projectUrl="https://www.linkedin.com/posts/shjoon-albishi_machinelearning-datamining-fintech-activity-7322922298913501185-sqNr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERP1_cByfOq5lpTzmwVKnj5BMPMAm7XYcE"
              githubUrl="https://github.com/Shjoon-Albishi/loan-risk-knn.git"
              title="Loan Risk Prediction using KNN"
              desc="A Data Mining course project addressing loan risk assessment in the financial sector. Built a machine learning pipeline — including dataset selection, data exploration, visualization, and preprocessing — to predict whether a loan application should be approved or rejected, enabling faster, fairer decisions and reducing financial risk. Personally responsible for data exploration and developing the K-Nearest Neighbors (KNN) model."
              badges={[{ label: "Machine Learning", variant: "ml" }]}
              glowColor="rgba(99,102,241,0.2)"
              borderColor="rgba(99,102,241,0.14)"
              accentColor="#6366f1"
              insight={{ problem: "Manual loan risk assessment is slow and inconsistent, increasing financial risk", solution: "K-Nearest Neighbors (KNN) model trained on financial data to predict loan approval outcomes", result: "Achieved 90% accuracy with the KNN model" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Certifications ---
const certs = [
  {
    name: "Cyber Threat Intelligence & Threat Hunting Labs",
    org: "Immersive Labs",
    status: "completed" as const,
    color: "#0891b2",
    accent: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.18)",
    glow: "rgba(6,182,212,0.18)",
    icon: Shield,
    desc: "Hands-on labs covering threat actor profiling, indicator analysis, MITRE ATT&CK mapping, and structured threat hunting techniques.",
  },
  {
    name: "Introduction to Cyber Threat Intelligence",
    org: "TryHackMe",
    status: "completed" as const,
    color: "#1a3a8f",
    accent: "rgba(26,58,143,0.1)",
    border: "rgba(26,58,143,0.16)",
    glow: "rgba(59,130,246,0.18)",
    icon: Lock,
    desc: "Foundational course covering threat intelligence lifecycles, OSINT collection, threat feeds, and intelligence-driven defense strategies.",
  },
  {
    name: "CompTIA Security+ (SY0-701)",
    org: "CompTIA",
    status: "inprogress" as const,
    color: "#c2410c",
    accent: "rgba(234,88,12,0.08)",
    border: "rgba(234,88,12,0.18)",
    glow: "rgba(234,88,12,0.16)",
    icon: Award,
    desc: "Industry-standard certification covering threats, vulnerabilities, architecture, implementation, operations, and governance in security.",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="relative py-28 bg-white overflow-hidden">
      <CircuitPattern />
      <GradientOrb className="w-[500px] h-[500px] -top-20 -left-32 opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionLabel label="03 / Certifications" />
        <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-4" style={{ fontFamily: "'Onest', sans-serif", letterSpacing: "-0.03em" }}>
          Cybersecurity Certifications
        </h2>
        <p className="text-[#4a5a8a] text-lg mb-14 max-w-2xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Industry-recognized certifications and hands-on training focused on cyber threat intelligence, threat hunting, and security fundamentals.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => {
            const Icon = c.icon;
            const isComplete = c.status === "completed";
            return (
              <div key={i}
                className="relative group flex flex-col rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: "white", border: `1px solid ${c.border}`, boxShadow: "0 4px 20px rgba(26,58,143,0.05)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${c.glow}, 0 0 0 1.5px ${c.color}40`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(26,58,143,0.05)"; }}
              >
                <div className="h-1 w-full flex-shrink-0"
                  style={{ background: isComplete ? `linear-gradient(90deg, ${c.color}, #06b6d4)` : "linear-gradient(90deg, #ea580c, #f97316)" }} />

                <div className="p-7 flex flex-col gap-5 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: c.accent, border: `1px solid ${c.border}` }}>
                      <Icon className="w-6 h-6" style={{ color: c.color }} />
                    </div>
                    {isComplete ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold flex-shrink-0"
                        style={{ background: "rgba(16,185,129,0.1)", color: "#059669", border: "1px solid rgba(16,185,129,0.25)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold flex-shrink-0"
                        style={{ background: "rgba(234,88,12,0.08)", color: "#ea580c", border: "1px solid rgba(234,88,12,0.22)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" /> In Progress
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="text-base font-black text-[#0a1628] leading-snug" style={{ fontFamily: "'Onest', sans-serif", letterSpacing: "-0.02em" }}>
                      {c.name}
                    </h3>
                    <p className="text-sm font-semibold" style={{ color: c.color, fontFamily: "'JetBrains Mono', monospace" }}>{c.org}</p>
                    <p className="text-xs text-[#4a5a8a] leading-relaxed mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Beyond Tech — Achievements ---
function BeyondTech() {
  const achievements = [
    {
      icon: Crown,
      category: "National Leadership Program",
      title: "Qimam Fellowship",
      desc: "Selected among more than 18,000 applicants as one of the Top 50 future leaders in Saudi Arabia through the prestigious Qimam Fellowship. This national leadership program recognizes exceptional university students with outstanding leadership potential, academic excellence, and commitment to creating positive impact.",
      highlight: "Top 50 out of 18,000 Applicants",
      accentColor: "#f59e0b",
      accentDark: "#d97706",
      border: "rgba(245,158,11,0.22)",
      glow: "rgba(245,158,11,0.28)",
      topBar: "linear-gradient(90deg, #b45309, #f59e0b, #fcd34d)",
    },
    {
      icon: Star,
      category: "University Recognition",
      title: "Najmat AlJamiah (University Star)",
      desc: "Awarded the title of \"Najmat AlJamiah (University Star)\" in recognition of academic excellence, leadership, active student involvement, and meaningful contributions throughout my university journey.",
      highlight: "Official University Recognition",
      accentColor: "#3b82f6",
      accentDark: "#1d4ed8",
      border: "rgba(59,130,246,0.22)",
      glow: "rgba(59,130,246,0.28)",
      topBar: "linear-gradient(90deg, #1a3a8f, #3b82f6, #60a5fa)",
    },
    {
      icon: Flag,
      category: "Cybersecurity Competition",
      title: "Top 6 CTF Finalist",
      desc: "Achieved Top 6 in my first Capture The Flag (CTF) cybersecurity competition, demonstrating practical problem-solving, technical curiosity, and rapid learning under pressure.",
      highlight: "Top 6 Placement",
      accentColor: "#a855f7",
      accentDark: "#7e22ce",
      border: "rgba(168,85,247,0.22)",
      glow: "rgba(168,85,247,0.28)",
      topBar: "linear-gradient(90deg, #6b21a8, #a855f7, #c084fc)",
    },
    {
      icon: Trophy,
      category: "Innovation & Entrepreneurship",
      title: "3rd Place – Scientific Forum",
      desc: "Alrikab secured 3rd place among 276 innovation and entrepreneurship projects at the 16th Scientific Forum. The project was recognized for its innovative approach and real-world impact.",
      highlight: "3rd Place out of 276 Projects",
      accentColor: "#10b981",
      accentDark: "#047857",
      border: "rgba(16,185,129,0.22)",
      glow: "rgba(16,185,129,0.28)",
      topBar: "linear-gradient(90deg, #065f46, #10b981, #6ee7b7)",
    },
    {
      icon: Network,
      category: "Cybersecurity Mentorship",
      title: "Project1932 LittleSib",
      desc: "Selected as a LittleSib in Project1932 and participated in a mentorship journey with a Chief Cybersecurity Officer at a leading financial institution. The mentorship focused on cybersecurity career development, building a competitive CV, strengthening technical growth, and developing a champion mindset for long-term success.",
      highlight: "Mentored by a Chief Cybersecurity Officer",
      accentColor: "#06b6d4",
      accentDark: "#0e7490",
      border: "rgba(6,182,212,0.22)",
      glow: "rgba(6,182,212,0.28)",
      topBar: "linear-gradient(90deg, #0e7490, #06b6d4, #67e8f9)",
    },
  ];

  const stats = [
    { value: "Top 50", label: "Out of 18K" },
    { value: "Top 6", label: "CTF" },
    { value: "3rd Place", label: "276 Projects" },
    { value: "Project1932", label: "LittleSib" },
  ];

  return (
    <section
      id="beyond-tech"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a1628 0%, #1a3a8f 60%, #0e4f7a 100%)" }}
    >
      {/* Circuit overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-dark" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="#fff" />
            <circle cx="0" cy="0" r="1" fill="#fff" />
            <circle cx="60" cy="60" r="1" fill="#fff" />
            <line x1="0" y1="30" x2="20" y2="30" stroke="#fff" strokeWidth="0.5" />
            <line x1="40" y1="30" x2="60" y2="30" stroke="#fff" strokeWidth="0.5" />
            <line x1="30" y1="0" x2="30" y2="20" stroke="#fff" strokeWidth="0.5" />
            <line x1="30" y1="40" x2="30" y2="60" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-dark)" />
      </svg>
      <GradientOrb className="w-[600px] h-[600px] top-0 right-0 opacity-25" />
      <GradientOrb className="w-[400px] h-[400px] bottom-0 left-0 opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)", color: "#67e8f9", fontFamily: "'JetBrains Mono', monospace" }}>
          04 / Beyond Tech
        </div>

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight" style={{ fontFamily: "'Onest', sans-serif", letterSpacing: "-0.03em" }}>
              Beyond the
              <br />
              <span style={{ color: "#67e8f9" }}>Keyboard</span>
            </h2>
            <p className="text-blue-200 text-base max-w-lg leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Beyond cybersecurity, my journey is defined by leadership, innovation, national recognition, and continuous personal growth.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 lg:flex-nowrap">
            {stats.map((s, i) => (
              <div key={i} className="text-center px-5 py-3.5 rounded-2xl flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
                <div className="text-lg font-black text-white leading-tight" style={{ fontFamily: "'Onest', sans-serif" }}>{s.value}</div>
                <div className="text-[11px] text-blue-300 font-semibold mt-0.5 whitespace-nowrap" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement cards — 3 + 2 layout */}
        <div className="space-y-5">
          {/* Row 1: 3 cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {achievements.slice(0, 3).map((a, i) => (
              <AchievementCard key={i} a={a} />
            ))}
          </div>
          {/* Row 2: 2 cards, centered */}
          <div className="grid md:grid-cols-2 gap-5 md:max-w-[66%] mx-auto">
            {achievements.slice(3).map((a, i) => (
              <AchievementCard key={i} a={a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Achievement = {
  icon: React.ElementType;
  category: string;
  title: string;
  desc: string;
  highlight: string;
  accentColor: string;
  accentDark: string;
  border: string;
  glow: string;
  topBar: string;
};

function AchievementCard({ a }: { a: Achievement }) {
  const Icon = a.icon;
  return (
    <div
      className="group relative flex flex-col rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 h-full"
      style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${a.border}`, backdropFilter: "blur(12px)" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = `0 24px 60px ${a.glow}`;
        el.style.background = "rgba(255,255,255,0.09)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.background = "rgba(255,255,255,0.05)";
      }}
    >
      {/* Colored top bar */}
      <div className="h-[3px] w-full flex-shrink-0" style={{ background: a.topBar }} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${a.accentColor}18`, border: `1px solid ${a.accentColor}35` }}
        >
          <Icon className="w-5 h-5" style={{ color: a.accentColor }} />
        </div>

        {/* Category + title */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: a.accentColor }}>
            {a.category}
          </p>
          <h3 className="text-base font-black text-white leading-snug" style={{ fontFamily: "'Onest', sans-serif", letterSpacing: "-0.02em" }}>
            {a.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-blue-200 text-xs leading-relaxed flex-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {a.desc}
        </p>

        {/* Highlight badge */}
        <div className="pt-1">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
            style={{ background: `${a.accentColor}16`, color: a.accentColor, border: `1px solid ${a.accentColor}35`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a.accentColor }} />
            {a.highlight}
          </span>
        </div>
      </div>
    </div>
  );
}

// --- Contact ---
function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "shjoonalbyshy18@gmail.com",
      href: "mailto:shjoonalbyshy18@gmail.com?subject=Portfolio%20Inquiry",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shjoon-albishi",
      href: "https://www.linkedin.com/in/shjoon-albishi",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Shjoon-Albishi",
      href: "https://github.com/Shjoon-Albishi",
    },
  ];

  return (
    <section id="contact" className="relative py-28 bg-white overflow-hidden">
      {/* Subtle dot grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#1a3a8f" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <GradientOrb className="w-[500px] h-[500px] -top-20 -right-20 opacity-40" />
      <GradientOrb className="w-[400px] h-[400px] bottom-0 -left-20 opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <SectionLabel label="05 / Contact" centered />
          <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-4" style={{ fontFamily: "'Onest', sans-serif", letterSpacing: "-0.03em" }}>
            Let&apos;s Build Something
            <br />
            <span style={{ background: "linear-gradient(135deg, #1a3a8f, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Remarkable
            </span>
          </h2>
          <p className="text-[#4a5a8a] text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Open to cybersecurity roles, AI projects, and ambitious collaborations. I would love to connect.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "white",
                  border: "1px solid rgba(26,58,143,0.09)",
                  boxShadow: "0 2px 20px rgba(26,58,143,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 20px 50px rgba(26,58,143,0.14), 0 0 0 1.5px rgba(6,182,212,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 2px 20px rgba(26,58,143,0.06)";
                }}
              >
                {/* Icon box — gradient bg on hover via group */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(26,58,143,0.08), rgba(6,182,212,0.1))", border: "1px solid rgba(6,182,212,0.18)" }}
                  onMouseEnter={(e) => {
                    const p = (e.currentTarget as HTMLElement).closest("a") as HTMLElement;
                    if (p) (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #1a3a8f, #06b6d4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(26,58,143,0.08), rgba(6,182,212,0.1))";
                  }}
                >
                  <Icon
                    className="w-6 h-6 transition-colors duration-300"
                    style={{ color: "#1a3a8f" }}
                    onMouseEnter={(e) => { (e.currentTarget as SVGSVGElement).style.color = "white"; }}
                    onMouseLeave={(e) => { (e.currentTarget as SVGSVGElement).style.color = "#1a3a8f"; }}
                  />
                </div>

                <div className="text-center">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8] mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {c.label}
                  </div>
                  <div className="text-xs font-semibold text-[#0a1628] text-center break-all leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {c.value}
                  </div>
                </div>

                {/* Arrow indicator — appears on hover */}
                <ExternalLink
                  className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "#06b6d4" }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: "rgba(26,58,143,0.1)", background: "#f8faff" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a3a8f, #06b6d4)" }}>
            <Rocket className="w-3.5 h-3.5 text-white" style={{ transform: "rotate(45deg)" }} />
          </div>
          <span className="text-sm font-semibold text-[#4a5a8a]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Shjoon Albishi</span>
        </div>
        <p className="text-xs text-[#94a3b8]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          © 2025 · Designed &amp; Built with precision
        </p>
      </div>
    </footer>
  );
}

// --- Shared SectionLabel ---
function SectionLabel({ label, centered }: { label: string; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${centered ? "justify-center" : ""}`}>
      <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #1a3a8f, #06b6d4)" }} />
      <span className="text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3b82f6" }}>
        {label}
      </span>
    </div>
  );
}

// --- App ---
export default function App() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Nav />
      <Hero />
      <Projects />
      <Certifications />
      <BeyondTech />
      <Contact />
      <Footer />
    </div>
  );
}
