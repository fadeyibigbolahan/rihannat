import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Globe,
  ArrowUpRight,
  Sparkles,
  Send,
  MapPin,
  Clock,
  Heart,
  Copy,
  Check,
} from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "abisolaajibade101@gmail.com",
      href: "mailto:abisolaajibade101@gmail.com",
      color: "#FF3B5C",
      gradient: "from-[#FF3B5C] to-[#FF6B8A]",
      description: "For detailed inquiries and proposals",
      action: "Send an email",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      value: "+234 903 664 7918",
      href: "tel:+2349036647918",
      color: "#8B5CF6",
      gradient: "from-[#8B5CF6] to-[#A78BFA]",
      description: "For quick conversations and consultations",
      action: "Call me",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ajibade-rihannat-abisola-8174771b6",
      color: "#10B981",
      gradient: "from-[#10B981] to-[#34D399]",
      description: "For professional networking and updates",
      action: "Visit profile",
      external: true,
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

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#FAFAFB] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FF3B5C 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF3B5C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 md:mb-28"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-[#FF3B5C]" />
              <div className="absolute inset-0 bg-[#FF3B5C] blur-lg opacity-30" />
            </div>
            <span className="font-sora text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">
              Get In Touch
            </span>
          </div>

          <h2 className="font-sora text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[0.95] tracking-tight mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8A]">
              Connect
            </span>
          </h2>

          <p className="font-lora text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. Feel
            free to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isHovered = hoveredCard === method.id;
            const isCopied =
              (method.id === "email" && copiedEmail) ||
              (method.id === "phone" && copiedPhone);

            return (
              <motion.a
                key={method.id}
                variants={itemVariants}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 hover:border-gray-300 hover:shadow-xl"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${method.gradient} transition-all duration-500`}
                  style={{
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                    <div
                      className="absolute inset-0 rounded-2xl transition-all duration-500"
                      style={{
                        backgroundColor: `${method.color}10`,
                        transform: isHovered
                          ? "scale(1.1) rotate(-5deg)"
                          : "scale(1)",
                      }}
                    />
                    <Icon
                      className="relative w-7 h-7 transition-all duration-500"
                      style={{ color: method.color }}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-sora text-lg font-semibold text-black mb-3">
                    {method.label}
                  </h3>

                  <p className="font-lora text-sm text-gray-600 mb-4">
                    {method.description}
                  </p>

                  <p className="font-sora text-sm text-gray-800 mb-6 break-all">
                    {method.value}
                  </p>

                  {/* Action link */}
                  <div
                    className="inline-flex items-center gap-2 font-sora text-sm font-medium transition-colors duration-300"
                    style={{ color: method.color }}
                  >
                    {method.action}
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Copy buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() =>
              copyToClipboard("abisolaajibade101@gmail.com", "email")
            }
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:text-black transition-all duration-300 font-sora text-xs"
          >
            {copiedEmail ? (
              <Check className="w-3.5 h-3.5 text-green-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copiedEmail ? "Copied!" : "Copy email"}
          </button>

          <button
            onClick={() => copyToClipboard("+2349036647918", "phone")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:text-black transition-all duration-300 font-sora text-xs"
          >
            {copiedPhone ? (
              <Check className="w-3.5 h-3.5 text-green-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copiedPhone ? "Copied!" : "Copy phone"}
          </button>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span className="font-sora text-xs">Lagos, Nigeria</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="font-sora text-xs">
                Available for freelance work
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Heart className="w-4 h-4 text-[#FF3B5C]" />
              <span className="font-sora text-xs">Open to opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
