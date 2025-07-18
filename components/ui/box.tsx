import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {}

export function Box({ className, ...props }: BoxProps) {
  return (
    <div 
      className={cn(
        'rounded-lg p-6 transition-all',
        className
      )}
      {...props}
    />
  )
}