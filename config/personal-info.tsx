import React from "react";
import { IconType } from "react-icons";
import { 
  FaGithub, 
  FaInstagram,
  FaBook,
  FaCode,
  FaMusic,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";

// パーソナル情報の型定義
export interface PersonalInfo {
  // 基本情報
  name: string;
  title: string;
  location: string;
  avatarImage?: string;
  initials: string;
  
  // About Me
  about: {
    paragraphs: React.ReactNode[];
  };
  
  // Tech Stack
  techStack: {
    name: string;
    icon: React.ReactNode;
  }[];
  
  // 趣味・興味
  hobbies: {
    title: string;
    description: string;
    icon: React.ReactNode;
    badges: string[];
  }[];
  
  // 教育歴
  education: {
    period: string;
    school: string;
    description: string;
    badges: string[];
    link?: string;
  }[];
  
  // ソーシャルリンク
  socialLinks: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

// あなたのパーソナル情報をここで編集してください
export const personalInfo: PersonalInfo = {
  // 基本情報
  name: "あなたの名前",
  title: "大学1年生・駆け出しエンジニア",
  location: "Tokyo, Japan",
  avatarImage: "avatar.jpg", // 画像を追加したい場合はpublicフォルダに配置
  initials: "YOUR", // アバター画像がない場合に表示されるイニシャル
  
  // About Me セクション
  about: {
    paragraphs: [
      <>大学1年生の駆け出しエンジニアです。Web開発の世界に魅了され、日々新しい技術を学んでいます。</>,
      <>現在は<strong className="text-foreground">React</strong>と<strong className="text-foreground">Next.js</strong>を中心としたモダンなフロントエンド技術を学習中。TypeScriptやTailwind CSSの良さを実感しながら、実際にプロジェクトを作って経験を積んでいます。</>,
      <>「良いコードは読みやすいコード」を心がけ、Clean CodeやDesign Patternsを学習。将来的にはユーザーに価値を提供できるWebアプリケーションを開発したいと考えています。</>,
      <>毎日のコミットとQiitaでの学習記録を継続し、プログラミングコミュニティの一員として成長していきたいです。</>
    ]
  },
  
  // 技術スタック
  techStack: [
    { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3 mr-1" /> },
    { name: "React", icon: <SiReact className="w-3 h-3 mr-1" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-3 h-3 mr-1" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 h-3 mr-1" /> },
  ],
  
  // 趣味・興味
  hobbies: [
    {
      title: "Learning & Reading",
      description: "技術書やPodcastでのインプット、QiitaやZennでのアウトプットを継続",
      icon: <FaBook className="h-5 w-5 text-primary" />,
      badges: ["Clean Code", "Podcast"]
    },
    {
      title: "Development & Design",
      description: "React/Next.jsでの個人プロジェクト、UI/UX設計、新技術の実験と検証",
      icon: <FaCode className="h-5 w-5 text-primary" />,
      badges: ["React", "UI/UX"]
    },
    {
      title: "Music & Entertainment",
      description: "コーディング用BGM、Webゲームでの参考収集、技術系コンテンツの視聴",
      icon: <FaMusic className="h-5 w-5 text-primary" />,
      badges: ["Lo-Fi", "Gaming"]
    }
  ],
  
  // 教育歴
  education: [
    {
      period: "2024 — 現在",
      school: "○○大学 ○○学部",
      description: "プログラミングやWeb開発について学習中。特にフロントエンド技術に興味を持って取り組んでいます。授業以外でも自主的に様々な技術を学び、実際にプロジェクトを作りながらスキルを向上させています。",
      badges: ["現在学習中", "Web開発", "フロントエンド"],
      link: "https://example.com" // 学校のウェブサイトなど（オプション）
    },
    {
      period: "2021 — 2024",
      school: "○○高等学校",
      description: "○○部で活動していました。チームワークやリーダーシップを学び、問題解決能力を養いました。高校時代からコンピューターに興味を持ち始め、プログラミングの基礎を独学で学んでいました。",
      badges: ["リーダーシップ", "チームワーク", "独学"]
    }
  ],
  
  // ソーシャルリンク
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourusername", // あなたのGitHubのURLに変更してください
      icon: <FaGithub className="size-6" />
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/yourusername", // あなたのX(Twitter)のURLに変更してください
      icon: <FaXTwitter className="size-6" />
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourusername", // あなたのInstagramのURLに変更してください
      icon: <FaInstagram className="size-6" />
    },
    {
        platform: "Qiita",
        url: "https://qiita.com/yourusername", // あなたのQiitaのURLに変更してください
        icon: <SiQiita className="size-6" />
    },
    {
        platform: "Zenn",
        url: "https://zenn.dev/yourusername", // あなたのZennのURLに変更してください
        icon: <SiZenn className="size-6" />
    }
  ]
}; 