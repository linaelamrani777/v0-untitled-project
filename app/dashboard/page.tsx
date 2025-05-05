"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useAuth } from "@/lib/auth/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import StudyQuestionnaire from "@/components/questionnaire/study-questionnaire"
import { StudyScheduleDisplay } from "@/components/dashboard/study-schedule"
import { StudyChecklistDisplay } from "@/components/dashboard/study-checklist"
import type { StudyPreferences } from "@/components/questionnaire/study-questionnaire"

export default function DashboardPage() {
  const {
    user,
    isLoading,
    isAuthenticated,
    studySchedule,
    studyChecklist,
    saveStudyPreferences,
    updateScheduleBlock,
    updateChecklistTask,
  } = useAuth()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [isSubmittingQuestionnaire, setIsSubmittingQuestionnaire] = useState(false)

  // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/login")
      } else {
        setIsPageLoading(false)
      }
    }
  }, [isAuthenticated, isLoading, router])

  // Simuler le chargement des données du tableau de bord
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // Simuler un appel API
        await new Promise((resolve) => setTimeout(resolve, 500))
        // Si nous avions un vrai backend, nous ferions un appel API ici
      } catch (err) {
        setError("Impossible de charger les données du tableau de bord. Veuillez réessayer.")
        console.error("Erreur lors du chargement des données du tableau de bord:", err)
      } finally {
        setIsPageLoading(false)
      }
    }

    if (isAuthenticated && !isLoading) {
      loadDashboardData()
    }
  }, [isAuthenticated, isLoading])

  // Gérer la soumission du questionnaire
  const handleQuestionnaireComplete = async (preferences: StudyPreferences) => {
    try {
      setIsSubmittingQuestionnaire(true)
      // Simuler un délai de traitement
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Sauvegarder les préférences et générer le planning
      saveStudyPreferences(preferences)
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des préférences:", error)
      setError("Une erreur est survenue lors de la sauvegarde de vos préférences.")
    } finally {
      setIsSubmittingQuestionnaire(false)
    }
  }

  // Afficher un écran de chargement pendant la vérification de l'authentification
  if (isLoading || isPageLoading) {
    return (
      <div className="flex h-[calc(100vh-60px)] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Chargement du tableau de bord...</p>
        </div>
      </div>
    )
  }

  // Si l'utilisateur n'est pas connecté, ne rien afficher (la redirection se fera via useEffect)
  if (!user) {
    return null
  }

  // Si l'utilisateur n'a pas encore complété le questionnaire, afficher le questionnaire
  if (!user.hasCompletedQuestionnaire) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Bienvenue sur StudyMate</h1>
            <p className="text-muted-foreground">
              Commençons par personnaliser votre expérience d'apprentissage, {user.name}!
            </p>
          </div>
        </div>

        <div className="mt-8">
          <StudyQuestionnaire onComplete={handleQuestionnaireComplete} isLoading={isSubmittingQuestionnaire} />
        </div>
      </div>
    )
  }

  // Afficher le tableau de bord avec le planning personnalisé
  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de Bord</h1>
          <p className="text-muted-foreground">Bienvenue, {user.name}! Voici votre planning personnalisé.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
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
              className="mr-2 h-4 w-4"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {new Date().toLocaleDateString("fr-FR")}
          </Button>
        </div>
      </div>

      {/* Afficher le planning et la liste de vérification */}
      <div className="grid gap-6 md:grid-cols-2">
        {studySchedule && <StudyScheduleDisplay schedule={studySchedule} onBlockComplete={updateScheduleBlock} />}

        {studyChecklist && <StudyChecklistDisplay checklist={studyChecklist} onTaskComplete={updateChecklistTask} />}
      </div>

      {/* Statistiques */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temps d'étude</CardTitle>
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
              className="h-4 w-4 text-primary"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {studySchedule ? `${studySchedule.weeklyHours} heures` : "0 heures"}
            </div>
            <p className="text-xs text-muted-foreground">Planifiées cette semaine</p>
            <div className="mt-2 h-2 w-full rounded-full bg-primary/20">
              <div className="h-full w-[25%] rounded-full bg-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Matières</CardTitle>
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
              className="h-4 w-4 text-purple-500"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.studyPreferences?.subjects.length || 0}</div>
            <p className="text-xs text-muted-foreground">Matières à étudier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tâches terminées</CardTitle>
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
              className="h-4 w-4 text-green-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {studyChecklist
                ? `${studyChecklist.filter((task) => task.completed).length}/${studyChecklist.length}`
                : "0/0"}
            </div>
            <p className="text-xs text-muted-foreground">
              {studyChecklist && studyChecklist.length > 0
                ? `${Math.round((studyChecklist.filter((task) => task.completed).length / studyChecklist.length) * 100)}% complété`
                : "Aucune tâche pour le moment"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Style d'apprentissage</CardTitle>
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
              className="h-4 w-4 text-orange-500"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold capitalize">
              {user.studyPreferences?.studyStyle === "visual" && "Visuel"}
              {user.studyPreferences?.studyStyle === "auditory" && "Auditif"}
              {user.studyPreferences?.studyStyle === "reading" && "Lecture/Écriture"}
              {user.studyPreferences?.studyStyle === "kinesthetic" && "Kinesthésique"}
            </div>
            <p className="text-xs text-muted-foreground">Votre style d'apprentissage préféré</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="modules">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="modules">Mes Modules</TabsTrigger>
          <TabsTrigger value="progres">Progrès</TabsTrigger>
        </TabsList>
        <TabsContent value="modules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Modules de cours</CardTitle>
              <CardDescription>Liste des modules disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {user.studyPreferences?.subjects.map((subject: string) => (
                    <Link
                      key={subject}
                      href={`/modules/${subject.toLowerCase().replace(/\s+/g, "-")}`}
                      className="rounded-lg border p-3 hover:bg-muted/50"
                    >
                      <div className="font-medium">{subject}</div>
                      <p className="text-sm text-muted-foreground">Cliquez pour voir les détails du module</p>
                    </Link>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button asChild variant="outline">
                    <Link href="/modules">Voir tous les modules</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="progres" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Progrès par module</CardTitle>
              <CardDescription>Votre progression dans les différents modules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.studyPreferences?.subjects.map((subject: string, index: number) => {
                  // Simuler un pourcentage de progression aléatoire pour chaque matière
                  const progress = Math.floor(Math.random() * 100)
                  return (
                    <div key={subject} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{subject}</div>
                        <div className="text-sm text-muted-foreground">{progress}%</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  )
                })}

                {(!user.studyPreferences?.subjects || user.studyPreferences.subjects.length === 0) && (
                  <p className="text-muted-foreground">Aucune matière sélectionnée.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
