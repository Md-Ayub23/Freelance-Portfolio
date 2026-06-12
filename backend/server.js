// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const DB_FILE = path.join(__dirname, "bookings.json");

// function loadBookings() {
//   if (!fs.existsSync(DB_FILE)) return [];
//   try { return JSON.parse(fs.readFileSync(DB_FILE, "utf-8")); }
//   catch { return []; }
// }

// function saveBooking(data) {
//   const all = loadBookings();
//   all.push({ ...data, id: Date.now(), createdAt: new Date().toISOString() });
//   fs.writeFileSync(DB_FILE, JSON.stringify(all, null, 2));
// }

// function createTransporter() {
//   return nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.MAIL_USER || "mdayub0205@gmail.com",
//       pass: process.env.MAIL_PASS,   // Gmail App Password
//     },
//   });
// }

// async function sendNotification(booking) {
//   if (!process.env.MAIL_PASS) {
//     console.error("❌ MAIL_PASS is not set in .env — email NOT sent. Booking saved to JSON only.");
//     console.error("   Fix: create backend/.env with MAIL_USER and MAIL_PASS (Gmail App Password).");
//     return { sent: false, reason: "MAIL_PASS not configured" };
//   }

//   const transporter = createTransporter();

//   const html = `
//     <div style="font-family:'Inter',sans-serif;max-width:580px;margin:0 auto;background:#0a0a0a;color:#e5e5e5;padding:36px;border-radius:16px;border:1px solid #1e1e1e">
//       <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
//         <div style="background:#6ee7b715;border:1px solid #6ee7b730;border-radius:8px;padding:8px 14px;font-size:18px;font-weight:800;color:#fff;letter-spacing:0.5px">
//           H <span style="color:#6ee7b7">&</span> A
//         </div>
//         <div>
//           <div style="font-size:13px;font-weight:600;color:#fff">Dev Studio</div>
//           <div style="font-size:11px;color:#555;letter-spacing:0.1em;text-transform:uppercase">New Booking</div>
//         </div>
//       </div>

//       <h2 style="color:#6ee7b7;font-size:20px;margin:0 0 4px">🎉 New Project Enquiry</h2>
//       <p style="color:#555;font-size:12px;margin:0 0 24px">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>

//       <hr style="border:none;border-top:1px solid #1e1e1e;margin-bottom:20px"/>

//       <table style="width:100%;border-collapse:collapse;font-size:14px">
//         <tr><td style="padding:10px 0;color:#666;width:140px;vertical-align:top">Name</td>
//             <td style="color:#fff;font-weight:600">${booking.name}</td></tr>
//         <tr><td style="padding:10px 0;color:#666;vertical-align:top">Business</td>
//             <td style="color:#fff">${booking.business || "—"}</td></tr>
//         <tr><td style="padding:10px 0;color:#666;vertical-align:top">WhatsApp</td>
//             <td><a href="https://wa.me/${(booking.whatsapp||"").replace(/\D/g,"")}?text=Hi+${encodeURIComponent(booking.name||"")}%2C+thanks+for+reaching+out+to+H%26A+Dev+Studio!" style="color:#6ee7b7;font-weight:700;font-size:15px">${booking.whatsapp}</a><br><span style="color:#555;font-size:11px">↑ Click to open WhatsApp chat</span></td></tr>
//         <tr><td style="padding:10px 0;color:#666;vertical-align:top">Email</td>
//             <td style="color:#fff">${booking.email ? `<a href="mailto:${booking.email}" style="color:#6ee7b7">${booking.email}</a>` : "—"}</td></tr>
//         <tr><td style="padding:10px 0;color:#666;vertical-align:top">Pages Needed</td>
//             <td style="color:#fff">${(booking.pages||[]).length > 0 ? (booking.pages||[]).join(", ") : "—"}</td></tr>
//         <tr><td style="padding:10px 0;color:#666;vertical-align:top">Deadline</td>
//             <td style="color:#6ee7b7;font-weight:600">${booking.deadline || "—"}</td></tr>
//         <tr><td style="padding:10px 0;color:#666;vertical-align:top">Notes</td>
//             <td style="color:#fff">${booking.notes || "—"}</td></tr>
//       </table>

