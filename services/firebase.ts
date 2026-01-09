// firebaseConfig.ts
// lib/
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: "AIzaSyC3ZuY-uydSY9utx5lfkXXIQ9duIK9BjeU",
  authDomain: "task-manager-72-a7c06.firebaseapp.com",
  projectId: "task-manager-72-a7c06",
  storageBucket: "task-manager-72-a7c06.firebasestorage.app",
  messagingSenderId: "41935826620",
  appId: "1:41935826620:web:3483ec2cbf9d7474d42ab9"
}
const app = initializeApp(firebaseConfig)

// for authenticate
// only need for before firebase 9v
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)
