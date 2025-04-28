import { NextResponse } from "next/server"
import { users } from "@/lib/db/users"

let nextUserId = users.length + 1

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    // Vérifier si l'email existe déjà
    if (users.some((user) => user.email === email)) {
      return NextResponse.json({ error: "Cet email est déjà utilisé" }, { status: 400 })
    }

    // Créer un nouvel utilisateur
    const newUser = {
      id: nextUserId++,
      email,
      password, // En production, hachez le mot de passe
      name,
      role: "student",
      createdAt: new Date().toISOString(),
    }

    // Ajouter l'utilisateur à la "base de données"
    users.push(newUser)

    // Exclure le mot de passe de la réponse
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json({
      user: userWithoutPassword,
      message: "Inscription réussie",
    })
  } catch (error) {
    console.error("Erreur d'inscription:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
