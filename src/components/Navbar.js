"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "why-me", label: "Why Me" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop - 120;

          if (window.scrollY >= offsetTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative transition ${
      active === id
        ? "text-sky-400"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        >
          Abhishek Gupta
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {label}
              {active === id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sky-400 rounded"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Section (CTA + Mobile Menu Button) */}
        <div className="flex items-center gap-4">

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all shadow-lg"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-6">
          <div className="flex flex-col gap-4 mt-4">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-base ${
                  active === id ? "text-sky-400" : "text-gray-400"
                }`}
              >
                {label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 rounded-full text-center font-medium"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}