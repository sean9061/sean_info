"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { SimpleThemeToggle } from "@/components/simple-theme-toggle";
import { Sidebar } from "@/components/layout/sidebar";
import { AboutSection } from "@/components/sections/about-section";
import { HobbiesSection } from "@/components/sections/hobbies-section";
import { EducationSection } from "@/components/sections/education-section";
import { OmikujiSection } from "@/components/sections/omikuji-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
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
        <Sidebar />

        {/* 右側メインコンテンツ */}
        <main className="lg:w-[60%] lg:py-24 lg:pr-12 lg:pl-8 px-8 py-6">
          <div className="lg:max-w-none space-y-20">
            <AboutSection />
            <HobbiesSection />
            <EducationSection />
            <OmikujiSection />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

