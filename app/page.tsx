"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { SimpleThemeToggle } from "@/components/simple-theme-toggle";
import Image from "next/image";
import { 
  FaGithub, 
  FaInstagram,
  FaDice,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBook,
  FaGamepad,
  FaMusic,
  FaLightbulb,
  FaCode
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import { personalInfo } from "@/config/personal-info";

export default function Home() {
  const [omikujiResult, setOmikujiResult] = useState<string>("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // おみくじの結果配列
  const omikujiOptions = [
    "大吉",
    "中吉",
    "小吉",
    "吉",
    "末吉",
    "凶"
  ];

  // おみくじを引く関数
  const drawOmikuji = async () => {
    setIsDrawing(true);
    setIsShaking(true);
    setOmikujiResult("");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsShaking(false);
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const randomIndex = Math.floor(Math.random() * omikujiOptions.length);
    setOmikujiResult(omikujiOptions[randomIndex]);
    setIsDrawing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 固定位置の電球 */}
      <div className="absolute 2xl:fixed left-1/2 -translate-x-1/2 2xl:left-2 2xl:translate-x-0 top-[-30px] lg:top-[-20px] 2xl:top-2 z-50">
        <div className="2xl:mt-[28px]">
          <ThemeToggle />
        </div>
      </div>
      
      {/* 新しいテーマ切り替えボタン */}
      <div className="fixed bottom-6 right-6 z-50">
        <SimpleThemeToggle />
      </div>
      
      <div className="lg:flex lg:min-h-screen max-w-[1080px] mx-auto mt-64 lg:mt-48 2xl:mt-16">
        
        {/* 左側サイドバー */}
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

        {/* 右側メインコンテンツ */}
        <main className="lg:w-[60%] lg:py-24 lg:pr-12 lg:pl-8 px-8 py-6">
          <div className="lg:max-w-none space-y-20">

            <section id="about" className="scroll-mt-16 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  About
                </h2>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight hidden lg:block">About Me</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {personalInfo.about.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>

            <section id="hobbies" className="scroll-mt-16 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Hobbies
                </h2>
              </div>
              
              <div className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight hidden lg:block">My Interests</h2>
                <div className="grid gap-6">
                  {personalInfo.hobbies.map((hobby, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative p-6 flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          {hobby.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold mb-2">{hobby.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {hobby.description}
                          </p>
                          <div className="flex gap-2">
                            {hobby.badges.map((badge, badgeIndex) => (
                              <Badge key={badgeIndex} variant="secondary" className="text-xs">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="education" className="scroll-mt-16 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Education
                </h2>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight hidden lg:block">Education</h2>
                <div className="space-y-8">
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                      {edu.period}
                    </header>
                    
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug">
                        {edu.link ? (
                          <a href={edu.link} target="_blank" rel="noopener noreferrer" className="group/link">
                            {edu.school}
                            <span className="inline-block ml-2">
                              <FaExternalLinkAlt className="inline h-3 w-3 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none" />
                            </span>
                          </a>
                        ) : (
                          edu.school
                        )}
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-muted-foreground">
                        {edu.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {edu.badges.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="outline" className="text-xs h-5">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </section>

            <section id="omikuji" className="scroll-mt-16 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Omikuji
                </h2>
              </div>
              
              <div className="space-y-8 h-[28rem]">
                <h2 className="text-2xl font-bold tracking-tight hidden lg:block">Omikuji</h2>
                <div className="text-center space-y-8">
                  <h3 className="text-lg font-semibold">今日の運勢</h3>
                  
                  <div className={`${isShaking ? 'animate-bounce' : ''}`}>
                    <Image 
                      src="/omikuji.png" 
                      alt="おみくじ" 
                      width={120} 
                      height={180}
                      className="mx-auto py-6 rounded"
                      priority
                    />
                  </div>
                  
                  <Button 
                    onClick={drawOmikuji}
                    disabled={isDrawing}
                  >
                    <FaDice className={`w-4 h-4 mr-2 ${isShaking ? 'animate-spin' : ''}`} />
                    {isDrawing ? '占い中...' : 'おみくじを引く'}
                  </Button>
                  
                  {omikujiResult && (
                    <div className="text-4xl font-bold text-primary">
                      {omikujiResult}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* フッター */}
            <footer className="text-sm text-muted-foreground">
              <p>
                このサイトは 
                <a href="https://nextjs.org/" className="font-medium text-foreground hover:text-primary transition-colors">Next.js</a>、
                <a href="https://www.typescriptlang.org/" className="font-medium text-foreground hover:text-primary transition-colors">TypeScript</a>、
                <a href="https://tailwindcss.com/" className="font-medium text-foreground hover:text-primary transition-colors">Tailwind CSS</a> 
                で構築されています。
              </p>
            </footer>

          </div>
        </main>
      </div>
    </div>
  );
}

