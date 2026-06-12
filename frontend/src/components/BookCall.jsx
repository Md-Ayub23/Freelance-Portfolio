// import { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const PAGES = [
//   "Home Page", "Services Page",
//   "About Us/Team Page", "Contact Page",
//   "Gallery/Portfolio", "Landing Page (Single Promotional Page)",
// ];

// export default function BookCall() {
//   const [form, setForm] = useState({
//     name: "", business: "", whatsapp: "", email: "",
//     pages: [], deadline: "", notes: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [done, setDone] = useState(false);

//   const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
//   const togglePage = (p) =>
//     set("pages", form.pages.includes(p)
//       ? form.pages.filter((x) => x !== p)
//       : [...form.pages, p]);

//   const handleSubmit = async () => {
//     if (!form.name || !form.whatsapp) {
//       toast.error("Name and WhatsApp number are required.");
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios.post("/api/book", form);
//       setDone(true);
//       toast.success("Booking received! We'll reach out shortly.");
//     } catch {
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputStyle = {
//     background: "var(--bg)",
//     border: "1px solid var(--border)",
//     color: "var(--fg)",
//     borderRadius: "12px",
//     padding: "12px 16px",
//     width: "100%",
//     fontSize: "14px",
//     outline: "none",
//     transition: "border-color 0.2s",
//   };

//   const focusIn  = (e) => (e.target.style.borderColor = "var(--accent)");
//   const focusOut = (e) => (e.target.style.borderColor = "var(--border)");

//   if (done) {
//     return (
//       <section id="book" className="py-24 px-6">
//         <div className="max-w-xl mx-auto text-center">
//           <div className="text-6xl mb-6">✅</div>
//           <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--fg)" }}>You're booked!</h3>
//           <p style={{ color: "var(--fg-muted)" }}>
//             Thanks! We'll contact you on WhatsApp within 24 hours.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="book" className="py-24 px-6">
//       <div className="max-w-2xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
//             Free Consultation
//           </span>
//           <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-3" style={{ color: "var(--fg)" }}>
//             Book a Call
//           </h2>
//           <p style={{ color: "var(--fg-muted)" }}>
//             Fill this quick form — we'll get back to you within 24 hours.
//           </p>
//         </div>

//         {/* Form card */}
//         <div className="rounded-2xl p-8 space-y-6 glow"
//           style={{ border: "1px solid var(--border)", background: "var(--bg2)" }}>

//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
//               Your name <span style={{ color: "var(--accent)" }}>*</span>
//             </label>
//             <input type="text" placeholder="Your name" value={form.name}
//               onChange={(e) => set("name", e.target.value)}
//               style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
//           </div>

//           {/* Business */}
//           <div>
//             <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
//               Business name
//             </label>
//             <input type="text" placeholder="Your business (optional)" value={form.business}
//               onChange={(e) => set("business", e.target.value)}
//               style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
//           </div>

//           {/* WhatsApp */}
//           <div>
//             <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
//               WhatsApp number <span style={{ color: "var(--accent)" }}>*</span>
//             </label>
//             <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.whatsapp}
//               onChange={(e) => set("whatsapp", e.target.value)}
//               style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
//               Email address
//             </label>
//             <input type="email" placeholder="you@example.com" value={form.email}
//               onChange={(e) => set("email", e.target.value)}
//               style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
//           </div>

//           {/* Pages */}
//           <div>
//             <label className="block text-sm font-medium mb-3" style={{ color: "var(--fg)" }}>
//               Which pages do you need?
//             </label>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//               {PAGES.map((p) => {
//                 const checked = form.pages.includes(p);
//                 return (
//                   <label key={p}
//                     className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all text-sm"
//                     style={{
//                       border: `1px solid ${checked ? "var(--accent)" : "var(--border)"}`,
//                       background: checked
//                         ? "color-mix(in srgb, var(--accent) 10%, transparent)"
//                         : "var(--bg)",
//                       color: checked ? "var(--accent)" : "var(--fg-muted)",
//                     }}>
//                     <input type="checkbox" className="hidden" checked={checked} onChange={() => togglePage(p)} />
//                     <span className="w-4 h-4 rounded border flex items-center justify-center flex-shrink-0"
//                       style={{
//                         background: checked ? "var(--accent)" : "transparent",
//                         borderColor: checked ? "var(--accent)" : "var(--fg-subtle)",
//                       }}>
//                       {checked && (
//                         <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                           <path d="M2 5l2.5 2.5L8 3" stroke="var(--bg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       )}
//                     </span>
//                     {p}
//                   </label>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Deadline — kept, budget removed */}
//           <div>
//             <label className="block text-sm font-medium mb-3" style={{ color: "var(--fg)" }}>
//               When do you need it?
//             </label>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//               {["2–3 days (Urgent)", "1 week", "Flexible"].map((d) => {
//                 const sel = form.deadline === d;
//                 return (
//                   <button key={d} type="button" onClick={() => set("deadline", d)}
//                     className="py-3 rounded-xl text-sm font-medium transition-all"
//                     style={{
//                       border: `1px solid ${sel ? "var(--accent)" : "var(--border)"}`,
//                       background: sel
//                         ? "color-mix(in srgb, var(--accent) 10%, transparent)"
//                         : "var(--bg)",
//                       color: sel ? "var(--accent)" : "var(--fg-muted)",
//                     }}>
//                     {d}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//            {/* Link */}
//           <div>
//             <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
//               Any Reference Website ?
//             </label>
//             <textarea rows={1}
//               placeholder="Paste the Website link here ...."
//               value={form.notes} onChange={(e) => set("notes", e.target.value)}
//               style={{ ...inputStyle, resize: "none" }}
//               onFocus={focusIn} onBlur={focusOut} />
//           </div>

//           {/* Notes */}
//           <div>
//             <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
//               Anything else to mention?
//             </label>
//             <textarea rows={3}
//               placeholder="Tell us about your project, goals, references..."
//               value={form.notes} onChange={(e) => set("notes", e.target.value)}
//               style={{ ...inputStyle, resize: "none" }}
//               onFocus={focusIn} onBlur={focusOut} />
//           </div>

//           {/* Submit */}
//           <button type="button" onClick={handleSubmit} disabled={loading}
//             className="w-full font-bold py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
//             style={{ background: "var(--accent)", color: "var(--bg)" }}>
//             {loading ? "Sending..." : "Submit Booking →"}
//           </button>

//           <p className="text-center text-xs" style={{ color: "var(--fg-subtle)" }}>
//             We'll reach out within 24 hours via WhatsApp or email.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PAGES = [
  "Home Page", "Services Page",
  "About Us/Team Page", "Contact Page",
  "Gallery/Portfolio", "Landing Page (Single Promotional Page)",
];

