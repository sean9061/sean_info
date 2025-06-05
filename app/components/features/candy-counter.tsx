'use client';

import { useEffect, useState } from 'react';

// アイコンの種類
const candyTypes = ["✨", "🌟", "💫", "⭐"];

// レベル
const levels = [
  { threshold: 0, title: "ビギナー" },
  { threshold: 5, title: "コレクター" },
  { threshold: 10, title: "ハンター" },
  { threshold: 20, title: "マスター" },
  { threshold: 30, title: "エキスパート" },
  { threshold: 50, title: "レジェンド" },
  { threshold: 75, title: "ゴッド" },
  { threshold: 100, title: "ユニバース" },
];

export default function CandyCounter() {
  const [count, setCount] = useState(0);
  const [candies, setCandies] = useState<JSX.Element[]>([]);
  const [currentLevel, setCurrentLevel] = useState(levels[0]);
  const [isLevelUp, setIsLevelUp] = useState(false);
  
  // レベルを更新する
  useEffect(() => {
    const newLevel = [...levels].reverse().find(level => count >= level.threshold);
    if (newLevel && newLevel.title !== currentLevel.title) {
      setIsLevelUp(true);
      setTimeout(() => setIsLevelUp(false), 300);
      setCurrentLevel(newLevel);
    }
  }, [count, currentLevel.title]);
  
  // ポイントを追加する
  const addCandy = () => {
    setCount(count + 1);
    
    // エフェクトの追加
    const id = Date.now();
    const left = Math.random() * 70 + 15;
    const candyType = candyTypes[Math.floor(Math.random() * candyTypes.length)];
    
    const newCandy = (
      <div
        key={`candy-${id}`}
        className="absolute text-xl pointer-events-none"
        style={{
          left: `${left}%`,
          bottom: '10%',
          animation: 'float-star 1.5s ease-out forwards',
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
      >
        {candyType}
      </div>
    );
    
    if (candies.length >= 15) {
      setCandies([...candies.slice(candies.length - 14), newCandy]);
    } else {
      setCandies([...candies, newCandy]);
    }
  };
  
  const { threshold } = currentLevel;
  const nextLevel = levels[levels.findIndex(level => level.title === currentLevel.title) + 1];
  const progress = nextLevel ? ((count - threshold) / (nextLevel.threshold - threshold)) * 100 : 100;
   return (
    <div className="flex flex-col items-center h-96">
      <div className="relative h-[200px] w-full">
        {candies}
      </div>
      
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-baseline gap-3">
          <div className={`text-4xl font-bold transition-all duration-500 ${isLevelUp ? 'text-accent scale-125' : 'bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent'}`}>
            {count}
          </div>
          <div className={`text-md font-medium transition-all duration-500 px-3 py-1.5 rounded-full ${isLevelUp ? 'bg-accent/20 text-accent shadow-md' : 'bg-muted/50 text-foreground/80'}`}>
            {currentLevel.title}
          </div>
        </div>
        
        {nextLevel && (
          <div className="w-56 mt-3">
            <div className="w-full h-2 bg-muted/60 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-accent/90 to-accent/60 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
              <span>Lv.{levels.findIndex(level => level.title === currentLevel.title) + 1}</span>
              <span>次のレベルまで: {nextLevel ? nextLevel.threshold - count : 0}</span>
            </div>
          </div>
        )}
      </div>
      
      <button
        onClick={addCandy}
        aria-label="キャンディーを集める"
        className="mt-8 text-xl px-8 py-4 rounded-full bg-gradient-to-br from-accent to-accent/70 text-accent-foreground border border-accent/20 hover:shadow-lg shadow-md transition-all duration-300 transform hover:scale-110 hover:border-accent/40 active:scale-95 relative overflow-hidden"
      >
        <span className="relative z-10">✨ 集める ✨</span>
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </div>
  );
}
