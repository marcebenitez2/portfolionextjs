"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import FramerComponent from "@/shared/components/Framer/FramerComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "Landing Page para UESEVI",
    description:
      "Diseño de una landing page para UESEVI con el objetivo de dar a conocer su identidad y servicios. La página destaca los valores del gremio y facilita el acceso a información clave para miembros y público en general, con un diseño limpio y profesional.",
    image: "/4.png",
  },
  {
    title: "Panel de Administración para UESEVI",
    description:
      "Desarrollo de un panel de administración para UESEVI, el gremio de empleados de seguridad y vigilancia de Rosario. La plataforma permite gestionar información interna de manera eficiente, con herramientas avanzadas para la administración de datos y la generación de informes.",
    image: "/3.png",
  },
  {
    title: "E-commerce de Tecnología",
    description:
      "Creación de un e-commerce especializado en productos de tecnología. Esta plataforma permite a los usuarios explorar una amplia gama de productos y, en lugar de realizar compras directamente, se redirige al chat con el vendedor para coordinar la compra, facilitando así una comunicación más directa y personalizada.",
    image: "/2.png",
  },
  {
    title: "John Pellegrini Management Group",
    description:
      "Desarrollo de una plataforma administrativa para John Pellegrini Management Group, una aseguradora. La solución permite a los empleados gestionar eficientemente la base de datos de clientes, optimizando los procesos internos con un sistema seguro y personalizado.",
    image: "/1.png",
  },
  {
    title:
      "Panel de Administración y Sorteos para Mutual de Suboficiales Retirados de Gendarmería Nacional",
    description:
      "Desarrollo de un panel de administración con funcionalidades de sorteos para la Mutual de Suboficiales Retirados de Gendarmería Nacional. El sistema permite gestionar la membresía y realizar sorteos de manera automatizada, con reportes en tiempo real y gestión eficiente de la información.",
    image: "/5.png",
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

      <Carousel
        className="max-w-5xl md:pr-16 px-3"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <FramerComponent>
                <Card className="h-128 overflow-hidden relative group">
                  <CardContent className="p-0 h-full">
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-base lg:text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm">{project.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FramerComponent>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </HeroHighlight>
  );
}
