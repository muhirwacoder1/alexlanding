import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'lead' | 'small' | 'muted'
}

export function Text({ variant = 'default', className, ...props }: TextProps) {
  const styles = {
    default: 'text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4',
    lead: 'text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6',
    small: 'text-sm leading-normal text-gray-600 dark:text-gray-400 mb-3',
    muted: 'text-sm text-gray-500 dark:text-gray-500 mb-2',
  }
  
  return (
    <p 
      className={cn(
        styles[variant],
        className
      )}
      {...props}
    />
  )
}