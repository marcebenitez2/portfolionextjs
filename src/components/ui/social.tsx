"use client";
import FramerComponent from '@/shared/components/Framer/FramerComponent';
import { 
  LinkedinIcon, 
  GithubIcon, 
  InstagramIcon 
} from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <LinkedinIcon className="w-6 h-6" />,
    href: 'https://www.linkedin.com/in/benitez-marcelo/',
    backgroundColor: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700'
  },
  {
    name: 'GitHub',
    icon: <GithubIcon className="w-6 h-6" />,
    href: 'https://github.com/marcebenitez2',
    backgroundColor: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-900'
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon className="w-6 h-6" />,
    href: 'https://www.instagram.com/marcebenitezz_',
    backgroundColor: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-700'
  }
];

export default function SocialLinks() {
  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FramerComponent
          animationInitial={{ opacity: 0, y: 50 }}
          animationWhileInView={{ opacity: 1, y: 0 }}
          animationViewPort={{ once: true }}
          animationTransition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center text-neutral-800 dark:text-neutral-200 mb-8">
            Conéctate Conmigo
          </h2>
        </FramerComponent>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <FramerComponent
              key={social.name}
              animationInitial={{ opacity: 0, scale: 0.8 }}
              animationWhileInView={{ opacity: 1, scale: 1 }}
              animationViewPort={{ once: true }}
              animationTransition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.2,
                type: "spring",
                stiffness: 300
              }}
              animationWhileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              <Link 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${social.backgroundColor} 
                  ${social.hoverColor}
                  text-white rounded-full p-3 
                  flex items-center justify-center 
                  transition-all duration-300 
                  hover:shadow-lg
                  hover:rotate-6
                `}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            </FramerComponent>
          ))}
        </div>
      </div>
    </section>
  );
}