"use client";

import { skills } from "@/shared/constants/skillsData";

export default function SkillsSection() {
  return (
    <section className="min-h-screen  text-white relative py-20 px-4 overflow-hidden">
      {/* Resto del código permanece igual */}

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-lg md:text-5xl mb-10 text-black dark:text-white text-center">
          Mis Habilidades
        </h2>

        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-4 rounded-xl 
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
              </div>
            ))}
          </div>
        </div>
      </div>

   
    </section>
  );
}
