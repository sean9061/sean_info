'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../theme/theme-toggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/70 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-bold bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent transition-all duration-300 hover:scale-105 transform">
            広瀬エイトル
          </span>
        </div>
        
        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/80 hover:text-accent transition-colors duration-300 relative group">
            自己紹介
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#skills" className="text-foreground/80 hover:text-accent transition-colors duration-300 relative group">
            スキル
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-accent transition-colors duration-300 relative group">
            作品
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#education" className="text-foreground/80 hover:text-accent transition-colors duration-300 relative group">
            学歴
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <ThemeToggle />
        </nav>
        
        {/* モバイルメニューボタン */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="p-2 text-foreground bg-muted/70 rounded-md hover:bg-muted transition-colors duration-300"
            aria-label="メニューを開く"
          >
            {isMenuOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      
      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/70 animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <a 
              href="#about" 
              className="py-3 px-4 hover:bg-muted/50 hover:text-accent rounded-md transition-all duration-300 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              自己紹介
            </a>
            <a 
              href="#skills" 
              className="py-3 px-4 hover:bg-muted/50 hover:text-accent rounded-md transition-all duration-300 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              スキル
            </a>
            <a 
              href="#projects" 
              className="py-3 px-4 hover:bg-muted/50 hover:text-accent rounded-md transition-all duration-300 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              作品
            </a>
            <a 
              href="#education" 
              className="py-3 px-4 hover:bg-muted/50 hover:text-accent rounded-md transition-all duration-300 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              学歴
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
