"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-14" style={{ background: "#0a0a0f" }}>
      <div className="container-main py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[0.72rem] tracking-[4px] uppercase mb-10"
          style={{ color: "#c8ff00", fontFamily: "var(--font-mono)" }}
        >
          Design Thinking — Mahindra University · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="leading-[0.95] tracking-[-0.03em] mb-12"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
        >
          <span className="text-white">Protecting{" "}</span>
          <span style={{ color: "#c8ff00" }}>Senior Citizens</span>
          <br />
          <span className="text-[#555568]">from Digital</span>
          <br />
          <span className="text-[#555568]">Scams.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="section-body max-w-[680px]"
        >
          Senior citizens using WhatsApp, Facebook, and online banking struggle to identify phishing attacks, deepfakes, and AI-generated misinformation. We used design thinking to understand why — and to build an ecosystem that makes digital safety accessible, guided, and emotionally reassuring.
        </motion.p>
      </div>
    </section>
  );
}
