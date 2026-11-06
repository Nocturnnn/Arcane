"use client";

import {
  useLayoutEffect,
  useRef,
  useId,
  type CSSProperties,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getSectionMotion, sectionMotionSelector } from "@/lib/scroll-motion";

type Motion = { y?: number; x?: number; rotate?: number; scale?: number };
type LayerProps = Motion & {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  decorative?: boolean;
};

export function Layer({
  children,
  className = "",
  y = 70,
  x = 0,
  rotate = 0,
  scale = 1,
  style,
  decorative,
}: LayerProps) {
  return (
    <div
      className={`layer ${className}`}
      style={style}
      data-parallax
      data-y={y}
      data-x={x}
      data-rotate={rotate}
      data-scale={scale}
      aria-hidden={decorative || undefined}
    >
      {children}
    </div>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  position,
  ...motion
}: Motion & {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <Layer className={`photo ${className}`} {...motion}>
      <img
        src={`/images/${src}`}
        alt={alt}
        width={1000}
        height={700}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={{ objectPosition: position }}
      />
    </Layer>
  );
}

export function Section({
  id,
  number,
  kicker,
  className = "",
  children,
  label,
}: {
  id: string;
  number: string;
  kicker: ReactNode;
  className?: string;
  children: ReactNode;
  label: string;
}) {
  return (
    <section
      id={id}
      className={`editorial-section ${className}`}
      aria-label={label}
    >
      <div className="section-meta">
        <span>
          {number} <span className="meta-rule">—</span> 07
        </span>
        <p>{kicker}</p>
      </div>
      <Marginalia scene={number} />
      <SectionFragments scene={number} />
      {children}
    </section>
  );
}

export function Note({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`editorial-note ${className}`}>
      {children}
      <span className="note-dash" aria-hidden="true">
        —
      </span>
    </p>
  );
}

const marginWords: Record<string, [string, string, string]> = {
  "01": ["tudo começa com uma faísca.", "não tente me consertar.", "BOOM!"],
  "02": ["lá em cima / aqui embaixo", "quem paga o progresso?", "SEM VOLTA."],
  "03": ["você ainda está aí?", "a gente nunca se solta.", "POWDER?"],
  "04": ["o tempo não cura tudo.", "escolha. erre. recomece.", "TIC / TAC"],
  "05": ["brilhante demais para durar.", "e se der errado?", "INSTÁVEL!"],
  "06": ["lembra de mim?", "algumas coisas ficam.", "NÓS."],
  "07": ["aumenta o volume.", "isso ainda ecoa.", "REPEAT ↺"],
};

const insetPhotos: Record<string, [string, string]> = {
  "02": ["piltover.jpg", "zaun.jpg"],
  "03": ["sister-jinx.webp", "sister-vi.webp"],
  "04": ["caitlyn-cinematic.webp", "ekko-powder.jpg"],
  "05": ["hextech-scene.jpg", "viktor-cinematic.webp"],
  "06": ["sisters-scene.jpg", "history-flare.jpg"],
  "07": ["sister-jinx.webp", "sisters-scene.jpg"],
};

function SectionFragments({ scene }: { scene: string }) {
  const photos = insetPhotos[scene];
  if (!photos) return null;
  return (
    <div className={`section-fragments inset-${scene}`} aria-hidden="true">
      <Photo
        src={photos[0]}
        alt=""
        className="inset-shard inset-a"
        y={-115}
        x={-65}
        rotate={-15}
      />
      <Photo
        src={photos[1]}
        alt=""
        className="inset-shard inset-b"
        y={135}
        x={80}
        rotate={18}
      />
    </div>
  );
}

