"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Configuration
    const particleCount = 135;
    const particles = [];
    const clickBursts = [];
    const maxConnectionDistance = 110;

    // Mouse tracking
    const mouse = {
      x: null,
      y: null,
      radius: 170,
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleCanvasClick = (event) => {
      const clickX = event.clientX;
      const clickY = event.clientY;
      
      // Spawn burst particles
      for (let i = 0; i < 25; i++) {
        clickBursts.push({
          x: clickX,
          y: clickY,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          radius: Math.random() * 3.5 + 1,
          alpha: 1,
          color: `hsl(${Math.random() * 80 + 190}, 100%, 70%)`, // cyan/violet sparks
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("click", handleCanvasClick);

    resizeCanvas();

    // Initialize particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        
        // Dynamic sizing: some large soft dust, some small sharp stars
        const rand = Math.random();
        if (rand > 0.82) {
          this.radius = Math.random() * 3.5 + 2; // large dust
          this.speedMultiplier = 0.5;
        } else {
          this.radius = Math.random() * 1.5 + 0.5; // small stars
          this.speedMultiplier = 1.2;
        }
        
        // Amethyst Violet (270), Electric Cyan (190) and clean white (0)
        const colorPalette = [190, 270, 0]; 
        this.baseColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        
        if (this.baseColor === 0) {
          this.color = `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.15})`;
        } else {
          this.color = `hsla(${this.baseColor}, 90%, 65%, ${Math.random() * 0.4 + 0.15})`;
        }
      }

      update() {
        this.x += this.vx * this.speedMultiplier;
        this.y += this.vy * this.speedMultiplier;

        // Wrap around boundaries (better feel than bouncing)
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Mouse interaction (push away gently)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.hypot(dx, dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 3;
            this.y += Math.sin(angle) * force * 3;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        // Soft glowing filter for larger dust particles
        if (this.radius > 2 && this.baseColor !== 0) {
          ctx.shadowBlur = this.radius * 2.5;
          ctx.shadowColor = `hsla(${this.baseColor}, 90%, 65%, 0.6)`;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw loops
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectionDistance) {
            const alpha = (maxConnectionDistance - dist) / maxConnectionDistance * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Cyan/Violet fuzzed lines
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`; 
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Update and draw normal particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Update and draw click burst particles
      for (let i = clickBursts.length - 1; i >= 0; i--) {
        const p = clickBursts[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.alpha -= 0.015;
        p.radius *= 0.98;

        if (p.alpha <= 0 || p.radius <= 0.2) {
          clickBursts.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.radius * 3;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("click", handleCanvasClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-transparent"
    />
  );
}
