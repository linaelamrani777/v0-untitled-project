import { NextResponse } from "next/server"
import { users } from "@/lib/db/users"
import { sign } from "jsonwebtoken"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Vérifier les identifiants
    const user = users.find((u) => u.email === email)

    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 })
    }

    // Créer un token JWT
    const token = sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "7d" },
    )

    // Exclure le mot de passe de la réponse
    const { password: _, ...userWithoutPassword } = user

    // En production, définissez le cookie avec httpOnly, secure, etc.
    return NextResponse.json({
      user: userWithoutPassword,
      token,
      message: "Connexion réussie",
    })
  } catch (error) {
    console.error("Erreur de connexion:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
