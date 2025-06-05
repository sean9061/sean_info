'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// タイプライターアニメーションのためのテキスト
const typingTexts = [
  "フロントエンド開発者",
  "Reactが好きなエンジニア",
  "デザインにもこだわるコーダー",
  "Next.js愛好家",
];

export default function HeroSection() {
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typingTexts.length;
      const fullText = typingTexts[i];
      
      setTypingText(
        isDeleting 
          ? fullText.substring(0, typingText.length - 1)
          : fullText.substring(0, typingText.length + 1)
      );
      
      // 削除時は速く、入力時はランダムな速度に
      setTypingSpeed(isDeleting ? 60 : Math.random() * (180 - 100) + 100);
      
      if (!isDeleting && typingText === fullText) {
        // 完全に表示された後、少し長めに待機
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        // 次のテキストに移る前に少し待機
        setTypingSpeed(700);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, loopNum, typingSpeed]);
  
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* 背景グラデーションエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background/95 z-0"></div>
      
      {/* 装飾的な背景要素 */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-float-slow opacity-70"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl animate-float opacity-70"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent animate-fade-in">
            広瀬エイトル
          </h1>
          
          <div className="h-10 mb-8">
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-accent font-semibold">{typingText}</span>
              <span className="animate-pulse text-accent">|</span>
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            React、Next.js、TypeScriptを使って、使いやすいWeb体験を作ります。
            見た目の良さと使いやすさ、高いパフォーマンスの両立を目指しています。
          </p>
          
          {/* SNSリンク */}
          <div className="flex justify-center gap-5 mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#1DA1F2] transition-all duration-300 transform hover:scale-125"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 transform hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0077B5] transition-all duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#E1306C] transition-all duration-300 transform hover:scale-125"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <a
              href="#about"
              className="feature-button px-10 py-3.5 rounded-lg font-medium inline-block hover:-translate-y-1"
            >
              自己紹介を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
