import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDg3gIjCL3Yj0OKfe4N5FV4zGlcNzes6Bk',
  authDomain: 'copytinkoffbank.firebaseapp.com',
  projectId: 'copytinkoffbank',
  storageBucket: 'copytinkoffbank.appspot.com',
  messagingSenderId: '122437025118',
  appId: '1:122437025118:web:fb60359f365cd77a77a3cf',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => signOut(auth);

export const db = getFirestore();
