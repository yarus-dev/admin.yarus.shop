import { cn } from '@/utils/styles'
import { LoginForm } from '@/components/auth/login'

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/utils/firebase";

const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    alert(`Вітаю, ${user.displayName}!`);
    console.log("Користувач увійшов:", user);
  } catch (error) {
    console.error("Помилка входу через Google:", error);
    alert("Не вдалося увійти через Google.");
  }
};

export function Login() {
  return (
  <main className={cn`flex items-center justify-center min-h-full`}>
    <LoginForm onGoogleLogin={handleGoogleSignIn}/>
  </ main>
  );
}
