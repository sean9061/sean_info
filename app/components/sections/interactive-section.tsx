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

export default function InteractiveSection() {
  const [activeComponent, setActiveComponent] = useState<FeatureType>('cat');
  
  // 現在のフィーチャー情報を取得
  const currentFeature = features.find(f => f.id === activeComponent);
  
  return (
    <section id="interactive" className="relative py-16 bg-background">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center bg-gradient-to-r from-foreground via-accent/80 to-foreground bg-clip-text text-transparent">
          ミニゲーム＆機能
        </h2>
        
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          さまざまなインタラクティブな機能を試してみましょう！各機能は楽しい体験を提供します。
        </p>
        
        <div className="max-w-3xl mx-auto">
          {/* 改善されたタブ切り替え */}
          <div className="mb-8 flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              {features.map(feature => (
                <button
                  key={feature.id}
                  onClick={() => setActiveComponent(feature.id as FeatureType)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeComponent === feature.id
                      ? 'bg-gradient-to-r from-accent to-accent/90 text-accent-foreground shadow-md'
                      : 'bg-muted hover:bg-muted/90 border border-border/50'
                  }`}
                >
                  {feature.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* 説明文 */}
          <div className="mb-6 text-center">
            <p className="text-muted-foreground px-4 py-2 bg-muted/50 rounded-lg inline-block">
              {currentFeature?.description}
            </p>
          </div>
          
          {/* コンポーネント表示エリア - アニメーションとスタイル改善 */}
          <div className="bg-card rounded-lg shadow-md p-8 border border-border hover:border-accent/30 transition-all duration-500 animate-fade-in">
            <div className="min-h-[300px] flex items-center justify-center">
              {activeComponent === 'cat' && <CatChanger />}
              {activeComponent === 'candy' && <CandyCounter />}
              {activeComponent === 'compliment' && <ComplimentButton />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
