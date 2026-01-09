import { useLoader } from "@/hooks/useLoader"
import { auth } from "@/services/firebase"
import { onAuthStateChanged, User } from "firebase/auth"
import { createContext, ReactNode, useEffect, useState } from "react"

interface AuthContextType {
  user: User | null
  loading: boolean
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { hideLoader, isLoading, showLoader } = useLoader()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    showLoader()
    const unscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr)
      hideLoader()
    })

    // cleanup function (component umount)
    return () => unscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading: isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