export default function BookCall() {
  const [form, setForm] = useState({
    name: "", business: "", whatsapp: "", email: "",
    pages: [], deadline: "", notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const togglePage = (p) =>
    set("pages", form.pages.includes(p)
      ? form.pages.filter((x) => x !== p)
      : [...form.pages, p]);

  const handleSubmit = async () => {
    if (!form.name || !form.whatsapp) {
      toast.error("Name and WhatsApp number are required.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/book`, form);
      setDone(true);
      toast.success("Booking received! We'll reach out shortly.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: "var(--bg)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
    borderRadius: "12px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const focusIn  = (e) => (e.target.style.borderColor = "var(--accent)");
  const focusOut = (e) => (e.target.style.borderColor = "var(--border)");

  if (done) {
    return (
      <section id="book" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-6xl mb-6">✅</div>
          <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--fg)" }}>You're booked!</h3>
          <p style={{ color: "var(--fg-muted)" }}>
            Thanks! We'll contact you on WhatsApp within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            Free Consultation
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-3" style={{ color: "var(--fg)" }}>
            Book a Call
          </h2>
          <p style={{ color: "var(--fg-muted)" }}>
            Fill this quick form — we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl p-8 space-y-6 glow"
          style={{ border: "1px solid var(--border)", background: "var(--bg2)" }}>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
              Your name <span style={{ color: "var(--accent)" }}>*</span>
            </label>
            <input type="text" placeholder="Your name" value={form.name}
              onChange={(e) => set("name", e.target.value)}
              style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
          </div>

          {/* Business */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
              Business name
            </label>
            <input type="text" placeholder="Your business (optional)" value={form.business}
              onChange={(e) => set("business", e.target.value)}
              style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
              WhatsApp number <span style={{ color: "var(--accent)" }}>*</span>
            </label>
            <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
              Email address
            </label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={(e) => set("email", e.target.value)}
              style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
          </div>

          {/* Pages */}
          <div>
            <label className="block text-sm font-medium mb-3" style={{ color: "var(--fg)" }}>
              Which pages do you need?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PAGES.map((p) => {
                const checked = form.pages.includes(p);
                return (
                  <label key={p}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all text-sm"
                    style={{
                      border: `1px solid ${checked ? "var(--accent)" : "var(--border)"}`,
                      background: checked
                        ? "color-mix(in srgb, var(--accent) 10%, transparent)"
                        : "var(--bg)",
                      color: checked ? "var(--accent)" : "var(--fg-muted)",
                    }}>
                    <input type="checkbox" className="hidden" checked={checked} onChange={() => togglePage(p)} />
                    <span className="w-4 h-4 rounded border flex items-center justify-center flex-shrink-0"
                      style={{
                        background: checked ? "var(--accent)" : "transparent",
                        borderColor: checked ? "var(--accent)" : "var(--fg-subtle)",
                      }}>
                      {checked && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="var(--bg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                    {p}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Deadline — kept, budget removed */}
          <div>
            <label className="block text-sm font-medium mb-3" style={{ color: "var(--fg)" }}>
              When do you need it?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["2–3 days (Urgent)", "1 week", "Flexible"].map((d) => {
                const sel = form.deadline === d;
                return (
                  <button key={d} type="button" onClick={() => set("deadline", d)}
                    className="py-3 rounded-xl text-sm font-medium transition-all"
                    style={{
                      border: `1px solid ${sel ? "var(--accent)" : "var(--border)"}`,
                      background: sel
                        ? "color-mix(in srgb, var(--accent) 10%, transparent)"
                        : "var(--bg)",
                      color: sel ? "var(--accent)" : "var(--fg-muted)",
                    }}>
                    {d}
                  </button>
                );
              })}
            </div>
          </div>

           {/* Link */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
              Any Reference Website ?
            </label>
            <textarea rows={1}
              placeholder="Paste the Website link here ...."
              value={form.notes} onChange={(e) => set("notes", e.target.value)}
              style={{ ...inputStyle, resize: "none" }}
              onFocus={focusIn} onBlur={focusOut} />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--fg)" }}>
              Anything else to mention?
            </label>
            <textarea rows={3}
              placeholder="Tell us about your project, goals, references..."
              value={form.notes} onChange={(e) => set("notes", e.target.value)}
              style={{ ...inputStyle, resize: "none" }}
              onFocus={focusIn} onBlur={focusOut} />
          </div>

          {/* Submit */}
          <button type="button" onClick={handleSubmit} disabled={loading}
            className="w-full font-bold py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            style={{ background: "var(--accent)", color: "var(--bg)" }}>
            {loading ? "Sending..." : "Submit Booking →"}
          </button>

          <p className="text-center text-xs" style={{ color: "var(--fg-subtle)" }}>
            We'll reach out within 24 hours via WhatsApp or email.
          </p>
        </div>
      </div>
    </section>
  );
}
