import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificationsList = [
  {
    title: "Power BI",
    subtitle: "Data Visualization and Analytics",
    provider: "Microsoft/Self-paced Study",
    details: "Learned data modeling, DAX query formulation, and constructing high-fidelity dashboard reports.",
    color: "from-yellow-500/10 to-amber-500/10 border-yellow-500/20"
  },
  {
    title: "Deloitte Technology Job Simulation",
    subtitle: "Software Engineering, SDLC",
    provider: "Forage Simulation",
    details: "Gained insight into software scoping, task estimation, SDLC methodologies, and backend analysis.",
    color: "from-green-500/10 to-emerald-500/10 border-green-500/20"
  },
  {
    title: "JPMorgan Chase Software Engineering Job Simulation",
    subtitle: "API Development, System Design",
    provider: "Forage Simulation",
    details: "Worked with stock charts, data feed setups, data structure visualizations, and framework APIs.",
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20"
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 }
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#030014]">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-cyan-900/10 blur-[100px] pointer-events-none"></div>

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
            Certifications
            <span className="block h-[3px] w-1/2 bg-cyan-500 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mt-3 text-sm max-w-md mx-auto"
          >
            Validations of my skills through simulations, courses, and data technologies.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {certificationsList.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glassmorphism glow-card p-6 rounded-2xl border flex flex-col justify-between h-80 bg-gradient-to-br ${cert.color} transition-all duration-300 relative group`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/10 text-purple-400">
                    <Award size={24} />
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-xl text-white group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mt-1">
                  {cert.subtitle}
                </p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  {cert.provider}
                </p>
                
                <p className="text-sm text-gray-300 mt-4 leading-relaxed line-clamp-3">
                  {cert.details}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-500/10">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Certificate
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
