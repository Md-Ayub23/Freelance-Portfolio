const projects = [
   {
    tag: "E-commerce · Fashion", title: "ZK Clothes",
    desc: "Full-featured e-commerce storefront for a clothing brand, with product catalog, cart, and checkout flow built for a smooth shopping experience.",
    stack: ["Shopify", "E-commerce", "UI/UX"],
    bg: "linear-gradient(135deg, #1e0a3c 0%, #3b1d8a 50%, #6d28d9 100%)",
    bgLight: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
    accentColor: "#a78bfa",
    span: "full",
    link: "https://zkclothes.in", // ← paste your link here
  },
  {
    tag: "Corporate · Testing Lab", title: "Radiance Testing Solutions",
    desc: "Premium enterprise website for a QA company. 11-service listing, client logos, Maveric-inspired aesthetic.",
    stack: ["React", "Vite", "Tailwind"],
    bg: "linear-gradient(135deg, #0c1a35 0%, #1e3a5f 50%, #1d4ed8 100%)",
    bgLight: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    accentColor: "#60a5fa",
    span: "half",
    link: "https://radiancetestingsolutions.com", // ← paste your link here
  },
  {
    tag: "SaaS · Visual QA", title: "PixelPerfect",
    desc: "AI-powered design-to-live visual QA platform. Detects UI regressions using perceptual diff algorithms across browsers. Built with a full FastAPI backend and Supabase.",
    stack: ["React", "FastAPI", "Supabase", "Playwright"],
    bg: "linear-gradient(135deg, #1c1402 0%, #78350f 50%, #b45309 100%)",
    bgLight: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    accentColor: "#fbbf24",
    span: "half",
    link: "https://your-pixelperfect-demo.com", // ← paste your link here
  },
  {
    tag: "CRM · Dental", title: "Radiance Dental CRM",
    desc: "Complete clinic management system — appointments, patient records, drug inventory, billing, and analytics. React + FastAPI + Supabase.",
    stack: ["React", "Vite","Python","FastAPI", "Supabase"],
    bg: "linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)",
    bgLight: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
    accentColor: "#4ade80",
    span: "half",
    link: "https://your-dental-crm-demo.com", // ← paste your link here
  },
  {
    tag: "Business · Healthcare", title: "Dental Clinic Website",
    desc: "Professional multi-page website for Dr. T. Banumathy — clean light aesthetic, custom SVG branding, and appointment booking form.",
    stack: ["React", "Vite", "Tailwind v4"],
    bg: "linear-gradient(135deg, #2d0a1a 0%, #831843 50%, #be185d 100%)",
    bgLight: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
    accentColor: "#f472b6",
    span: "half",
    link: "https://your-dental-clinic-demo.com", // ← paste your link here
  },
 
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>Portfolio</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3" style={{ color: "var(--fg)" }}>
            Selected<br /><span className="text-gradient">work.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  const isFullSpan = p.span === "full";

  return (
    <a
      href={p.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 block ${isFullSpan ? "md:col-span-2" : ""}`}
      style={{ minHeight: isFullSpan ? "220px" : "200px", textDecoration: "none" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: `var(--theme, ${p.bg})` }}
      />

      {/* Dark overlay for light mode readability */}
      <style>{`
        :root[data-theme="light"] .project-card-${p.title.replace(/\s/g,"")} {
          background: ${p.bgLight} !important;
        }
      `}</style>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: p.accentColor }}>{p.tag}</span>
          <span className="w-6 h-6 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ background: `${p.accentColor}30`, color: p.accentColor }}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
        </div>

        <h3 className="font-display font-bold mb-3" style={{ fontSize: isFullSpan ? "clamp(1.5rem, 3vw, 2rem)" : "1.25rem", color: "#ffffff" }}>
          {p.title}
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.7)", maxWidth: isFullSpan ? "600px" : "100%" }}>
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}