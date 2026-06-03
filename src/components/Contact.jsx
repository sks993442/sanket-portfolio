import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      setIsSubmitting(false);
      
      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

        // Clear success banner after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        alert(result.message || "Unable to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setIsSubmitting(false);
      alert("Unable to send message. Please check that the backend server is running.");
    }
  };

  const contactDetails = [
    {
      label: "Email",
      value: "sanketsingh8053@gmail.com",
      href: "mailto:sanketsingh8053@gmail.com",
      icon: Mail,
      color: "text-purple-400 border-purple-500/10 hover:border-purple-500/30"
    },
    {
      label: "Phone",
      value: "+91 7488437763",
      href: "tel:+917488437763",
      icon: Phone,
      color: "text-blue-400 border-blue-500/10 hover:border-blue-500/30"
    },
    {
      label: "Location",
      value: "Bhopal, Madhya Pradesh, India",
      href: "https://www.linkedin.com/in/sanket-kumar-singh-44354a333/",
      icon: MapPin,
      color: "text-cyan-400 border-cyan-500/10 hover:border-cyan-500/30"
    }
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sanket-kumar-singh-44354a333/",
      icon: FaLinkedin,
      color: "hover:text-blue-400"
    },
    {
      label: "GitHub",
      href: "https://github.com/sks993442",
      icon: FaGithub,
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030014]">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none animate-float-slow"></div>

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
            Let's Connect
            <span className="block h-[3px] w-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-2 rounded-full"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 mt-3 text-sm max-w-md mx-auto"
          >
            Reach out for opportunities, collaborations, or simply to say hello.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-4">
                Let's Build Something Together
              </h3>
              <p className="text-gray-300 leading-relaxed text-base mb-8">
                I am open to internship opportunities, full-stack development roles, AI-integrated projects, hackathons, and open-source collaborations. Drop me a line!
              </p>

              {/* Cards List */}
              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "Location" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`glassmorphism glow-card flex items-center gap-4 p-4 rounded-xl border ${item.color} transition-all duration-300 group`}
                    >
                      <div className="p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/10">
                        <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 font-semibold block uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors break-all">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-purple-500/10">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-4">
                Find me online
              </span>
              <div className="flex items-center space-x-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3.5 rounded-xl glassmorphism border border-purple-500/10 text-gray-400 ${item.color} hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center`}
                      aria-label={item.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glassmorphism rounded-3xl border border-purple-500/15 p-6 sm:p-8 glow-card glow-shadow-purple">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Your Name <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/20 border border-purple-500/15 focus:border-purple-500/50 focus:bg-purple-950/40 text-sm text-white focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Your Email <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/20 border border-purple-500/15 focus:border-purple-500/50 focus:bg-purple-950/40 text-sm text-white focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/20 border border-purple-500/15 focus:border-purple-500/50 focus:bg-purple-950/40 text-sm text-white focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Your Message <span className="text-purple-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/20 border border-purple-500/15 focus:border-purple-500/50 focus:bg-purple-950/40 text-sm text-white focus:outline-none resize-none transition-all duration-300"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium shadow-lg shadow-purple-950/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-300"
                  >
                    <CheckCircle2 size={20} className="flex-shrink-0" />
                    <span className="text-sm font-semibold">
                      Thank you! Your message was sent successfully.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
