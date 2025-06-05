'use client';

import { FiBook, FiCamera, FiZap } from 'react-icons/fi';

// 趣味のデータ（シンプルに3つに絞る）
const hobbiesData = [
  {
    icon: <FiCamera className="h-14 w-14" />,
    title: "写真撮影",
    description: "自然や街並みの風景写真を撮ることを趣味としています。週末は新しい場所を探して出かけることが多いです。"
  },
  {
    icon: <FiBook className="h-14 w-14" />,
    title: "読書",
    description: "ビジネス書と専門書を中心に読んでいます。新しい知識を得ることで自己成長につなげています。"
  },
  {
    icon: <FiZap className="h-14 w-14" />,
    title: "ランニング",
    description: "週に2〜3回、5〜10kmのランニングを実施しています。健康維持と気分転換のために欠かせない習慣となっています。"
  }
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
          趣味
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbiesData.map((hobby, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-b from-card/80 to-card/50 
                  backdrop-blur-sm p-6 rounded-lg 
                  border border-border/50
                  shadow-sm hover:shadow-md 
                  hover:border-border/80
                  transition-all duration-200"
              >
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="mb-4 text-accent-foreground bg-accent/10 rounded-full p-4
                    group-hover:bg-accent/20 transition-colors duration-200">
                    {hobby.icon}
                  </div>
                  <h3 className="font-bold mb-3 text-foreground">{hobby.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
