import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYl8z3yFJcA6IdOfw_uEexwXRcCscXNxo",
  authDomain: "tweetbeer-f1c7e.firebaseapp.com",
  projectId: "tweetbeer-f1c7e",
  storageBucket: "tweetbeer-f1c7e.appspot.com",
  messagingSenderId: "61150731204",
  appId: "1:61150731204:web:d2e58512e64347b61d2291",
  measurementId: "G-CCQ2ES2XEC"
};

initializeApp(firebaseConfig);

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider();
  githubProvider.setCustomParameters(firebaseConfig);
  const auth = getAuth();
  return signInWithPopup(auth, githubProvider);
};