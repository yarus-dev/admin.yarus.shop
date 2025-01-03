import { cn } from '@/utils/styles';

export function Button({ type = 'button', variant = '', className = '', children, ...props }) {

  return (
    <button
      type={type}
      className={cn(`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-neutral-50 text-neutral-950 shadow hover:bg-neutral-100/90 h-9 px-4 py-2`, className)}
      {...props}
    >
      {children}
    </button>
  );
}

