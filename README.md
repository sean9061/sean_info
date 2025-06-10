# Next.jsポートフォリオテンプレート 🚀

大学1年生向けのNext.jsポートフォリオ作成授業用テンプレートです。

## 🎯 このテンプレートで学ぶこと

- **Next.js**の基本的な使い方
- **React**のコンポーネントとJSX
- **useState**を使った状態管理
- **Shadcn UI**を使ったモダンなUI作成
- **TypeScript**の基本
- **Tailwind CSS**でのスタイリング
- **Vercel**でのWebサイト公開

## 🌟 機能

✅ レスポンシブデザイン（パソコン・スマホ対応）  
✅ ダークモード・ライトモード切り替え  
✅ プロフィール表示  
✅ 趣味・学歴セクション  
✅ インタラクティブなおみくじ機能  
✅ モダンなUI（Shadcn UI使用）  
✅ アイコン表示（React Icons使用）  

## 🚀 セットアップ方法

### 1. 依存関係のインストール

```bash
npm install
# または
pnpm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
# または
pnpm dev
```

### 3. ブラウザで確認

`http://localhost:3000` を開いてサイトを確認してください。

## 📝 カスタマイズ方法

### 基本情報の編集

`app/page.tsx` ファイルを開いて、以下の部分を編集してください：

#### 1. 名前とイニシャル

```tsx
// 49行目付近
<CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
  {/* ここに自分の名前を入力してください */}
  あなたの名前
</CardTitle>

// 44行目付近  
<AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
  {/* ここに自分のイニシャルを入れてください（例：田中太郎 → T.T） */}
  YOUR
</AvatarFallback>
```

#### 2. 自己紹介文

```tsx
// 75行目付近
<p className="text-muted-foreground leading-relaxed">
  {/* ここに自己紹介文を入力してください */}
  こんにちは！○○大学の1年生です。プログラミングは初心者ですが、
  Web開発に興味があり、これから頑張って学習していきたいと思います。
  よろしくお願いします！
</p>
```

#### 3. 趣味（3つ）

```tsx
// 93行目付近
<Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
  趣味1（例：読書）
</Badge>
<Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
  趣味2（例：映画鑑賞）
</Badge>
<Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
  趣味3（例：プログラミング）
</Badge>
```

#### 4. 学歴情報

```tsx
// 115行目付近（高校）
<h3 className="font-semibold">○○高等学校</h3>
<p className="text-sm text-muted-foreground">2021年4月 - 2024年3月</p>
<p className="text-sm mt-1">○○部で活動していました</p>

// 125行目付近（大学）
<h3 className="font-semibold">○○大学 ○○学部</h3>
<p className="text-sm text-muted-foreground">2024年4月 - 現在</p>
<p className="text-sm mt-1">プログラミングやWeb開発について学習中</p>
```

### テーマカラーの変更

`tailwind.config.js` ファイルでテーマカラーを変更できます。

## 🎲 おみくじ機能について

おみくじ機能は`useState`を使って実装されています：

```tsx
const [omikujiResult, setOmikujiResult] = useState<string>("");

const drawOmikuji = () => {
  const randomIndex = Math.floor(Math.random() * omikujiOptions.length);
  setOmikujiResult(omikujiOptions[randomIndex]);
};
```

- `useState`でおみくじの結果を管理
- ボタンクリックで`drawOmikuji`関数が実行
- ランダムに結果を選択して`setOmikujiResult`で状態を更新

## 🌐 Vercelでの公開

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

## 🛠 使用技術

- **Next.js 14** - Reactフレームワーク
- **TypeScript** - 型安全なJavaScript
- **Tailwind CSS** - ユーティリティファーストCSS
- **Shadcn UI** - モダンなUIコンポーネント
- **React Icons** - 豊富なアイコンライブラリ
- **next-themes** - ダークモード対応

## 📚 学習リソース

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [React公式ドキュメント](https://ja.react.dev/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 授業での使い方

1. **基本情報の編集**（30分）
   - 名前、自己紹介、趣味、学歴を入力

2. **おみくじ機能の理解**（35分）
   - `useState`の動作を確認
   - 結果の追加やカスタマイズ

3. **Vercelでの公開**（25分）
   - GitHubへのプッシュ
   - Vercelでのデプロイ

## ❓ よくある質問

**Q: 開発サーバーが起動しない**
A: Node.jsがインストールされているか確認してください。`node --version`で確認できます。

**Q: デザインを変更したい**
A: `tailwind.config.js`でテーマを変更するか、各コンポーネントのクラス名を編集してください。

**Q: おみくじの結果を追加したい**
A: `omikujiOptions`配列に新しい結果を追加してください。

---

頑張ってポートフォリオを作成しましょう！🎉
