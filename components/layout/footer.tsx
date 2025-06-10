import { Badge } from "@/components/ui/badge";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { personalInfo } from "@/config/personal-info";
import Image from "next/image";
import { Separator } from "../ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const techLinks = [
    {
      name: "Next.js",
      url: "https://nextjs.org/",
      icon: <SiNextdotjs className="w-3 h-3" />
    },
    {
      name: "TypeScript", 
      url: "https://www.typescriptlang.org/",
      icon: <SiTypescript className="w-3 h-3" />
    },
    {
      name: "React",
      url: "https://react.dev/",
      icon: <SiReact className="w-3 h-3" />
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      icon: <SiTailwindcss className="w-3 h-3" />
    }
  ];

  return (
    <footer className="pt-16 pb-8">
        <Separator />
      <div className="pt-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          
          {/* 左側：Tech Stack */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Built with</p>
            <div className="flex flex-wrap gap-2">
              {techLinks.map((tech, index) => (
                <a 
                  key={index}
                  href={tech.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {tech.icon}
                  {tech.name}
                </a>
              ))}
            </div>
          <p className="text-xs text-muted-foreground">
            © {currentYear} {personalInfo.name}
          </p>
          </div>

          {/* 右側：LinuxClub */}
          <div className="flex flex-col items-center justify-center gap-6">
            <Image 
              src="/linuxclub.png" 
              alt="LinuxClub" 
              width={60} 
              height={60}
              className="opacity-60 hover:opacity-100 transition-opacity" 
            />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FaLinux className="w-4 h-4" />
              <span>Member of LinuxClub</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 