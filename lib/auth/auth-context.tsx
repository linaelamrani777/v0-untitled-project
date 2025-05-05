"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import type { StudyPreferences } from "@/components/questionnaire/study-questionnaire"
import {
  type StudySchedule,
  type StudyChecklist,
  generateStudySchedule,
  generateStudyChecklist,
} from "@/lib/services/schedule-generator"

type User = {
  id: number
  name: string
  email: string
  role: string
  hasCompletedQuestionnaire?: boolean
  studyPreferences?: StudyPreferences
}

type ProfileUpdateData = {
  name?: string
  email?: string
}

type AuthContextType = {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
  studySchedule: StudySchedule | null
  studyChecklist: StudyChecklist[] | null
  saveStudyPreferences: (preferences: StudyPreferences) => void
  updateScheduleBlock: (blockId: string, completed: boolean) => void
  updateChecklistTask: (taskId: string, completed: boolean) => void
  updateUserProfile: (data: ProfileUpdateData) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [studySchedule, setStudySchedule] = useState<StudySchedule | null>(null)
  const [studyChecklist, setStudyChecklist] = useState<StudyChecklist[] | null>(null)
  const router = useRouter()

  // Vérifier si l'utilisateur est déjà connecté au chargement
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedToken = localStorage.getItem("auth_token")
        const storedUser = localStorage.getItem("auth_user")
        const storedSchedule = localStorage.getItem("study_schedule")
        const storedChecklist = localStorage.getItem("study_checklist")

        if (storedToken && storedUser) {
          try {
            // Vérifier si le token est valide (dans une application réelle,
            // vous feriez une requête à l'API pour valider le token)
            const userData = JSON.parse(storedUser)
            setToken(storedToken)
            setUser(userData)

            // Charger le planning et la liste si disponibles
            if (storedSchedule) {
              setStudySchedule(JSON.parse(storedSchedule))
            }

            if (storedChecklist) {
              setStudyChecklist(JSON.parse(storedChecklist))
            }
          } catch (error) {
            console.error("Erreur lors de la récupération des données utilisateur:", error)
            // En cas d'erreur, nettoyer le stockage local
            localStorage.removeItem("auth_token")
            localStorage.removeItem("auth_user")
            localStorage.removeItem("study_schedule")
            localStorage.removeItem("study_checklist")
          }
        }
      } catch (error) {
        console.error("Erreur lors de la vérification de l'authentification:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)

      // Validation de base
      if (!email || !password) {
        return { success: false, message: "Veuillez remplir tous les champs." }
      }

      if (!email.includes("@")) {
        return { success: false, message: "Veuillez entrer une adresse email valide." }
      }

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
        hasCompletedQuestionnaire: false, // Nouvel utilisateur n'a pas complété le questionnaire
      }

      // Créer un token simulé
      const simulatedToken = `token_${genericUser.id}_${Date.now()}`

      // Stocker le token et les informations utilisateur
      setToken(simulatedToken)
      setUser(genericUser)

      // Sauvegarder dans le localStorage
      localStorage.setItem("auth_token", simulatedToken)
      localStorage.setItem("auth_user", JSON.stringify(genericUser))

      return { success: true }
    } catch (error) {
      console.error("Erreur de connexion:", error)
      return { success: false, message: "Une erreur est survenue lors de la connexion." }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    setStudySchedule(null)
    setStudyChecklist(null)
    localStorage.removeItem("auth_token")
    localStorage.removeItem("auth_user")
    localStorage.removeItem("study_schedule")
    localStorage.removeItem("study_checklist")
    router.push("/login")
  }

  const saveStudyPreferences = (preferences: StudyPreferences) => {
    if (!user) return

    // Mettre à jour l'utilisateur avec les préférences et marquer le questionnaire comme complété
    const updatedUser = {
      ...user,
      hasCompletedQuestionnaire: true,
      studyPreferences: preferences,
    }

    // Générer le planning et la liste de vérification
    const newSchedule = generateStudySchedule(preferences)
    const newChecklist = generateStudyChecklist(preferences)

    // Mettre à jour l'état
    setUser(updatedUser)
    setStudySchedule(newSchedule)
    setStudyChecklist(newChecklist)

    // Sauvegarder dans le localStorage
    localStorage.setItem("auth_user", JSON.stringify(updatedUser))
    localStorage.setItem("study_schedule", JSON.stringify(newSchedule))
    localStorage.setItem("study_checklist", JSON.stringify(newChecklist))
  }

  const updateScheduleBlock = (blockId: string, completed: boolean) => {
    if (!studySchedule) return

    const updatedBlocks = studySchedule.blocks.map((block) => {
      if (block.id === blockId) {
        return { ...block, completed }
      }
      return block
    })

    const updatedSchedule = { ...studySchedule, blocks: updatedBlocks }
    setStudySchedule(updatedSchedule)
    localStorage.setItem("study_schedule", JSON.stringify(updatedSchedule))
  }

  const updateChecklistTask = (taskId: string, completed: boolean) => {
    if (!studyChecklist) return

    const updatedChecklist = studyChecklist.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed }
      }
      return task
    })

    setStudyChecklist(updatedChecklist)
    localStorage.setItem("study_checklist", JSON.stringify(updatedChecklist))
  }

  const updateUserProfile = (data: ProfileUpdateData) => {
    if (!user) return

    // Mettre à jour l'utilisateur avec les nouvelles informations
    const updatedUser = {
      ...user,
      ...data,
    }

    // Mettre à jour l'état
    setUser(updatedUser)

    // Sauvegarder dans le localStorage
    localStorage.setItem("auth_user", JSON.stringify(updatedUser))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isLoading,
        isAuthenticated: !!user,
        studySchedule,
        studyChecklist,
        saveStudyPreferences,
        updateScheduleBlock,
        updateChecklistTask,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider")
  }
  return context
}