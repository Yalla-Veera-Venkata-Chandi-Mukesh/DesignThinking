"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { label: "Scam Detection", icon: "🛡️", pos: "top-4 left-4" },
  { label: "Simple Navigation", icon: "🧭", pos: "top-4 right-4" },
  { label: "Deepfake Alerts", icon: "🎭", pos: "bottom-4 left-4" },
  { label: "Guided Help", icon: "💬", pos: "bottom-4 right-4" },
];

export default function PrototypeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prototype" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(139,92,246,0.2)] to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[rgba(139,92,246,0.03)] blur-[120px] -translate-y-1/2" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Final Prototype
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl lg:text-6xl text-center mb-6"
        >
          The <span className="gradient-text">SeniorSafe</span> prototype
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-[#8888aa] max-w-2xl mx-auto mb-12"
        >
          An accessibility-first onboarding and protection interface designed for older adults. 
          Experience the prototype below.
        </motion.p>

        {/* Prototype Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Device Frame */}
          <div className="glass-card p-3 md:p-4 relative">
            {/* Browser Bar */}
            <div className="flex items-center gap-3 mb-3 px-4 py-2 rounded-xl bg-[rgba(0,0,0,0.3)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-[#555577] font-mono">v0-onboarding-ui-prototype-olive.vercel.app</span>
              </div>
            </div>

            {/* iframe */}
            <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "62.5%" }}>
              <iframe
                src="https://v0-onboarding-ui-prototype-olive.vercel.app/"
                className="absolute inset-0 w-full h-full border-0 rounded-xl"
                title="SeniorSafe Prototype"
                loading="lazy"
                allow="fullscreen"
              />
            </div>

            {/* Feature Hotspots */}
            {features.map((f) => (
              <div
                key={f.label}
                className={`absolute ${f.pos} hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card text-[10px] font-medium text-[#00f0ff] animate-pulse-glow`}
              >
                <span>{f.icon}</span>
                {f.label}
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-8"
          >
            <a
              href="https://v0-onboarding-ui-prototype-olive.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Open Full Prototype
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
