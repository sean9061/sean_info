'use client';

import { useState } from 'react';

// 猫の絵文字リスト
const cats = [
  { emoji: "😺", name: "にっこり表情" },
  { emoji: "😸", name: "笑顔表情" },
  { emoji: "😹", name: "笑い泣き表情" },
  { emoji: "😻", name: "ハート目表情" },
  { emoji: "😽", name: "キス顔表情" },
  { emoji: "🙀", name: "驚き表情" },
  { emoji: "😿", name: "悲しい表情" },
  { emoji: "😾", name: "怒り表情" },
];

export default function CatChanger() {
  const [currentCat, setCurrentCat] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const changeCat = () => {
    // すでにアニメーション中なら何もしない
    if (isAnimating || isSpinning) return;
    
    // ガチャを回すアニメーション
    setIsSpinning(true);
    
    // 0.5秒後に結果アニメーションを開始
    setTimeout(() => {
      setIsSpinning(false);
      setIsAnimating(true);
      
      // 0.3秒後に新しい表情を表示
      setTimeout(() => {
        // ランダムに新しい表情を選択
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * cats.length);
        } while (newIndex === currentCat);
        
        setCurrentCat(newIndex);
        setIsAnimating(false);
      }, 300);
    }, 500);
  };
  
  return (
    <div className="flex flex-col items-center gap-5">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-accent to-sky-500 text-transparent bg-clip-text">表情ガチャ</h3>
      
      <div className="feature-card w-72 h-72 shadow-md group">
        {/* 背景装飾 */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-sky-500/5 z-0"></div>
        <div className="absolute top-2 left-2 w-12 h-12 rounded-full bg-accent/10 blur-md"></div>
        <div className="absolute bottom-3 right-3 w-16 h-16 rounded-full bg-sky-500/10 blur-md"></div>
        
        {/* ガチャ結果表示エリア */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div 
            className={`flex flex-col items-center transition-all duration-300 ${
              isAnimating ? 'translate-y-8 opacity-0 scale-75' : 
              isSpinning ? 'animate-pulse opacity-50' : 
              'translate-y-0 opacity-100 scale-100'
            }`}
          >
            <div 
              className={`text-9xl mb-2 ${
                isSpinning ? 'animate-spin' : ''
              }`}
            >
              {cats[currentCat].emoji}
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm px-5 py-2 rounded-full">
              <p className="text-center font-medium text-foreground">{cats[currentCat].name}</p>
            </div>
          </div>
        </div>
        
        {/* レアリティ表示 (ランダム) */}
        {!isAnimating && !isSpinning && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-accent to-sky-400 rounded-full text-xs text-white font-medium opacity-80">
            {Math.random() > 0.7 ? "レア" : Math.random() > 0.4 ? "ノーマル" : "コモン"}
          </div>
        )}
      </div>
      
      <button
        onClick={changeCat}
        disabled={isAnimating || isSpinning}
        className="feature-button group relative"
      >
        <span className={isSpinning ? "opacity-0" : "opacity-100"}>
          ガチャを回す
        </span>
        {isSpinning && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
      </button>
      
      <p className="text-sm text-muted-foreground text-center max-w-xs">
        ボタンをクリックすると様々な表情が出現します
      </p>
    </div>
  );
}
