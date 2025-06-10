# Next.jsポートフォリオテンプレート

大学1年生向けのNext.jsポートフォリオ作成授業用テンプレートです。

## このテンプレートで学ぶこと

- **Next.js 14**の基本的な使い方
- **React**のコンポーネント設計とJSX
- **useState**を使った状態管理
- **Shadcn UI**を使ったモダンなUI作成
- **TypeScript**の型定義と活用
- **Tailwind CSS v4**でのスタイリング
- **React Icons**によるアイコン活用
- **Vercel**でのWebサイト公開

## 機能

- レスポンシブデザイン（パソコン・スマホ・タブレット対応）
- ダークモード・ライトモード切り替え（2つのUIパターン）
- 設定ファイルによる簡単なカスタマイズ
- プロフィール・About Me表示
- 技術スタック表示
- 趣味・興味セクション
- 学歴・教育歴セクション
- インタラクティブなおみくじ機能
- サイドバーレイアウト
- ソーシャルリンク表示
- モダンなUI（Shadcn UI使用）
- 豊富なアイコン（React Icons使用）

## セットアップ方法

### 1. 依存関係のインストール

```bash
pnpm install
# または
npm install
```

### 2. 開発サーバーの起動

```bash
pnpm dev
# または
npm run dev
```

### 3. ブラウザで確認

`http://localhost:3000` を開いてサイトを確認してください。

## カスタマイズ方法

### 基本情報の編集

`config/personal-info.tsx` ファイルを開いて、以下の項目を編集してください：

#### 1. 基本情報

```tsx
export const personalInfo: PersonalInfo = {
  // 基本情報
  name: "あなたの名前",              // ← ここを変更
  title: "大学1年生・駆け出しエンジニア",   // ← ここを変更
  location: "Tokyo, Japan",          // ← ここを変更
  avatarImage: "avatar.jpg",         // ← 画像ファイル名（publicフォルダに配置）
  initials: "YOUR",                  // ← アバター画像がない場合のイニシャル
};
```

#### 2. About Me セクション

```tsx
about: {
  paragraphs: [
    <>大学1年生の駆け出しエンジニアです。Web開発の世界に魅了され、日々新しい技術を学んでいます。</>,
    // ← ここに自分の自己紹介を書いてください
    <>現在は<strong className="text-foreground">React</strong>と<strong className="text-foreground">Next.js</strong>を中心としたモダンなフロントエンド技術を学習中。</>,
    // 複数の段落で構成できます
  ]
},
```

#### 3. 技術スタック

```tsx
techStack: [
  { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3 mr-1" /> },
  { name: "React", icon: <SiReact className="w-3 h-3 mr-1" /> },
  // ← ここに学習中・使用中の技術を追加できます
],
```

#### 4. 趣味・興味

```tsx
hobbies: [
  {
    title: "Learning & Reading",           // タイトル
    description: "技術書やPodcastでのインプット", // 説明
    icon: <FaBook className="h-5 w-5 text-primary" />, // アイコン
    badges: ["Clean Code", "Podcast"]      // バッジ
  },
  // ← 3つの趣味・興味を設定できます
],
```

#### 5. 学歴・教育歴

```tsx
education: [
  {
    period: "2024 — 現在",
    school: "○○大学 ○○学部",              // ← ここを変更
    description: "プログラミングやWeb開発について学習中。", // ← ここを変更
    badges: ["現在学習中", "Web開発", "フロントエンド"],
    link: "https://example.com" // 学校のサイト（オプション）
  },
  // 高校の情報も同様に編集できます
],
```

#### 6. ソーシャルリンク

```tsx
socialLinks: [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername", // ← あなたのURLに変更
    icon: <FaGithub className="size-6" />
  },
  // Twitter, Instagram, Qiita, Zennなど複数のリンクを設定可能
],
```

### アバター画像の追加

1. 画像ファイルを `public/` フォルダに配置
2. `personal-info.tsx` の `avatarImage` に画像ファイル名を指定

```tsx
avatarImage: "your-photo.jpg", // public/your-photo.jpg を参照
```

### テーマカラーの変更

`tailwind.config.js` ファイルでテーマカラーを変更できます。

## おみくじ機能について

おみくじ機能は `components/sections/omikuji-section.tsx` で実装されており、`useState` を使っています：

```tsx
const [omikujiResult, setOmikujiResult] = useState<string>("");

const drawOmikuji = () => {
  const randomIndex = Math.floor(Math.random() * omikujiOptions.length);
  setOmikujiResult(omikujiOptions[randomIndex]);
};
```

- `useState` でおみくじの結果を管理
- ボタンクリックで `drawOmikuji` 関数が実行
- ランダムに結果を選択して `setOmikujiResult` で状態を更新

### おみくじの結果をカスタマイズ

`components/sections/omikuji-section.tsx` の `omikujiOptions` 配列を編集して、結果を追加・変更できます。

## Vercelでの公開

### 1. GitHubにプッシュ

1. GitHubで新しいリポジトリを作成
2. ローカルのコードをプッシュ

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <あなたのリポジトリURL>
git push -u origin main
```

### 2. Vercelでデプロイ

1. [Vercel](https://vercel.com/)にアクセス
2. GitHubアカウントでログイン
3. "New Project"をクリック
4. GitHubリポジトリを選択
5. "Deploy"をクリック

## 使用技術

- **Next.js 14** - Reactフレームワーク
- **TypeScript** - 型安全なJavaScript
- **Tailwind CSS v4** - ユーティリティファーストCSS
- **Shadcn UI** - モダンなUIコンポーネント
- **React Icons** - 豊富なアイコンライブラリ
- **next-themes** - ダークモード対応
- **Radix UI** - アクセシブルなUIプリミティブ
- **Lucide React** - 美しいアイコンセット

## 学習リソース

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [React公式ドキュメント](https://ja.react.dev/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)


## よくある質問

**Q: 開発サーバーが起動しない**
A: Node.jsがインストールされているか確認してください。`node --version` で確認できます。

**Q: 画像が表示されない**
A: 画像ファイルが `public/` フォルダに配置されているか、ファイル名が正しいか確認してください。

**Q: デザインを変更したい**
A: `globals.css` でテーマを変更するか、この[サイト](https://tweakcn.com/editor/theme)で作成し適応させてください。

**Q: おみくじの結果を追加したい**
A: `components/sections/omikuji-section.tsx` の `omikujiOptions` 配列に新しい結果を追加してください。

**Q: 新しいセクションを追加したい**
A: `components/sections/` に新しいコンポーネントを作成し、`app/page.tsx` でインポートしてください。

---

頑張ってポートフォリオを作成しましょう！
