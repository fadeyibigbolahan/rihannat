import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Plane,
  Home,
  Monitor,
  BarChart3,
  Target,
  Lightbulb,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Quote,
} from "lucide-react";

const INDUSTRIES = [
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    color: "#FF3B5C",
  },
  { id: "travel", label: "Travel", icon: Plane, color: "#8B5CF6" },
  { id: "relocation", label: "Relocation", icon: Home, color: "#10B981" },
  {
    id: "digital-services",
    label: "Digital services",
    icon: Monitor,
    color: "#F59E0B",
  },
];

const WAYS_I_WORK = [
  {
    id: "content-strategy",
    label: "Content strategy",
    icon: BarChart3,
    color: "#FF3B5C",
  },
  {
    id: "campaign-planning",
    label: "Campaign planning",
    icon: Target,
    color: "#8B5CF6",
  },
  {
    id: "conversion-copy",
    label: "Conversion copy",
    icon: Lightbulb,
    color: "#10B981",
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [hoveredWay, setHoveredWay] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#FAFAFB] relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FF3B5C 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#FF3B5C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-12 lg:gap-16 items-start">
          {/* Narrative column */}
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {/* Header with icon */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative">
                <Sparkles className="w-5 h-5 text-[#FF3B5C]" />
                <div className="absolute inset-0 bg-[#FF3B5C] blur-lg opacity-50" />
              </div>
              <span className="font-sora text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">
                About Me
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-sora text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[0.95] tracking-tight mb-8"
              id="about-heading"
            >
              Strategy meets{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8A]">
                  storytelling.
                </span>
                {/* Underline effect */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 6.5C50 2.5 150 2.5 199 6.5"
                    stroke="#FF3B5C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </motion.h2>

            <div className="space-y-5 font-lora text-lg md:text-xl text-gray-700 leading-relaxed">
              <motion.p variants={fadeInUp}>
                I'm Rihannat Ajibade, a marketing and communications
                professional with experience developing content strategies,
                campaigns and conversion-focused content across education,
                travel, relocation and digital services.
              </motion.p>
              <motion.p variants={fadeInUp}>
                My work combines strategic thinking with strong storytelling. I
                enjoy understanding an audience, identifying what matters to
                them, and translating those insights into communication that is
                clear, relevant and purposeful.
              </motion.p>
            </div>

            {/* Enhanced blockquote */}
            <motion.blockquote
              variants={fadeInUp}
              className="relative my-8 pl-8 pr-6 py-6 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF3B5C] to-[#FF6B8A]" />

              {/* Quote icon */}
              <Quote
                className="absolute top-6 right-6 w-8 h-8 text-gray-100"
                aria-hidden="true"
              />

              <p className="font-lora italic text-2xl md:text-3xl text-black leading-snug relative">
                "I see content as more than something to publish — it's a tool
                for connection and growth."
              </p>
            </motion.blockquote>

            <motion.p
              variants={fadeInUp}
              className="font-lora text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              From integrated content strategies to landing pages and full
              content systems, every piece of work starts with the same
              question:{" "}
              <em className="relative inline-block">
                <span className="font-semibold text-black">
                  what does this audience actually need to hear?
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3B5C]/30" />
              </em>
            </motion.p>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="pt-2 lg:pt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="lg:sticky lg:top-24 flex flex-col h-full">
              {/* Industries */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-sora text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold">
                    Industries
                  </h3>
                  <span className="font-sora text-xs text-gray-300">
                    {INDUSTRIES.length}
                  </span>
                </div>

                <div className="space-y-0.5">
                  {INDUSTRIES.map((industry) => {
                    const Icon = industry.icon;
                    const isHovered = hoveredIndustry === industry.id;

                    return (
                      <div
                        key={industry.id}
                        onMouseEnter={() => setHoveredIndustry(industry.id)}
                        onMouseLeave={() => setHoveredIndustry(null)}
                        className="group relative flex items-center gap-3 p-2.5 rounded-lg transition-all duration-300 cursor-default"
                      >
                        {/* Hover background */}
                        <div
                          className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                            isHovered ? "bg-white shadow-lg" : "bg-transparent"
                          }`}
                        />

                        {/* Icon container */}
                        <div
                          className={`relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                            isHovered ? "scale-110" : ""
                          }`}
                          style={{
                            backgroundColor: `${industry.color}10`,
                          }}
                        >
                          <Icon
                            size={15}
                            className="transition-colors duration-300"
                            style={{ color: industry.color }}
                            aria-hidden="true"
                          />
                        </div>

                        <span className="relative font-sora text-sm text-black font-medium">
                          {industry.label}
                        </span>

                        {/* Arrow on hover */}
                        <ArrowUpRight
                          size={13}
                          className={`relative ml-auto transition-all duration-300 ${
                            isHovered
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-2"
                          }`}
                          style={{ color: industry.color }}
                          aria-hidden="true"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6" />

              {/* Ways I work */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-sora text-xs uppercase tracking-[0.15em] text-gray-400 font-semibold">
                    Ways I Work
                  </h3>
                  <span className="font-sora text-xs text-gray-300">
                    {WAYS_I_WORK.length}
                  </span>
                </div>

                <div className="space-y-0.5">
                  {WAYS_I_WORK.map((way) => {
                    const Icon = way.icon;
                    const isHovered = hoveredWay === way.id;

                    return (
                      <div
                        key={way.id}
                        onMouseEnter={() => setHoveredWay(way.id)}
                        onMouseLeave={() => setHoveredWay(null)}
                        className="group relative flex items-center gap-3 p-2.5 rounded-lg transition-all duration-300 cursor-default"
                      >
                        {/* Hover background */}
                        <div
                          className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                            isHovered ? "bg-white shadow-lg" : "bg-transparent"
                          }`}
                        />

                        {/* Icon container */}
                        <div
                          className={`relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                            isHovered ? "scale-110" : ""
                          }`}
                          style={{
                            backgroundColor: `${way.color}10`,
                          }}
                        >
                          <Icon
                            size={15}
                            className="transition-colors duration-300"
                            style={{ color: way.color }}
                            aria-hidden="true"
                          />
                        </div>

                        <span className="relative font-sora text-sm text-black font-medium">
                          {way.label}
                        </span>

                        {/* Arrow on hover */}
                        <ArrowUpRight
                          size={13}
                          className={`relative ml-auto transition-all duration-300 ${
                            isHovered
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-2"
                          }`}
                          style={{ color: way.color }}
                          aria-hidden="true"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Enhanced CTA Card */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group mt-auto">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B5C] to-[#FF6B8A] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#FF3B5C] rounded-full animate-pulse" />
                    <span className="font-sora text-xs uppercase tracking-wider text-gray-400 group-hover:text-white/80 transition-colors duration-500">
                      Available for work
                    </span>
                  </div>

                  <h3 className="font-sora text-lg font-bold text-black mb-2 group-hover:text-white transition-colors duration-500">
                    Let's work together
                  </h3>

                  <p className="font-lora text-sm text-gray-600 mb-4 group-hover:text-white/90 transition-colors duration-500">
                    Have a project in mind? I'd love to hear about it.
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-sora text-sm font-medium text-[#FF3B5C] group-hover:text-white transition-colors duration-500"
                  >
                    <span className="relative">
                      Get in touch
                      <span className="absolute bottom-0 left-0 w-full h-px bg-[#FF3B5C] group-hover:bg-white transition-colors duration-500" />
                    </span>
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
