import Link from 'react-router-dom'
import { cn } from '@/utils/styles'

export function Link({ children, className = '', ...props }) {
  return (
    <a
      className={cn(className)` }`}
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;
