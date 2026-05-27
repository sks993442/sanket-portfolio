import React from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Award, Flame } from "lucide-react";

const achievementsList = [
  {
    metric: "250+",
    title: "LeetCode Solved Problems",
    description: "Demonstrating strong capabilities in Data Structures and Algorithms.",
    icon: Flame,
    color: "from-orange-500/10 to-red-500/10 border-orange-500/20 text-orange-400"
  },
  {
    metric: "2nd Place",
    title: "Runner-Up — SGSU Hackathon",
    description: "Bhopal, 2025. Outperformed 250+ competitive teams in software creation.",
    icon: Trophy,
    color: "from-yellow-500/10 to-amber-500/10 border-yellow-500/20 text-yellow-400"
  },
  {
    metric: "Finalist",
    title: "All India IT Hackathon",
    description: "National Finalist representing college at IIITM Gwalior.",
    icon: Award,
    color: "from-purple-500/10 to-indigo-500/10 border-purple-500/20 text-purple-400"
  }
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 85 }
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#030014]/60">
      {/* Background blurs */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-purple-900/10 blur-[90px] pointer-events-none"></div>

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
            Achievements
            <span className="block h-[3px] w-1/2 bg-purple-500 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mt-3 text-sm max-w-md mx-auto"
          >
            Milestones and competitive wins that reflect my drive and dedication.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {achievementsList.map((ach) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glassmorphism glow-card p-6 rounded-2xl border flex flex-col justify-between h-72 bg-gradient-to-br ${ach.color} transition-all duration-300 relative group`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/10">
                      <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <span className="text-3xl font-display font-black tracking-tight text-white block mb-1">
                    {ach.metric}
                  </span>
                  
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-400 transition-colors">
                    {ach.title}
                  </h3>
                  
                  <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-purple-500/5 border border-purple-500/10 absolute -bottom-2 -right-2 -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