export function Marginalia({ scene }: { scene: string }) {
  const words = marginWords[scene] ?? marginWords["01"];
  return (
    <div className={`marginalia margin-${scene}`} aria-hidden="true">
      {words.map((word, i) => (
        <Layer
          key={word}
          className={`margin-word margin-word-${i + 1}`}
          y={[-100, 130, -65][i]}
          x={[40, -55, 25][i]}
          rotate={[-12, 10, -16][i]}
          decorative
        >
          <span>{word}</span>
        </Layer>
      ))}
      <Layer
        className="margin-sketch sketch-orbit"
        y={110}
        x={-40}
        rotate={18}
        decorative
      >
        <svg viewBox="0 0 200 200" fill="none">
          <g stroke="currentColor" strokeWidth="2">
            <path d="M160 28C57-7 6 90 48 153c30 41 103 31 128-27C202 55 86 1 37 69c-48 69 48 128 110 69" />
            <path d="m20 120 153-71M47 9l97 180M10 84l178 30M77 22l-5 165" />
            <circle cx="105" cy="99" r="41" />
            <path d="m146 146 29 40m-9-31 16 32-28-11" />
          </g>
        </svg>
      </Layer>
      <Layer
        className="margin-sketch sketch-tally"
        y={-90}
        x={45}
        rotate={-11}
        decorative
      >
        <svg viewBox="0 0 160 130" fill="none">
          <g stroke="currentColor" strokeWidth="4">
            <path d="m36 10-9 104M62 5l-5 109M87 14l-5 96m31-96-8 101M12 88 138 28" />
            <path d="m15 119 126-8m-98 12 13 4" strokeWidth="1" />
          </g>
        </svg>
      </Layer>
      <Layer
        className="ink-splatter splatter-one"
        y={-60}
        rotate={9}
        decorative
      >
        <InkCloud />
      </Layer>
      <Layer
        className="ink-splatter splatter-two"
        y={95}
        x={-25}
        rotate={-12}
        decorative
      >
        <InkCloud />
      </Layer>
      <Layer className="margin-thread" y={-80} rotate={4} decorative>
        <svg viewBox="0 0 600 240" fill="none">
          <path
            d="M5 173C94 194 88 39 199 61s110 186 225 119S494 23 574 57m-17-21 22 23-35 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="9 8"
          />
        </svg>
      </Layer>
      <span className="margin-registration">
        +<br />+<br />+
      </span>
    </div>
  );
}

function InkCloud() {
  const filterId = `ink-${useId().replaceAll(":", "")}`;
  return (
    <svg viewBox="0 0 400 300" fill="currentColor">
      <defs>
        <filter id={filterId}>
          <feTurbulence
            baseFrequency=".12"
            numOctaves="3"
            seed="8"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="14" />
        </filter>
      </defs>
      <g filter={`url(#${filterId})`}>
        <path
          d="m42 213 43-58-32-35 81 17 29-74 30 57 56-90 10 80 90-33-48 61 65 27-87 18 35 66-85-32-39 56-22-59-83 20 23-45Z"
          opacity=".65"
        />
        {Array.from({ length: 45 }, (_, i) => (
          <circle
            key={i}
            cx={15 + ((i * 73) % 375)}
            cy={12 + ((i * 97) % 280)}
            r={i % 5 === 0 ? 3.1 : 1 + (i % 3) * 0.5}
          />
        ))}
      </g>
    </svg>
  );
}

// Each shard is an independent viewport into the supplied artwork. No mockup
// or complete source image is ever placed behind the website composition.
export function SourceFragment({
  className,
  crop,
  y,
  x,
  rotate,
}: {
  className: string;
  crop: [number, number, number, number];
  y: number;
  x: number;
  rotate: number;
}) {
  const [left, top, width, height] = crop;
  return (
    <Layer
      className={`source-fragment ${className}`}
      y={y}
      x={x}
      rotate={rotate}
      decorative
    >
      <div className="fragment-window">
        <img
          src="/images/jinx-fragment-source.jpg"
          alt=""
          width={736}
          height={1104}
          loading="eager"
          style={{
            width: `${(736 / width) * 100}%`,
            height: `${(1104 / height) * 100}%`,
            left: `${(-left / width) * 100}%`,
            top: `${(-top / height) * 100}%`,
          }}
        />
      </div>
    </Layer>
  );
}

