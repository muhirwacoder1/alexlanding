import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div 
      className={cn(
        'w-full max-w-4xl mx-auto px-4',
        className
      )}
      {...props}
    />
  )
}