import { initializeApp } from "firebase/app"
import { useReducer } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup
} from 'firebase/auth'
import { doc, onSnapshot } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  Timestamp
} from 'firebase/firestore'



const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAYl8z3yFJcA6IdOfw_uEexwXRcCscXNxo",
  authDomain: "tweetbeer-f1c7e.firebaseapp.com",
  projectId: "tweetbeer-f1c7e",
  storageBucket: "tweetbeer-f1c7e.appspot.com",
  messagingSenderId: "61150731204",
  appId: "1:61150731204:web:d2e58512e64347b61d2291",
  measurementId: "G-CCQ2ES2XEC"
};
initializeApp(firebaseConfig)
 const mapUserFromFirebaseAuthToUser = (user) => {
    return {
      avatar: user.photoURL,
      email: user.email,
      uid: user.uid 
      
  }

}  

export const onFirebaseAuthStateChange = (onChange) => {
  const auth = getAuth()
  return onAuthStateChanged(auth, (user) => {
    onChange(user && mapUserFromFirebaseAuthToUser(user))
    
  })
  
}

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider()
  githubProvider.setCustomParameters(firebaseConfig)
  const auth = getAuth()
  return signInWithPopup(auth, githubProvider).then(mapUserFromFirebaseAuthToUser) 
  
}

export const loginWithGoogle = () => {
  const GoogleProvider = new GoogleAuthProvider()
  GoogleProvider.setCustomParameters(firebaseConfig)
  const auth = getAuth()
  return signInWithPopup(auth, GoogleProvider).then(mapUserFromFirebaseAuthToUser) 
  
}

const app = initializeApp(firebaseConfig)
const db = getFirestore()
const storage = getStorage(app)

export const addBweet = async ({ avatar, email, img,  uid, content }) => {
  await addDoc(collection(db, 'Bweets'), {
    avatar,
    email,
    uid,
    img,
    content,
    createdAt: Timestamp.fromDate(new Date()),
    likeCount: 0,
    shareCount: 0
  })
}


const mapBweetFromFirebaseToBweetObject = (doc) => {
  const data = doc.data()
  const id = doc.id
  const { createdAt } = data
  const date = new Date(createdAt.seconds * 1000)
  const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES').format(date)

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate()
  }
}


 export const fetchLatestBweets = async () => {
  const latestBweetsQuery = query(collection(db, 'Bweets'), orderBy('createdAt', 'desc'))
  const { docs } = await getDocs(latestBweetsQuery)
  try {
    return docs.map(mapBweetFromFirebaseToBweetObject)
  }catch (err) {
    console.log(err)
  }
}

export const upLoadImage = (file) => {
  const now = Date.now()
  const storageRef = ref(storage, `images/${now}_${file.name}`)
  const task = uploadBytesResumable(storageRef, file)
  return task
}
export const getImgURL = (task, callback) => {
  getDownloadURL(ref(storage, task._metadata.fullPath))
    .then((url) => {
      return callback(url)
    })
    .catch(err => console.log(err))
}