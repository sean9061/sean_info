"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo } from "@/config/personal-info";

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[40%] lg:py-24 lg:pl-12 lg:pr-8 px-8 py-6 lg:flex lg:flex-col lg:justify-between relative z-[60]">
      <div>
        {/* アイコン */}
        <div className="mb-8 flex justify-center lg:justify-start">
          <Avatar className="h-48 w-48 sm:h-52 sm:w-52 lg:h-40 lg:w-40">
            <AvatarImage src={personalInfo.avatarImage} alt="プロフィール画像" />
            <AvatarFallback className="text-4xl sm:text-5xl lg:text-4xl font-semibold bg-primary text-primary-foreground">
              {personalInfo.initials}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* 名前 */}
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            {personalInfo.name}
          </h1>
          <h2 className="text-lg font-medium tracking-tight mb-4">
            {personalInfo.title}
          </h2>
          
          {/* 在住地 */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="h-3 w-3" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-3 text-center lg:text-left">Tech Stack</h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {personalInfo.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech.icon}
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* ページ飛ぶためのURLたち（ナビゲーション） */}
        <nav className="hidden lg:block mb-8">
          <div className="space-y-2">
            <a 
              href="#about" 
              className="group flex items-center py-2"
            >
              <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground group-active:w-20 group-active:bg-primary motion-reduce:transition-none"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground group-active:text-primary">
                About
              </span>
            </a>
            <a 
              href="#hobbies" 
              className="group flex items-center py-2"
            >
              <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground group-active:w-20 group-active:bg-primary motion-reduce:transition-none"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground group-active:text-primary">
                Hobbies
              </span>
            </a>
            <a 
              href="#education" 
              className="group flex items-center py-2"
            >
              <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground group-active:w-20 group-active:bg-primary motion-reduce:transition-none"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground group-active:text-primary">
                Education
              </span>
            </a>
            <a 
              href="#omikuji" 
              className="group flex items-center py-2"
            >
              <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground group-active:w-20 group-active:bg-primary motion-reduce:transition-none"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground group-active:text-primary">
                Omikuji
              </span>
            </a>
          </div>
        </nav>
      </div>

      {/* Links（ソーシャルリンク） */}
      <div className="flex items-center justify-center lg:justify-start gap-5">
        {personalInfo.socialLinks.map((social, index) => (
          <Button 
            key={index}
            variant="ghost" 
            size="sm" 
            className="h-12 w-12 p-0 hover:bg-muted cursor-pointer"
            asChild
          >
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              {social.icon}
              <span className="sr-only">{social.platform}</span>
            </a>
          </Button>
        ))}
      </div>
    </aside>
  );
} 