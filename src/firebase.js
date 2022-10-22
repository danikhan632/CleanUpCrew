import firebase from "firebase/app"
import "firebase/auth"
import "firebase/functions"
import "firebase/database"
import "firebase/firestore"
import "firebase/storage"
import "firebase/analytics"
import { invoke } from '@tauri-apps/api'
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

const auth = app.auth()
const functions = app.functions()
const database = app.database()
const firestore = app.firestore()
const storage = app.storage()
const tauriInvoker = invoke;

export { auth,functions,database,firestore,storage,tauriInvoker }

export default app
