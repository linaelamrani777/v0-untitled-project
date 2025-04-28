import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
import { userProgress } from "@/lib/db/progress"
import { modules } from "@/lib/db/modules"
import { libraryBooks } from "@/lib/db/library"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

export async function GET(request: Request) {
  try {
    // Authentification
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verify(token, JWT_SECRET) as { id: number }
    const userId = decoded.id

    // Récupérer les statistiques de l'utilisateur
    const progress = userProgress[userId] || {}

    // Calculer les statistiques
    const totalModules = modules.length
    const enrolledModules = Object.keys(progress).length

    let totalProgress = 0
    let completedChapters = 0
    let totalChapters = 0

    Object.entries(progress).forEach(([moduleId, moduleProgress]) => {
      totalProgress += moduleProgress.completed

      // Compter les chapitres complétés
      Object.values(moduleProgress.chapters).forEach((chapter: any) => {
        if (chapter.completed) {
          completedChapters++
        }
        totalChapters++
      })
    })

    // Calculer la moyenne de progression
    const averageProgress = enrolledModules > 0 ? totalProgress / enrolledModules : 0

    // Récupérer les livres empruntés
    const borrowedBooks = libraryBooks.filter((book) => book.borrowedBy === userId)

    // Construire les statistiques
    const stats = {
      enrolledModules,
      totalModules,
      averageProgress,
      completedChapters,
      totalChapters,
      borrowedBooks: borrowedBooks.length,
      lastActivity: Object.values(progress).reduce((latest: string | null, moduleProgress: any) => {
        if (!latest || new Date(moduleProgress.lastAccessed) > new Date(latest)) {
          return moduleProgress.lastAccessed
        }
        return latest
      }, null),
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
