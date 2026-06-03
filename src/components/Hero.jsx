import React from "react";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import profileImg from "../assets/sanketttt.png";


export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#030014]"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-600/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-cyan-600/10 blur-[120px] animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-600/5 blur-[90px] animate-float-medium"></div>

      {/* Hero Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left grid lg:grid-cols-12 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glassmorphism border border-purple-500/20 w-fit mx-auto lg:mx-0 mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-4"
          >
            Hi, I'm{" "}
            <span className="text-gradient">
              Sanket Kumar Singh
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={itemVariants}
            className="font-sans font-medium text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 mb-6"
          >
            Software Development Engineer | Full-Stack Developer | AI Enthusiast
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
          >
            Results-oriented Full-Stack Developer skilled in building robust web platforms and AI-integrated systems. Proficient in the MERN stack with strong backend architecture, secure JWT authentication, REST APIs, and modern UI/UX principles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium shadow-lg shadow-purple-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl glassmorphism hover:bg-purple-950/20 text-gray-200 hover:text-white font-medium border border-purple-500/25 hover:border-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start space-x-4"
          >
            <a
              href="https://github.com/sks993442"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glassmorphism hover:bg-purple-950/30 text-gray-400 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanket-kumar-singh-44354a333/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glassmorphism hover:bg-purple-950/30 text-gray-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:sanketsingh8053@gmail.com"
              className="p-3 rounded-xl glassmorphism hover:bg-purple-950/30 text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Photo Circular Section */}
        <motion.div
          className="lg:col-span-5 flex justify-center relative order-first lg:order-last mb-8 lg:mb-0 group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
        >
          {/* Outer glowing halo behind the circle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] rounded-full bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 blur-[80px] group-hover:scale-105 transition-all duration-700 pointer-events-none z-0"></div>

          {/* Wrapper container that clips only the bottom part circularly */}
          <div className="relative w-[300px] sm:w-[360px] h-[400px] sm:h-[480px] overflow-hidden rounded-b-full z-10 flex items-end justify-center">

            {/* The background circle backdrop */}
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] rounded-full bg-[#121118] border border-purple-500/20 shadow-2xl shadow-purple-950/20 group-hover:border-cyan-500/30 transition-all duration-300 z-0">
              {/* Circular Grid Pattern inside the circle */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:16px_16px] rounded-full"></div>
            </div>

            {/* The Image popping out from the top of the circle */}
            <img
              src={profileImg}
              alt="Sanket Kumar Singh"
              className="absolute bottom-0 w-[85%] h-[290px] sm:h-[350px] object-cover object-top filter grayscale group-hover:grayscale-0 scale-[1.25] sm:scale-[1.3] origin-bottom group-hover:scale-[1.28] sm:group-hover:scale-[1.33] transition-all duration-700 ease-out z-10"
            />

            {/* Linear fade overlay at the bottom of the circle */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#121118] via-[#121118]/80 to-transparent pointer-events-none z-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
