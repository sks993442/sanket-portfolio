import React from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-[#030014] border-t border-purple-500/10 py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-32 rounded-full bg-purple-900/5 blur-[50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left space-y-2">
            <span className="font-display font-bold text-lg text-gradient block">
              Sanket Kumar Singh
            </span>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Sanket.dev. All rights reserved.
            </p>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-gray-400">
              Built with <span className="text-purple-400 font-semibold">React.js</span>, <span className="text-cyan-400 font-semibold">Tailwind CSS v4</span>, and <span className="text-pink-400 font-semibold">Framer Motion</span>.
            </p>
            <p className="text-[10px] text-gray-600">
              Responsive Design • Premium Dark Mode
            </p>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl glassmorphism border border-purple-500/15 text-gray-400 hover:text-purple-400 transition-all duration-300 shadow-md shadow-purple-950/10 cursor-pointer"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
