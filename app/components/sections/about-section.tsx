import { FiUser } from 'react-icons/fi';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          自己紹介
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-accent flex items-center justify-center bg-muted text-accent">
              <FiUser className="h-20 w-20" />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold mb-2">広瀬エイトル</h3>
            <p className="text-muted-foreground mb-4">
              フロントエンドエンジニア・UIデベロッパー
            </p>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="mb-4">
                こんにちは！Webフロントエンド開発を専門としているエンジニアです。
                React、Next.js、TypeScriptを使って、パフォーマンスと使いやすさを両立したWebアプリを作っています。
              </p>
              
              <p>
                情報工学部を卒業後、スタートアップと大手IT企業でフロントエンド開発の経験を積みました。
                最新技術のキャッチアップとクリーンなコード設計を大切にし、ユーザー体験を向上させる技術を日々勉強中です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
