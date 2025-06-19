"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { FileText, Download, Eye, BookOpen, Video, FileImage } from "lucide-react"

interface ModuleFile {
  name: string
  type: "pdf" | "doc" | "video" | "image"
  url: string
  size?: string
}

export default function ModuleDetailPage({ params }: { params: { id: string } }) {
  const [selectedFile, setSelectedFile] = useState<ModuleFile | null>(null)

  // Simuler une base de données de modules avec fichiers
  const modules = {
    algebre4: {
      title: "Algèbre 4",
      description: "Approfondissement des concepts algébriques avancés",
      professor: "Pr. MAZGOURI ZAKARIA",
      credits: 1,
      chapters: ["Anneaux, morphismes et idéaux", "Anneaux : principaux, noethériens, euclidiens et factoriels"],
      resources: [
        "Polycopié du cours",
        "Exercices",
        " Examen Normal avec correction",
        "Examen de Rattrapage avec correction",
      ],
      files: [
        { name: "Polycopié du cours", type: "pdf" as const, url: "/pdfs/algebre4/cours.pdf", size: "2.5 MB" },
        { name: "Exercices", type: "pdf" as const, url: "/pdfs/algebre4/exercices.pdf", size: "1.8 MB" },
        {
          name: "Examen Normal avec correction",
          type: "pdf" as const,
          url: "/pdfs/algebre4/examen-normal.pdf",
          size: "1.2 MB",
        },
        {
          name: "Examen de Rattrapage avec correction",
          type: "pdf" as const,
          url: "/pdfs/algebre4/examen-rattrapage.pdf",
          size: "1.1 MB",
        },
      ],
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
      files: [
        { name: "Polycopié du cours", type: "pdf" as const, url: "/pdfs/analyse4/cours.pdf", size: "3.2 MB" },
        { name: "Exercices corrigés", type: "pdf" as const, url: "/pdfs/analyse4/exercices.pdf", size: "2.1 MB" },
        { name: "Annales d'examens", type: "pdf" as const, url: "/pdfs/analyse4/annales.pdf", size: "1.9 MB" },
      ],
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
      files: [
        { name: "Supports de cours", type: "pdf" as const, url: "/pdfs/anglais3/cours.pdf", size: "1.5 MB" },
        { name: "Exercices d'écoute", type: "video" as const, url: "/videos/anglais3/listening.mp4", size: "45 MB" },
        { name: "Articles scientifiques", type: "pdf" as const, url: "/pdfs/anglais3/articles.pdf", size: "2.8 MB" },
      ],
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
      files: [
        { name: "Code de l'environnement", type: "pdf" as const, url: "/pdfs/droit/code.pdf", size: "4.2 MB" },
        { name: "Études de cas", type: "pdf" as const, url: "/pdfs/droit/etudes-cas.pdf", size: "2.3 MB" },
        { name: "Jurisprudence", type: "pdf" as const, url: "/pdfs/droit/jurisprudence.pdf", size: "3.1 MB" },
      ],
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
      files: [
        {
          name: "Polycopié du cours",
          type: "pdf" as const,
          url: "/pdfs/electronique-analogique/cours.pdf",
          size: "3.5 MB",
        },
        {
          name: "Travaux pratiques",
          type: "pdf" as const,
          url: "/pdfs/electronique-analogique/tp.pdf",
          size: "2.7 MB",
        },
        {
          name: "Simulations",
          type: "pdf" as const,
          url: "/pdfs/electronique-analogique/simulations.pdf",
          size: "1.9 MB",
        },
      ],
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
      files: [
        {
          name: "Polycopié du cours",
          type: "pdf" as const,
          url: "/pdfs/electronique-numerique/cours.pdf",
          size: "2.9 MB",
        },
        { name: "Travaux pratiques", type: "pdf" as const, url: "/pdfs/electronique-numerique/tp.pdf", size: "2.1 MB" },
        { name: "Projets", type: "pdf" as const, url: "/pdfs/electronique-numerique/projets.pdf", size: "1.8 MB" },
      ],
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
      files: [
        { name: "Manuel de cours", type: "pdf" as const, url: "/pdfs/espagnol/manuel.pdf", size: "2.2 MB" },
        { name: "Exercices d'écoute", type: "video" as const, url: "/videos/espagnol/listening.mp4", size: "38 MB" },
        { name: "Articles", type: "pdf" as const, url: "/pdfs/espagnol/articles.pdf", size: "1.6 MB" },
      ],
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
      files: [
        { name: "Polycopié du cours", type: "pdf" as const, url: "/pdfs/probabilites/cours.pdf", size: "3.1 MB" },
        { name: "Exercices corrigés", type: "pdf" as const, url: "/pdfs/probabilites/exercices.pdf", size: "2.4 MB" },
        { name: "Jeux de données", type: "pdf" as const, url: "/pdfs/probabilites/donnees.pdf", size: "1.3 MB" },
      ],
    },
    "structure-donnees-c": {
      title: "Structure des Données en C",
      description: "Implémentation et optimisation des structures de données",
      professor: "Pr. HRAOUI Said",
      credits: 1,
      chapters: ["Tableaux et listes chaînées", "Piles et files", "Arbres binaires", "Tables de hachage", "Graphes"],
      resources: ["Polycopié du cours", "Travaux pratiques", "Projets"],
      files: [
        { name: "Polycopié du cours", type: "pdf" as const, url: "/pdfs/structure-donnees/cours.pdf", size: "2.8 MB" },
        { name: "Travaux pratiques", type: "pdf" as const, url: "/pdfs/structure-donnees/tp.pdf", size: "2.2 MB" },
        { name: "Projets", type: "pdf" as const, url: "/pdfs/structure-donnees/projets.pdf", size: "1.7 MB" },
      ],
    },
    "systeme-exploitation": {
      title: "Système d'Exploitation",
      description: "Architecture et fonctionnement des systèmes d'exploitation",
      professor: "Pr. CHETIOUI Kaouthar",
      credits: 1,
      chapters: ["Processus et threads", "Ordonnancement", "Gestion de la mémoire", "Systèmes de fichiers", "Sécurité"],
      resources: ["Polycopié du cours", "Travaux pratiques", "Projets"],
      files: [
        {
          name: "Polycopié du cours",
          type: "pdf" as const,
          url: "/pdfs/systeme-exploitation/cours.pdf",
          size: "3.3 MB",
        },
        { name: "Travaux pratiques", type: "pdf" as const, url: "/pdfs/systeme-exploitation/tp.pdf", size: "2.6 MB" },
        { name: "Projets", type: "pdf" as const, url: "/pdfs/systeme-exploitation/projets.pdf", size: "1.9 MB" },
      ],
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

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "image":
        return <FileImage className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getFileColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "text-red-600"
      case "video":
        return "text-blue-600"
      case "image":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  const openFile = (file: ModuleFile) => {
    // Ouvrir le fichier dans un nouvel onglet
    window.open(file.url, "_blank")
  }

  const downloadFile = (file: ModuleFile) => {
    // Créer un lien de téléchargement
    const link = document.createElement("a")
    link.href = file.url
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{module.title}</h1>
          <p className="text-muted-foreground">{module.description}</p>
        </div>
        <Button asChild>
          <Link href="/dashboard">Retour au tableau de bord</Link>
        </Button>
      </div>

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

      {/* Section améliorée pour accéder aux cours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Accéder aux ressources du cours
          </CardTitle>
          <CardDescription>Consultez et téléchargez les documents du cours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {module.files?.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`${getFileColor(file.type)}`}>{getFileIcon(file.type)}</div>
                  <div>
                    <h4 className="font-medium">{file.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {file.type.toUpperCase()} • {file.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openFile(file)}
                    className="flex items-center gap-1"
                  >
                    <Eye className="h-4 w-4" />
                    Ouvrir
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadFile(file)}
                    className="flex items-center gap-1"
                  >
                    <Download className="h-4 w-4" />
                    Télécharger
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {(!module.files || module.files.length === 0) && (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Aucun fichier disponible pour ce module</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
