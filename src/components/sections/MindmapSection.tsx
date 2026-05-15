"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const nodes = [
  {
    id: "center",
    label: "Senior Digital\nVulnerability",
    color: "#00f0ff",
    children: [
      { label: "Trust Issues", details: "Trusting visual realism over verified sources, sharing without verification", color: "#ef4444" },
      { label: "Misinformation", details: "Emotional content spread, fake news on WhatsApp and Facebook, viral manipulation", color: "#f59e0b" },
      { label: "Accessibility", details: "Cluttered interfaces, small fonts, hidden gestures, complex navigation", color: "#10b981" },
      { label: "Deepfakes", details: "AI-generated videos and images indistinguishable from real content", color: "#8b5cf6" },
      { label: "Cognitive Overload", details: "Information density, frequent updates, changing layouts, multiple platforms", color: "#ec4899" },
      { label: "Scam Susceptibility", details: "Phishing messages, fake OTPs, impersonation calls, urgency tactics", color: "#3b82f6" },
    ],
  },
];

export default function MindmapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const centerNode = nodes[0];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.2)] to-transparent" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Problem Exploration
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl text-center mb-16"
        >
          Research <span className="gradient-text">mindmap</span>
        </motion.h2>

        {/* Mindmap Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-48 h-48 rounded-full glass-card flex items-center justify-center text-center z-10 mb-8"
            style={{ borderColor: `${centerNode.color}33`, boxShadow: `0 0 40px ${centerNode.color}11` }}
          >
            <div>
              <span className="text-3xl mb-2 block">🧠</span>
              <span className="font-heading font-bold text-sm" style={{ color: centerNode.color }}>
                Senior Digital<br />Vulnerability
              </span>
            </div>
          </motion.div>

          {/* Child Nodes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {centerNode.children.map((child, i) => (
              <motion.div
                key={child.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                onMouseEnter={() => setActiveNode(i)}
                onMouseLeave={() => setActiveNode(null)}
                className="glass-card p-6 cursor-pointer group relative overflow-hidden"
              >
                {/* Animated connector dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: child.color }} />

                <h3 className="font-heading font-semibold mb-2 transition-colors group-hover:text-white" style={{ color: child.color }}>
                  {child.label}
                </h3>
                <p className="text-xs text-[#8888aa] leading-relaxed">{child.details}</p>

                {/* Hover glow */}
                {activeNode === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-[20px]"
                    style={{ boxShadow: `inset 0 0 30px ${child.color}08, 0 0 20px ${child.color}08` }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
