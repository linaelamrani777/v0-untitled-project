import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
import { users } from "@/lib/db/users"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const userId = Number.parseInt(params.id)

    // Authentification
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verify(token, JWT_SECRET) as { id: number; role: string }

    // Vérifier si l'utilisateur est autorisé (admin ou lui-même)
    if (decoded.role !== "admin" && decoded.id !== userId) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 })
    }

    // Trouver l'utilisateur
    const user = users.find((u) => u.id === userId)

    if (!user) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 })
    }

    // Exclure le mot de passe
    const { password, ...userWithoutPassword } = user

    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'utilisateur ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const userId = Number.parseInt(params.id)

    // Authentification
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const decoded = verify(token, JWT_SECRET) as { id: number; role: string }

    // Vérifier si l'utilisateur est autorisé (admin ou lui-même)
    if (decoded.role !== "admin" && decoded.id !== userId) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 })
    }

    // Trouver l'utilisateur
    const userIndex = users.findIndex((u) => u.id === userId)

    if (userIndex === -1) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 })
    }

    // Récupérer les données de mise à jour
    const updateData = await request.json()

    // Empêcher la mise à jour du rôle sauf pour les admins
    if (updateData.role && decoded.role !== "admin") {
      delete updateData.role
    }

    // Mettre à jour l'utilisateur
    users[userIndex] = {
      ...users[userIndex],
      ...updateData,
    }

    // Exclure le mot de passe
    const { password, ...userWithoutPassword } = users[userIndex]

    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'utilisateur ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const userId = Number.parseInt(params.id)

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

    // Trouver l'utilisateur
    const userIndex = users.findIndex((u) => u.id === userId)

    if (userIndex === -1) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 })
    }

    // Supprimer l'utilisateur
    const deletedUser = users.splice(userIndex, 1)[0]

    // Exclure le mot de passe
    const { password, ...userWithoutPassword } = deletedUser

    return NextResponse.json({
      message: "Utilisateur supprimé avec succès",
      user: userWithoutPassword,
    })
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'utilisateur ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
