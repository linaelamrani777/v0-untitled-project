import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
import { libraryBooks } from "@/lib/db/library"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    // Authentification
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    verify(token, JWT_SECRET)

    // Trouver le livre
    const bookId = Number.parseInt(params.id)
    const book = libraryBooks.find((b) => b.id === bookId)

    if (!book) {
      return NextResponse.json({ error: "Livre non trouvé" }, { status: 404 })
    }

    return NextResponse.json(book)
  } catch (error) {
    console.error(`Erreur lors de la récupération du livre ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    // Authentification
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verify(token, JWT_SECRET) as { id: number }
    const userId = decoded.id

    // Trouver le livre
    const bookId = Number.parseInt(params.id)
    const book = libraryBooks.find((b) => b.id === bookId)

    if (!book) {
      return NextResponse.json({ error: "Livre non trouvé" }, { status: 404 })
    }

    // Vérifier si le livre est disponible
    if (!book.available) {
      return NextResponse.json({ error: "Ce livre n'est pas disponible" }, { status: 400 })
    }

    // Simuler l'emprunt du livre
    book.available = false
    book.borrowedBy = userId
    book.dueDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString() // 14 jours

    return NextResponse.json({
      message: "Livre emprunté avec succès",
      book,
    })
  } catch (error) {
    console.error(`Erreur lors de l'emprunt du livre ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
