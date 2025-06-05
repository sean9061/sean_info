'use client';

import { useState } from 'react';

// 褒める言葉のリスト
const compliments = [
  "素晴らしい才能ですね！✨",
  "その発想力が素敵です！💡",
  "あなたは輝いています！🌟",
  "その優しさに感謝です！💖",
  "頑張りが実を結んでます！🎉",
  "あなたは特別な存在です！🌸",
  "いつも元気をありがとう！☀️",
  "その成長が素晴らしいです！🚀",
  "あなたらしさが最高です！💫",
  "輝かしい未来が待ってます！🌠",
];

export default function ComplimentButton() {
  const [compliment, setCompliment] = useState("ボタンを押してください");
  const [isChanging, setIsChanging] = useState(false);
  const [hearts, setHearts] = useState<JSX.Element[]>([]);
  
  const giveCompliment = () => {
    if (isChanging) return;
    
    setIsChanging(true);
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    
    // ハートエフェクトを追加
    const id = Date.now();
    const left = Math.random() * 60 + 20;
    
    const newHeart = (
      <div
        key={`heart-${id}`}
        className="absolute text-lg pointer-events-none text-accent"
        style={{
          left: `${left}%`,
          bottom: '35%',
          animation: 'float-heart 1.5s ease-out forwards',
        }}
      >
        {['❤️', '💕', '💓', '💗', '💖'][Math.floor(Math.random() * 5)]}
      </div>
    );
    
    if (hearts.length >= 8) {
      setHearts([...hearts.slice(hearts.length - 7), newHeart]);
    } else {
      setHearts([...hearts, newHeart]);
    }
    
    setTimeout(() => {
      setCompliment(randomCompliment);
      setIsChanging(false);
    }, 200);
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-96 relative">
      <div className="relative h-[100px] w-full">
        {hearts}
      </div>
      
      <div 
        className={`text-center transition-all duration-500 ease-in-out max-w-sm mb-8 ${
          isChanging ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}
      >
        <p className={`text-xl font-medium leading-relaxed px-8 py-5 rounded-xl shadow-sm ${
          compliment === "ボタンを押してください" 
            ? 'text-muted-foreground bg-muted/30 border border-border/40'
            : 'text-foreground bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20'
        }`}>
          {compliment}
        </p>
      </div>
      
      <button
        onClick={giveCompliment}
        className="relative min-w-[200px] flex items-center justify-center gap-2
          px-7 py-4 text-md font-medium
          rounded-xl border border-accent/30 shadow-md
          bg-gradient-to-br from-accent to-accent/80 
          text-accent-foreground
          transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-95
          focus-visible:outline-none focus:ring-2 focus:ring-accent/40
          overflow-hidden"
        aria-label="ランダムな褒め言葉を表示"
      >
        <span className="relative z-10">褒めてもらう</span>
        <span className="relative z-10 text-accent-foreground">
          ✨
        </span>
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </div>
  );
}
