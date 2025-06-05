// クライアントサイドでのhydrationエラーを防ぐためのスクリプト
export default function ThemeScript() {
  // htmlタグにdata-theme属性を設定するインラインスクリプト
  const themeScript = `
    (function() {
      // ローカルストレージからテーマを取得
      const storedTheme = localStorage.getItem('theme');
      
      // ストレージに保存されたテーマがあればそれを使用
      if (storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme);
        return;
      }
      
      // なければシステム設定を使用
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
      document.documentElement.setAttribute('data-theme', systemTheme);
    })();
  `;

  // dangerouslySetInnerHTMLを使用してスクリプトを挿入
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
