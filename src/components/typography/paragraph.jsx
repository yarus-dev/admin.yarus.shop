import { cn } from '@/utils/styles'

export function P({ className, children, ...props }) {
  return (
    <p className={cn('[&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  )
}

export function Lead({ className, children, ...props }) {
  return (
    <P className={["text-xl text-muted-foreground", className]} {...props}>
      {children}
    </P>
  )
}
