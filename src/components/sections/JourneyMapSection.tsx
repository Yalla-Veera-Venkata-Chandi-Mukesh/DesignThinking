"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Data ─── */
const stages = [
  {
    num: "01",
    title: "Browsing Social Media",
    actions: "Scrolls through Facebook, WhatsApp, reads headlines and forwards.",
    thoughts: '"This looks important." "Everyone is sharing this, it must be true."',
    feels: "Curious",
    feelsColor: "#3b82f6",
    painPoints:
      "Too much information at once. Hard to distinguish real from fake content.",
  },
  {
    num: "02",
    title: "Encountering Suspicious Content",
    actions: "Reads emotional headlines, checks shares count, views deepfake videos.",
    thoughts:
      '"Is this real or fake?" "It has so many shares, probably true."',
    feels: "Confused",
    feelsColor: "#f59e0b",
    painPoints:
      "No quick verification tool. Misleading headlines and emotional triggers.",
  },
  {
    num: "03",
    title: "Believing & Sharing",
    actions: "Shares without verifying or hesitates before sharing.",
    thoughts:
      '"What if this is fake and I look foolish?" "I don\'t have time to check."',
    feels: "Anxious",
    feelsColor: "#ef4444",
    painPoints:
      "Lack of easy fact-checking. Social pressure to share quickly.",
  },
  {
    num: "04",
    title: "Realizing It Was Fake",
    actions: "Later realizes the content was false. Feels embarrassed.",
    thoughts: '"I should have checked before sharing."',
    feels: "Regret & Shame",
    feelsColor: "#ec4899",
    painPoints:
      "No accountability system. Hard to track or retract misinformation.",
  },
  {
    num: "05",
    title: "Seeking Protection & Change",
    actions: "Becomes more cautious after past experience. Seeks safer tools.",
    thoughts: '"There must be an easier way to check this."',
    feels: "Cautiously aware",
    feelsColor: "#c8ff00",
    painPoints:
      "Fact-checking still time-consuming. No habit-forming system. Still tempted by convenience.",
  },
];

const emotionPoints = [
  { label: "Browse", score: 2, color: "#3b82f6" },
  { label: "Encounter", score: 0, color: "#f59e0b" },
  { label: "Share", score: -3, color: "#ef4444" },
  { label: "Realize", score: -5, color: "#ec4899" },
  { label: "Protect", score: 1, color: "#c8ff00" },
];

const opportunities = [
  {
    stage: 1,
    text: "Add a quick credibility indicator to reduce information overload.",
  },
  {
    stage: 2,
    text: "Provide a one-click fact-check with source reliability rating.",
  },
  {
    stage: 3,
    text: "Show a warning prompt before sharing unverified content.",
  },
  {
    stage: 4,
    text: "Notify users and allow easy correction of misinformation shared.",
  },
  {
    stage: 5,
    text: "Encourage habit-building through rewards and verification tools.",
  },
];

