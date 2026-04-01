'use client'

import { cn } from "@/lib/utils"

interface DiagonalPatternProps {
  side: 'left' | 'right'
  className?: string
  topOffset?: string
}

export default function DiagonalPattern({ side, className = '', topOffset = '0' }: DiagonalPatternProps) {
  return (
    <div 
      className={cn(
        "absolute w-[60px] h-full overflow-hidden sm:block hidden",
        side === 'left' ? 'left-0' : 'right-0',
        className
      )} 
      style={{ top: topOffset }}
    >
      <div 
        className="absolute dark:opacity-[0.05] opacity-[0.07] inset-0 w-[60px] h-full border dark:border-[#eee] border-[#000]/70"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)'
        }}
      />
    </div>
  )
}