"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

interface TimelineEntry {
  title: string;
  company?: string;
  period?: string;
  description: string;
  achievements?: string[];
  imageUrl?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionHeight = height / data.length;
    const currentSection = Math.floor((latest * height) / sectionHeight);
    setActiveIndex(
      currentSection >= data.length ? data.length - 1 : currentSection
    );
  });

  const AnimatedCircle = ({ index }: { index: number }) => {
    const isActive = index <= activeIndex;

    return (
      <div className="h-12 w-12 absolute left-3 md:left-3 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-500 border border-white/10">
        <motion.div
          className={`h-5 w-5 rounded-full transition-all duration-500 ease-out ${
            isActive
              ? "bg-gradient-to-r from-purple-500 to-blue-500 scale-150 shadow-lg shadow-purple-500/50"
              : "bg-neutral-800 border border-neutral-700"
          }`}
          animate={{
            scale: isActive ? 1.5 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />

        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>
    );
  };

  return (
    <div className="w-full font-sans bg-black/90" ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-5xl mb-2 text-black dark:text-white"
        >
          MI EXPERIENCIA LABORAL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-lg max-w-2xl mb-4"
        >
          A lo largo de mi trayectoria profesional, he adquirido valiosas
          habilidades y experiencias que han contribuido significativamente a mi
          crecimiento profesional.
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex justify-start pt-20 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <AnimatedCircle index={index} />
              <h3 className="hidden md:block text-5xl font-bold md:pl-20 bg-gradient-to-r from-purple-400/60 to-blue-400/60 bg-clip-text text-transparent">
                {entry.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold bg-gradient-to-r from-purple-400/60 to-blue-400/60 bg-clip-text text-transparent">
                {entry.title}
              </h3>

              <motion.div
                className=" bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {entry.company && (
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    {entry.company}
                  </h4>
                )}

                <p className="text-neutral-300 mb-6">{entry.description}</p>

                {entry.achievements && (
                  <div className="space-y-4">
                    <h5 className="text-white font-medium">
                      Logros Destacados:
                    </h5>
                    <ul className="space-y-3">
                      {entry.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="h-2 w-2 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                          <span className="text-neutral-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {entry.imageUrl && (
                  <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="/api/placeholder/800/400"
                      alt="Project visualization"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}

        <div className="absolute md:left-8 left-8 top-0 h-full w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-neutral-700/30 to-transparent">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500/80 via-blue-500/80 to-transparent"
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-400/20 via-blue-400/20 to-transparent blur-sm" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
