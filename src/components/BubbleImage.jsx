import React, { useRef, useState, useEffect } from "react";

export default function BubbleImage({
  src,
  images,
  alt = "",
  size = "w-56",
  onPop,
  durations,
  droplets = 16,
  dispersion,
  respawnOffset,
  gravity = 760,
  drag = 0.18,
}) {
  const hasList = Array.isArray(images) && images.length > 0;
  const [idx, setIdx] = useState(0);
  const currentSrc = hasList ? images[idx % images.length] : (src || "");

  const POP_DUR = Math.max(160, (durations && durations.pop) ?? 560);
  const RESPAWN_DUR = Math.max(160, (durations && durations.respawn) ?? 420);
  const FLOAT_DUR = Math.max(1800, (durations && durations.float) ?? 5200);
  const SPEED_MIN = Math.max(80, (dispersion && dispersion.min) ?? 220);
  const SPEED_MAX = Math.max(SPEED_MIN + 20, (dispersion && dispersion.max) ?? 420);
  const OFF_X = (respawnOffset && respawnOffset.x) ?? 0;
  const OFF_Y = (respawnOffset && respawnOffset.y) ?? 0;

  const [phase, setPhase] = useState("idle"); // "idle" | "popping" | "respawn"
  const [respawnShift, setRespawnShift] = useState({ x: 0, y: 0 });

  // --- Particle system ---
  const [parts, setParts] = useState([]);
  const rafRef = useRef(null);
  const lastRef = useRef(0);

  useEffect(() => {
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const randBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const spawnParticles = (n) => {
    const arr = [];
    const count = Math.max(4, Math.min(60, n));
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = randBetween(SPEED_MIN, SPEED_MAX); // px/s
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed * 0.85;
      const r = randBetween(3, 8);
      const maxLife = randBetween(320, 640); // ms
      const tint = Math.random() * 0.4 + 0.6;
      arr.push({ id: i, x: 0, y: 0, vx, vy, r, life: 0, maxLife, tint });
    }
    setParts(arr);
  };

  const step = (t) => {
    if (!lastRef.current) lastRef.current = t;
    const dt = Math.min(48, t - lastRef.current);
    lastRef.current = t;

    setParts((prev) => {
      if (prev.length === 0) return prev;
      const k = Math.max(0, Math.min(1, drag));
      const g = gravity;
      const next = prev
        .map((p) => {
          const dvx = -p.vx * k * (dt / 1000);
          const dvy = (g * (dt / 1000)) - p.vy * k * (dt / 1000);
          const vx = p.vx + dvx;
          const vy = p.vy + dvy;
          const x = p.x + vx * (dt / 1000);
          const y = p.y + vy * (dt / 1000);
          const life = p.life + dt;
          return { ...p, x, y, vx, vy, life };
        })
        .filter((p) => p.life < p.maxLife);
      return next;
    });

    rafRef.current = requestAnimationFrame(step);
  };

  const beginPop = () => {
    spawnParticles(droplets);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    lastRef.current = 0;
    rafRef.current = requestAnimationFrame(step);
  };

  const endPop = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setParts([]);
  };

  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("popping");
    beginPop();
    onPop && onPop(idx);

    setTimeout(() => {
      endPop();
      if (hasList) setIdx((p) => (p + 1) % images.length);
      setRespawnShift({ x: OFF_X, y: OFF_Y });
      setPhase("respawn");
      setTimeout(() => {
        setRespawnShift({ x: 0, y: 0 });
        setPhase("idle");
      }, RESPAWN_DUR);
    }, POP_DUR);
  };

  return (
    <div className={`relative ${size} aspect-square mx-auto select-none`}>
      <div
        aria-hidden
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-[50%] blur-2xl"
        style={{
          opacity: phase === "popping" ? 0.12 : 0.38,
          transition: `opacity .38s ease`,
          background: "radial-gradient(ellipse at center, rgba(0,0,0,.28), rgba(0,0,0,0) 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-[-6%] rounded-full pointer-events-none"
        style={{
          filter: "blur(6px)",
          opacity: phase === "popping" ? 0 : 0.32,
          transition: "opacity .4s ease",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,153,51,0.25) 0%, rgba(255,153,51,0.08) 45%, transparent 70%)",
        }}
      />
      <button
        type="button"
        onClick={handleClick}
        className={[
          "relative overflow-hidden aspect-square rounded-full isolate w-full h-full",
          "ring-1 ring-white/60 shadow-2xl",
          phase === "idle" && "animate-float",
          phase === "popping" && "animate-pop",
          phase === "respawn" && "animate-respawn",
        ].filter(Boolean).join(" ")}
        style={{
          background:
            "radial-gradient(120% 120% at 30% 25%, rgba(255,165,0,0.18) 0%, rgba(255,165,0,0.10) 35%, rgba(255,165,0,0.04) 60%, rgba(255,165,0,0.02) 80%)",
          boxShadow: "inset 0 0 40px rgba(255,255,255,.25), inset 0 0 14px rgba(255,165,0,.18)",
          cursor: phase === "idle" ? "pointer" : "default",
          transform: phase === "respawn" ? `translate(${respawnShift.x}px, ${respawnShift.y}px)` : undefined,
        }}
        aria-label="Burbuja"
      >
        {currentSrc && (
          <img
            src={currentSrc}
            alt={alt}
            className="relative z-[1] w-full h-full object-cover rounded-full"
            draggable={false}
            style={{ transform: "scale(1.02)" }}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 rounded-full mix-blend-screen"
          style={{
            background:
              "radial-gradient(100% 100% at 30% 25%, rgba(255,190,120,0.45) 0%, rgba(255,170,80,0.18) 35%, rgba(255,150,40,0.10) 55%, rgba(255,130,20,0.06) 75%, rgba(255,120,10,0.03) 100%)",
            filter: phase === "popping" ? "blur(1.2px) saturate(110%)" : undefined,
            transition: `filter ${Math.min(POP_DUR, 320)}ms ease`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(65% 35% at 22% 18%, rgba(255,255,255,.85) 0%, rgba(255,255,255,.35) 16%, rgba(255,255,255,0) 40%), radial-gradient(45% 25% at 78% 78%, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 55%)",
          }}
        />
        <div
          aria-hidden
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "12%",
            left: "8%",
            width: "70%",
            height: "70%",
            background:
              "conic-gradient(from 210deg at 50% 50%, rgba(255,255,255,0) 0deg, rgba(255,255,255,.38) 40deg, rgba(255,255,255,0) 120deg)",
            filter: "blur(8px)",
            WebkitMaskImage: "radial-gradient(60% 60% at 50% 50%, black 55%, transparent 60%)",
            maskImage: "radial-gradient(60% 60% at 50% 50%, black 55%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: "inset 0 -18px 40px rgba(0,0,0,.18), inset 0 12px 24px rgba(255,255,255,.12)" }}
        />
        {phase === "popping" && (
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 shadow-[0_0_30px_rgba(255,255,255,0.7)] animate-shockwave"
            style={{ width: 20, height: 20 }}
          />
        )}
        {parts.length > 0 && (
          <div className="pointer-events-none absolute inset-0">
            {parts.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  width: p.r,
                  height: p.r,
                  transform: `translate(${p.x}px, ${p.y}px)`,
                  background: `radial-gradient(circle, rgba(255,255,255,${0.9 * p.tint}) 0%, rgba(255,255,255,${0.4 * p.tint}) 40%, rgba(255,153,51,${0.25 * p.tint}) 70%, transparent 100%)`,
                  mixBlendMode: "screen",
                  opacity: 1 - p.life / p.maxLife,
                  filter: "drop-shadow(0 0 8px rgba(255,200,150,.6))",
                }}
              />
            ))}
          </div>
        )}
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float ${FLOAT_DUR}ms ease-in-out infinite; will-change: transform; }

        @keyframes pop {
          0% { transform: scale(1); filter: none; opacity: 1; }
          45% { transform: scale(1.04); filter: saturate(118%) blur(0.3px); }
          70% { transform: scale(1.11); filter: saturate(92%) blur(1px); opacity: .7; }
          100% { transform: scale(1.14); filter: saturate(80%) blur(1.2px); opacity: 0; }
        }
        .animate-pop { animation: pop ${POP_DUR}ms ease-out forwards; }

        @keyframes respawn {
          0% { transform: scale(.88); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-respawn { animation: respawn ${RESPAWN_DUR}ms ease-out forwards; }

        @keyframes shockwave {
          0% { transform: translate(-50%, -50%) scale(0.2); opacity: .85; }
          60% { opacity: .35; }
          100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
        }
        .animate-shockwave { animation: shockwave ${Math.max(POP_DUR-80, 220)}ms cubic-bezier(.2,.6,.2,1) forwards; }
      `}</style>
    </div>
  );
}
