"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen overflow-hidden pt-24 flex items-center justify-center">

          {/* Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl top-20 left-10"></div>
          <div className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl bottom-10 right-10"></div>

          <div className="relative z-10 text-center max-w-3xl px-6">

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Abhishek Gupta
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-gray-300">
              Senior Full Stack Developer
            </p>

            <p className="mt-4 text-gray-400 text-lg">
              Building scalable web applications with React, Java & Spring Boot
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                View Projects
              </button>

              <a
                href="/resume.pdf"
                download
                className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition"
              >
                Download Resume
              </a>
            </div>

          </div>
        </section>

        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="scroll-mt-24 py-24 px-6 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I am a Senior Product Engineer with 9+ years of experience designing and developing scalable enterprise applications.
            I have strong expertise in React, Java, and Spring Boot, and have led full-stack development of banking systems such as Loan Origination platforms.
            I am passionate about building performant, user-centric applications and am actively seeking opportunities in Canada.
          </p>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="scroll-mt-24 py-24 px-6 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
              <h3 className="text-xl font-semibold mb-2">Loan Origination System</h3>
              <p className="text-gray-400 text-sm">
                Led end-to-end full stack development for enterprise banking system using React, Spring Boot, and Oracle DB.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
              <h3 className="text-xl font-semibold mb-2">Loan Prospecting Platform</h3>
              <p className="text-gray-400 text-sm">
                Developed UI and backend APIs to enhance customer onboarding experience in banking domain.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-400 text-sm">
                Modern portfolio built with Next.js, Tailwind, and Framer Motion.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="scroll-mt-24 py-24 px-6 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>

          <p className="text-gray-400 mb-6">
            Let’s build something amazing together.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Get In Touch
          </button>
        </motion.section>

      </main>
    </>
  );
}