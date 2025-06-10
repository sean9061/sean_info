import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaPlane,
  FaServer,
} from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { SiGo, SiPython, SiQiita, SiRust, SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

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
  name: "広瀬 エイトル",
  title: "学生エンジニア",
  location: "Tokyo, Japan",
  avatarImage: "avatar.jpg", // 画像を追加したい場合はpublicフォルダに配置
  initials: "H", // アバター画像がない場合に表示されるイニシャル

  // About Me セクション
  about: {
    paragraphs: [
      <>
        大学<span className="font-semibold">1年生</span>の駆け出しエンジニア、<strong className="text-foreground">広瀬エイトル</strong>です。愛知から東京へ移り、<span className="font-semibold">東京工科大学 コンピュータサイエンス学部</span>で学びながら、日々コードを書いています。
      </>,
      <>
        最近は<strong className="text-foreground">React</strong>と<strong className="text-foreground">Next.js</strong>を軸にモダンフロントエンドを探求中。型安全な開発体験が好きで、<strong className="text-foreground">TypeScript</strong>と<strong className="text-foreground">Tailwind CSS</strong>で UI を組むのがマイブームです。ハッカソンや受託案件でも Next.js を使い、実践的なスキルを磨いています。
      </>,
      <>
        バックエンドでは<strong className="text-foreground">Python</strong>と<strong className="text-foreground">FastAPI</strong>/<strong className="text-foreground">Flask</strong>で API を構築。さらに<strong className="text-foreground">Go</strong>や<strong className="text-foreground">Rust</strong>にも手を伸ばし、リアルタイム通信や高速処理に備えています。目標は<strong className="text-foreground">AIOps</strong>領域でインフラも理解したフルサイクルエンジニアになることです。
      </>,
      <>
        趣味はゲームと競プロ、ダーツ。学内<strong className="text-foreground">Linux Club</strong>やハッカソンで仲間とサービス開発に挑戦し、ユーザーに価値を届ける Web アプリを作るべく、これからも挑戦を続けます！
      </>
    ]
  },

  // 技術スタック
  techStack: [
    { name: "TypeScript", icon: <SiTypescript className="w-3 h-3 mr-1" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 h-3 mr-1" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3 mr-1" /> },
    { name: "Python", icon: <SiPython className="w-3 h-3 mr-1" /> },
    { name: "Go", icon: <SiGo className="w-3 h-3 mr-1" /> },
    { name: "Rust", icon: <SiRust className="w-3 h-3 mr-1" /> },
  ],

  // 趣味・興味
  hobbies: [
    {
      title: "Darts",
      description: "週末に八王子のネットカフェで 01/Cricket をエンジョイ。",
      icon: <GiBullseye className="h-5 w-5 text-primary" />,
      badges: ["DARTSLIVE", "01/Cricket", "PhoenixDarts"],
    },
    {
      title: "Backend Engineering",
      description:
        "Go / Python で REST & gRPC サーバを構築。Clean Architecture とテスト駆動で可読性・保守性を追求。",
      icon: <FaServer className="h-5 w-5 text-primary" />,
      badges: ["Go", "FastAPI", "SQL"],
    },
    {
      title: "Travel",
      description:
        "国内外の旅行が大好き。特に移動風景とその地域特有の食文化を楽しむのが趣味です。",
      icon: <FaPlane className="h-5 w-5 text-primary" />,
      badges: ["Enjoy The Landscape", "Local Food"],
    },
  ],

  // 教育歴
  education: [
    {
      period: "2024 — 現在",
      school: "東京工科大学 コンピュータサイエンス学部",
      description: "プログラミングやWeb開発について学習中。特にフロントエンド技術に興味を持って取り組んでいます。授業以外でも自主的に様々な技術を学び、実際にプロジェクトを作りながらスキルを向上させています。",
      badges: ["コンピュータサイエンス学科", "人工知能専攻", "学部長賞"],
      link: "https://example.com" // 学校のウェブサイトなど（オプション）
    },
    {
      period: "2021 — 2024",
      school: "学校法人角川ドワンゴ学園 S高等学校",
      description: "高校時代からインターンやハッカソンに参加し、実践的な開発経験を積み、自己学習を通じてプログラミングスキルを向上させました。特に、チームでのプロジェクト開発や競技プログラミングに力を入れていました。",
      badges: ["実務経験", "インターン", "独学", "ハッカソン"],
    }
  ],

  // ソーシャルリンク
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/HEKUCHAN", // あなたのGitHubのURLに変更してください
      icon: <FaGithub className="size-6" />
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/Heitor_Hirose", // あなたのX(Twitter)のURLに変更してください
      icon: <FaXTwitter className="size-6" />
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/hirose_heitor", // あなたのInstagramのURLに変更してください
      icon: <FaInstagram className="size-6" />
    },
    {
      platform: "Qiita",
      url: "https://qiita.com/hekuta", // あなたのQiitaのURLに変更してください
      icon: <SiQiita className="size-6" />
    },
    {
      platform: "Zenn",
      url: "https://zenn.dev/hekuchandao", // あなたのZennのURLに変更してください
      icon: <SiZenn className="size-6" />
    }
  ]
}; 