import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Heading({ level = 2, className, ...props }: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements
  
  const styles = {
    1: 'text-4xl md:text-5xl font-bold mb-6',
    2: 'text-3xl md:text-4xl font-bold mb-5',
    3: 'text-2xl md:text-3xl font-semibold mb-4',
    4: 'text-xl md:text-2xl font-semibold mb-3',
    5: 'text-lg md:text-xl font-medium mb-2',
    6: 'text-base md:text-lg font-medium mb-2',
  }
  
  return (
    <Component 
      className={cn(
        styles[level],
        'text-gray-900 dark:text-gray-100',
        className
      )}
      {...props}
    />
  )
}