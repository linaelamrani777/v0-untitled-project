import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
import { users } from "@/lib/db/users"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

export async function GET(request: Request) {
  try {
    // Récupérer le token d'autorisation
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]

    // Vérifier le token
    const decoded = verify(token, JWT_SECRET) as { id: number }

    // Trouver l'utilisateur
    const user = users.find((u) => u.id === decoded.id)

    if (!user) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 })
    }

    // Exclure le mot de passe de la réponse
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({ user: userWithoutPassword })
  } catch (error) {
    console.error("Erreur d'authentification:", error)
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  }
}
