import { NextResponse } from "next/server"
import { moduleMaterials } from "@/lib/db/materials"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const moduleId = params.id

    // Récupérer les matériaux pour ce module
    const materials = moduleMaterials[moduleId] || []

    return NextResponse.json(materials)
  } catch (error) {
    console.error(`Erreur lors de la récupération des matériaux pour le module ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const moduleId = params.id
    const materialData = await request.json()

    // Validation simple
    if (!materialData.title || !materialData.type) {
      return NextResponse.json({ error: "Données de matériel incomplètes" }, { status: 400 })
    }

    // Créer un nouvel ID pour le matériel
    const materialId = Date.now().toString()

    // Créer le nouveau matériel
    const newMaterial = {
      id: materialId,
      moduleId,
      ...materialData,
      createdAt: new Date().toISOString(),
    }

    // Initialiser le tableau de matériaux pour ce module si nécessaire
    if (!moduleMaterials[moduleId]) {
      moduleMaterials[moduleId] = []
    }

    // Ajouter à la "base de données"
    moduleMaterials[moduleId].push(newMaterial)

    return NextResponse.json(newMaterial)
  } catch (error) {
    console.error(`Erreur lors de l'ajout de matériel pour le module ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
