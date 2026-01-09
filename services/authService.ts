import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "./firebase"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const login = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

export const logout = async () => {
  await signOut(auth)
  AsyncStorage.clear()
  //   AsyncStorage.setItem("key", {})
  // AsyncStorage.getItem("key")
  return
}

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(userCred.user, {
    displayName: name,
    photoURL: ""
  })

  // role
  // firestore (db)
  setDoc(doc(db, "users", userCred.user.uid), {
    name, // name: name
    role: "",
    email,
    createdAt: new Date()
  })
  return userCred.user
}
