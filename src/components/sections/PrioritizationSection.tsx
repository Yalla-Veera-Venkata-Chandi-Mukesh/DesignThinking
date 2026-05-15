"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const matrixData = [
  { idea: "Add larger fonts and readable layouts", effort: 2, value: 8, quadrant: "Quick Win" },
  { idea: "Use high-contrast color schemes", effort: 2, value: 8, quadrant: "Quick Win" },
  { idea: "Include labels for all icons and buttons", effort: 2, value: 8, quadrant: "Quick Win" },
  { idea: "Reduce clutter and interface complexity", effort: 2, value: 8, quadrant: "Quick Win" },
  { idea: "Use plain language instead of jargon", effort: 2, value: 8, quadrant: "Quick Win" },
  { idea: "Add confirmation prompts before risky actions", effort: 2, value: 8, quadrant: "Quick Win" },
  { idea: "Add emergency undo options", effort: 2, value: 8, quadrant: "Quick Win" },
  { idea: "Use color coding for easier understanding", effort: 2, value: 8, quadrant: "Quick Win" },
  { idea: "Design AI interfaces for older adults", effort: 5, value: 8, quadrant: "Major Project" },
  { idea: "Create voice-first AI interaction systems", effort: 5, value: 8, quadrant: "Major Project" },
  { idea: "Add step-by-step guided navigation", effort: 5, value: 8, quadrant: "Major Project" },
  { idea: "Create personalized onboarding experiences", effort: 5, value: 8, quadrant: "Major Project" },
  { idea: "Build AI systems with forgiving error handling", effort: 5, value: 5, quadrant: "Fill-in" },
  { idea: "Use simple language in AI systems", effort: 5, value: 5, quadrant: "Fill-in" },
  { idea: "Provide multilingual and regional support", effort: 5, value: 5, quadrant: "Fill-in" },
];

const quadrantColors: Record<string, string> = {
  "Quick Win": "#10b981",
  "Major Project": "#f59e0b",
  "Fill-in": "#3b82f6",
  "Thankless Task": "#ef4444",
};

export default function PrioritizationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  const counts = {
    "Quick Win": matrixData.filter((d) => d.quadrant === "Quick Win").length,
    "Major Project": matrixData.filter((d) => d.quadrant === "Major Project").length,
    "Fill-in": matrixData.filter((d) => d.quadrant === "Fill-in").length,
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(245,158,11,0.2)] to-transparent" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Prioritization Matrix
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl text-center mb-16"
        >
          Value vs <span className="gradient-text-purple">effort</span>
        </motion.h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {Object.entries(counts).map(([label, count], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <div className="font-heading text-3xl font-bold mb-1" style={{ color: quadrantColors[label] }}>
                {count}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#555577]">{label}s</div>
            </motion.div>
          ))}
        </div>

        {/* Matrix Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass-card p-8 relative"
        >
          {/* Quadrant Labels */}
          <div className="grid grid-cols-2 gap-px mb-8">
            <div className="text-center p-4 border-r border-b border-[rgba(255,255,255,0.05)]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#10b981]">Quick Wins</span>
              <p className="text-[10px] text-[#555577] mt-1">Low Effort · High Value</p>
            </div>
            <div className="text-center p-4 border-b border-[rgba(255,255,255,0.05)]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">Major Projects</span>
              <p className="text-[10px] text-[#555577] mt-1">High Effort · High Value</p>
            </div>
            <div className="text-center p-4 border-r border-[rgba(255,255,255,0.05)]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3b82f6]">Fill-ins</span>
              <p className="text-[10px] text-[#555577] mt-1">Low Effort · Low Value</p>
            </div>
            <div className="text-center p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef4444]">Thankless Tasks</span>
              <p className="text-[10px] text-[#555577] mt-1">High Effort · Low Value</p>
            </div>
          </div>

          {/* Ideas List */}
          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
            {matrixData.map((d, i) => (
              <motion.div
                key={d.idea}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.04 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  hovered === i ? "bg-[rgba(255,255,255,0.04)]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: quadrantColors[d.quadrant] }} />
                  <span className="text-sm text-[#aaaacc]">{d.idea}</span>
                </div>
                <span
                  className="text-[10px] px-3 py-1 rounded-full font-semibold"
                  style={{ color: quadrantColors[d.quadrant], background: `${quadrantColors[d.quadrant]}15` }}
                >
                  {d.quadrant}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
