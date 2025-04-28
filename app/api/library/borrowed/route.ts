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
    const decoded = verify(token, JWT_SECRET) as { id: number }
    const userId = decoded.id

    // Récupérer les livres empruntés par l'utilisateur
    const borrowedBooks = libraryBooks.filter((book) => book.borrowedBy === userId)

    return NextResponse.json(borrowedBooks)
  } catch (error) {
    console.error("Erreur lors de la récupération des livres empruntés:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
