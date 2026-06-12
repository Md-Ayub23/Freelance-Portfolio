const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/ma2.png"
                alt="H&A Dev Studio"
                style={{ height: "42px", width: "auto", maxWidth: "170px", objectFit: "contain" }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--fg-muted)" }}>
              A Full-stack Dev building high-quality web products for businesses across India and beyond.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
              style={{ border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)", background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
              <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>Open for projects</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: "var(--fg)" }}>Services</h4>
            <ul className="space-y-3">
              {["Landing Pages", "Full-Stack Apps", "UI/UX Design", "API Development", "Deployment"].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-sm transition-opacity hover:opacity-100 flex items-center gap-2 group"
                    style={{ color: "var(--fg-muted)" }}>
                    <span className="w-1 h-1 rounded-full transition-all group-hover:w-2" style={{ background: "var(--accent)", flexShrink: 0 }} />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: "var(--fg)" }}>Work</h4>
            <ul className="space-y-3">
              {["ZK Clothes","PixelPerfect", "Radiance Dental CRM", "Radiance Testing", "Dental Website"].map((l) => (
                <li key={l}>
                  <a href="#work" className="text-sm transition-opacity hover:opacity-100 flex items-center gap-2 group"
                    style={{ color: "var(--fg-muted)" }}>
                    <span className="w-1 h-1 rounded-full transition-all group-hover:w-2" style={{ background: "var(--accent)", flexShrink: 0 }} />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: "var(--fg)" }}>Get in Touch</h4>
            <div className="space-y-3">

             

              {/* Contact card 2 */}
              <a href="tel:+918807709991"
                className="flex items-center gap-3 rounded-xl p-3.5 transition-all hover:scale-[1.02] group"
                style={{ border: "1px solid var(--border)", background: "var(--bg)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-.55a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold group-hover:opacity-80 transition-opacity" style={{ color: "var(--fg)" }}>+91 88077 09991</div>
                  <div className="text-xs" style={{ color: "var(--fg-subtle)" }}>Call or WhatsApp</div>
                </div>
              </a>

              {/* WhatsApp button */}
              <a href="https://wa.me/918807709991" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl p-3 transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "#25D366", color: "#fff" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-sm font-semibold">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
            © {currentYear} Mohammed Ayub · Tamil Nadu, India
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: "var(--fg-subtle)" }}>Your project, built right - let's talk ..!</span>
            <a href="#book"
              className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "var(--bg)" }}>
              Book a Call ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
