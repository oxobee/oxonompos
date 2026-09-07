"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

interface Bento3DCardProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
}

export function Bento3DCard({
  children,
  direction = "left",
  className,
}: Bento3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Track the scroll position of this individual card relative to viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 96%", "center 56%"],
  });

  const isLeft = direction === "left";

  // Apple-Style 3D Scroll Physics:
  // - Comes from left (translateX negative) or right (translateX positive)
  // - Comes from bottom (translateY positive: 80px -> 0px)
  // - Tilts backwards in 3D (rotateX: 18deg -> 0deg)
  // - Angles inward (rotateY: -15deg or +15deg -> 0deg)
  // - Scales up smoothly (scale: 0.91 -> 1.0)
  // - Fades in (opacity: 0.35 -> 1.0)
  const initialX = isLeft ? -85 : 85;
  const initialRotateY = isLeft ? -15 : 15;

  const rawTranslateX = useTransform(scrollYProgress, [0, 1], [initialX, 0]);
  const rawTranslateY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const rawRotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const rawRotateY = useTransform(scrollYProgress, [0, 1], [initialRotateY, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.91, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.35, 0.8, 1]);

  // Spring smoothing for organic Apple momentum feel
  const springConfig = { stiffness: 165, damping: 25, mass: 0.55 };
  const translateX = useSpring(rawTranslateX, springConfig);
  const translateY = useSpring(rawTranslateY, springConfig);
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);

  return (
    <div
      ref={cardRef}
      className={cn("relative h-full [perspective:1200px]", className)}
    >
      <motion.div
        style={
          reducedMotion
            ? undefined
            : {
                translateX,
                translateY,
                rotateX,
                rotateY,
                scale,
                opacity,
                transformStyle: "preserve-3d",
              }
        }
        className="size-full will-change-transform flex flex-col"
      >
        {children}

        {/* 3D Base Ambient Shadow */}
        <div
          aria-hidden
          className="mx-auto mt-2 h-4 w-4/5 rounded-full bg-black/10 dark:bg-black/40 blur-lg pointer-events-none -z-10"
        />
      </motion.div>
    </div>
  );
}
