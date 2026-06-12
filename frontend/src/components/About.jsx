export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>About Us</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6" style={{ color: "var(--fg)" }}>
              One Mind.<br /><span className="text-gradient">Clear vision.</span>
            </h2>
            <p className="leading-relaxed mb-4 text-sm" style={{ color: "var(--fg-muted)" }}>
             I'm Ayub, a full-stack developer based in Tamil Nadu, turning ideas into complete digital products — from pixel-perfect interfaces to powerful backend systems. One mind, one workflow, zero communication gaps.
            </p>
            <p className="leading-relaxed mb-8 text-sm" style={{ color: "var(--fg-muted)" }}>
              platforms, business websites, CRMs, and QA tools — each one crafted with precision. No outsourcing. No templates. No shortcuts. Just clean code and real results.
            </p>

            {/* Contact — just numbers, no names */}
            <div className="space-y-3 mb-6">
              {[
                { num: "+91 88077 09991", tel: "918807709991", label: "FullStack Dev · Tamil Nadu" },
              ].map((c) => (
                <a key={c.tel} href={`tel:+${c.tel}`}
                  className="flex items-center gap-4 rounded-xl p-4 transition-all hover:scale-[1.01] group"
                  style={{ border: "1px solid var(--border)", background: "var(--bg2)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-.55a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold group-hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>{c.num}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--fg-subtle)" }}>{c.label}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp quick link */}
            <a href="https://wa.me/918807709991" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "#25D366", color: "#fff" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Right — skills */}
          <div className="space-y-5">
            {[
              { label: "Frontend Development", pct: 95, color: "#0EA5E9" },
              { label: "Backend / APIs", pct: 90, color: "#10B981" },
              { label: "UI/UX Design", pct: 85, color: "#8B5CF6" },
              { label: "Database & DevOps", pct: 83, color: "#F59E0B" },
            ].map((sk) => (
              <div key={sk.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>{sk.label}</span>
                  <span className="text-sm font-bold" style={{ color: sk.color }}>{sk.pct}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--pill-bg)" }}>
                  <div className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${sk.pct}%`, background: `linear-gradient(90deg, ${sk.color}99, ${sk.color})` }} />
                </div>
              </div>
            ))}

            {/* Tech stack pills */}
            <div className="pt-6 rounded-2xl p-6" style={{ border: "1px solid var(--border)", background: "var(--bg2)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--fg-subtle)" }}>Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Vite", "Next.js", "TypeScript", "Node.js", "Express", "FastAPI", "Supabase", "PostgreSQL", "Tailwind CSS", "Playwright", "Git"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full font-medium transition-all hover:scale-105"
                    style={{ background: "color-mix(in srgb, var(--accent) 10%, var(--bg))", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