/* ─── Emotion Arc SVG ─── */
function EmotionArc({ inView }: { inView: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dims, setDims] = useState({ w: 800, h: 160 });

  useEffect(() => {
    const el = svgRef.current?.parentElement;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDims({ w: entry.contentRect.width, h: 160 });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const padX = 60;
  const padY = 30;
  const chartW = dims.w - padX * 2;
  const chartH = dims.h - padY * 2;
  const midY = padY + chartH / 2;

  const pts = emotionPoints.map((p, i) => ({
    x: padX + (chartW / (emotionPoints.length - 1)) * i,
    y: midY - (p.score / 10) * chartH,
    ...p,
  }));

  // Build path
  const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  // Build colored line segments
  const segments = pts.slice(0, -1).map((p, i) => ({
    x1: p.x,
    y1: p.y,
    x2: pts[i + 1].x,
    y2: pts[i + 1].y,
    color: p.score >= 0 && pts[i + 1].score >= 0
      ? "#3b82f6"
      : p.score < 0 && pts[i + 1].score < 0
        ? "#ef4444"
        : p.score >= 0
          ? "#f59e0b"
          : pts[i + 1].score >= 0
            ? "#c8ff00"
            : "#ef4444",
  }));

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${dims.w} ${dims.h}`}
      className="w-full"
      style={{ height: 160, overflow: "visible" }}
    >
      {/* Zero line (dashed) */}
      <line
        x1={padX}
        y1={midY}
        x2={dims.w - padX}
        y2={midY}
        stroke="rgba(255,255,255,0.12)"
        strokeDasharray="6 4"
        strokeWidth={1}
      />

      {/* Colored line segments */}
      {segments.map((seg, i) => (
        <motion.line
          key={i}
          x1={seg.x1}
          y1={seg.y1}
          x2={seg.x2}
          y2={seg.y2}
          stroke={seg.color}
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
        />
      ))}

      {/* Data points & labels */}
      {pts.map((p, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 300 }}
        >
          {/* Outer ring */}
          <circle cx={p.x} cy={p.y} r={8} fill="none" stroke={p.color} strokeWidth={2} opacity={0.4} />
          {/* Filled dot */}
          <circle cx={p.x} cy={p.y} r={4.5} fill={p.color} />
          {/* Score label */}
          <text
            x={p.x}
            y={p.y - 16}
            textAnchor="middle"
            fill={p.color}
            fontSize={11}
            fontWeight={700}
            fontFamily="var(--font-mono)"
          >
            {p.score > 0 ? `+${p.score}` : p.score}
          </text>
          {/* Stage label */}
          <text
            x={p.x}
            y={dims.h - 4}
            textAnchor="middle"
            fill="rgba(255,255,255,0.4)"
            fontSize={10}
            fontFamily="var(--font-mono)"
            letterSpacing={1}
          >
            {p.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

/* ─── Main Component ─── */
export default function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label"
        >
          Experience Mapping
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-heading"
        >
          User Journey Map
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="section-body mb-3"
        >
          Mapping the emotional and behavioral journey of a senior citizen on
          social media — from scrolling their feed to long-term behavior change
          — revealing where friction, confusion, and opportunity live.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "0.82rem",
            color: "var(--color-text-muted)",
            marginBottom: 56,
          }}
        >
          Persona: Senior citizens relying on social media &amp; messaging
          &nbsp;·&nbsp; Goal: Stay connected without becoming victims of digital
          scams
        </motion.p>

        {/* ═══════ Stage Cards ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="journey-stages-grid"
        >
          {stages.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="journey-stage-card"
            >
              {/* Stage header */}
              <p className="journey-stage-num">Stage {s.num}</p>
              <h3 className="journey-stage-title">{s.title}</h3>

              {/* Actions */}
              <p className="journey-field-label">Actions</p>
              <p className="journey-field-text">{s.actions}</p>

              {/* Thoughts */}
              <p className="journey-field-label">Thoughts</p>
              <p className="journey-field-text">{s.thoughts}</p>

              {/* Feels */}
              <p className="journey-field-label">Feels</p>
              <span
                className="journey-feels-tag"
                style={{
                  borderColor: s.feelsColor,
                  color: s.feelsColor,
                }}
              >
                {s.feels}
              </span>

              {/* Pain Points */}
              <p className="journey-field-label" style={{ marginTop: 16 }}>
                Pain Points
              </p>
              <p className="journey-field-text">{s.painPoints}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══════ Emotion Arc ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="journey-emotion-arc"
        >
          <p className="journey-arc-label">
            Emotion Arc (Score: −10 to +10)
          </p>
          <div style={{ padding: "16px 0 8px" }}>
            <EmotionArc inView={inView} />
          </div>
        </motion.div>

        {/* ═══════ Opportunities ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85 }}
          className="journey-opportunities"
        >
          <p className="journey-opp-label">Opportunities at Each Pain Point</p>
          <ul className="journey-opp-list">
            {opportunities.map((o) => (
              <motion.li
                key={o.stage}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 + o.stage * 0.08 }}
              >
                <span className="journey-opp-pin">📌</span>
                <span>
                  <strong>Stage {o.stage}:</strong> {o.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
