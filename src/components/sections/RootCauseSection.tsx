"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const whys = [
  { question: "Why are older adults vulnerable to scams?", answer: "Because they struggle to identify suspicious content online.", color: "#ef4444" },
  { question: "Why do they struggle?", answer: "Because modern interfaces are complex and overwhelming.", color: "#f59e0b" },
  { question: "Why are interfaces overwhelming?", answer: "Because apps prioritize engagement and information density over accessibility.", color: "#8b5cf6" },
  { question: "Why does this increase vulnerability?", answer: "Because confusing layouts and technical language make risky content harder to recognize.", color: "#ec4899" },
  { question: "Why is there no effective protection?", answer: "Because most cybersecurity systems are not designed specifically for older adults.", color: "#00f0ff" },
];

export default function RootCauseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [revealed, setRevealed] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(239,68,68,0.2)] to-transparent" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Root Cause Analysis
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl text-center mb-16"
        >
          The <span className="gradient-text-purple">5 Whys</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {whys.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Connector line */}
              {i < whys.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-8 z-0" style={{ background: `linear-gradient(${w.color}44, ${whys[i + 1].color}44)` }} />
              )}

              <motion.div
                className="glass-card p-6 cursor-pointer group relative z-10"
                onClick={() => setRevealed(Math.max(revealed, i + 1))}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 font-heading font-bold text-lg"
                    style={{ background: `${w.color}15`, border: `1px solid ${w.color}22`, color: w.color }}
                  >
                    W{i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-semibold text-lg mb-2" style={{ color: w.color }}>
                      {w.question}
                    </p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={i <= revealed || inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 }}
                      className="text-[#aaaacc] leading-relaxed"
                    >
                      {w.answer}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
