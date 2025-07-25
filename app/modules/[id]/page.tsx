import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ModuleDetailPage({ params }: { params: { id: string } }) {
  // Simuler une base de données de modules
  const modules = {
    algebre4: {
      title: "Algèbre 4",
      description: "Approfondissement des concepts algébriques avancés",
      professor: "Pr. MAZGOURI ZAKARIA",
      credits: 1,
      chapters: [
        "Anneaux, morphismes et idéaux",
        "Anneaux : principaux, noethériens, euclidiens et factoriels",
      ],
      resources: ["Polycopié du cours", "Exercices", "Examen Normal avec correction", "Examen de Rattrapage avec correction"],
    },
    analyse4: {
      title: "Analyse 4",
      description: "Étude des fonctions complexes et équations différentielles",
      professor: "Pr. JERROUDI AMINE",
      credits: 1,
      chapters: [
        "Fonctions holomorphes",
        "Intégrales de contour",
        "Séries de Laurent",
        "Théorème des résidus",
        "Équations différentielles complexes",
      ],
      resources: ["Polycopié du cours", "Exercices corrigés", "Annales d'examens"],
    },
    anglais3: {
      title: "Anglais 3",
      description: "Communication professionnelle et technique en anglais",
      professor: "Pr. DAHBI MANAR",
      credits: 1,
      chapters: [
        "Rédaction technique",
        "Présentation orale",
        "Vocabulaire scientifique",
        "Compréhension de documents techniques",
        "Communication professionnelle",
      ],
      resources: ["Supports de cours", "Exercices d'écoute", "Articles scientifiques"],
    },
    "droit-environnement": {
      title: "Droit Environnement",
      description: "Législation et réglementation environnementale",
      professor: "Pr. LAHRECH Khadija",
      credits: 1,
      chapters: [
        "Principes fondamentaux du droit de l'environnement",
        "Réglementation des installations classées",
        "Droit de l'eau",
        "Gestion des déchets",
        "Responsabilité environnementale",
      ],
      resources: ["Code de l'environnement", "Études de cas", "Jurisprudence"],
    },
    "electronique-analogique": {
      title: "Electronique Analogique",
      description: "Conception et analyse de circuits analogiques",
      professor: "Pr. MAZER Said",
      credits: 1,
      chapters: [
        "Amplificateurs opérationnels",
        "Filtres analogiques",
        "Oscillateurs",
        "Convertisseurs A/N et N/A",
        "Circuits non-linéaires",
      ],
      resources: ["Polycopié du cours", "Travaux pratiques", "Simulations"],
    },
    "electronique-numerique": {
      title: "Electronique Numérique",
      description: "Systèmes numériques et conception logique",
      professor: "Pr. MRABTI Mostafa",
      credits: 1,
      chapters: [
        "Systèmes combinatoires",
        "Systèmes séquentiels",
        "Architectures FPGA",
        "Langages de description matérielle",
        "Conception de systèmes numériques",
      ],
      resources: ["Polycopié du cours", "Travaux pratiques", "Projets"],
    },
    espagnol: {
      title: "Espagnol",
      description: "Compétences linguistiques et culturelles en espagnol",
      professor: "Pr. KHALID NEJJARI",
      credits: 1,
      chapters: [
        "Grammaire avancée",
        "Conversation professionnelle",
        "Culture hispanique",
        "Compréhension écrite et orale",
        "Rédaction technique",
      ],
      resources: ["Manuel de cours", "Exercices d'écoute", "Articles"],
    },
    "probabilites-statistique": {
      title: "Probabilités et Statistique",
      description: "Analyse de données et modèles probabilistes",
      professor: "Pr. OUGHDIR LAHCEN",
      credits: 1,
      chapters: [
        "Probabilités conditionnelles",
        "Variables aléatoires",
        "Lois de probabilité",
        "Statistique inférentielle",
        "Tests d'hypothèses",
      ],
      resources: ["Polycopié du cours", "Exercices corrigés", "Jeux de données"],
    },
    "structure-donnees-c": {
      title: "Structure des Données en C",
      description: "Implémentation et optimisation des structures de données",
      professor: "Pr. HRAOUI Said",
      credits: 1,
      chapters: ["Tableaux et listes chaînées", "Piles et files", "Arbres binaires", "Tables de hachage", "Graphes"],
      resources: ["Polycopié du cours", "Travaux pratiques", "Projets"],
    },
    "systeme-exploitation": {
      title: "Système d'Exploitation",
      description: "Architecture et fonctionnement des systèmes d'exploitation",
      professor: "Pr. CHETIOUI Kaouthar",
      credits: 1,
      chapters: ["Processus et threads", "Ordonnancement", "Gestion de la mémoire", "Systèmes de fichiers", "Sécurité"],
      resources: ["Polycopié du cours", "Travaux pratiques", "Projets"],
    },
  }

  const module = modules[params.id as keyof typeof modules]

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-2xl font-bold mb-4">Module non trouvé</h1>
        <p className="text-muted-foreground mb-6">Le module que vous recherchez n'existe pas.</p>
        <Button asChild>
          <Link href="/modules">Retour aux modules</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{module.title}</h1>
          <p className="text-muted-foreground">{module.description}</p>
        </div>
        <Button asChild>
          <Link href="/dashboard">Retour au tableau de bord</Link>
        </Button>
      </div>

      {/* Infos et contenu */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Informations</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Professeur</dt>
                <dd>{module.professor}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Crédits</dt>
                <dd>{module.credits} ECTS</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Contenu du module</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chapitres">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="chapitres">Chapitres</TabsTrigger>
                <TabsTrigger value="ressources">Ressources</TabsTrigger>
              </TabsList>
              <TabsContent value="chapitres" className="space-y-4 pt-4">
                <ul className="space-y-2">
                  {module.chapters.map((chapter, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {index + 1}
                      </div>
                      <span>{chapter}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="ressources" className="space-y-4 pt-4">
                <ul className="space-y-2">
                  {module.resources.map((resource, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Actions rapides */}
      <Card>
        <CardHeader>
          <CardTitle>Commencer à étudier</CardTitle>
          <CardDescription>Accédez aux ressources et commencez votre apprentissage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Button asChild className="w-full">
              <a href={`/cours/${params.id}`} target="_blank" rel="noopener noreferrer">
                Accéder au cours
              </a>
            </Button>

            {module.resources.map((resource, index) => (
              <Button key={index} variant="outline" asChild className="w-full">
                <a href={`/pdf/${params.id}-${index + 1}.pdf`} download>
                  Télécharger : {resource}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}