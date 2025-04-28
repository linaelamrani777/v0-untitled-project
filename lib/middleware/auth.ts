import { type NextRequest, NextResponse } from "next/server"
import { verify } from "jsonwebtoken"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

// Middleware d'authentification pour les routes API
export async function authMiddleware(request: NextRequest) {
  try {
    // Récupérer le token d'autorisation
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]

    // Vérifier le token
    const decoded = verify(token, JWT_SECRET)

    // Si tout est bon, continuer
    return NextResponse.next()
  } catch (error) {
    console.error("Erreur d'authentification:", error)
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  }
}

// Middleware d'authentification admin
export async function adminMiddleware(request: NextRequest) {
  try {
    // Récupérer le token d'autorisation
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]

    // Vérifier le token
    const decoded = verify(token, JWT_SECRET) as { role: string }

    // Vérifier si l'utilisateur est admin
    if (decoded.role !== "admin") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 })
    }

    // Si tout est bon, continuer
    return NextResponse.next()
  } catch (error) {
    console.error("Erreur d'authentification admin:", error)
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  }
}
