import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#030014]/60">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-4xl text-white inline-block relative"
          >
            Work Experience
            <span className="block h-[3px] w-1/2 bg-purple-500 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mt-3 text-sm max-w-md mx-auto"
          >
            My professional career timeline, internships, and open-source contributions.
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-purple-500/20 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Dot indicator */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 bg-[#030014] p-1.5 rounded-full border-2 border-purple-500 glow-shadow-purple">
                <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping absolute top-1.5 left-1.5"></div>
                <Briefcase className="w-4 h-4 text-purple-400 relative z-10" />
              </div>

              {/* Experience Card */}
              <div className="glassmorphism glow-card p-6 rounded-2xl border border-purple-500/15 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Time and location */}
                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                {exp.techStack && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                <ul className="space-y-2 text-sm text-gray-300 list-none pl-0">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-2.5 font-bold">▪</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
