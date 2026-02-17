import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Dhana Laxmi</h1>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-600 transition"
            >
              {link}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1G2Ir9yUWSwpX3hbpxAVVQdFqWMBLetMj/view?usp=drive_link"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition"
            >
              {link}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1G2Ir9yUWSwpX3hbpxAVVQdFqWMBLetMj/view?usp=drive_link"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

function SectionWrapper({ id, children }) {
  return (
    <section
      id={id}
      className="flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-4xl w-full">{children}</div>
    </section>
  );
}

function Home() {
  return (
    <SectionWrapper id="home">
      <div className="pt-20 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-600">Dhana Laxmi Dupakuntla</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-600">
          Python Developer | Web Developer
        </h3>
        <p className="max-w-2xl mx-auto text-gray-500">
          Dynamic and detail-oriented developer with strong expertise in building responsive web applications and RESTful APIs.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </SectionWrapper>
  );
}

function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-1 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
          <p className="text-gray-600">
            I am a passionate Python and Web Developer proficient in Python, JavaScript, React, Express, and MySQL. I focus on writing clean, maintainable code and enjoy solving real-world problems in fast-paced environments.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

function Skills() {
  const skills = [
    "Python",
    "SQL",
    "JavaScript",
    "React",
    "Express.js",
    "HTML",
    "CSS",
    "Firebase",
    "Supabase",
    "MySQL",
    "Git",
    "GitHub",
    "VS Code",
    "Microsoft Excel",
  ];

  return (
    <SectionWrapper id="skills">
      <div>
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 p-4 rounded-2xl text-center shadow hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function Projects() {
  const projects = [
    {
      title: "Daily Tasks",
      description:
        "Built a MERN stack application to manage daily tasks with features to add, update, delete, and mark tasks as completed.",
      tech: "MongoDB, Express.js, React, Node.js",
      demo: "#",
      github: "https://github.com/dhanalaxmidupakuntla-tech",
    },
    {
      title: "Tourism Management System",
      description:
        "Built a full-stack tourism application with user authentication, tourist place listings, booking management, and secure JWT authorization.",
      tech: "MongoDB, Express.js, React, Node.js",
      demo: "#",
      github: "https://github.com/dhanalaxmidupakuntla-tech",
    },
  ];

  return (
    <SectionWrapper id="projects">
      <div>
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500">{project.tech}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Contact Me
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-2xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/dhanalaxmidupakuntla/"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dhanalaxmidupakuntla-tech"
            target="GitHub"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
