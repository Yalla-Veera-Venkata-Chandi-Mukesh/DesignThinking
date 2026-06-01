"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pb-16" style={{ paddingTop: "120px" }}>
      <div className="container-main">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[0.68rem] tracking-[3px] uppercase mb-10"
          style={{ color: "#34D399", fontFamily: "var(--font-mono)", fontWeight: 500, display: "block" }}
        >
          Design Thinking — Mahindra University · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="leading-[1.05] tracking-[-0.02em] mb-12"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
        >
          <span className="text-white">Protecting </span>
          <span style={{ color: "#34D399", fontStyle: "italic" }}>Senior Citizens</span>
          <br />
          <span className="text-[#94A3B8]">from Digital</span>
          <br />
          <span className="text-[#94A3B8]">Scams.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-body max-w-[640px]"
        >
          Senior citizens using WhatsApp, Facebook, and online banking struggle to identify phishing attacks, deepfakes, and AI-generated misinformation. We used design thinking to understand why — and to build an ecosystem that makes digital safety accessible, guided, and emotionally reassuring.
        </motion.p>
      </div>
    </section>
  );
}
