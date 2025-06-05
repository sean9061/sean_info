'use client';

import { FaGithub } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-background border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} 広瀬エイトル
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            
            <a
              href="#top"
              className="text-sm text-muted-foreground hover:text-accent flex items-center gap-1"
              aria-label="トップに戻る"
            >
              <FiArrowUp className="h-4 w-4" />
              トップに戻る
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
