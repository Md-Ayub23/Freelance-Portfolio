import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import BookCall from "./components/BookCall";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("ha-theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ha-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)" }}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: "var(--bg2)", color: "var(--fg)", border: "1px solid var(--border)" },
        }}
      />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Services />
      <Work />
      <About />
      <BookCall />
      <Footer />
    </div>
  );
}
