"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FaLightbulb } from "react-icons/fa"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isFlashing, setIsFlashing] = React.useState(false)
  const [lightLevel, setLightLevel] = React.useState(0) // 0: off, 1: dim, 2: medium, 3: bright

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-[200px] w-[200px] max-h-80 max-w-80 cursor-pointer flex items-center justify-center">
        <FaLightbulb
          size={200}
          className="text-gray-400 transform rotate-180 2xl:rotate-[135deg]" 
        />
        <span className="sr-only">テーマを切り替え</span>
      </div>
    )
  }

  const isDark = theme === "dark"
  const nextTheme = isDark ? "light" : "dark"
  const tooltipText = isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"

  const handleThemeChange = async () => {
    if (isDark) {
      // ダークからライトに切り替える時は段階的に明るくなるアニメーション
      setIsFlashing(true)
      
      // 背景を段階的に明るくするためのスタイル追加
      const htmlElement = document.documentElement
      htmlElement.style.transition = 'background-color 300ms ease'
      
      // 弱い光 + 背景を少し明るく
      setLightLevel(1)
      await new Promise(resolve => setTimeout(resolve, 400))
      
      // 中程度の光 + 背景をさらに明るく
      setLightLevel(2)
      await new Promise(resolve => setTimeout(resolve, 400))
    
      setTheme(nextTheme)
      
      // 少し待ってからアニメーション状態をリセット（自然な移行のため）
      setTimeout(() => {
        setIsFlashing(false)
        setLightLevel(0)
      }, 200)
      
      // トランジションをリセット
      setTimeout(() => {
      }, 500)
    } else {
      // ライトからダークに切り替える時は即座に
      setTheme(nextTheme)
    }
  }

  return (
    <div className="relative">
      {/* 電球先端からの大きな光の拡散 */}
      <div 
        className={`absolute transition-all duration-500 ${
          isFlashing 
            ? lightLevel === 1 
              ? 'opacity-30'
              : 'opacity-60'
            : isDark ? 'opacity-0' : 'opacity-60'
        }`}
        style={{
          top: '70%',
          left: '70%',
          width: '50vw',
          height: '500px',
          background: 'radial-gradient(circle at 20% 20%, rgba(255, 235, 59, 0.12) 0%, rgba(255, 235, 59, 0.06) 30%, rgba(255, 235, 59, 0.03) 50%, rgba(255, 235, 59, 0.01) 70%, transparent 100%)',
          filter: 'blur(50px)',
          borderRadius: '50%',
          transform: 'rotate(135deg)',
          transformOrigin: '20% 20%'
        }}
      />
      {/* 電球先端からの中間の光 */}
      <div 
        className={`absolute transition-all duration-500 ${
          isFlashing 
            ? lightLevel === 1 
              ? 'opacity-40'
              : 'opacity-70'
            : isDark ? 'opacity-0' : 'opacity-70'
        }`}
        style={{
          top: '65%',
          left: '65%',
          width: '30vw',
          height: '300px',
          background: 'radial-gradient(circle at 25% 25%, rgba(255, 235, 59, 0.18) 0%, rgba(255, 235, 59, 0.1) 35%, rgba(255, 235, 59, 0.05) 60%, transparent 100%)',
          filter: 'blur(25px)',
          borderRadius: '50%',
          transform: 'rotate(135deg)',
          transformOrigin: '25% 25%'
        }}
      />
      {/* 電球先端からの強い光 */}
      <div 
        className={`absolute transition-all duration-500 ${
          isFlashing 
            ? lightLevel === 1 
              ? 'opacity-50'
              : 'opacity-80'
            : isDark ? 'opacity-0' : 'opacity-80'
        }`}
        style={{
          top: '60%',
          left: '60%',
          width: '15vw',
          height: '150px',
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 235, 59, 0.25) 0%, rgba(255, 235, 59, 0.15) 40%, rgba(255, 235, 59, 0.08) 70%, transparent 100%)',
          filter: 'blur(12px)',
          borderRadius: '50%',
          transform: 'rotate(135deg)',
          transformOrigin: '30% 30%'
        }}
      />
      <div
        className="h-[200px] w-[200px] max-h-80 max-w-80 cursor-pointer flex items-center justify-center hover:scale-105 transition-all duration-300 relative z-10 max-2xl:opacity-70"
                onClick={handleThemeChange}
        title={tooltipText}
        role="img"
        tabIndex={-1}
      >
        <FaLightbulb 
          size={200}
                  className={`transform rotate-180 2xl:rotate-[135deg] transition-all duration-500 ${
          isFlashing 
            ? lightLevel === 1 
              ? 'text-yellow-200 drop-shadow-[0_8px_10px_rgba(255,255,0,0.3)] filter brightness-105'
              : 'text-yellow-300 drop-shadow-[0_8px_15px_rgba(255,255,0,0.8)] filter brightness-115'
            : isDark 
              ? 'text-gray-600 drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)] hover:text-yellow-400 hover:drop-shadow-[0_8px_20px_rgba(251,191,36,0.4)] hover:rotate-[185deg] 2xl:hover:rotate-[140deg]'
              : 'text-yellow-500 drop-shadow-[0_8px_15px_rgba(255,255,0,0.8)] hover:text-orange-500 hover:drop-shadow-[0_8px_20px_rgba(234,88,12,0.4)] hover:brightness-90 filter brightness-115'
        }`} 
          style={{
            filter: isDark 
              ? 'drop-shadow(0 8px 12px rgba(0, 0, 0, 0.3))'
              : 'drop-shadow(0 8px 16px rgba(253, 224, 71, 0.3))'
          }}
        />
        <span className="sr-only">{tooltipText}</span>
      </div>
    </div>
  )
}
