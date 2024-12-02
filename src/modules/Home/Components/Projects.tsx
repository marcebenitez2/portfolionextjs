"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <HeroHighlight className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-20">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white w-full max-w-4xl leading-relaxed lg:leading-snug text-center relative"
      >
        &quot;Si lo puedes imaginar
        <br />
        <Highlight className="text-black dark:text-white">
          Lo puedes programar
        </Highlight>
        &quot;
        <p className="text-sm text-gray-500 md:hidden">- Programador ATS</p>
        <span className="absolute bottom-[-30px] left-2/3 transform text-sm text-gray-500 hidden md:block">
          - Programador ATS
        </span>
      </motion.h1>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-2/4 h-1/2 px-4">
        <div className="rounded md:col-span-2 bg-red-500">1</div>
        <div className="rounded md:col-start-3 bg-blue-500">2</div>
        <div className="rounded md:row-start-2 bg-green-500">3</div>
        <div className="rounded md:col-span-2 row-start-2 bg-yellow-500">4</div>
      </div>
    </HeroHighlight>
  );
}
