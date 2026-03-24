"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const sections = ["home", "about", "projects", "contact"];

        const handleScroll = () => {
            let current = "home";

            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();

                    // Section is in viewport (top half)
                    if (rect.top <= window.innerHeight / 2) {
                        current = id;
                    }
                }
            });

            // Special fix for bottom of page (Contact section)
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 50
            ) {
                current = "contact";
            }

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass = (id) =>
        `transition ${active === id
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`;

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-xl font-semibold tracking-wider bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                    <a href="#home" className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text font-semibold">
                        Abhishek Gupta
                    </a>
                </h1>

                {/* Nav Links */}
                <nav className="hidden md:flex gap-10 text-sm">
                    <a href="#home" className={linkClass("home")}>Home</a>
                    <a href="#about" className={linkClass("about")}>About</a>
                    <a href="#projects" className={linkClass("projects")}>Projects</a>
                    <a href="#contact" className={linkClass("contact")}>Contact</a>
                </nav>

                {/* CTA */}
                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                    Hire Me
                </button>

            </div>
        </header>
    );
}