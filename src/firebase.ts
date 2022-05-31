import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCk1ruKaOUY_-ti3vi0LHzKDhxp4XrZ8pk',
  authDomain: 'clonetinkoffbank.firebaseapp.com',
  projectId: 'clonetinkoffbank',
  storageBucket: 'clonetinkoffbank.appspot.com',
  messagingSenderId: '173494832685',
  appId: '1:173494832685:web:55920692180ad478b332a4',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const register = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => signOut(auth);

export const db = getFirestore(app);
