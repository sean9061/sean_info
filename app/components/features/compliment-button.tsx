'use client';

import { useEffect, useState } from 'react';

// 褒める言葉のリスト（カテゴリ別）
const complimentCategories = {
  talent: [
    "素晴らしい才能をお持ちですね！✨",
    "あなたのセンスは唯一無二です！🌟",
    "その発想力、本当に素晴らしいです！💡",
    "あなたの創造性は無限大ですね！🎨",
    "その才能、世界が認めるべきです！🏆",
  ],
  personality: [
    "その穏やかな人柄が素敵です！🌸",
    "あなたの優しさに感謝します！💖",
    "いつも周囲を明るくしてくれてありがとう！☀️",
    "あなたの前向きさに皆が元気をもらっています！💪",
    "その誠実さが信頼を生んでいます！🤝",
  ],
  achievement: [
    "その成果は努力の証ですね！👏",
    "継続は力なり、素晴らしい！🔥",
    "チャレンジ精神が実を結んでいます！🚀",
    "一歩一歩、着実に進んでいますね！👣",
    "その成長速度に驚かされます！📈",
  ],
};

// 絵文字のリスト
const emojis = ["💖", "✨", "🌟", "🎉", "👏", "🌈", "🥇", "💯", "🌸", "🌠", "🎊", "💫", "🏅", "🔆", "💐"];

// 背景色のランダム生成（柔らかめのカラー）
const generateRandomGradient = () => {
  const gradients = [
    "from-pink-400 to-rose-300",
    "from-amber-300 to-orange-300",
    "from-emerald-300 to-teal-300",
    "from-sky-300 to-blue-300",
    "from-violet-300 to-purple-300",
    "from-accent to-sky-400",
    "from-red-300 to-pink-300",
    "from-yellow-300 to-amber-300",
    "from-lime-300 to-green-300",
    "from-cyan-300 to-blue-300",
    "from-indigo-300 to-violet-300",
  ];
  
  return gradients[Math.floor(Math.random() * gradients.length)];
};

