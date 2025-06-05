'use client';

import { useState } from 'react';
import CandyCounter from '../features/candy-counter';
import CatChanger from '../features/cat-changer';
import ComplimentButton from '../features/compliment-button';

type FeatureType = 'cat' | 'candy' | 'compliment';

// フィーチャーの情報
const features = [
  { 
    id: 'cat', 
    name: '表情ガチャ', 
    description: 'ボタンをクリックして様々な表情をランダムに表示します。どの表情が出るかはお楽しみ！',
  },
  { 
    id: 'candy', 
    name: 'ポイント集め', 
    description: 'クリックするたびにポイントが増えていき、レベルアップしていきます。どれだけ集められるかな？',
  },
  { 
    id: 'compliment', 
    name: 'あなたのこと褒め褒め機', 
    description: 'ボタンをクリックするたびに素敵な褒め言葉が表示されます。気分が上がること間違いなし！',
  },
];

export default function MinigamesSection() {
  const [activeComponent, setActiveComponent] = useState<FeatureType>('cat');
  
  // 現在のフィーチャー情報を取得
  const currentFeature = features.find(f => f.id === activeComponent);
  
  return (
    <section id="minigames" className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* タブ/セレクト切り替え - モバイルではセレクトボックス、デスクトップではタブ */}
          <div className="mb-6">
            {/* モバイル用セレクト */}
            <div className="md:hidden">
              <select
                value={activeComponent}
                onChange={(e) => setActiveComponent(e.target.value as FeatureType)}
                className="w-full px-4 py-2 rounded-lg 
                  bg-gradient-to-b from-card/90 to-card/70
                  border border-border/50 hover:border-accent/30
                  text-foreground
                  shadow-sm
                  transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-accent/40
                  cursor-pointer transform hover:scale-[1.02]"
                aria-label="ミニゲームを選択"
              >
                {features.map(feature => (
                  <option key={feature.id} value={feature.id} className="bg-card text-foreground py-2">
                    {feature.name}
                  </option>
                ))}
              </select>
            </div>

            {/* デスクトップ用タブ */}
            <div className="hidden md:flex justify-center">
              <div className="flex space-x-3">
                {features.map(feature => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveComponent(feature.id as FeatureType)}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeComponent === feature.id
                        ? 'bg-gradient-to-r from-accent/80 to-accent/60 text-accent-foreground border border-accent/40 shadow-md'
                        : 'bg-gradient-to-b from-card/90 to-card/70 hover:from-card/100 hover:to-card/80 text-muted-foreground hover:text-foreground border border-border/50 hover:border-accent/20'
                    }`}
                  >
                    {feature.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* 説明文 */}
          <div className="mb-8 text-center">
            <p className="text-muted-foreground/90 bg-card/40 backdrop-blur-sm px-8 py-4 rounded-lg inline-block shadow-sm border border-border/30 transition-all duration-300 hover:border-accent/20 hover:shadow-md">
              {currentFeature?.description}
            </p>
          </div>
          
          {/* コンポーネント表示エリア */}
          <div className="bg-gradient-to-b from-card/90 to-card/70 backdrop-blur-sm rounded-xl border border-border/50 shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/20">
            {activeComponent === 'cat' && <CatChanger />}
            {activeComponent === 'candy' && <CandyCounter />}
            {activeComponent === 'compliment' && <ComplimentButton />}
          </div>
        </div>
      </div>
    </section>
  );
}
