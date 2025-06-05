import { GithubIcon, LinkIcon } from '../ui/icons';

// プロジェクトのデータ
const projects = [
  {
    id: 1,
    title: "ポモドーロタイマー",
    description: "集中力向上のためのポモドーロテクニックを実践できるタイマーアプリ。カスタマイズ可能な時間設定と通知機能付き。",
    emoji: "⏱️",
    tags: ["React", "JavaScript", "CSS"],
    link: "#",
    github: "#",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    title: "タスク管理ツール",
    description: "タスク管理をもっと効率的に。ドラッグ＆ドロップでタスクを整理し、優先度付けが簡単にできるツール。",
    emoji: "📝",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    link: "#",
    github: "#",
    color: "from-emerald-400 to-green-500",
  },
  {
    id: 3,
    title: "天気予報アプリ",
    description: "現在地や検索した場所の天気予報を、美しいビジュアルと共に表示するWebアプリ。5日間の予報と詳細データを提供。",
    emoji: "🌤️",
    tags: ["JavaScript", "Next.js", "API連携"],
    link: "#",
    github: "#",
    color: "from-amber-400 to-orange-400",
  },
  {
    id: 4,
    title: "オンラインメモ帳",
    description: "シンプルで使いやすいメモアプリ。マークダウン記法対応で、メモの整理や検索も簡単。クラウド同期機能付き。",
    emoji: "📒",
    tags: ["React", "Firebase", "CSS"],
    link: "#",
    github: "#",
    color: "from-purple-400 to-indigo-500",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          作品
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-card rounded-lg border border-border p-6"
            >
              {/* プロジェクトアイコン */}
              <div className="flex items-center mb-4">
                <div className="bg-muted rounded-full p-3 mr-3">
                  <span className="text-2xl">{project.emoji}</span>
                </div>
                <h3 className="text-lg font-bold">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              {/* タグ */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-muted px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* リンク */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="w-4 h-4" /> デモを見る
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4" /> コード
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