export default function ComplimentButton() {
  const [compliment, setCompliment] = useState("ボタンを押してください");
  const [category, setCategory] = useState<keyof typeof complimentCategories | null>(null);
  const [hearts, setHearts] = useState<JSX.Element[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [gradient, setGradient] = useState("from-accent to-sky-400");
  const [complimentCount, setComplimentCount] = useState(0);
  
  // 褒め言葉の履歴
  const [history, setHistory] = useState<string[]>([]);
  
  // 特定のカテゴリから褒め言葉をランダムに選ぶ
  const getRandomComplimentFromCategory = (cat: keyof typeof complimentCategories) => {
    const categoryCompliments = complimentCategories[cat];
    return categoryCompliments[Math.floor(Math.random() * categoryCompliments.length)];
  };
  
  // ランダムなカテゴリを選択
  const getRandomCategory = (): keyof typeof complimentCategories => {
    const categories = Object.keys(complimentCategories) as Array<keyof typeof complimentCategories>;
    return categories[Math.floor(Math.random() * categories.length)];
  };
  
  const giveCompliment = () => {
    // アニメーション中なら処理をスキップ
    if (isAnimating) return;
    
    // 新しいカテゴリを選択
    const newCategory = getRandomCategory();
    setCategory(newCategory);
    
    // 選んだカテゴリから褒め言葉を取得
    const randomCompliment = getRandomComplimentFromCategory(newCategory);
    
    // 新しい褒め言葉をセット
    setCompliment(randomCompliment);
    setHistory(prev => [...prev.slice(-4), randomCompliment]);
    
    // カウントを増やす
    setComplimentCount(prev => prev + 1);
    
    // グラデーションをランダムに変更
    setGradient(generateRandomGradient());
    
    // アニメーション状態をセット
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsAnimating(false);
      
      // たくさんのハートを追加
      const heartsCount = Math.floor(Math.random() * 5) + 5; // 5-10個
      for (let i = 0; i < heartsCount; i++) {
        setTimeout(() => addHeart(), i * 100);
      }
    }, 500);
  };
  
  const addHeart = () => {
    const id = Date.now() + Math.random();
    const leftPosition = Math.random() * 80 + 10; // 10% - 90%
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const size = Math.random() * 0.6 + 0.8; // 0.8 - 1.4倍のサイズ
    
    const newHeart = (
      <div
        key={`heart-${id}`}
        className="absolute bottom-0 text-xl"
        style={{
          left: `${leftPosition}%`,
          transform: `scale(${size})`,
          animation: 'float-heart 2s ease-out forwards',
        }}
      >
        {emoji}
      </div>
    );
    
    setHearts((prev) => [...prev, newHeart]);
    
    // 一定時間後にハートを削除
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.key !== `heart-${id}`));
    }, 2000);
  };
  
  // スペシャル効果（10回ごとにキラキラ演出）
  const isSpecialMode = complimentCount > 0 && complimentCount % 10 === 0;
  
  // 特別な効果のためのランダムな背景星を生成
  useEffect(() => {
    if (isSpecialMode) {
      // スペシャルモードでは追加のアニメーション
      const interval = setInterval(() => {
        addHeart();
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [isSpecialMode]);
  
  return (
    <div className="flex flex-col items-center gap-5">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-accent to-sky-500 text-transparent bg-clip-text">あなたのこと褒め褒め機</h3>
      
      <div className="feature-card w-72 h-72 shadow-md overflow-hidden">
        {/* 背景グラデーション - 褒め言葉ごとに変化 */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 transition-all duration-500 z-0`}
        ></div>
        
        {/* 装飾効果 */}
        <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/40 blur-md"></div>
        <div className="absolute bottom-5 right-5 w-16 h-16 rounded-full bg-white/30 blur-md"></div>
        
        {/* 特別モード時の輝き効果 */}
        {isSpecialMode && (
          <div className="absolute inset-0 bg-white/10 animate-pulse z-0"></div>
        )}
        
        {/* メッセージの表示 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
          <div 
            className={`text-center transition-all duration-500 w-full ${
              isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}
          >
            {/* カテゴリ表示 */}
            {category && (
              <div className="mb-2">
                <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white`}>
                  {category === 'talent' ? '才能' : 
                   category === 'personality' ? '人柄' : '成果'}
                </span>
              </div>
            )}
            
            {/* 褒め言葉表示 */}
            <p className="text-xl font-bold text-foreground mb-3">{compliment}</p>
            
            {/* 補足メッセージ */}
            <p className="text-sm text-muted-foreground">
              {isSpecialMode ? 
                "🎊 スペシャルボーナス到達！ 🎊" : 
                "今日もあなたは輝いています！"}
            </p>
            
            {/* 回数表示 */}
            {complimentCount > 0 && (
              <div className="mt-3 text-xs text-muted-foreground">
                <span className={`${isSpecialMode ? 'text-accent font-medium' : ''}`}>
                  {complimentCount}回目の褒め言葉
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* 履歴表示（小さく下部に） */}
        {history.length > 0 && (
          <div className="absolute bottom-2 left-2 right-2 overflow-hidden">
            <div className="flex flex-col gap-1 bg-background/70 backdrop-blur-sm rounded-md p-1 max-h-16 overflow-y-auto">
              {history.map((item, index) => (
                <p key={index} className="text-xs text-muted-foreground truncate px-2">
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
        
        {/* ハートのアニメーション */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          {hearts}
        </div>
      </div>
      
      <button
        onClick={giveCompliment}
        disabled={isAnimating}
        className={`feature-button group ${isAnimating ? 'opacity-80' : ''}`}
      >
        {isSpecialMode ? "特別な褒め言葉をもらう" : "褒めてもらう"}
      </button>
      
      <p className="text-sm text-muted-foreground text-center max-w-xs">
        ボタンをクリックして素敵な言葉をもらいましょう
      </p>
    </div>
  );
}
