"use client";
import FramerComponent from "@/shared/components/Framer/FramerComponent";
import { skills } from "@/shared/constants/skillsData";

export default function SkillsSection() {
  return (
    <FramerComponent
      animationInitial={{ opacity: 0, y: 50 }}
      animationWhileInView={{ opacity: 1, y: 0 }}
      animationViewPort={{ once: true }}
      animationTransition={{ duration: 0.8, ease: "easeOut" }}
      style="min-h-screen text-white relative py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <FramerComponent
          animationInitial={{ opacity: 0, scale: 0.9 }}
          animationWhileInView={{ opacity: 1, scale: 1 }}
          animationViewPort={{ once: true }}
          animationTransition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-lg md:text-5xl mb-10 text-black dark:text-white text-center">
            Mis Habilidades
          </h2>
        </FramerComponent>

        <FramerComponent
          animationInitial={{ opacity: 0, y: 30 }}
          animationWhileInView={{ opacity: 1, y: 0 }}
          animationViewPort={{ once: true }}
          animationTransition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-1 border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <FramerComponent
                  key={index}
                  animationInitial={{ opacity: 0, scale: 0.8 }}
                  animationWhileInView={{ opacity: 1, scale: 1 }}
                  animationViewPort={{ once: true }}
                  animationTransition={{ 
                    duration: 0.5, 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  animationWhileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  style="group relative flex flex-col items-center justify-center p-4 rounded-xl 
                  bg-black/30 backdrop-blur-sm border border-white/10 
                  hover:border-indigo-500/50 hover:bg-indigo-500/10 
                  transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    <div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 
                    flex items-center justify-center shadow-lg shadow-indigo-500/30"
                    >
                      {skill.icon}
                    </div>
                  </div>
                  <span
                    className="text-sm font-medium text-white/70 
                  group-hover:text-white transition-colors duration-300 
                  text-center"
                  >
                    {skill.name}
                  </span>
                </FramerComponent>
              ))}
            </div>
          </div>
        </FramerComponent>
      </div>
    </FramerComponent>
  );
}