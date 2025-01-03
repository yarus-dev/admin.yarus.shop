import { cn } from '@/utils/styles'

const styles = {
  1: 'text-4xl font-extrabold lg:text-5xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
}
export function Title({ level = 3, className, children, ...props }) {
  const Tag = `h${level}`
  return (
    <Tag className={cn('scroll-m-20 font-semibold tracking-tight', styles[level],className)} {...props}>
      {children}
    </Tag>
  )
}
