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

            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
              Abhishek Gupta
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-gray-300">
              Senior Full Stack Engineer • 9+ Years Experience
            </p>

            <p className="mt-4 text-gray-400 text-lg">
              Designing and building high-scale banking & fintech systems used in production environments.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 rounded-full font-medium hover:scale-105 transition-all shadow-lg"
              >
                View Projects
              </a>

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
            I am passionate about building performant, user-centric applications and am actively seeking senior full-stack opportunities across Canada and North America, with a strong interest in fintech and enterprise platforms.
          </p>
        </motion.section>

        <motion.section
          id="tech"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="scroll-mt-24 py-24 px-6 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Tech Stack</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "JavaScript",
              "Java",
              "Spring Boot",
              "MySQL",
              "Oracle DB",
              "Next.js",
              "React Native",
              "Tailwind CSS",
              "Git",
              "Jira",
              "CI/CD",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="scroll-mt-24 py-24 px-6 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-12">

            {/* MAYBANK - SENIOR */}
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-xl font-semibold">
                Senior Software Engineer
              </h3>
              <p className="text-gray-400 text-sm">
                Maybank • 2021 - Present
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li>
                  • Led end-to-end development of a Loan Origination System used in enterprise banking workflows
                </li>
                <li>
                  • Designed scalable frontend architecture using React, improving maintainability and performance
                </li>
                <li>
                  • Built and integrated secure REST APIs using Java & Spring Boot
                </li>
                <li>
                  • Collaborated with cross-functional teams to deliver production-ready features
                </li>
              </ul>
            </div>

            {/* MAYBANK - EARLIER ROLE */}
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-xl font-semibold">
                Business Solution Engineer
              </h3>
              <p className="text-gray-400 text-sm">
                Maybank • 2018 - 2021
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li>
                  • Developed customer onboarding and loan prospecting platforms for banking users
                </li>
                <li>
                  • Built reusable UI components to improve development efficiency
                </li>
                <li>
                  • Integrated backend services and optimized data handling workflows
                </li>
              </ul>
            </div>

            {/* INFOSYS */}
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-xl font-semibold">
                Systems Engineer
              </h3>
              <p className="text-gray-400 text-sm">
                Infosys • 2014 - 2016
              </p>

              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li>
                  • Built UI components for investment banking CRM using AngularJS
                </li>
                <li>
                  • Worked on enterprise tools and improved usability of internal systems
                </li>
              </ul>
            </div>

          </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* PROJECT 1 */}
            <div className="group p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                Loan Origination System
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Led end-to-end development of an enterprise banking system handling loan processing,
                customer onboarding, and credit workflows in a production environment.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Spring Boot", "Oracle DB"].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Designed scalable frontend architecture</li>
                <li>• Built secure REST APIs</li>
                <li>• Optimized performance for enterprise use</li>
              </ul>
            </div>

            {/* PROJECT 2 */}
            <div className="group p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                Loan Prospecting Platform
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Developed a platform to streamline customer acquisition and onboarding workflows
                for banking users with improved efficiency and usability.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Java", "REST APIs"].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Improved onboarding experience</li>
                <li>• Built reusable UI components</li>
                <li>• Integrated backend services</li>
              </ul>
            </div>

            {/* PROJECT 3 */}
            <div className="group p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                Insurance Management App
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Building a mobile-first application to digitize insurance operations,
                enabling efficient policy tracking and admin workflows.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Node.js", "MySQL"].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Admin + user mobile apps</li>
                <li>• API-driven architecture</li>
                <li>• Scalable backend design</li>
              </ul>
            </div>

          </div>
        </motion.section>

   {/* WHY ME SECTION */}
        <motion.section
          id="why-me"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="scroll-mt-24 py-24 px-6 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Me
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">

            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition">
              <h3 className="font-semibold text-lg mb-2">🚀 9+ Years Experience</h3>
              <p className="text-gray-400 text-sm">
                Strong background in building enterprise-grade applications in banking and fintech domains.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition">
              <h3 className="font-semibold text-lg mb-2">⚙️ Full Stack Expertise</h3>
              <p className="text-gray-400 text-sm">
                Hands-on experience across frontend (React, Next.js) and backend (Java, Spring Boot, Node.js).
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition">
              <h3 className="font-semibold text-lg mb-2">🏦 Domain Knowledge</h3>
              <p className="text-gray-400 text-sm">
                Deep understanding of banking workflows including loan origination, onboarding, and credit processes.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition">
              <h3 className="font-semibold text-lg mb-2">📈 Production Mindset</h3>
              <p className="text-gray-400 text-sm">
                Focused on building scalable, performant, and production-ready systems with clean architecture.
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

          <p className="text-gray-400 mb-8">
            Open to exciting opportunities, collaborations, and roles in Canada.
          </p>

          {/* CTA */}
          <a
            href="mailto:ab.gupta92@gmail.com"
            className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3 rounded-full font-medium hover:scale-105 transition-all shadow-lg"
          >
            Say Hello 👋
          </a>

          {/* Contact Info */}
          <div className="mt-10 text-gray-400 space-y-2">
            <p>Email: ab.gupta92@gmail.com</p>
            <p>Location: Toronto, Ontario • Canada 🇨🇦</p>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center gap-6">
            <a href="https://github.com/abhishekg1981992" target="_blank" className="hover:text-white transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/abhishek-gupta-50563644/" target="_blank" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </motion.section>

      </main>
    </>
  );
}