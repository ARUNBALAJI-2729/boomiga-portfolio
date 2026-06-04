"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorEffect() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);

      // Instantly position the inner dot
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    // Smooth interpolation (lerp) for the outer trailing ring
    const renderRing = () => {
      const ease = 0.15; // trailing speed ease
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderRing);
    };

    const renderId = requestAnimationFrame(renderRing);

    const onMouseDown = () => {
      ring.style.width = "20px";
      ring.style.height = "20px";
      ring.style.borderColor = "#06b6d4"; // Cyan glow on click
    };

    const onMouseUp = () => {
      ring.style.width = isHovered ? "50px" : "36px";
      ring.style.height = isHovered ? "50px" : "36px";
      ring.style.borderColor = isHovered ? "#06b6d4" : "rgba(255, 255, 255, 0.4)";
    };

    // Detect clickable hover elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable") ||
        target.getAttribute("role") === "button";

      if (isClickable) {
        setIsHovered(true);
        ring.style.width = "50px";
        ring.style.height = "50px";
        ring.style.borderColor = "#06b6d4"; // Cyan border on hover
        ring.style.backgroundColor = "rgba(6, 182, 212, 0.05)"; // subtle cyan backing
        dot.style.backgroundColor = "#00f0ff";
      } else {
        setIsHovered(false);
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "rgba(255, 255, 255, 0.4)";
        ring.style.backgroundColor = "transparent";
        dot.style.backgroundColor = "#06b6d4"; // standard cyan dot
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsHidden(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);

    return () => {
      cancelAnimationFrame(renderId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, [isHovered]);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06b6d4] transition-all duration-100 ease-out sm:block hidden ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 h-9 w-9 rounded-full border-2 border-white/40 transition-all duration-300 ease-out sm:block hidden ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
      />
    </>
  );
}
