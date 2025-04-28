import { NextResponse } from "next/server"

// Simulation d'une base de données d'utilisateurs
const users = [
  {
    id: 1,
    email: "jean.dupont@exemple.com",
    password: "motdepasse123", // En production, utilisez des mots de passe hachés
    name: "Jean Dupont",
    role: "student",
  },
]

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Vérifier les identifiants
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 })
    }

    // En production, utilisez un JWT ou une session sécurisée
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
      message: "Connexion réussie",
    })
  } catch (error) {
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