export function HeroFragments() {
  return (
    <>
      <SourceFragment
        className="fragment-crown"
        crop={[43, 26, 225, 305]}
        y={-260}
        x={-125}
        rotate={-19}
      />
      <SourceFragment
        className="fragment-left"
        crop={[0, 362, 173, 229]}
        y={180}
        x={-190}
        rotate={24}
      />
      <SourceFragment
        className="fragment-eye"
        crop={[207, 789, 271, 253]}
        y={-210}
        x={170}
        rotate={-23}
      />
      <SourceFragment
        className="fragment-bunny"
        crop={[600, 567, 136, 265]}
        y={235}
        x={140}
        rotate={17}
      />
      <SourceFragment
        className="fragment-top"
        crop={[568, 0, 168, 270]}
        y={-340}
        x={105}
        rotate={28}
      />
      <SourceFragment
        className="fragment-bottom"
        crop={[0, 721, 221, 210]}
        y={270}
        x={-125}
        rotate={-22}
      />
      <SourceFragment
        className="fragment-glass-one"
        crop={[0, 581, 181, 170]}
        y={-310}
        x={-220}
        rotate={35}
      />
      <SourceFragment
        className="fragment-glass-two"
        crop={[500, 876, 236, 228]}
        y={320}
        x={230}
        rotate={-30}
      />
      {Array.from({ length: 9 }, (_, i) => (
        <Layer
          key={i}
          className={`mirror-chip chip-${i}`}
          y={(i % 2 ? -1 : 1) * (130 + i * 28)}
          x={(i % 3 ? -1 : 1) * (80 + i * 22)}
          rotate={(i % 2 ? -1 : 1) * (16 + i * 3)}
          decorative
        >
          <span />
        </Layer>
      ))}
      <Marginalia scene="01" />
    </>
  );
}

