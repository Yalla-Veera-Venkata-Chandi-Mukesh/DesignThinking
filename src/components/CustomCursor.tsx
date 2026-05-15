"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      setVisible(true);
    }

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => {
      const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, .glass-card");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    // Check for interactive elements after DOM is ready
    const timeout = setTimeout(handleHover, 1000);

    return () => {
      window.removeEventListener("mousemove", move);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[rgba(0,240,255,0.3)] pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#00f0ff] pointer-events-none z-[9998]"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: hovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  );
}
