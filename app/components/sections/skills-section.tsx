'use client';

import { useState } from 'react';
import { FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiFirebase, SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';

// スキルのカテゴリー
const categories = [
  { id: 'all', name: 'すべて' },
  { id: 'frontend', name: 'フロントエンド' },
  { id: 'backend', name: 'バックエンド' },
  { id: 'tools', name: 'ツール・その他' },
];

// スキルデータ
const skillsData = [
  {
    name: "HTML & CSS",
    level: 90,
    category: "frontend",
    experience: "5年",
    description: "セマンティックなHTML構造とレスポンシブデザインの構築",
    icon: <FaHtml5 className="w-5 h-5" />
  },
  {
    name: "JavaScript",
    level: 85,
    category: "frontend",
    experience: "4年",
    description: "ES6+の機能を活用した効率的で読みやすいコード",
    icon: <FaJs className="w-5 h-5" />
  },
  {
    name: "React",
    level: 80,
    category: "frontend",
    experience: "3年",
    description: "Hooksを活用した関数コンポーネントベースの開発",
    icon: <FaReact className="w-5 h-5" />
  },
  {
    name: "TypeScript",
    level: 75,
    category: "frontend",
    experience: "2.5年",
    description: "型安全なコードによる信頼性の高いアプリケーション開発",
    icon: <SiTypescript className="w-5 h-5" />
  },
  {
    name: "Next.js",
    level: 70,
    category: "frontend",
    experience: "2年",
    description: "SSRとSSGを活用したパフォーマンスの高いウェブサイト構築",
    icon: <SiNextdotjs className="w-5 h-5" />
  },
  {
    name: "Tailwind CSS",
    level: 85,
    category: "frontend",
    experience: "3年",
    description: "ユーティリティファーストのアプローチによる効率的なスタイリング",
    icon: <SiTailwindcss className="w-5 h-5" />
  },
  {
    name: "Node.js",
    level: 65,
    category: "backend",
    experience: "2年",
    description: "RESTful APIやサーバーサイドアプリケーションの開発",
    icon: <FaNodeJs className="w-5 h-5" />
  },
  {
    name: "Firebase",
    level: 70,
    category: "backend",
    experience: "2年",
    description: "認証、データベース、ホスティングなどのサービスを活用",
    icon: <SiFirebase className="w-5 h-5" />
  },
  {
    name: "Git & GitHub",
    level: 75,
    category: "tools",
    experience: "3年",
    description: "バージョン管理とチーム開発のためのワークフロー",
    icon: <FaGithub className="w-5 h-5" />
  },
  {
    name: "Vercel",
    level: 80,
    category: "tools",
    experience: "2年",
    description: "継続的デプロイメントとホスティングの自動化",
    icon: <SiVercel className="w-5 h-5" />
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // フィルタリングされたスキル
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          スキル
        </h2>
        
        {/* カテゴリーフィルター */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-card rounded-lg p-1 border border-border">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm ${
                  activeCategory === category.id
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-card p-5 rounded-lg border border-border"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <span className="text-accent">{skill.icon}</span> {skill.name}
                  </h3>
                  <span className="text-sm px-2 py-1 bg-muted rounded">
                    {skill.experience}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {skill.description}
                </p>
                
                <div className="relative w-full h-2 bg-muted rounded-full">
                  <div 
                    className="h-full bg-accent rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <div className="mt-1 text-right">
                  <span className="text-sm">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            上記のスキルセットを活用して、使いやすく効率的なWebアプリケーションの開発に取り組んでいます。<br />
            常に新しい技術を学び続けています。
          </div>
        </div>
      </div>
    </section>
  );
}
