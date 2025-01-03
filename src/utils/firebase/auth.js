import { getAuth, GoogleAuthProvider, signOut } from 'firebase/auth';
import { app } from './app';

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
