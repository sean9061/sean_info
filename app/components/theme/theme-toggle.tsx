// クライアントコンポーネントとして定義
'use client';

import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  // 初期値は'light'だが、useEffectでシステム設定を確認
  const [theme, setTheme] = useState<Theme>('light');

  // マウント時にシステム設定やローカルストレージから設定を読み込む
  useEffect(() => {
    // ローカルストレージから設定を取得
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // システム設定を確認
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
      setTheme(systemTheme);
      document.documentElement.setAttribute('data-theme', systemTheme);
    }
  }, []);

  // テーマを切り替える関数
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-muted hover:bg-muted/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-md border border-border/50 relative overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      {theme === 'light' 
        ? <FiMoon className="w-5 h-5 text-foreground transition-transform duration-300 transform hover:rotate-12" /> 
        : <FiSun className="w-5 h-5 text-foreground transition-transform duration-300 transform hover:rotate-12" />
      }
    </button>
  );
}
