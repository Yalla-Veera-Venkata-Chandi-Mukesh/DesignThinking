"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const concepts = [
  {
    num: "01",
    title: "TrustScan Senior",
    subtitle: "Manual Verification System",
    desc: "A verification-focused system allowing users to manually scan suspicious content. Users can paste links, upload images, or enter text to check authenticity against verified databases.",
    features: ["Content scanning", "Link verification", "Image analysis", "Report generation"],
    effort: 3,
    value: 6,
    color: "#3b82f6",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Scam & Phishing Warning Assistant",
    subtitle: "Real-Time Alert System",
    desc: "A real-time warning system focused on phishing and scam detection. Monitors incoming messages, calls, and notifications for suspicious patterns and alerts users immediately.",
    features: ["Call screening", "SMS filtering", "Link warnings", "Real-time alerts"],
    effort: 4,
    value: 7,
    color: "#f59e0b",
    icon: "⚡",
  },
  {
    num: "03",
    title: "SeniorSafe",
    subtitle: "Accessibility-First Protection Ecosystem",
    desc: "An accessibility-first protection ecosystem combining simplified interfaces, AI scam detection, fake call protection, guided explanations, emotional reassurance, and multi-platform safety systems.",
    features: ["AI scam detection", "Simplified UI", "Fake call protection", "Guided explanations", "Emotional reassurance", "Multi-platform"],
    effort: 5,
    value: 9,
    color: "#00f0ff",
    icon: "🛡️",
    selected: true,
  },
];

export default function ConceptsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(2);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.2)] to-transparent" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Concept Exploration
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl text-center mb-16"
        >
          Three <span className="gradient-text">prototype</span> concepts
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {concepts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`glass-card p-8 cursor-pointer relative overflow-hidden group transition-all duration-500 ${
                c.selected ? "ring-1 ring-[rgba(0,240,255,0.2)]" : ""
              }`}
            >
              {/* Selected badge */}
              {c.selected && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[rgba(0,240,255,0.1)] text-[#00f0ff] border border-[rgba(0,240,255,0.2)]">
                  ★ Selected
                </div>
              )}

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: `inset 0 0 1px ${c.color}44, 0 0 20px ${c.color}08` }} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${c.color}10`, border: `1px solid ${c.color}22` }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <span className="text-xs text-[#555577] font-mono">Concept {c.num}</span>
                    <h3 className="font-heading font-bold text-xl" style={{ color: c.color }}>{c.title}</h3>
                    <p className="text-xs text-[#8888aa]">{c.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-[#8888aa] leading-relaxed mb-6">{c.desc}</p>

                {/* Value/Effort indicators */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div>
                    <span className="text-[10px] text-[#555577] uppercase tracking-wider block mb-1">Value</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 10 }).map((_, j) => (
                        <div key={j} className="w-full h-1.5 rounded-full" style={{ background: j < c.value ? c.color : "rgba(255,255,255,0.05)" }} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#555577] uppercase tracking-wider block mb-1">Effort</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 10 }).map((_, j) => (
                        <div key={j} className="w-full h-1.5 rounded-full" style={{ background: j < c.effort ? "#f59e0b" : "rgba(255,255,255,0.05)" }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features */}
                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                      {c.features.map((f) => (
                        <span key={f} className="px-3 py-1 rounded-full text-[10px] text-[#aaaacc] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]">
                          {f}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
