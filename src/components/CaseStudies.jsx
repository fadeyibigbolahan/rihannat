import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ArrowUpRight,
  Briefcase,
  Users,
  Building2,
  Sparkles,
  ChevronDown,
  Target,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [hoveredCase, setHoveredCase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const caseStudies = [
    {
      title: "Campaign 100",
      subtitle: "Campaign Messaging & Content Strategy",
      client: "Global Relocation Academy",
      agency: "Salvo Agency",
      role: "Content Strategy & Copywriting",
      description:
        "The campaign was designed to reach First Class and strong-GPA graduates interested in pursuing fully funded scholarship opportunities in the United States.",
      approach:
        "Content strategy, campaign messaging, video/script development, promotional copy, narrative structure, value proposition and CTA development.",
      framework: [
        "Identification",
        "Emotional connection",
        "Problem",
        "Solution",
        "Opportunity",
        "Action",
      ],
      demonstrates:
        "Audience-specific messaging; translating objectives into communication strategy; emotional storytelling; audience journeys; conversion-focused calls to action.",
      color: "#FF3B5C",
      gradient: "from-[#FF3B5C] to-[#FF6B8A]",
    },
    {
      title: "LAA & TravelDen",
      subtitle: "Marketing & Content Strategy",
      client: "Finchglow Holdings",
      agency: "Lagos Aviation Academy & TravelDen",
      role: "Marketing, Content Strategy & Communications",
      description:
        "Developed content and marketing strategies for Lagos Aviation Academy and TravelDen, translating business objectives into structured content and marketing plans.",
      approach:
        "LAA focused on aviation education, career development, student/alumni experiences, industry expertise, professional training, events and partnerships.",
      framework: [
        "Research",
        "Audience segmentation",
        "Content audit",
        "Strategy",
        "Content pillars",
        "Content calendar",
        "Creative direction",
        "Content process",
        "KPI framework",
      ],
      demonstrates:
        "Marketing strategy; content strategy; audience research and segmentation; brand communications; digital marketing; social media strategy.",
      color: "#8B5CF6",
      gradient: "from-[#8B5CF6] to-[#A78BFA]",
    },
    {
      title: "EB2-NIW Workshop Funnel",
      subtitle: "Landing Page & Conversion Copywriting",
      client: "Global Relocation Academy / Salvo Agency",
      agency: "Salvo Agency",
      role: "Copywriter / Content Strategist",
      description:
        "Developed landing-page copy for a free workshop designed to attract people interested in learning about the EB2-NIW pathway and encourage registration.",
      approach:
        "Audience positioning, value proposition, benefit-led messaging, objection handling and repeated registration CTA.",
      framework: [
        "Big promise",
        "Audience identification",
        "Pain / aspiration",
        "Offer",
        "Benefits",
        "Objections",
        "CTA",
      ],
      demonstrates:
        "Conversion copywriting; landing-page copy; audience positioning; value proposition development; objection handling; CTA strategy; long-form copywriting.",
      color: "#10B981",
      gradient: "from-[#10B981] to-[#34D399]",
    },
    {
      title: "Content Writing SOP",
      subtitle: "Content Operations & Process Development",
      client: "Global Relocation Academy / Salvo Agency",
      agency: "Salvo Agency",
      role: "Content Strategy & Content Operations",
      description:
        "Created a structured content-writing process supporting consistent content quality, brand voice, language and content flow for writers, creators and editors.",
      approach:
        "The SOP covered brand understanding, content calendars, objectives, audience research, keyword/topic research, SEO, blog writing, email copy, newsletters, editing and publishing.",
      framework: [
        "Brand",
        "Audience",
        "Objective",
        "Research",
        "Strategy",
        "Creation",
        "Editing",
        "Publishing",
        "Measurement",
      ],
      demonstrates:
        "Content operations; process development; editorial strategy; brand voice; audience research; SEO content; email marketing; content planning; quality control.",
      color: "#F59E0B",
      gradient: "from-[#F59E0B] to-[#FBBF24]",
    },
  ];

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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#FF3B5C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-[#FF3B5C]" />
              <div className="absolute inset-0 bg-[#FF3B5C] blur-lg opacity-50" />
            </div>
            <span className="font-sora text-xs font-medium text-[#1A1A1A]/40 uppercase tracking-[0.2em]">
              Deep Dives
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-sora text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[0.95] tracking-tight">
              Case Studies
            </h2>
            <p className="font-lora text-[#1A1A1A]/60 max-w-md leading-relaxed">
              A closer look at how each project was approached, from brief to
              framework.
            </p>
          </div>
        </motion.div>

        {/* Case Studies List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="border-t border-[#1A1A1A]/10"
        >
          {caseStudies.map((caseStudy, index) => {
            const isOpen = activeCase === index;
            const isHovered = hoveredCase === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCase(index)}
                onMouseLeave={() => setHoveredCase(null)}
                className="border-b border-[#1A1A1A]/10 relative"
              >
                {/* Gradient accent on hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${caseStudy.gradient} transition-all duration-500`}
                  style={{
                    opacity: isOpen || isHovered ? 1 : 0,
                    width: isOpen ? "3px" : isHovered ? "2px" : "0px",
                  }}
                />

                <button
                  onClick={() => setActiveCase(isOpen ? -1 : index)}
                  className="w-full text-left py-8 md:py-10 px-2 md:px-6 flex items-center justify-between gap-6 group relative"
                >
                  {/* Hover background */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isOpen
                        ? "bg-gradient-to-r from-gray-50 to-transparent"
                        : isHovered
                          ? "bg-gray-50/50"
                          : "bg-transparent"
                    }`}
                  />

                  <div className="relative flex items-center gap-6 flex-1">
                    {/* Number */}
                    <span
                      className={`hidden md:block font-sora text-sm transition-colors duration-500 ${
                        isOpen ? "text-[#1A1A1A]" : "text-[#1A1A1A]/30"
                      }`}
                      style={{ color: isOpen ? caseStudy.color : undefined }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-lora text-2xl md:text-3xl text-[#1A1A1A] font-medium tracking-tight">
                        {caseStudy.title}
                      </h3>
                      <p className="font-sora text-sm text-[#1A1A1A]/50 mt-2">
                        {caseStudy.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle icon */}
                  <div
                    className="relative w-12 h-12 flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: isOpen ? caseStudy.color : "transparent",
                      border: `1px solid ${
                        isOpen ? caseStudy.color : "#1A1A1A20"
                      }`,
                    }}
                    className={`relative w-12 h-12 flex items-center justify-center shrink-0 rounded-full transition-all duration-500 ${
                      isOpen ? "text-white rotate-45" : "text-[#1A1A1A]/40"
                    }`}
                  >
                    <Plus className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </button>

                {/* Expandable content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 md:px-6 pb-14 md:pb-16">
                        {/* Meta row */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="grid sm:grid-cols-3 gap-6 py-8 border-y border-[#1A1A1A]/10 mb-10"
                        >
                          <div className="flex items-start gap-3">
                            <Building2 className="w-4 h-4 mt-1 text-[#1A1A1A]/40" />
                            <div>
                              <p className="font-sora text-xs text-[#1A1A1A]/40 mb-1">
                                Client
                              </p>
                              <p className="font-sora text-sm text-[#1A1A1A] font-medium">
                                {caseStudy.client}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Briefcase className="w-4 h-4 mt-1 text-[#1A1A1A]/40" />
                            <div>
                              <p className="font-sora text-xs text-[#1A1A1A]/40 mb-1">
                                Role
                              </p>
                              <p className="font-sora text-sm text-[#1A1A1A] font-medium">
                                {caseStudy.role}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="w-4 h-4 mt-1 text-[#1A1A1A]/40" />
                            <div>
                              <p className="font-sora text-xs text-[#1A1A1A]/40 mb-1">
                                Agency
                              </p>
                              <p className="font-sora text-sm text-[#1A1A1A] font-medium">
                                {caseStudy.agency}
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        <div className="grid md:grid-cols-[1fr,1fr] gap-10 md:gap-16">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="space-y-10"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <Target
                                  className="w-4 h-4"
                                  style={{ color: caseStudy.color }}
                                />
                                <h4 className="font-sora text-sm font-semibold text-[#1A1A1A]">
                                  The Project
                                </h4>
                              </div>
                              <p className="font-lora text-[#1A1A1A]/70 leading-relaxed max-w-prose">
                                {caseStudy.description}
                              </p>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <Lightbulb
                                  className="w-4 h-4"
                                  style={{ color: caseStudy.color }}
                                />
                                <h4 className="font-sora text-sm font-semibold text-[#1A1A1A]">
                                  Approach
                                </h4>
                              </div>
                              <p className="font-lora text-[#1A1A1A]/70 leading-relaxed max-w-prose">
                                {caseStudy.approach}
                              </p>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-4">
                                <CheckCircle2
                                  className="w-4 h-4"
                                  style={{ color: caseStudy.color }}
                                />
                                <h4 className="font-sora text-sm font-semibold text-[#1A1A1A]">
                                  What This Demonstrates
                                </h4>
                              </div>
                              <p className="font-lora text-[#1A1A1A]/70 leading-relaxed max-w-prose">
                                {caseStudy.demonstrates}
                              </p>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                          >
                            <h4 className="font-sora text-sm font-semibold text-[#1A1A1A] mb-6">
                              Framework
                            </h4>
                            <div className="flex flex-col">
                              {caseStudy.framework.map((step, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.5 + i * 0.05,
                                    duration: 0.3,
                                  }}
                                  className="flex items-stretch group"
                                >
                                  <div className="flex flex-col items-center mr-4">
                                    <span
                                      className="w-2 h-2 rounded-full mt-2.5 shrink-0 transition-all duration-300 group-hover:scale-150"
                                      style={{
                                        backgroundColor: caseStudy.color,
                                      }}
                                    />
                                    {i < caseStudy.framework.length - 1 && (
                                      <span className="w-px flex-1 bg-[#1A1A1A]/15" />
                                    )}
                                  </div>
                                  <p className="font-sora text-sm text-[#1A1A1A]/80 pb-5 group-hover:text-[#1A1A1A] transition-colors">
                                    {step}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
