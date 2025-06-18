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
      description: " l’étude des séries et transformées de Fourier ainsi que des fonctions complexes, pour analyser et résoudre des problèmes liés aux signaux et équations différentielles.",
    },
    {
      id: "anglais3",
      title: "Anglais 3",
      description: "Communication professionnelle et technique en anglais",
    },
    {
      id: "droit-environnement",
      title: "Droit Environnement",
      description: "Droit de l’environnement est l’étude des règles juridiques visant à protéger la nature, encadrer les activités humaines et préserver les ressources naturelles pour les générations futures.",
    },
    {
      id: "electronique-analogique",
      title: "Electronique Analogique",
      description: "L’électronique analogique concerne les circuits qui utilisent des signaux électriques continus pour transmettre et traiter des informations avec des valeurs variables.",
    },
    {
      id: "electronique-numerique",
      title: "Electronique Numérique",
      description: "L’électronique numérique étudie et conçoit des circuits qui traitent des signaux à deux niveaux (0 et 1) pour manipuler et stocker des informations binaires.",
    },
    {
      id: "espagnol",
      title: "Espagnol",
      description: "Espagnol  est l’apprentissage des bases pour communiquer à l’oral et à l’écrit dans des situations simples de la vie quotidienne.",
    },
    {
      id: "probabilites-statistique",
      title: "Probabilités et Statistique",
      description: "Analyse de données et modèles probabilistes",
    },
    {
      id: "structure-donnees-c",
      title: "Structure des Données en C",
      description: "Structures en C est l’apprentissage de la définition et l’utilisation de types de données personnalisés pour organiser et manipuler des informations complexes en langage C",
    },
    {
      id: "systeme-exploitation",
      title: "Système d'Exploitation",
      description: "Systèmes d’exploitation (Linux) est une introduction au rôle et au fonctionnement d’un système comme Linux, utilisé pour contrôler, organiser et exécuter les opérations d’un ordinateur.",
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
