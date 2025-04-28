import { NextResponse } from "next/server"
import { modules, moduleDetails } from "@/lib/db/modules"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Vérifier si le module existe
    const module = modules.find((m) => m.id === id)

    if (!module) {
      return NextResponse.json({ error: "Module non trouvé" }, { status: 404 })
    }

    // Récupérer les détails du module
    const details = moduleDetails[id as keyof typeof moduleDetails] || {}

    // Combiner les informations de base et les détails
    const fullModule = {
      ...module,
      ...details,
    }

    return NextResponse.json(fullModule)
  } catch (error) {
    console.error(`Erreur lors de la récupération du module ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const updateData = await request.json()

    // Vérifier si le module existe
    const moduleIndex = modules.findIndex((m) => m.id === id)

    if (moduleIndex === -1) {
      return NextResponse.json({ error: "Module non trouvé" }, { status: 404 })
    }

    // Mettre à jour le module
    modules[moduleIndex] = {
      ...modules[moduleIndex],
      ...updateData,
    }

    // Mettre à jour les détails si nécessaire
    if (id in moduleDetails) {
      moduleDetails[id as keyof typeof moduleDetails] = {
        ...moduleDetails[id as keyof typeof moduleDetails],
        ...updateData,
      }
    }

    return NextResponse.json(modules[moduleIndex])
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du module ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Vérifier si le module existe
    const moduleIndex = modules.findIndex((m) => m.id === id)

    if (moduleIndex === -1) {
      return NextResponse.json({ error: "Module non trouvé" }, { status: 404 })
    }

    // Supprimer le module
    const deletedModule = modules.splice(moduleIndex, 1)[0]

    // Supprimer les détails si nécessaire
    if (id in moduleDetails) {
      delete moduleDetails[id as keyof typeof moduleDetails]
    }

    return NextResponse.json({ message: "Module supprimé avec succès", module: deletedModule })
  } catch (error) {
    console.error(`Erreur lors de la suppression du module ${params.id}:`, error)
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 })
  }
}
