import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { FaGithub } from "react-icons/fa6";
import {
  Code2,
  FileJson,
  Database,
  Atom,
  FileCode,
  Palette,
  Wind,
  Layers,
  Server,
  Cpu,
  Table,
  Zap,
  Network,
  Key,
  Link,
  GitBranch,
  Users,
  Workflow,
  Binary,
  SquareStack,
  Grid,
  Terminal,
  BrainCircuit,
  Sparkles,
  Bot,
  Code,
  Radio,
  BarChart3,
  FileSpreadsheet
} from "lucide-react";

// Safe icon mapper to avoid bundle-time issues
const iconMap = {
  Code2,
  FileJson,
  Database,
  Atom,
  FileCode,
  Palette,
  Wind,
  Layers,
  Figma: Palette, // Fallback if Figma isn't fully exported in all lucide versions
  Server,
  Cpu,
  Table,
  Zap,
  Network,
  Key,
  Link,
  GitBranch,
  Github: FaGithub,
  Users,
  Workflow,
  Binary,
  SquareStack,
  Grid,
  Terminal,
  BrainCircuit,
  Sparkles,
  Bot,
  Code,
  Radio,
  BarChart3,
  FileSpreadsheet
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#030014]">
      {/* Background blurs */}
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-cyan-900/10 blur-[90px] pointer-events-none"></div>

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
            My Tech Stack
            <span className="block h-[3px] w-1/2 bg-cyan-500 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mt-3 text-sm max-w-md mx-auto"
          >
            A categorized overview of the technologies, tools, and paradigms I work with.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="font-display font-semibold text-lg sm:text-xl text-purple-300 flex items-center space-x-2 border-l-2 border-purple-500 pl-3"
              >
                <span>{category.title}</span>
              </motion.h3>

              {/* Skills Card Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                      className="glassmorphism glow-card p-4 rounded-xl border border-purple-500/10 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:shadow-lg hover:shadow-purple-950/20"
                    >
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-20 text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
