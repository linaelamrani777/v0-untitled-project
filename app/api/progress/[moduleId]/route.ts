import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
import { userProgress } from "@/lib/db/progress"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

export async function GET(request: Request, { params }: { params: { moduleId: string } }) {
  try {
    // Authentification
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verify(token, JWT_SECRET) as { id: number }
    const userId = decoded.id

    // Récupérer la progression de l'utilisateur pour ce module
    const moduleProgress = userProgress[userId]?.[params.moduleId] || {
      completed: 0,
      lastAccessed: null,
      chapters: {},
    }

    return NextResponse.json(moduleProgress)
  } catch (error) {
    console.error(`Erreur lors de la récupération de la progression pour le module ${params.moduleId}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}

export async function POST(request: Request, { params }: { params: { moduleId: string } }) {
  try {
    // Authentification
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verify(token, JWT_SECRET) as { id: number }
    const userId = decoded.id

    // Récupérer les données de progression
    const progressData = await request.json()

    // Initialiser la structure si nécessaire
    if (!userProgress[userId]) {
      userProgress[userId] = {}
    }

    if (!userProgress[userId][params.moduleId]) {
      userProgress[userId][params.moduleId] = {
        completed: 0,
        lastAccessed: null,
        chapters: {},
      }
    }

    // Mettre à jour la progression
    userProgress[userId][params.moduleId] = {
      ...userProgress[userId][params.moduleId],
      ...progressData,
      lastAccessed: new Date().toISOString(),
    }

    return NextResponse.json(userProgress[userId][params.moduleId])
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la progression pour le module ${params.moduleId}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
