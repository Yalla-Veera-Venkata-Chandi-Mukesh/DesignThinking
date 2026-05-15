"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  { icon: "♿", title: "Accessibility-First", desc: "Designed specifically for older adults with large fonts, high contrast, readable layouts, and simplified navigation that reduces cognitive overload." },
  { icon: "💚", title: "Emotional Reassurance", desc: "Provides comfort and guidance during risky situations, reducing panic with clear explanations and patient interactions." },
  { icon: "🤖", title: "AI-Assisted Protection", desc: "Intelligent scam detection, deepfake identification, and phishing prevention that works automatically in the background." },
  { icon: "🧭", title: "Simplified Navigation", desc: "Fewer steps per task, guided walkthroughs, and consistent layouts that older adults can learn and trust." },
  { icon: "🛡️", title: "Comprehensive Prevention", desc: "Addresses phishing, deepfakes, fake news, scam calls, suspicious links, and impersonation scams in one ecosystem." },
];

export default function WhySeniorSafeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.2)] to-transparent" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[rgba(0,240,255,0.03)] blur-[120px] -translate-y-1/2" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Why SeniorSafe
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl lg:text-6xl text-center mb-6"
        >
          The <span className="gradient-text-cyan">chosen</span> concept
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-[#8888aa] max-w-3xl mx-auto mb-16"
        >
          SeniorSafe emerged as the strongest concept because it combined accessibility, scam prevention, 
          simplified navigation, AI-assisted protection, and emotional reassurance into one ecosystem. 
          It scored highest in desirability, usability, and accessibility impact.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="glass-card p-7 group"
            >
              <span className="text-3xl mb-4 block">{r.icon}</span>
              <h3 className="font-heading font-semibold text-lg mb-3 text-[#00f0ff] group-hover:glow-text-cyan transition-all">
                {r.title}
              </h3>
              <p className="text-sm text-[#8888aa] leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass-card p-8"
        >
          <h3 className="font-heading font-semibold text-lg text-center mb-6">Concept Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.06)]">
                  <th className="text-left py-3 px-4 text-[#555577] font-medium">Criteria</th>
                  <th className="text-center py-3 px-4 text-[#3b82f6]">TrustScan</th>
                  <th className="text-center py-3 px-4 text-[#f59e0b]">Warning Assistant</th>
                  <th className="text-center py-3 px-4 text-[#00f0ff]">SeniorSafe ★</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Accessibility", "Medium", "Medium", "Highest"],
                  ["Scam Coverage", "Limited", "Focused", "Comprehensive"],
                  ["Usability", "Moderate", "Good", "Excellent"],
                  ["Emotional Support", "Low", "Medium", "High"],
                  ["AI Integration", "Basic", "Moderate", "Advanced"],
                ].map(([criteria, ...values]) => (
                  <tr key={criteria} className="border-b border-[rgba(255,255,255,0.03)]">
                    <td className="py-3 px-4 text-[#8888aa]">{criteria}</td>
                    {values.map((v, j) => (
                      <td key={j} className={`py-3 px-4 text-center ${j === 2 ? "text-[#00f0ff] font-semibold" : "text-[#8888aa]"}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
