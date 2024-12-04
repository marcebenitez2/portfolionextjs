"use client";
// FramerComponent.tsx
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

export interface FramerComponentProps {
  children?: React.ReactNode;
  style?: string;
  animationInitial?: ComponentProps<typeof motion.div>["initial"];
  animationAnimate?: ComponentProps<typeof motion.div>["animate"];
  animationTransition?: ComponentProps<typeof motion.div>["transition"];
  animationWhileInView?: ComponentProps<typeof motion.div>["whileInView"];
  animationViewPort?: ComponentProps<typeof motion.div>["viewport"];
  animationVariants?: ComponentProps<typeof motion.div>["variants"];
  animationExit?: ComponentProps<typeof motion.div>["exit"];
  animationWhileHover?: ComponentProps<typeof motion.div>["whileHover"];
  animationWhileTap?: ComponentProps<typeof motion.div>["whileTap"];
}

export default function FramerComponent({
  children,
  style,
  animationInitial,
  animationAnimate,
  animationTransition,
  animationWhileInView,
  animationViewPort,
  animationVariants,
  animationExit,
  animationWhileHover,
  animationWhileTap,
}: FramerComponentProps) {
  return (
    <motion.div
      className={style}
      initial={animationInitial}
      animate={animationAnimate}
      transition={animationTransition}
      whileInView={animationWhileInView}
      viewport={animationViewPort}
      variants={animationVariants}
      exit={animationExit}
      whileHover={animationWhileHover}
      whileTap={animationWhileTap}
    >
      {children}
    </motion.div>
  );
}
