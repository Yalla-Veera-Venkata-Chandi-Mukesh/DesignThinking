"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["All", "Accessibility", "Scam Prevention", "Navigation", "AI Protection"];

const solutions = [
  { title: "Design AI interfaces specifically for older adults", cat: "Accessibility", effort: "Medium", value: "High" },
  { title: "Add larger fonts and readable layouts", cat: "Accessibility", effort: "Low", value: "High" },
  { title: "Create voice-first AI interaction systems", cat: "Accessibility", effort: "Medium", value: "High" },
  { title: "Add step-by-step guided navigation", cat: "Navigation", effort: "Medium", value: "High" },
  { title: "Include confirmation prompts before risky actions", cat: "Scam Prevention", effort: "Low", value: "High" },
  { title: "Use high-contrast color schemes for visibility", cat: "Accessibility", effort: "Low", value: "High" },
  { title: "Add emotional reassurance during AI interactions", cat: "AI Protection", effort: "Medium", value: "High" },
  { title: "Create personalized onboarding experiences", cat: "Navigation", effort: "Medium", value: "High" },
  { title: "Build AI systems with forgiving error handling", cat: "AI Protection", effort: "Medium", value: "Medium" },
  { title: "Add automatic scam and risk warnings", cat: "Scam Prevention", effort: "Medium", value: "High" },
  { title: "Reduce clutter and unnecessary interface complexity", cat: "Accessibility", effort: "Low", value: "High" },
  { title: "Add tutorials for recognizing scams and deepfakes", cat: "Scam Prevention", effort: "Medium", value: "High" },
  { title: "Create clear labels identifying AI-generated content", cat: "AI Protection", effort: "Low", value: "High" },
  { title: "Add fact-checking tools inside platforms", cat: "AI Protection", effort: "Medium", value: "High" },
  { title: "Include warnings for potentially misleading content", cat: "Scam Prevention", effort: "Medium", value: "High" },
  { title: "Simplify app layouts and navigation", cat: "Navigation", effort: "Medium", value: "High" },
  { title: "Add emergency help buttons", cat: "Navigation", effort: "Low", value: "High" },
  { title: "Build trust through transparent AI behavior", cat: "AI Protection", effort: "Medium", value: "High" },
];

const catColors: Record<string, string> = {
  Accessibility: "#10b981",
  "Scam Prevention": "#ef4444",
  Navigation: "#3b82f6",
  "AI Protection": "#8b5cf6",
};

export default function SolutionsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? solutions : solutions.filter((s) => s.cat === filter);

  return (
    <section id="solutions" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(16,185,129,0.2)] to-transparent" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Solution Exploration
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl text-center mb-6"
        >
          150+ <span className="gradient-text-cyan">ideas</span> explored
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-[#8888aa] max-w-2xl mx-auto mb-10"
        >
          Solutions prioritized using feasibility, desirability, accessibility impact, implementation effort, and emotional reassurance.
        </motion.p>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-[rgba(0,240,255,0.15)] to-[rgba(139,92,246,0.15)] border border-[rgba(0,240,255,0.3)] text-[#00f0ff]"
                  : "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[#8888aa] hover:border-[rgba(255,255,255,0.15)] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s, i) => (
            <motion.div
              key={s.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="glass-card p-6 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: catColors[s.cat], background: `${catColors[s.cat]}15`, border: `1px solid ${catColors[s.cat]}22` }}
                >
                  {s.cat}
                </span>
                <div className="flex gap-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.effort === "Low" ? "bg-[rgba(16,185,129,0.15)] text-[#10b981]" : "bg-[rgba(245,158,11,0.15)] text-[#f59e0b]"}`}>
                    {s.effort} Effort
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#cccce0] leading-relaxed group-hover:text-white transition-colors">
                {s.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
