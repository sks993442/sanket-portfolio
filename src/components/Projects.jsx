import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ExternalLink, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa6";


export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 14 }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030014]">
      {/* Dynamic blurred light blobs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none animate-float-slow"></div>

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
            Featured Projects
            <span className="block h-[3px] w-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mt-3 text-sm max-w-md mx-auto"
          >
            A look at my technical portfolio, featuring AI systems and full-stack platforms.
          </motion.p>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glassmorphism rounded-3xl border border-purple-500/15 overflow-hidden flex flex-col justify-between h-full glow-card transition-all duration-300 relative group"
            >
              {/* Top border ambient color bar */}
              <div className={`h-[4px] w-full bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Header info */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      {project.date}
                    </span>
                    <div className="p-2 rounded-xl bg-purple-950/20 border border-purple-500/10">
                      <Code size={16} className="text-purple-400" />
                    </div>
                  </div>

                  {/* Titles */}
                  <h3 className="font-display font-extrabold text-2xl text-white mb-1 group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-400 mb-6">
                    {project.subtitle}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-3.5 mb-8">
                    {project.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300 leading-relaxed">
                        <span className="text-purple-500 mr-2.5 mt-1 font-bold">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack badges */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono font-medium bg-purple-950/30 border border-purple-500/15 text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-purple-500/10">
                    <a
                      href={project.github}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-950/70 border border-purple-500/20 text-gray-200 hover:text-white text-sm font-medium transition-all duration-200"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium transition-all duration-200 shadow-md shadow-purple-950/20"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
