import DownloadButton from "@/components/ui/downloadButton";
import { SparklesCore } from "@/components/ui/sparkles";
import FramerComponent from "@/shared/components/Framer/FramerComponent";
import React from "react";

export function Hero() {
  return (
    <section className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md text-center">
      <h1 className="text-6xl font-extrabold leading-tight tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl max-w-6xl mx-auto">
        MARCELO BENITEZ
      </h1>
      <h1 className="text-2xl font-light sm:text-3xl md:text-4xl lg:text-5xl mb-1">
        FullStack Developer
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(170px_150px_at_top,transparent_50%,white)] md:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <DownloadButton /> {/* Aquí utilizas el componente cliente */}

      <FramerComponent style="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FramerComponent
          style="w-6 h-10 rounded-full border-2 border-white p-1"
          animationAnimate={{ y: [0, 24, 0] }}
          animationTransition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FramerComponent
            style="w-2 h-2 bg-white rounded-full"
            animationAnimate={{ y: [0, 12, 0] }}
            animationTransition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </FramerComponent>
      </FramerComponent>
    </section>
  );
}