import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
import { chatHistory } from "@/lib/db/chat"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

export async function POST(request: Request) {
  try {
    // Authentification
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verify(token, JWT_SECRET) as { id: number }
    const userId = decoded.id

    // Récupérer la question de l'utilisateur
    const { message, moduleId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message requis" }, { status: 400 })
    }

    // Simuler une réponse du chatbot
    let response = ""

    if (message.toLowerCase().includes("bonjour") || message.toLowerCase().includes("salut")) {
      response = "Bonjour ! Comment puis-je vous aider avec vos études aujourd'hui ?"
    } else if (message.toLowerCase().includes("algèbre")) {
      response =
        "L'algèbre est une branche des mathématiques qui étudie les structures, les relations et les quantités. Que souhaitez-vous savoir spécifiquement sur l'algèbre ?"
    } else if (message.toLowerCase().includes("analyse")) {
      response =
        "L'analyse mathématique est la branche des mathématiques qui étudie les fonctions et leurs propriétés. Elle inclut le calcul différentiel et intégral. Que voulez-vous apprendre sur l'analyse ?"
    } else if (message.toLowerCase().includes("exercice") || message.toLowerCase().includes("problème")) {
      response =
        "Je peux vous aider avec des exercices. Pourriez-vous me donner plus de détails sur le type d'exercice ou le sujet spécifique ?"
    } else {
      response =
        "Je suis votre assistant d'étude. N'hésitez pas à me poser des questions sur vos cours, exercices ou concepts que vous souhaitez comprendre."
    }

    // Enregistrer la conversation
    const messageObj = {
      id: Date.now().toString(),
      userId,
      moduleId: moduleId || null,
      message,
      response,
      timestamp: new Date().toISOString(),
    }

    // Initialiser l'historique de chat pour cet utilisateur si nécessaire
    if (!chatHistory[userId]) {
      chatHistory[userId] = []
    }

    chatHistory[userId].push(messageObj)

    return NextResponse.json({
      message: messageObj.message,
      response: messageObj.response,
      timestamp: messageObj.timestamp,
    })
  } catch (error) {
    console.error("Erreur lors de la communication avec le chatbot:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}

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

    // Récupérer l'historique de chat
    const history = chatHistory[userId] || []

    return NextResponse.json(history)
  } catch (error) {
    console.error("Erreur lors de la récupération de l'historique de chat:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
