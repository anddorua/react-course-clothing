import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu3JnH00ZD4xZXnrXhaT7fpVBpEz9diJw",
  authDomain: "clothing-db-ce9e1.firebaseapp.com",
  projectId: "clothing-db-ce9e1",
  storageBucket: "clothing-db-ce9e1.appspot.com",
  messagingSenderId: "969017143475",
  appId: "1:969017143475:web:2b5019c16d75e29e2540c6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  user,
  additionalInformation
) => {
  const userDocRef = doc(db, "users", user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user record", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return firebaseSignInWithEmailAndPassword(auth, email, password);
};
