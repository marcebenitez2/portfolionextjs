import FramerComponent from "@/shared/components/Framer/FramerComponent";
import { Palette, Code, Zap, Sparkles, Target, Layers } from "lucide-react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function AboutMe() {
  const skillItems = [
    {
      icon: Palette,
      text: "Diseño de experiencias digitales centradas en el usuario",
      color: "text-purple-500",
      description:
        "Transformo conceptos en interfaces intuitivas que cuentan historias visuales.",
    },
    {
      icon: Code,
      text: "Desarrollo web full stack con tecnologías de vanguardia",
      color: "text-blue-500",
      description:
        "Construyo soluciones robustas utilizando React, Next.js y ecosistemas modernos.",
    },
    {
      icon: Zap,
      text: "Optimización de rendimiento y accesibilidad",
      color: "text-green-500",
      description:
        "Código eficiente que garantiza velocidad, accesibilidad y excelente experiencia.",
    },
    {
      icon: Sparkles,
      text: "Innovación y soluciones creativas",
      color: "text-yellow-500",
      description:
        "Resuelvo desafíos técnicos con enfoques únicos y creativos.",
    },
    {
      icon: Target,
      text: "Desarrollo orientado a resultados",
      color: "text-red-500",
      description:
        "Cada línea de código está alineada con los objetivos estratégicos del proyecto.",
    },
    {
      icon: Layers,
      text: "Arquitectura de software escalable",
      color: "text-indigo-500",
      description:
        "Diseño sistemas modulares y mantenibles que crecen con tu negocio.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const words =
    "Como Técnico Superior en Desarrollo de Software, transformo ideas complejas en experiencias digitales excepcionales. Mi enfoque integral combina creatividad técnica con una meticulosa atención al detalle.";

  return (
    <section className="min-h-screen text-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full text-center space-y-4">
        <FramerComponent
          animationInitial={{ opacity: 0, scale: 0.8 }}
          animationAnimate={{ opacity: 1, scale: 1 }}
          animationTransition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.4,
          }}
          style="text-3xl md:text-5xl text-black dark:text-white"
        >
          Sobre Mí
        </FramerComponent>

        <FramerComponent
          animationInitial={{ opacity: 0 }}
          animationAnimate={{ opacity: 1 }}
          animationTransition={{ duration: 0.7 }}
          style="space-y-6"
        >
          <TextGenerateEffect words={words} />
        </FramerComponent>

        <FramerComponent
          animationVariants={containerVariants}
          animationInitial="hidden"
          animationAnimate="visible"
          style="grid md:grid-cols-3 gap-6"
        >
          {skillItems.map((item, index) => (
            <FramerComponent
              key={index}
              animationVariants={itemVariants}
              animationWhileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              style={`bg-black border-2 border-opacity-20 rounded-xl p-6 
                     transition-all duration-300 ease-in-out group 
                     hover:border-opacity-50 
                     hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
                     relative overflow-hidden`}
            >
              {/* Gradient overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <FramerComponent
                  animationWhileHover={{
                    rotate: 360,
                    scale: 1.2,
                  }}
                  animationTransition={{
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  <item.icon
                    className={`w-10 h-10 ${
                      item.color
                    } group-hover:${item.color.replace(
                      "text-",
                      "text-opacity-80"
                    )}`}
                  />
                </FramerComponent>
                <h3 className="text-xl font-semibold">{item.text}</h3>
              </div>
              <p className="text-gray-300 text-base relative z-10">
                {item.description}
              </p>
            </FramerComponent>
          ))}
        </FramerComponent>
      </div>
    </section>
  );
}