//       <hr style="border:none;border-top:1px solid #1e1e1e;margin:20px 0"/>

//       <a href="https://wa.me/${(booking.whatsapp||"").replace(/\D/g,"")}" 
//          style="display:inline-block;background:#25D366;color:#fff;font-weight:700;padding:12px 24px;border-radius:10px;text-decoration:none;font-size:14px">
//         💬 Reply on WhatsApp
//       </a>

//       <p style="color:#333;font-size:11px;margin-top:24px">
//         H&A Dev Studio · mdayub0205@gmail.com · Tamil Nadu, India
//       </p>
//     </div>
//   `;

//   try {
//     await transporter.sendMail({
//       from: `"H&A Dev Studio" <${process.env.MAIL_USER || "mdayub0205@gmail.com"}>`,
//       to: process.env.MAIL_TO || process.env.MAIL_USER || "mdayub0205@gmail.com",
//       replyTo: booking.email || undefined,
//       subject: `📅 New Booking: ${booking.name}${booking.business ? ` (${booking.business})` : ""} — ${booking.deadline || "Flexible"}`,
//       html,
//     });
//     console.log("✅ Notification email sent for booking:", booking.name);
//     return { sent: true };
//   } catch (err) {
//     console.error("❌ Failed to send notification email:", err.message);
//     return { sent: false, reason: err.message };
//   }
// }

// // ── Routes ──────────────────────────────────────────────────
// app.post("/api/book", async (req, res) => {
//   const { name, whatsapp } = req.body;
//   if (!name || !whatsapp)
//     return res.status(400).json({ error: "name and whatsapp are required" });

//   try {
//     saveBooking(req.body);
//     const mailResult = await sendNotification(req.body);
//     if (!mailResult?.sent) {
//       console.warn("⚠️  Booking saved but email not sent:", mailResult?.reason);
//     }
//     res.json({ ok: true, message: "Booking received!" });
//   } catch (err) {
//     console.error("Booking error:", err);
//     // Still return success if save worked but email failed
//     res.json({ ok: true, message: "Booking saved!" });
//   }
// });

// app.get("/api/bookings", (req, res) => res.json(loadBookings()));
// app.get("/api/health", (_, res) => res.json({ status: "ok" }));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅  H&A Backend running on http://localhost:${PORT}`));


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, "bookings.json");

function loadBookings() {
  if (!fs.existsSync(DB_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(DB_FILE, "utf-8")); }
  catch { return []; }
}

function saveBooking(data) {
  const all = loadBookings();
  all.push({ ...data, id: Date.now(), createdAt: new Date().toISOString() });
  fs.writeFileSync(DB_FILE, JSON.stringify(all, null, 2));
}