export function Paint({
  className = "",
  color = "blue",
  variant = "cross",
}: {
  className?: string;
  color?: "blue" | "pink";
  variant?: "cross" | "smile" | "streak" | "crown";
}) {
  return (
    <Layer
      className={`paint ${color} ${className}`}
      y={-40}
      rotate={5}
      decorative
    >
      <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <defs>
          <filter id={`rough-${className.replaceAll(" ", "-")}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".08"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
        </defs>
        <g
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="square"
          filter={`url(#rough-${className.replaceAll(" ", "-")})`}
        >
          {variant === "cross" && (
            <>
              <path d="M40 26 151 177M153 31 34 165M43 40 164 170M143 37 40 171" />
              <path d="m53 152-9 36m111-55 11 44" strokeWidth="2" />
            </>
          )}
          {variant === "smile" && (
            <>
              <path d="M160 46C65-16-16 92 44 155c64 72 169-6 130-82C152 22 78 10 39 54" />
              <path
                d="m58 59 30 34m-28-3 29-37m34 10 27 32m-31-3 32-31M52 121q48 39 99-6m-80 4-5 24m36-20 1 30m26-36 6 22"
                strokeWidth="5"
              />
            </>
          )}
          {variant === "streak" && (
            <>
              <path
                d="m9 126 178-58M16 141 172 91M32 158l129-53"
                strokeWidth="15"
              />
              <path d="m35 151-12 38m115-95 28-54" strokeWidth="3" />
            </>
          )}
          {variant === "crown" && (
            <>
              <path d="m30 142-8-70 50 22 28-68 23 66 54-34-19 83-128 9 129 6" />
              <path d="m95 19 8-14m63 51 18-18M15 63 4 47" strokeWidth="3" />
            </>
          )}
        </g>
      </svg>
    </Layer>
  );
}

export function ScrollScene({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        if (!context.conditions?.motion) return;
        const factor = context.conditions.mobile ? 0.3 : 1;
        // Keep the hero's existing dispersion. It already follows the scroll
        // continuously and is intentionally different from the other spreads.
        root.current
          ?.querySelector("#inicio")
          ?.querySelectorAll<HTMLElement>("[data-parallax]")
          .forEach((el) => {
            const section = el.closest("section");
            const fragment =
              el.classList.contains("source-fragment") ||
              el.classList.contains("mirror-chip");
            const photo = el.classList.contains("photo");
            const gain = fragment
              ? 1
              : photo
                ? 2.2
                : el.classList.contains("paint")
                  ? 2
                  : 1.35;
            const y = Number(el.dataset.y) * factor * gain;
            const x = Number(el.dataset.x) * factor * gain;
            const rotation =
              Number(el.dataset.rotate) * factor * (photo ? 2 : 1);
            const scale = Number(el.dataset.scale);
            const timeline = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: fragment ? 0.35 : 0.6,
                invalidateOnRefresh: true,
              },
            });
            timeline.fromTo(
              el,
              { y: 0, x: 0, rotation: 0, scale: 1 },
              { y, x, rotation, scale, duration: 1 },
            );
          });

        // One clock per spread, independent trajectories per element. A single
        // linear tween avoids a velocity change at the previous two-phase join.
        root.current
          ?.querySelectorAll<HTMLElement>("section:not(#inicio)")
          .forEach((section) => {
            const candidates = Array.from(
              section.querySelectorAll<HTMLElement>(sectionMotionSelector),
            );
            // Avoid animating a caption twice when it lives inside a moving photo.
            const elements = candidates.filter(
              (el) =>
                !candidates.some(
                  (parent) => parent !== el && parent.contains(el),
                ),
            );
            const timeline = gsap.timeline({
              defaults: { duration: 1, ease: "none" },
              scrollTrigger: {
                id: `spread-${section.id}`,
                trigger: section,
                start: "top bottom",
                end:
                  section.id === "trilha" ? "clamp(bottom top)" : "bottom top",
                scrub: 0.45,
                invalidateOnRefresh: true,
              },
            });
            elements.forEach((el, index) => {
              const motion = getSectionMotion(el, index);
              const rotation = Number(gsap.getProperty(el, "rotation")) || 0;
              const requestedX = motion.x * factor;
              const titleRoom = Math.max(
                0,
                el.offsetLeft - (context.conditions?.mobile ? 12 : 24),
              );
              const x = el.querySelector("h2")
                ? Math.sign(requestedX) *
                  Math.min(Math.abs(requestedX), titleRoom * 2)
                : requestedX;
              const y = motion.y * factor;
              const turn = motion.rotate * factor;
              const zoom = (motion.scale - 1) * factor;
              timeline.fromTo(
                el,
                {
                  x: -x / 2,
                  y: -y / 2,
                  rotation: rotation - turn / 2,
                  scale: 1 - zoom / 2,
                },
                {
                  x: x / 2,
                  y: y / 2,
                  rotation: rotation + turn / 2,
                  scale: 1 + zoom / 2,
                  force3D: true,
                },
                0,
              );
            });
            const bars = section.querySelectorAll<HTMLElement>(".waveform i");
            bars.forEach((bar, index) =>
              timeline.fromTo(
                bar,
                {
                  scaleY: 0.5 + (index % 5) * 0.13,
                },
                {
                  scaleY: 1.2 - (index % 7) * 0.1,
                  transformOrigin: "50% 50%",
                },
                0,
              ),
            );
          });
      },
      root,
    );
    let alive = true;
    let refreshFrame = 0;
    let refreshPending = false;
    const refresh = () => {
      if (!alive || refreshFrame) return;
      refreshPending = true;
      // Lazy images may finish while the wheel is moving. Defer geometry
      // refreshes until the scroll stops so scrubbed layers never snap mid-gesture.
      if (ScrollTrigger.isScrolling()) return;
      refreshFrame = requestAnimationFrame(() => {
        refreshFrame = 0;
        if (alive) {
          refreshPending = false;
          ScrollTrigger.refresh();
        }
      });
    };
    const refreshAfterScroll = () => {
      if (refreshPending) refresh();
    };
    ScrollTrigger.addEventListener("scrollEnd", refreshAfterScroll);
    void document.fonts.ready.then(refresh);
    const images = Array.from(root.current?.querySelectorAll("img") ?? []);
    images.forEach((img) => img.addEventListener("load", refresh));
    return () => {
      alive = false;
      cancelAnimationFrame(refreshFrame);
      ScrollTrigger.removeEventListener("scrollEnd", refreshAfterScroll);
      images.forEach((img) => img.removeEventListener("load", refresh));
      media.revert();
    };
  }, []);
  return (
    <div ref={root} className="scene-root">
      {children}
    </div>
  );
}
