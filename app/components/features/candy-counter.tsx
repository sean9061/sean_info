'use client';

import { useEffect, useState } from 'react';

// メッセージの配列
const messages = [
  "ポイントをゲット！",
  "もう一つゲット！",
  "どんどん増えてます！",
  "すごい勢いです！",
  "いい感じですね！",
  "ポイント好調ですね",
  "集めるの楽しいですね",
  "どんどん増えてます！",
  "まだまだいけますよ！",
  "順調に増加中！",
  "かなり集まってきました",
  "すごい数になってきました",
  "これはすごい記録かも",
  "これだけあれば十分？",
  "まだまだ集めましょう！"
];

// アイコンの種類 - より洗練されたデザインアイコンに変更
const candyTypes = ["✨", "⭐", "💫", "🌟", "💯", "🏆", "🔮", "💎", "🌠", "🎯"];

// レベルと称号
const levels = [
  { threshold: 0, title: "ビギナー", color: "from-gray-400 to-gray-500" },
  { threshold: 5, title: "コレクター", color: "from-blue-400 to-blue-500" },
  { threshold: 10, title: "ハンター", color: "from-green-400 to-green-500" },
  { threshold: 20, title: "マスター", color: "from-yellow-400 to-yellow-500" },
  { threshold: 30, title: "エキスパート", color: "from-orange-400 to-orange-500" },
  { threshold: 50, title: "レジェンド", color: "from-red-400 to-red-500" },
  { threshold: 75, title: "ゴッド", color: "from-purple-400 to-purple-500" },
  { threshold: 100, title: "ユニバース", color: "from-accent to-sky-400" },
];

export default function CandyCounter() {
  const [count, setCount] = useState(0);
  const [candies, setCandies] = useState<JSX.Element[]>([]);
  const [currentLevel, setCurrentLevel] = useState(levels[0]);
  const [isLevelUp, setIsLevelUp] = useState(false);
  const [message, setMessage] = useState(messages[0]);
  
  // レベルを更新する
  useEffect(() => {
    // 現在のカウントに基づいてレベルを設定
    const newLevel = [...levels].reverse().find(level => count >= level.threshold);
    
    if (newLevel && newLevel.title !== currentLevel.title) {
      setIsLevelUp(true);
      setTimeout(() => setIsLevelUp(false), 1500);
      setCurrentLevel(newLevel);
    }
    
    // メッセージを更新
    if (count < 5) {
      setMessage(messages[count % 5]);
    } else if (count < 10) {
      setMessage(messages[5 + (count % 5)]);
    } else {
      setMessage(messages[10 + (count % 5)]);
    }
  }, [count, currentLevel.title]);
  
  // ポイントを追加する
  const addCandy = () => {
    const newCount = count + 1;
    setCount(newCount);
    
    // ランダムな位置とキャンディの種類を生成
    const candyType = candyTypes[Math.floor(Math.random() * candyTypes.length)];
    const id = Date.now();
    const top = Math.random() * 70 + 10;
    const left = Math.random() * 70 + 10;
    const size = Math.random() * 0.5 + 0.8; // 0.8 - 1.3倍のサイズ
    const rotation = Math.random() * 360;
    const duration = Math.random() * 1 + 1; // 1-2秒のアニメーション
    
    const newCandy = (
      <div
        key={`candy-${id}`}
        className="absolute text-2xl animate-pop"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          transform: `rotate(${rotation}deg) scale(${size})`,
          animation: `pop ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
          zIndex: 5,
        }}
      >
        {candyType}
      </div>
    );
    
    // 30個以上になったら古いものから削除
    if (candies.length >= 30) {
      setCandies([...candies.slice(candies.length - 29), newCandy]);
    } else {
      setCandies([...candies, newCandy]);
    }
  };
  
  // 次のレベルまでの残りポイント数を計算
  const getNextLevelProgress = () => {
    const currentIndex = levels.findIndex(level => level.title === currentLevel.title);
    
    if (currentIndex < levels.length - 1) {
      const nextLevel = levels[currentIndex + 1];
      const remaining = nextLevel.threshold - count;
      const progress = ((count - currentLevel.threshold) / (nextLevel.threshold - currentLevel.threshold)) * 100;
      return {
        remaining,
        progress: Math.min(100, Math.max(0, progress)),
        nextTitle: nextLevel.title
      };
    } else {
      return {
        remaining: 0,
        progress: 100,
        nextTitle: "最大レベル"
      };
    }
  };
  
  const { progress, remaining, nextTitle } = getNextLevelProgress();
  
  return (
    <div className="flex flex-col items-center gap-5">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-accent to-sky-500 text-transparent bg-clip-text">ポイント集め</h3>
      
      <div className="feature-card w-72 h-72 shadow-md">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-sky-500/5 z-0"></div>
        
        {/* 装飾エフェクト */}
        <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-accent/10 blur-md"></div>
        <div className="absolute bottom-3 right-3 w-16 h-16 rounded-full bg-sky-500/10 blur-md"></div>
        
        {/* キャンディの表示 */}
        <div className="absolute inset-0 overflow-hidden">
          {candies}
        </div>
        
        {/* 称号表示 - レベルアップ時にアニメーション */}
        <div className={`absolute top-4 left-0 right-0 flex justify-center transition-all duration-300 ${isLevelUp ? 'scale-125' : 'scale-100'}`}>
          <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${currentLevel.color} text-white text-sm font-medium`}>
            {currentLevel.title}
          </div>
        </div>
        
        {/* ポイント表示 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className={`text-4xl font-bold transition-all duration-300 ${isLevelUp ? 'scale-125 text-accent' : 'scale-100 text-foreground'}`}>
            {count}
            <span className="text-base ml-1 font-normal text-muted-foreground">ポイント</span>
          </div>
        </div>
        
        {/* カウンターとメッセージ */}
        <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm py-2 px-4 rounded-lg border border-border/30">
          <p className="text-sm text-foreground">{message}</p>
          
          {/* 次のレベルまでのプログレスバー */}
          <div className="mt-2">
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${currentLevel.color} transition-all duration-500`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>{currentLevel.title}</span>
              <span>{remaining > 0 ? `あと${remaining}ポイントで${nextTitle}` : '最大レベル達成！'}</span>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={addCandy}
        className="feature-button group"
      >
        ポイントゲット
      </button>
      
      <p className="text-sm text-muted-foreground text-center max-w-xs">
        ボタンをクリックしてポイントを集めましょう
      </p>
    </div>
  );
}
