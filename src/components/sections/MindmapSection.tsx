"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MindmapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mindmap" className="py-28">
      <div className="section-divider" />
      <div ref={ref} className="container-main pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label">Synthesis Phase</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-heading">Digital Mindmap</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-body mb-14">
          We synthesized our research findings and problem definitions into a comprehensive digital mindmap on Miro, visualizing the relationships between different insights.
        </motion.p>

        {/* Miro Board Embed */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.28 }}>
          <div className="w-full h-[600px] rounded-xl overflow-hidden border border-[#252533] bg-[#111118]">
            <iframe
              src="https://miro.com/app/live-embed/uXjVHX2MBNU=/?embedMode=view_only_without_ui&moveToViewport=-6940%2C-5315%2C20479%2C9805&embedId=554103504542"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allow="fullscreen; clipboard-read; clipboard-write"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
