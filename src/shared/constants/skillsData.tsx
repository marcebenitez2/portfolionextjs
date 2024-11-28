import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGlobeAmericas,
  FaAws,
  FaJira,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiAstro,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";

export const skills = [
  {
    name: "React",
    icon: <FaReact className="w-5 h-5" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-5 h-5" />,
    category: "Frontend",
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="w-5 h-5" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-5 h-5" />,
    category: "Frontend",
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="w-5 h-5" />,
    category: "Frontend",
  },
  {
    name: "SCSS",
    icon: <FaCss3Alt className="w-5 h-5" />,
    category: "Frontend",
  },
  {
    name: "Astro",
    icon: <SiAstro className="w-5 h-5" />,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-5 h-5" />,
    category: "Frontend",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs className="w-5 h-5" />,
    category: "Backend",
  },
  {
    name: "Python",
    icon: <FaPython className="w-5 h-5" />,
    category: "Backend",
  },
  { name: "PHP", icon: <FaPhp className="w-5 h-5" />, category: "Backend" },
  {
    name: "APIs",
    icon: <FaGlobeAmericas className="w-5 h-5" />,
    category: "Backend",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb className="w-5 h-5" />,
    category: "Databases",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-5 h-5" />,
    category: "Databases",
  },
  {
    name: "SQL Server",
    icon: <SiMicrosoftsqlserver className="w-5 h-5" />,
    category: "Databases",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-5 h-5" />,
    category: "Databases",
  },

  { name: "AWS", icon: <FaAws className="w-5 h-5" />, category: "DevOps" },
  {
    name: "Scrum",
    icon: <FaPeopleGroup className="w-5 h-5" />,
    category: "DevOps",
  },
  { name: "Jira", icon: <FaJira className="w-5 h-5" />, category: "DevOps" },
  {
    name: "Agile",
    icon: <SiNextdotjs className="w-5 h-5" />,
    category: "DevOps",
  },
];
