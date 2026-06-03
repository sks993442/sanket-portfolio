import React from "react";
import { motion } from "framer-motion";
import { Binary, FolderCode, Trophy, Server, BrainCircuit } from "lucide-react";

const highlightCards = [
  {
    title: "250+ DSA Problems",
    description: "Solved on LeetCode & platforms",
    icon: Binary,
    color: "text-purple-400 border-purple-500/20 shadow-purple-950/20",
    bg: "bg-purple-500/5"
  },
  {
    title: "7+ Major Projects",
    description: "Full-Stack & AI Systems built",
    icon: FolderCode,
    color: "text-blue-400 border-blue-500/20 shadow-blue-950/20",
    bg: "bg-blue-500/5"
  },
  {
    title: "3 Hackathons",
    description: "National Hackathon Winner, Runner-Up & National Finalist",
    icon: Trophy,
    color: "text-yellow-400 border-yellow-500/20 shadow-yellow-950/20",
    bg: "bg-yellow-500/5"
  },
  {
    title: "MERN Developer",
    description: "MongoDB, Express, React, Node",
    icon: Server,
    color: "text-green-400 border-green-500/20 shadow-green-950/20",
    bg: "bg-green-500/5"
  },
  {
    title: "AI Integration",
    description: "OpenAI, Gemini & Groq APIs",
    icon: BrainCircuit,
    color: "text-cyan-400 border-cyan-500/20 shadow-cyan-950/20",
    bg: "bg-cyan-500/5"
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030014]/60">
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-900/10 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-4xl text-white inline-block relative"
          >
            About Me
            <span className="block h-[3px] w-1/2 bg-purple-500 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mt-3 text-sm max-w-md mx-auto"
          >
            Get to know my background, philosophy, and key stats.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Paragraph Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-display font-semibold text-2xl text-white">
              Sanket Kumar Singh
            </h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I am a passionate Full-Stack Developer and AI Enthusiast currently pursuing my B.Tech in Computer Science and Information Technology from Sagar Institute of Research and Technology, Bhopal (Graduation 2027).
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              I specialize in building scalable web applications, secure backend systems, RESTful APIs, and AI-powered platforms. I enjoy solving real-world problems using modern technologies like React.js, Node.js, Express.js, MongoDB, JWT, and LLM APIs.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              My engineering philosophy revolves around code quality, secure authentication systems, and seamless UI/UX. I am constantly exploring the frontier of Generative AI, prompt engineering, and intelligent agents.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold glassmorphism border border-purple-500/20 text-purple-300">
                CS & IT Student
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold glassmorphism border border-blue-500/20 text-blue-300">
                Problem Solver
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold glassmorphism border border-cyan-500/20 text-cyan-300">
                AI Builder
              </span>
            </div>
          </motion.div>

          {/* Cards Column */}
          <motion.div
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlightCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`glow-card glassmorphism p-5 rounded-2xl border flex flex-col justify-between h-40 ${card.color} ${card.bg} transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/10">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-white mb-1">
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
