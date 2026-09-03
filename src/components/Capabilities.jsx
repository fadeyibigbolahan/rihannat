import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  Megaphone,
  PenTool,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const CAPABILITIES = [
  {
    title: "Content strategy",
    description:
      "Audience research, content pillars, editorial planning, content calendars and strategy development.",
    icon: FileText,
    color: "#FF3B5C",
    gradient: "from-[#FF3B5C] to-[#FF6B8A]",
    tags: ["Research", "Planning", "Editorial"],
    stats: "01",
  },
  {
    title: "Marketing communications",
    description:
      "Brand messaging, campaign communication, storytelling and audience-focused communication.",
    icon: Megaphone,
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6] to-[#A78BFA]",
    tags: ["Branding", "Campaigns", "Storytelling"],
    stats: "02",
  },
  {
    title: "Copywriting",
    description:
      "Landing pages, sales copy, blogs, email marketing, scripts and conversion-focused content.",
    icon: PenTool,
    color: "#10B981",
    gradient: "from-[#10B981] to-[#34D399]",
    tags: ["Landing Pages", "Email", "Sales Copy"],
    stats: "03",
  },
  {
    title: "Digital marketing",
    description:
      "Social media strategy, content campaigns, digital communication and performance-focused planning.",
    icon: TrendingUp,
    color: "#F59E0B",
    gradient: "from-[#F59E0B] to-[#FBBF24]",
    tags: ["Social Media", "Performance", "Digital"],
    stats: "04",
  },
];

const Capabilities = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
      id="services"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#0A0A0B] relative overflow-hidden"
      aria-labelledby="capabilities-heading"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF3B5C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-[#FF3B5C]" />
              <div className="absolute inset-0 bg-[#FF3B5C] blur-lg opacity-50" />
            </div>
            <span className="font-sora text-xs font-medium text-white/40 uppercase tracking-[0.2em]">
              What I Do
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              id="capabilities-heading"
              className="font-sora text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight"
            >
              Capabilities
              <span className="block text-2xl md:text-3xl lg:text-4xl text-white/40 font-medium mt-4">
                That drive meaningful results
              </span>
            </h2>

            <div className="flex items-center gap-6">
              <div className="w-px h-12 bg-white/10" />
              <p className="font-lora text-white/60 max-w-sm leading-relaxed">
                Strategic expertise across the full content marketing spectrum,
                tailored to your unique business needs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            const isActive = activeCard === capability.title;

            return (
              <motion.div
                key={capability.title}
                variants={itemVariants}
                onMouseEnter={() => setActiveCard(capability.title)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative cursor-pointer"
              >
                {/* Card */}
                <div
                  className={`relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border transition-all duration-500 overflow-hidden
                    ${
                      isActive
                        ? "border-white/20 shadow-2xl shadow-black/50"
                        : "border-white/10 hover:border-white/20"
                    }`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Top gradient bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.gradient} transition-all duration-500`}
                    style={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? "3px" : "0px",
                    }}
                  />

                  <div className="relative p-8 md:p-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        {/* Icon container */}
                        <div
                          className={`relative p-4 rounded-xl transition-all duration-500`}
                          style={{
                            backgroundColor: `${capability.color}15`,
                            transform: isActive
                              ? "scale(1.1) rotate(-5deg)"
                              : "scale(1) rotate(0deg)",
                          }}
                        >
                          <Icon
                            className="w-6 h-6 transition-all duration-500"
                            style={{ color: capability.color }}
                            aria-hidden="true"
                          />
                          {/* Glow effect */}
                          <div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                            style={{ backgroundColor: capability.color }}
                          />
                        </div>

                        {/* Number */}
                        <div className="flex flex-col">
                          <span className="font-sora text-4xl md:text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500 leading-none">
                            {capability.stats}
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <div
                          className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                            isActive
                              ? "border-white/30 scale-110"
                              : "border-white/10"
                          }`}
                        />
                        <ArrowUpRight
                          className={`w-5 h-5 transition-all duration-500 ${
                            isActive
                              ? "text-white rotate-45"
                              : "text-white/40 -rotate-0"
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <h3 className="font-sora text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                      {capability.title}
                    </h3>

                    <p className="font-lora text-base md:text-lg text-white/60 leading-relaxed mb-8">
                      {capability.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {capability.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-4 py-2 rounded-full text-xs font-sora transition-all duration-500 ${
                            isActive
                              ? "bg-white text-black"
                              : "bg-white/5 text-white/60 group-hover:bg-white/10"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="font-lora text-white/40 italic">
            Ready to elevate your content strategy?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-sora text-sm font-medium text-white hover:text-[#FF3B5C] transition-colors"
          >
            <span className="relative">
              Discuss your project
              <span className="absolute bottom-0 left-0 w-full h-px bg-white/30 group-hover:bg-[#FF3B5C] transition-colors" />
            </span>
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
