'use client';

import { useEffect, useState } from 'react';

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
      
      setTypingSpeed(isDeleting ? 80 : 150);
      
      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, loopNum, typingSpeed]);
  
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            広瀬エイトル
          </h1>
          
          <div className="h-10 mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              <span className="text-foreground">{typingText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            React、Next.js、TypeScriptを使って、使いやすいWeb体験を作ります。
            見た目の良さと使いやすさ、高いパフォーマンスの両立を目指しています。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-5 py-2 bg-accent text-accent-foreground rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              自己紹介を見る
            </a>
            <a
              href="#interactive"
              className="px-5 py-2 bg-muted text-foreground rounded-md font-medium hover:bg-opacity-80 transition-colors"
            >
              プロジェクトを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
