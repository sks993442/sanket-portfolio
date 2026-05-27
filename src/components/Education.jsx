import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from "lucide-react";

export default function Education() {
  const courses = [
    "Data Structures",
    "Algorithms",
    "Operating Systems",
    "Database Management Systems (DBMS)",
    "Computer Networks"
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#030014]/60">
      {/* Background blurs */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-purple-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-4xl text-white inline-block relative"
          >
            Education
            <span className="block h-[3px] w-1/2 bg-purple-500 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mt-3 text-sm max-w-md mx-auto"
          >
            Academic path, college achievements, and major course foundations.
          </motion.p>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glassmorphism rounded-3xl border border-purple-500/15 p-6 sm:p-10 glow-card glow-shadow-purple relative overflow-hidden"
        >
          {/* Top light sweep indicator */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-purple-950/20 border border-purple-500/15 text-purple-400 mt-1">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white leading-snug">
                  Bachelor of Technology
                </h3>
                <h4 className="font-sans font-semibold text-purple-400 text-lg mt-1">
                  Computer Science and Information Technology
                </h4>
                <p className="font-sans font-medium text-gray-300 text-base mt-2 flex items-center gap-1.5">
                  Sagar Institute of Research and Technology (SIRT)
                </p>
              </div>
            </div>

            {/* Date and Location info */}
            <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 text-sm text-gray-400 mt-1 pl-12 md:pl-0">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-400" />
                Sep 2023 – Jul 2027
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Bhopal, India
              </span>
            </div>
          </div>

          {/* Coursework Block */}
          <div className="pt-6 border-t border-purple-500/10">
            <h5 className="font-display font-bold text-gray-200 text-base mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              Relevant Coursework
            </h5>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {courses.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-purple-950/15 border border-purple-500/5 hover:border-purple-500/20 hover:bg-purple-950/25 transition-all duration-200"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300 font-semibold">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
