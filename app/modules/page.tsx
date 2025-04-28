import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ModulesPage() {
  const modules = [
    {
      id: "algebre4",
      title: "Algèbre 4",
      description: "Approfondissement des concepts algébriques avancés",
    },
    {
      id: "analyse4",
      title: "Analyse 4",
      description: "Étude des fonctions complexes et équations différentielles",
    },
    {
      id: "anglais3",
      title: "Anglais 3",
      description: "Communication professionnelle et technique en anglais",
    },
    {
      id: "droit-environnement",
      title: "Droit Environnement",
      description: "Législation et réglementation environnementale",
    },
    {
      id: "electronique-analogique",
      title: "Electronique Analogique",
      description: "Conception et analyse de circuits analogiques",
    },
    {
      id: "electronique-numerique",
      title: "Electronique Numérique",
      description: "Systèmes numériques et conception logique",
    },
    {
      id: "espagnol",
      title: "Espagnol",
      description: "Compétences linguistiques et culturelles en espagnol",
    },
    {
      id: "probabilites-statistique",
      title: "Probabilités et Statistique",
      description: "Analyse de données et modèles probabilistes",
    },
    {
      id: "structure-donnees-c",
      title: "Structure des Données en C",
      description: "Implémentation et optimisation des structures de données",
    },
    {
      id: "systeme-exploitation",
      title: "Système d'Exploitation",
      description: "Architecture et fonctionnement des systèmes d'exploitation",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Modules de Cours</h1>
        <p className="text-muted-foreground">Explorez les modules disponibles</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Link key={module.id} href={`/modules/${module.id}`}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">Cliquez pour voir les détails du module</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
