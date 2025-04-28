import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
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
    verify(token, JWT_SECRET)

    // Récupérer les paramètres de requête
    const url = new URL(request.url)
    const search = url.searchParams.get("search") || ""
    const category = url.searchParams.get("category") || ""

    // Filtrer les livres
    let filteredBooks = libraryBooks

    if (search) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase()),
      )
    }

    if (category) {
      filteredBooks = filteredBooks.filter((book) => book.category === category)
    }

    return NextResponse.json(filteredBooks)
  } catch (error) {
    console.error("Erreur lors de la récupération des livres:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
