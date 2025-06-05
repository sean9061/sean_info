'use client';

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-background border-t border-border/70 py-8 relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} <span className="text-foreground font-medium">広瀬エイトル</span>
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Built with Next.js, Tailwind CSS and ❤️
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#1DA1F2] transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0077B5] transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#E1306C] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
            
            <a
              href="#top"
              className="text-sm bg-muted/50 hover:bg-accent/10 text-muted-foreground hover:text-accent flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 transition-all duration-300 transform hover:scale-105 group"
              aria-label="トップに戻る"
            >
              <FiArrowUp className="h-4 w-4 group-hover:animate-bounce-slow" />
              トップに戻る
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
