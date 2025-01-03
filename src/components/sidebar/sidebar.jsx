import { cn } from '@/utils/styles'

export function Sidebar({ className, children, ...props }) {
  return (
    <aside className={cn( className )}>
      {children}
    </aside>
  )
}

export function Header({ className, children, ...props }) {
  return (
    <header className={cn('p-2', className )}>
      {children}
    </header>
  )
}

Sidebar.Header = Header

export function Group({ className, children, ...props }) {
  return (
    <div className={cn( className )}>
      {children}
    </div>
  )
}

Sidebar.Group = Group

export function Footer({ className, children, ...props }) {
  return (
    <footer className={cn( className )}>
      {children}
    </footer>
  )
}

Sidebar.Footer = Footer
