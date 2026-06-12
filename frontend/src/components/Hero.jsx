const TechLogos = [
   { name: "Python", svg: <svg viewBox="0 0 32 32" width="20" height="20"><path d="M15.885 2.1c-7.15 0-6.67 3.1-6.67 3.1l.008 3.22h6.78v.97H6.545S2 8.53 2 15.75c0 7.23 4.22 6.97 4.22 6.97h2.53v-3.08s-.13-3.97 3.92-3.97h6.73s3.79.06 3.79-3.67V5.8s.57-3.7-6.82-3.7zM12.1 4.4a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill="#3776AB"/><path d="M16.115 29.9c7.15 0 6.67-3.1 6.67-3.1l-.008-3.22h-6.78v-.97h9.458S30 23.47 30 16.25c0-7.23-4.22-6.97-4.22-6.97h-2.53v3.08s.13 3.97-3.92 3.97h-6.73s-3.79-.06-3.79 3.67v6.12s-.57 3.7 6.82 3.7zm3.785-2.3a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" fill="#FFD43B"/></svg> },
  { name: "Shopify", svg: <svg viewBox="0 0 109 124" width="18" height="20"><path d="M74.7 14.8c-.1-.1-.2-.2-.4-.2s-.3-.1-.5-.1H51.5c-.4 0-.7.2-.9.5l-8.2 22.5c-.2.5 0 1.1.5 1.3.1.1.3.1.4.1h11.8c.5 0 .9-.3 1.1-.8l2.3-6.2 6.8 25.3-16.5 5.2-10.9-40.5c-.1-.4-.5-.7-.9-.7H28.3c-.5 0-.9.3-1.1.7L15.8 75.1l-10.4 3.3c-.5.2-.8.7-.7 1.2l2.8 16.5c.1.4.4.7.8.8.1 0 .2.1.3.1.3 0 .5-.1.7-.3l12.5-9.8 11.6 43.1c.1.5.5.8 1 .8h11.4c.4 0 .8-.2 1-.6l31.8-78.2 8.4-2.6c.5-.2.8-.7.7-1.2L75.1 15c0-.1-.1-.2-.2-.3z" fill="#96BF48"/></svg> },
  { name: "AI", svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/><path d="M12 7v3"/><path d="M12 14a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/><path d="M12 12v-2"/><path d="M5 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/><path d="M7.5 12h3"/><path d="M19 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/><path d="M13.5 12h3"/></svg> },
  { name: "ML", svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 16V8l4 5 4-5v8"/><path d="M6 12h2"/><path d="M16 12h2"/></svg> },
  { name: "React", svg: <svg viewBox="-11.5 -10.23 23 20.46" width="20" height="20" fill="none"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
  { name: "Next.js", svg: <svg viewBox="0 0 180 180" width="20" height="20"><mask id="nm" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="black"/></mask><g mask="url(#nm)"><circle cx="90" cy="90" r="90" fill="black"/><path d="M149.508 157.52L69.142 54H54V125.97H66.139V70.846L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#np)"/><rect x="115" y="54" width="12" height="72" fill="url(#np2)"/></g><defs><linearGradient id="np" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient><linearGradient id="np2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient></defs></svg> },
  { name: "Tailwind CSS", svg: <svg viewBox="0 0 32 32" width="24" height="24"><path fillRule="evenodd" clipRule="evenodd" d="M16 6.4c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4.806.202 1.382.787 2.017 1.431C16.705 12.938 17.844 14.133 20 14.133c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-.806-.202-1.382-.787-2.017-1.431C19.295 7.595 18.156 6.4 16 6.4zM8 14.133C3.733 14.133 1.067 16.267 0 20.533c1.6-2.133 3.467-2.933 5.6-2.4.806.202 1.382.787 2.017 1.431 1.088 1.107 2.227 2.302 4.383 2.302 4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-.806-.202-1.382-.787-2.017-1.431C11.295 15.328 10.156 14.133 8 14.133z" fill="#38BDF8"/></svg> },
  { name: "Supabase", svg: <svg viewBox="0 0 109 113" width="18" height="18"><path d="M63.708 110.284c-2.86 3.601-8.952 1.547-8.952-3.042V66.628h29.711c5.392 0 8.38 6.422 4.978 10.208L63.708 110.284z" fill="url(#sA)"/><path d="M45.317 2.071c2.86-3.601 8.952-1.547 8.952 3.042v40.614H24.558c-5.392 0-8.38-6.422-4.978-10.208L45.317 2.071z" fill="#3ECF8E"/><defs><linearGradient id="sA" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse"><stop stopColor="#249361"/><stop offset="1" stopColor="#3ECF8E"/></linearGradient></defs></svg> },
  { name: "TypeScript", svg: <svg viewBox="0 0 32 32" width="20" height="20"><rect width="32" height="32" rx="4" fill="#3178c6"/><text x="5" y="23" fontSize="17" fill="white" fontFamily="Arial" fontWeight="bold">TS</text></svg> },
  { name: "Vite", svg: <svg viewBox="0 0 410 404" width="20" height="20"><path d="M399.641 59.525L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.582 59.556C6.381 52.19 12.68 43.267 21.028 44.759L205.223 77.682C206.398 77.892 207.601 77.892 208.776 77.682L389.119 44.817C397.439 43.342 403.768 52.208 399.641 59.525Z" fill="url(#vA)"/><path d="M292.965 1.574L156.801 28.255C154.563 28.694 152.906 30.59 152.771 32.866L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 172.9 194.87 176.524L185.087 296.444C184.741 300.704 190.131 302.659 192.685 299.167L201.868 286.762L299.574 104.021C301.432 100.563 298.867 96.411 295.004 96.411H256.366C252.541 96.411 249.972 92.327 251.762 88.883L292.035 10.133C293.775 6.781 291.289 2.783 287.565 2.796L292.965 1.574Z" fill="url(#vB)"/><defs><linearGradient id="vA" x1="6" y1="33" x2="235" y2="344" gradientUnits="userSpaceOnUse"><stop stopColor="#41D1FF"/><stop offset="1" stopColor="#BD34FE"/></linearGradient><linearGradient id="vB" x1="194.651" y1="8.818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse"><stop stopColor="#FF3E00"/><stop offset="1" stopColor="#FF9900"/></linearGradient></defs></svg> },
  { name: "Node.js", svg: <svg viewBox="0 0 32 32" width="20" height="20"><path d="M16 3L3 10.5v13L16 31l13-7.5v-13L16 3z" fill="#539e43"/><text x="16" y="20.5" textAnchor="middle" fontSize="9" fill="white" fontFamily="Arial" fontWeight="bold">node</text></svg> },
  { name: "Express", svg: <svg viewBox="0 0 40 20" width="40" height="20"><text x="0" y="15" fontSize="12" fill="currentColor" fontFamily="'Space Grotesk',Arial" fontWeight="700">express</text></svg> },
  { name: "PostgreSQL", svg: <svg viewBox="0 0 32 32" width="20" height="20"><ellipse cx="16" cy="16" rx="13" ry="13" fill="#336791"/><text x="16" y="20" textAnchor="middle" fontSize="8.5" fill="white" fontFamily="Arial" fontWeight="bold">PG</text></svg> },
  { name: "Playwright", svg: <svg viewBox="0 0 32 32" width="20" height="20"><circle cx="16" cy="16" r="13" fill="#2EAD33"/><text x="16" y="20" textAnchor="middle" fontSize="8.5" fill="white" fontFamily="Arial" fontWeight="bold">PW</text></svg> },
  
];
const ALL = [...TechLogos, ...TechLogos];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10 animate-fadein"
          style={{ border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
          <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--accent)" }}>Available for projects</span>
        </div>

        {/* Main headline — bigger and bolder */}
        <h1
          className="font-display font-bold leading-[1.05] mb-6 animate-slideup"
          style={{ animationDelay: "0.1s", fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
        >
          <span className="block" style={{ color: "var(--fg)" }}>We build websites</span>
          <span className="block text-gradient">that grow your</span>
          <span className="block text-gradient">business.</span>
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl leading-relaxed mb-8 animate-slideup"
          style={{ color: "var(--fg-muted)", animationDelay: "0.15s" }}>
          Full-stack Dev from Tamil Nadu — crafting high-performance landing pages, web apps, CRMs, and SaaS products.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20 animate-slideup" style={{ animationDelay: "0.25s" }}>
          <a href="#book"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all hover:opacity-90 hover:scale-105 text-sm"
            style={{ background: "var(--accent)", color: "var(--bg)" }}>
            Book a Free Call
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#work"
            className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-full transition-all text-sm hover:opacity-80"
            style={{ border: "1px solid var(--border)", color: "var(--fg-muted)" }}>
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 animate-fadein"
          style={{ borderTop: "1px solid var(--border)", animationDelay: "0.3s" }}>
          {[
            { n: "2+", label: "Years Experience" },
            { n: "20+", label: "Projects Delivered" },
            { n: "100%", label: "Client Satisfaction" },
            { n: "24h", label: "Avg Response Time" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold" style={{ color: "var(--accent)" }}>{s.n}</div>
              <div className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech ticker */}
      <div className="overflow-hidden mt-16 py-5"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="flex animate-marquee gap-10 whitespace-nowrap items-center">
          {ALL.map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 text-sm font-medium flex-shrink-0"
              style={{ color: "var(--fg-subtle)" }}>
              <span className="flex-shrink-0 opacity-85">{tech.svg}</span>
              {tech.name}
              <span className="w-1 h-1 rounded-full ml-4" style={{ background: "var(--border)" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
