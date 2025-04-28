"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  id: number
  name: string
  email: string
  role: string
}

type AuthContextType = {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Vérifier si l'utilisateur est déjà connecté au chargement
  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token")
    const storedUser = localStorage.getItem("auth_user")

    if (storedToken && storedUser) {
      try {
        setToken(storedToken)
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur:", error)
        // En cas d'erreur, nettoyer le stockage local
        localStorage.removeItem("auth_token")
        localStorage.removeItem("auth_user")
      }
    }

    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)

      // Simuler un délai de traitement
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Créer un utilisateur générique basé sur l'email fourni
      // Extraire le nom à partir de l'email (avant le @)
      const name = email
        .split("@")[0]
        .replace(/[.]/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      const genericUser = {
        id: Math.floor(Math.random() * 1000) + 1, // ID aléatoire
        name: name || "Utilisateur",
        email: email,
        role: "student",
      }

      // Créer un token simulé
      const simulatedToken = `token_${genericUser.id}_${Date.now()}`

      // Stocker le token et les informations utilisateur
      setToken(simulatedToken)
      setUser(genericUser)

      // Sauvegarder dans le localStorage
      localStorage.setItem("auth_token", simulatedToken)
      localStorage.setItem("auth_user", JSON.stringify(genericUser))

      return true
    } catch (error) {
      console.error("Erreur de connexion:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem("auth_token")
    localStorage.removeItem("auth_user")
  }

  return <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider")
  }
  return context
}
