import { BookIcon } from '../ui/icons';

// 学歴データ（簡単に変更可能な変数として定義）
const educationData = [
  {
    period: "2020年4月 - 2024年3月",
    school: "◯◯大学",
    faculty: "情報工学部 情報工学科",
    description: "Webプログラミングとデザインを専攻。卒業研究では「インタラクティブなUIにおけるユーザー体験の向上」をテーマに研究しました。",
    achievements: ["成績優秀賞（2022年度）", "学内ハッカソン 最優秀賞（2023年）"]
  },
  {
    period: "2017年4月 - 2020年3月",
    school: "◯◯高等学校",
    faculty: "普通科",
    description: "情報処理部に所属し、基本的なプログラミングを学びました。文化祭では学校紹介Webサイトを制作しました。",
    achievements: ["情報処理検定1級取得"]
  },
  {
    period: "2024年4月 - 2025年6月（在学中）",
    school: "◯◯デザインスクール",
    faculty: "UI/UXデザインコース",
    description: "実務に即したデザインスキルを身につけるため、社会人向けスクールに通学しています。",
    achievements: ["中間課題で最優秀作品選出"]
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          学歴
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-md">
                    <BookIcon className="w-5 h-5 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-muted text-sm mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold">{item.school}</h3>
                    <p className="text-muted-foreground mb-2">{item.faculty}</p>
                    <p className="mb-3">{item.description}</p>
                    
                    {item.achievements.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-1">実績</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {item.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
