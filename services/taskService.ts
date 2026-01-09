import { db } from "./firebase"
import { getAuth } from "firebase/auth"
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where
} from "firebase/firestore"

const auth = getAuth()
const tasksCollection = collection(db, "tasks")

export const addTask = async (
  title: string,
  description: string,
  isComplete: boolean = false
) => {
  const user = auth.currentUser
  if (!user) return

  await addDoc(tasksCollection, {
    title,
    description,
    isComplete,
    userId: user.uid,
    createdAt: new Date().toISOString()
  })
}

export const getAllTasks = async () => {
  const user = auth.currentUser
  if (!user) return

  const q = query(
    tasksCollection,
    where("userId", "==", user.uid),
    orderBy("createdAt", "desc")
  )
  const snapshot = await getDocs(q)
  
  return snapshot.docs.map((document) => {
    const data = document.data()
    return {
      id: document.id,
      title: data.title as string,
      description: data.description as string,
      isComplete: (data.isComplete as boolean) || false,
      createdAt: data.createdAt as string
    }
  })
}
