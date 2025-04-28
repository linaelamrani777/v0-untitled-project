import { NextResponse } from "next/server"
import { modules } from "@/lib/db/modules"

export async function GET(request: Request) {
  try {
    // Récupérer les paramètres de requête
    const url = new URL(request.url)
    const search = url.searchParams.get("search") || ""

    // Filtrer les modules si un terme de recherche est fourni
    let filteredModules = modules

    if (search) {
      filteredModules = modules.filter(
        (module) =>
          module.title.toLowerCase().includes(search.toLowerCase()) ||
          module.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    return NextResponse.json(filteredModules)
  } catch (error) {
    console.error("Erreur lors de la récupération des modules:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // Cette fonction nécessiterait une authentification admin en production
    const moduleData = await request.json()

    // Validation simple
    if (!moduleData.title || !moduleData.description) {
      return NextResponse.json({ error: "Données de module incomplètes" }, { status: 400 })
    }

    // Générer un ID basé sur le titre
    const id = moduleData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    // Vérifier si l'ID existe déjà
    if (modules.some((m) => m.id === id)) {
      return NextResponse.json({ error: "Un module avec ce titre existe déjà" }, { status: 400 })
    }

    // Créer le nouveau module
    const newModule = {
      id,
      ...moduleData,
    }

    // Ajouter à la "base de données"
    modules.push(newModule)

    return NextResponse.json(newModule)
  } catch (error) {
    console.error("Erreur lors de la création du module:", error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
