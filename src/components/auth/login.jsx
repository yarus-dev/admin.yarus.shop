import { cn } from '@/utils/styles'
import { Title, Lead } from '@/components/typography'
import { LoginButton as GoogleButton } from '@/components/auth/buttons/google'
import { Logo } from '@/components/logo'

export function LoginForm({ className,  children, onGoogleLogin }) {
  return (
    <div className={cn('max-w-prose p-6 text-center', className)}>
      <Logo className="mb-2" />
      <Title level={2}>Sign in to your account</Title>
      <Lead>Use your Google account to continue</Lead>
      <GoogleButton className="mt-6" onClick={onGoogleLogin} />
    </div>
  )
}
