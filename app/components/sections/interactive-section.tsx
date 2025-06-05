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
    <section id="interactive" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          インタラクティブ
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {/* フィーチャーの説明 */}
          <div className="mb-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-accent">
              {currentFeature?.name}
            </h3>
            <p className="text-muted-foreground">
              {currentFeature?.description}
            </p>
          </div>
          
          {/* タブ切り替え */}
          <div className="mb-8 flex justify-center">
            <div className="flex bg-card rounded-lg p-1 border border-border">
              {features.map(feature => (
                <button
                  key={feature.id}
                  onClick={() => setActiveComponent(feature.id as FeatureType)}
                  className={`px-4 py-2 rounded-md text-sm ${
                    activeComponent === feature.id
                      ? 'bg-accent text-accent-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {feature.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* コンポーネント表示エリア */}
          <div className="bg-card rounded-lg border border-border p-8">
            {activeComponent === 'cat' && <CatChanger />}
            {activeComponent === 'candy' && <CandyCounter />}
            {activeComponent === 'compliment' && <ComplimentButton />}
          </div>
        </div>
      </div>
    </section>
  );
}
