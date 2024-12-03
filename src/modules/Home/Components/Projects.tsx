"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import FramerComponent from "@/shared/components/Framer/FramerComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con integración de pagos",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/projects/ecommerce.png",
    githubUrl: "https://github.com/usuario/proyecto-ecommerce",
    liveUrl: "https://mi-ecommerce.vercel.app",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Panel de análisis para redes sociales con gráficos en tiempo real",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    imageUrl: "/projects/dashboard.png",
    githubUrl: "https://github.com/usuario/social-dashboard",
    liveUrl: "https://mi-dashboard.vercel.app",
  },
  {
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con autenticación y colaboración",
    technologies: ["React", "Firebase", "Redux"],
    imageUrl: "/projects/tasks.png",
    githubUrl: "https://github.com/usuario/task-manager",
    liveUrl: "https://mi-task-app.vercel.app",
  },
];

export function Projects() {
  return (
    <HeroHighlight className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-20 py-16">
      <FramerComponent
        animationInitial={{ opacity: 0, y: 20 }}
        animationWhileInView={{ opacity: 1, y: [20, -5, 0] }}
        animationViewPort={{ once: true }}
        animationTransition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        style="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white w-full max-w-3xl leading-relaxed lg:leading-snug text-center relative"
      >
        <h1>
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
        </h1>
      </FramerComponent>

      <Carousel className="w-full md:pr-16 px-4">
        <CarouselContent>
          {projectsData.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden project-card relative h-[40vh] md:h-[70vh] w-full">
                  <CardContent className="p-0 h-full relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 project-card:hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 project-card:hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 project-card:hover:opacity-100 transition-opacity duration-300 text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <div className="flex justify-center space-x-4 mt-4">
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            className="hover:scale-110 transition-transform"
                          >
                            <ExternalLink size={24} className="text-white" />
                          </Link>
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            className="hover:scale-110 transition-transform"
                          >
                            <ExternalLink size={24} className="text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </HeroHighlight>
  );
}