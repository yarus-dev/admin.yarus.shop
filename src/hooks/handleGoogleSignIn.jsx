import { signInWithPopup } from "firebase/auth";

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
