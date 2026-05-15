"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Particle({ delay, x }: { delay: number; x: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[rgba(0,240,255,0.5)]"
      style={{ left: `${x}%`, bottom: 0 }}
      animate={{ y: [0, -600], opacity: [0, 1, 0], x: [0, Math.random() * 30 - 15] }}
      transition={{ duration: 6 + Math.random() * 4, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

export default function ConclusionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative py-32 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.2)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#060618] to-[#050510]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[rgba(0,240,255,0.04)] to-[rgba(139,92,246,0.04)] blur-[150px]" />

      {/* Particles */}
      {mounted && Array.from({ length: 15 }).map((_, i) => (
        <Particle key={i} delay={i * 0.8} x={Math.random() * 100} />
      ))}

      <div ref={ref} className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="section-label block mb-8">Conclusion</span>

          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 max-w-4xl mx-auto">
            SeniorSafe is not just a scam detection tool
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-[#8888aa] max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            It is an <span className="text-[#00f0ff] font-semibold">accessibility-first digital safety ecosystem</span> helping 
            older adults feel safe, confident, and independent online.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="w-48 h-px bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mx-auto mb-12"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="font-heading text-2xl sm:text-3xl font-bold gradient-text max-w-2xl mx-auto mb-16"
          >
            &ldquo;Designing safer digital futures for everyone.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="https://v0-onboarding-ui-prototype-olive.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              View Prototype
            </a>
            <a href="#hero" className="btn-secondary">
              Back to Top
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-24 pt-8 border-t border-[rgba(255,255,255,0.05)]"
        >
          <p className="text-xs text-[#555577]">
            SeniorSafe · Design Thinking Case Study · 2026
          </p>
          <p className="text-xs text-[#333344] mt-2">
            Built with care for safer digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
