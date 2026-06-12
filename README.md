# H&A Dev Studio — Portfolio Website

Professional portfolio for **Hussain Rabbani & Ayub** — Full-Stack Dev Duo.

## Stack
- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Express.js + Nodemailer
- **Storage:** JSON file (`bookings.json`) — upgrade to DB anytime

---

## Project Structure
```
portfolio/
├── frontend/         ← React + Vite + Tailwind
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       └── components/
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── Services.jsx
│           ├── Work.jsx
│           ├── About.jsx
│           ├── BookCall.jsx
│           └── Footer.jsx
└── backend/          ← Express.js API
    ├── server.js
    ├── .env.example
    └── bookings.json  ← auto-created on first booking
```

---

## Setup

### 1. Backend

```bash
cd backend
cp .env.example .env
# Edit .env — add your shared Gmail and App Password
npm install
npm start
# Runs on http://localhost:5000
```

#### Gmail App Password setup:
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Search "App passwords" → Create one for "Mail"
4. Copy the 16-character password into `.env` as `MAIL_PASS`

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
# API calls auto-proxy to http://localhost:5000 via vite.config.js
```

### 3. Production Build

```bash
cd frontend
npm run build
# Output in frontend/dist/
# Deploy dist/ on Vercel / Netlify
# Deploy backend on Render / Railway
```

---

## Contact Numbers Included
- Hussain Rabbani: **+91 88077 09991**
- Ayub: **+91 93607 05572**

## Booking Flow
1. Visitor fills the Book a Call form
2. Data saved to `backend/bookings.json`
3. Email notification sent to your shared Gmail
4. WhatsApp quick-link included in email for fast follow-up

---

**Built with ❤️ for H&A Dev Studio**