async function sendNotification(booking) {
  if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY is not set — email NOT sent. Booking saved to JSON only.");
    return { sent: false, reason: "RESEND_API_KEY not configured" };
  }

  const html = `
    <div style="font-family:'Inter',sans-serif;max-width:580px;margin:0 auto;background:#0a0a0a;color:#e5e5e5;padding:36px;border-radius:16px;border:1px solid #1e1e1e">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
        <div style="background:#6ee7b715;border:1px solid #6ee7b730;border-radius:8px;padding:8px 14px;font-size:18px;font-weight:800;color:#fff;letter-spacing:0.5px">
          H <span style="color:#6ee7b7">&</span> A
        </div>
        <div>
          <div style="font-size:13px;font-weight:600;color:#fff">Dev Studio</div>
          <div style="font-size:11px;color:#555;letter-spacing:0.1em;text-transform:uppercase">New Booking</div>
        </div>
      </div>

      <h2 style="color:#6ee7b7;font-size:20px;margin:0 0 4px">🎉 New Project Enquiry</h2>
      <p style="color:#555;font-size:12px;margin:0 0 24px">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>

      <hr style="border:none;border-top:1px solid #1e1e1e;margin-bottom:20px"/>

      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:10px 0;color:#666;width:140px;vertical-align:top">Name</td>
            <td style="color:#fff;font-weight:600">${booking.name}</td></tr>
        <tr><td style="padding:10px 0;color:#666;vertical-align:top">Business</td>
            <td style="color:#fff">${booking.business || "—"}</td></tr>
        <tr><td style="padding:10px 0;color:#666;vertical-align:top">WhatsApp</td>
            <td><a href="https://wa.me/${(booking.whatsapp||"").replace(/\D/g,"")}?text=Hi+${encodeURIComponent(booking.name||"")}%2C+thanks+for+reaching+out+to+H%26A+Dev+Studio!" style="color:#6ee7b7;font-weight:700;font-size:15px">${booking.whatsapp}</a><br><span style="color:#555;font-size:11px">↑ Click to open WhatsApp chat</span></td></tr>
        <tr><td style="padding:10px 0;color:#666;vertical-align:top">Email</td>
            <td style="color:#fff">${booking.email ? `<a href="mailto:${booking.email}" style="color:#6ee7b7">${booking.email}</a>` : "—"}</td></tr>
        <tr><td style="padding:10px 0;color:#666;vertical-align:top">Pages Needed</td>
            <td style="color:#fff">${(booking.pages||[]).length > 0 ? (booking.pages||[]).join(", ") : "—"}</td></tr>
        <tr><td style="padding:10px 0;color:#666;vertical-align:top">Deadline</td>
            <td style="color:#6ee7b7;font-weight:600">${booking.deadline || "—"}</td></tr>
        <tr><td style="padding:10px 0;color:#666;vertical-align:top">Notes</td>
            <td style="color:#fff">${booking.notes || "—"}</td></tr>
      </table>

      <hr style="border:none;border-top:1px solid #1e1e1e;margin:20px 0"/>

      <a href="https://wa.me/${(booking.whatsapp||"").replace(/\D/g,"")}" 
         style="display:inline-block;background:#25D366;color:#fff;font-weight:700;padding:12px 24px;border-radius:10px;text-decoration:none;font-size:14px">
        💬 Reply on WhatsApp
      </a>

      <p style="color:#333;font-size:11px;margin-top:24px">
        H&A Dev Studio · mdayub0205@gmail.com · Tamil Nadu, India
      </p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "H&A Dev Studio <onboarding@resend.dev>",
        to: process.env.MAIL_TO || "mdayub0205@gmail.com",
        reply_to: booking.email || undefined,
        subject: `📅 New Booking: ${booking.name}${booking.business ? ` (${booking.business})` : ""} — ${booking.deadline || "Flexible"}`,
        html,
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Resend API error ${res.status}: ${errText}`);
    }
    console.log("✅ Notification email sent for booking:", booking.name);
    return { sent: true };
  } catch (err) {
    console.error("❌ Failed to send notification email:", err.message);
    return { sent: false, reason: err.message };
  }
}

// ── Routes ──────────────────────────────────────────────────
app.post("/api/book", async (req, res) => {
  const { name, whatsapp } = req.body;
  if (!name || !whatsapp)
    return res.status(400).json({ error: "name and whatsapp are required" });

  try {
    saveBooking(req.body);
    const mailResult = await sendNotification(req.body);
    if (!mailResult?.sent) {
      console.warn("⚠️  Booking saved but email not sent:", mailResult?.reason);
    }
    res.json({ ok: true, message: "Booking received!" });
  } catch (err) {
    console.error("Booking error:", err);
    // Still return success if save worked but email failed
    res.json({ ok: true, message: "Booking saved!" });
  }
});

app.get("/api/bookings", (req, res) => res.json(loadBookings()));
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅  H&A Backend running on http://localhost:${PORT}`));