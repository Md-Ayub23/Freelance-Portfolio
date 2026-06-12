const services = [
  {
    title: "Landing Pages",
    desc: "High-converting, blazing-fast landing pages built to make your brand look premium and turn visitors into customers.",
    tags: ["React", "Next.js", "Tailwind"],
    accent: "#0EA5E9",
    darkBg: "linear-gradient(145deg, #0c1e2e 0%, #0f2d42 60%, #1a4a6e 100%)",
    lightBg: "linear-gradient(145deg, #e0f2fe 0%, #bae6fd 60%, #7dd3fc 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 3L4 14h8l-1 7 9-11h-8l1-10z"/>
      </svg>
    ),
  },
  {
    title: "Full-Stack Web Apps",
    desc: "End-to-end web applications with robust backends, databases, authentication, and seamless user experiences.",
    tags: ["Express", "Node.js", "Supabase"],
    accent: "#10B981",
    darkBg: "linear-gradient(145deg, #052e1a 0%, #064e2d 60%, #065f38 100%)",
    lightBg: "linear-gradient(145deg, #d1fae5 0%, #a7f3d0 60%, #6ee7b7 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        <path d="M7 8l3 3-3 3M13 14h4"/>
      </svg>
    ),
  },
  {
    title: "UI/UX Design & Dev",
    desc: "Pixel-perfect interfaces designed and built from scratch — clean, intuitive, and memorable for your users.",
    tags: ["Figma", "Framer", "CSS"],
    accent: "#8B5CF6",
    darkBg: "linear-gradient(145deg, #1a0a35 0%, #2d1060 60%, #3b1a7a 100%)",
    lightBg: "linear-gradient(145deg, #ede9fe 0%, #ddd6fe 60%, #c4b5fd 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
  },
  {
    title: "Responsive & Mobile-First",
    desc: "Every site we build works flawlessly across all screen sizes — desktop, tablet, and mobile — with perfect performance.",
    tags: ["Responsive", "PWA", "Performance"],
    accent: "#F59E0B",
    darkBg: "linear-gradient(145deg, #1c1000 0%, #3d2200 60%, #5a3300 100%)",
    lightBg: "linear-gradient(145deg, #fef3c7 0%, #fde68a 60%, #fcd34d 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "API & Backend Development",
    desc: "Scalable REST APIs, third-party integrations, and backend systems that power your applications reliably.",
    tags: ["REST API", "PostgreSQL", "Auth"],
    accent: "#EF4444",
    darkBg: "linear-gradient(145deg, #1c0505 0%, #3d0a0a 60%, #5a1010 100%)",
    lightBg: "linear-gradient(145deg, #fee2e2 0%, #fecaca 60%, #fca5a5 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
  },
  {
    title: "Deployment & Maintenance",
    desc: "We handle hosting, CI/CD pipelines, and deployment — plus ongoing support so your site stays fast and up to date.",
    tags: ["Vercel", "CI/CD", "DevOps"],
    accent: "#6366F1",
    darkBg: "linear-gradient(145deg, #0d0c29 0%, #1a1860 60%, #24227a 100%)",
    lightBg: "linear-gradient(145deg, #e0e7ff 0%, #c7d2fe 60%, #a5b4fc 100%)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>What We Do</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3" style={{ color: "var(--fg)" }}>
            Services that<br />
            <span className="text-gradient">ship results.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => <ServiceCard key={s.title} s={s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl p-6 overflow-hidden transition-all duration-400 cursor-default"
      style={{
        border: hovered
          ? `1px solid color-mix(in srgb, ${s.accent} 50%, transparent)`
          : "1px solid var(--border)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 12px 40px color-mix(in srgb, ${s.accent} 18%, transparent)`
          : "none",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background — theme-aware gradient that shows on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-400"
        style={{
          background: `var(--is-dark, ${s.darkBg})`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Subtle always-on tint */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(145deg, color-mix(in srgb, ${s.accent} 5%, var(--bg2)), var(--bg2))`,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Top-right accent dot */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300"
        style={{ background: s.accent, opacity: hovered ? 1 : 0.4 }} />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon box */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
          style={{
            background: hovered
              ? `color-mix(in srgb, ${s.accent} 25%, transparent)`
              : `color-mix(in srgb, ${s.accent} 12%, var(--bg))`,
            border: `1px solid color-mix(in srgb, ${s.accent} 30%, transparent)`,
            color: s.accent,
          }}
        >
          {s.icon}
        </div>

        <h3 className="font-display font-bold text-base mb-2 transition-colors duration-300"
          style={{ color: hovered ? "#ffffff" : "var(--fg)" }}>
          {s.title}
        </h3>

        <p className="text-sm leading-relaxed mb-5 transition-colors duration-300"
          style={{ color: hovered ? "rgba(255,255,255,0.7)" : "var(--fg-muted)" }}>
          {s.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {s.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all duration-300"
              style={{
                background: hovered
                  ? `color-mix(in srgb, ${s.accent} 20%, rgba(255,255,255,0.05))`
                  : `color-mix(in srgb, ${s.accent} 8%, var(--bg))`,
                color: hovered ? s.accent : s.accent,
                border: `1px solid color-mix(in srgb, ${s.accent} ${hovered ? "40%" : "20%"}, transparent)`,
              }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Need useState import
import { useState } from "react";
