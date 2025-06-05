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
    <header className="fixed w-full top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-bold text-accent">
            広瀬エイトル
          </span>
        </div>
        
        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-accent">
            自己紹介
          </a>
          <a href="#skills" className="hover:text-accent">
            スキル
          </a>
          <a href="#projects" className="hover:text-accent">
            作品
          </a>
          <a href="#education" className="hover:text-accent">
            学歴
          </a>
          <ThemeToggle />
        </nav>
        
        {/* モバイルメニューボタン */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="p-1 text-foreground"
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
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-3 flex flex-col">
            <a 
              href="#about" 
              className="py-2 hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              自己紹介
            </a>
            <a 
              href="#skills" 
              className="py-2 hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              スキル
            </a>
            <a 
              href="#projects" 
              className="py-2 hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              作品
            </a>
            <a 
              href="#education" 
              className="py-2 hover:text-accent"
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
