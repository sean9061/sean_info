"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { BsFillLightbulbOffFill, BsFillLightbulbFill } from "react-icons/bs"
import { Button } from "@/components/ui/button"

export function SimpleThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" className="h-14 w-14 rounded-full cursor-pointer">
        <BsFillLightbulbFill className="size-8 text-yellow-500" />
        <span className="sr-only">テーマを切り替え</span>
      </Button>
    )
  }

  const isDark = theme === "dark"
  const nextTheme = isDark ? "light" : "dark"
  const tooltipText = isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(nextTheme)}
      title={tooltipText}
      className={`overflow-hidden size-14 rounded-full cursor-pointer ${isDark ? '' : 'bg-black'}`}
    >
      <BsFillLightbulbOffFill className={`size-8 absolute transition-all duration-300 text-gray-400 ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <BsFillLightbulbFill className={`size-8 absolute transition-all duration-300 text-yellow-500 ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}/>
      <span className="sr-only">{tooltipText}</span>
    </Button>
  )
}
