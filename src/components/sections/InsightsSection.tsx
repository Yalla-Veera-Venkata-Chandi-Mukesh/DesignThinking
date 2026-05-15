"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 78, label: "Could not identify fake AI content", color: "#ef4444", icon: "🚫" },
  { value: 64, label: "Believed misleading information", color: "#f59e0b", icon: "⚠️" },
  { value: 82, label: "Feared online scams", color: "#ec4899", icon: "😰" },
  { value: 51, label: "Shared misinformation unknowingly", color: "#8b5cf6", icon: "📤" },
  { value: 89, label: "Wanted automatic verification systems", color: "#10b981", icon: "✅" },
  { value: 73, label: "Found interfaces overwhelming", color: "#00f0ff", icon: "😵" },
];

const insights = [
  { text: "Older adults trusted visual realism more than sources", icon: "👁️" },
  { text: "Urgency and emotional language caused panic", icon: "🔥" },
  { text: "Confusing layouts increased vulnerability", icon: "🧩" },
  { text: "Clear warnings improved confidence", icon: "✨" },
  { text: "Familiar terminology reduced fear during interactions", icon: "💬" },
];

function AnimatedCounter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count}%</span>;
}

export default function InsightsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="insights" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.2)] to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[rgba(236,72,153,0.03)] blur-[120px]" />

      <div ref={ref} className="section-container">
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label block text-center">
          Research Insights
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-4xl sm:text-5xl lg:text-6xl text-center mb-6"
        >
          The <span className="gradient-text">data</span> speaks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-[#8888aa] max-w-2xl mx-auto mb-16"
        >
          Key findings from interviews with 50+ adults above 40 reveal the scale of digital vulnerability.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass-card p-7 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{s.icon}</span>
                <div className="font-heading text-4xl font-bold" style={{ color: s.color }}>
                  <AnimatedCounter target={s.value} inView={inView} />
                </div>
              </div>
              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-[rgba(255,255,255,0.05)] mb-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${s.value}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full progress-bar-glow"
                  style={{ background: `linear-gradient(90deg, ${s.color}88, ${s.color})` }}
                />
              </div>
              <p className="text-sm text-[#8888aa]">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass-card p-8"
        >
          <h3 className="font-heading font-semibold text-lg mb-6 text-center gradient-text-cyan">Additional Insights</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {insights.map((ins, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] hover:border-[rgba(0,240,255,0.15)] transition-colors"
              >
                <span className="text-xl mt-0.5">{ins.icon}</span>
                <p className="text-sm text-[#aaaacc]">{ins.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
