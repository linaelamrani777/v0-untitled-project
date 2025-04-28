"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useAuth } from "@/lib/auth/auth-context"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  // Afficher un écran de chargement pendant la vérification de l'authentification
  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-60px)] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Chargement...</p>
        </div>
      </div>
    )
  }

  // Si l'utilisateur n'est pas connecté, ne rien afficher (la redirection se fera via useEffect)
  if (!user) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de Bord</h1>
          <p className="text-muted-foreground">Bienvenue, {user.name}! Voici votre aperçu d'études.</p>
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
            <div className="text-2xl font-bold">0 heures</div>
            <p className="text-xs text-muted-foreground">Commencez à étudier</p>
            <div className="mt-2 h-2 w-full rounded-full bg-primary/20">
              <div className="h-full w-[0%] rounded-full bg-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Modules inscrits</CardTitle>
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
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">Modules disponibles</p>
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
            <div className="text-2xl font-bold">0/0</div>
            <p className="text-xs text-muted-foreground">Aucune tâche pour le moment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Échéances</CardTitle>
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
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Aucune échéance à venir</p>
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
                  <Link href="/modules/algebre4" className="rounded-lg border p-3 hover:bg-muted/50">
                    <div className="font-medium">Algèbre 4</div>
                    <p className="text-sm text-muted-foreground">Concepts algébriques avancés</p>
                  </Link>
                  <Link href="/modules/analyse4" className="rounded-lg border p-3 hover:bg-muted/50">
                    <div className="font-medium">Analyse 4</div>
                    <p className="text-sm text-muted-foreground">Fonctions complexes et équations différentielles</p>
                  </Link>
                  <Link href="/modules/anglais3" className="rounded-lg border p-3 hover:bg-muted/50">
                    <div className="font-medium">Anglais 3</div>
                    <p className="text-sm text-muted-foreground">Communication professionnelle en anglais</p>
                  </Link>
                  <Link href="/modules/droit-environnement" className="rounded-lg border p-3 hover:bg-muted/50">
                    <div className="font-medium">Droit Environnement</div>
                    <p className="text-sm text-muted-foreground">Législation environnementale</p>
                  </Link>
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
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Algèbre 4</div>
                    <div className="text-sm text-muted-foreground">0%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[0%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Analyse 4</div>
                    <div className="text-sm text-muted-foreground">0%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[0%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
