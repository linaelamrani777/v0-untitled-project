import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
import { users } from "@/lib/db/users"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

export async function GET(request: Request) {
  try {
    // Authentification - vérifier si l'utilisateur est admin
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verify(token, JWT_SECRET) as { id: number; role: string }

    if (decoded.role !== "admin") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 })
    }

    // Récupérer les utilisateurs sans les mots de passe
    const usersWithoutPasswords = users.map(({ password, ...user }) => user)

    return NextResponse.json(usersWithoutPasswords)
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
