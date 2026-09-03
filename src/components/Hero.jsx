import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Star,
  Quote,
  ChevronDown,
  Play,
  Target,
  BarChart3,
  Users,
} from "lucide-react";
import rihannat from "../assets/rihannat.jpeg";

const FOCUS_AREAS = [
  {
    id: "brand-strategy",
    label: "Brand strategy",
    icon: Target,
    color: "#FF3B5C",
  },
  {
    id: "content-systems",
    label: "Content systems",
    icon: BarChart3,
    color: "#8B5CF6",
  },
  {
    id: "public-relations",
    label: "Public relations",
    icon: Users,
    color: "#10B981",
  },
];

const Hero = ({ setActiveSection }) => {
  const [mounted, setMounted] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialLinks = [
    {
      id: "linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ajibade-rihannat-abisola-8174771b6",
    },
    {
      id: "instagram",
      icon: Instagram,
      href: "https://www.instagram.com/d_uncommon_rihrih/",
    },
    { id: "email", icon: Mail, href: "mailto:abisolaajibade101@gmail.com" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center bg-[#FAFAFB] relative overflow-hidden pt-28 pb-16"
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#FF3B5C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Mouse follower */}
      <motion.div
        className="absolute w-40 h-40 rounded-full pointer-events-none hidden lg:block"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
          scale: mounted ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,59,92,0.1), transparent)",
        }}
      />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Copy column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            {/* Status badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="relative flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B5C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF3B5C]" />
                </span>
                <span className="font-sora text-xs font-medium text-gray-600 uppercase tracking-[0.15em]">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="font-sora font-bold text-black leading-[0.95] tracking-tight text-6xl md:text-7xl lg:text-8xl mb-8"
            >
              Rihannat
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8A]">
                  Ajibade
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: mounted ? 1 : 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <motion.path
                    d="M1 6.5C50 2.5 150 2.5 199 6.5"
                    stroke="#FF3B5C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-5 mb-8 max-w-xl"
            >
              <div>
                <p className="font-lora italic text-2xl md:text-3xl text-gray-800 leading-snug">
                  Strategy. Content. Communication.{" "}
                  <span className="text-[#FF3B5C] font-semibold">Impact.</span>
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-lora text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-lg"
            >
              I turn ideas into clear strategies, content that converts, and
              communication that moves people to action.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.button
                onClick={() => goTo("work")}
                onMouseEnter={() => setHoveredButton("work")}
                onMouseLeave={() => setHoveredButton(null)}
                className="group relative inline-flex items-center gap-3 font-sora text-sm font-semibold px-4 py-4 bg-black text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View my work</span>
                <ArrowRight
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>

              <motion.button
                onClick={() => goTo("contact")}
                onMouseEnter={() => setHoveredButton("contact")}
                onMouseLeave={() => setHoveredButton(null)}
                className="group inline-flex items-center gap-3 font-sora text-sm font-semibold px-4 py-4 border-2 border-black text-black transition-all duration-300 hover:bg-black hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's talk
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="font-sora text-xs text-gray-400 uppercase tracking-wider">
                Follow me
              </span>
              <div className="w-px h-4 bg-gray-300" />
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-2 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  >
                    <Icon
                      className="w-4 h-4 text-gray-500 group-hover:text-[#FF3B5C] transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative max-w-sm ml-auto">
              {/* Decorative frame */}
              <motion.div
                className="absolute -inset-4 border-2 border-[#FF3B5C]/30 rounded-lg"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 1.1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />

              {/* Main image container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                {/* Real image */}
                <img
                  src={rihannat}
                  alt="Rihannat Ajibade - Marketing and Communications Specialist"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <Star className="w-5 h-5 text-[#FF3B5C] fill-[#FF3B5C]" />
                </motion.div>
              </div>

              {/* Focus areas card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <p className="font-sora text-xs text-gray-500 mb-4">
                  Focus areas
                </p>
                <ul className="space-y-3">
                  {FOCUS_AREAS.map((area) => {
                    const Icon = area.icon;
                    return (
                      <li
                        key={area.id}
                        className="font-sora text-sm text-black flex items-center gap-3 group cursor-default"
                      >
                        <span
                          className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${area.color}10` }}
                        >
                          <Icon
                            className="w-4 h-4"
                            style={{ color: area.color }}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="relative">
                          {area.label}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#FF3B5C] group-hover:w-full transition-all duration-300" />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-black text-white rounded-xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0 }}
                transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
              >
                <div className="text-center">
                  <div className="font-sora text-2xl font-bold">5+</div>
                  <div className="font-sora text-xs text-white/70">
                    Years Exp.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
