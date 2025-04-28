import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TableauDeBordPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de Bord</h1>
          <p className="text-muted-foreground">Bienvenue, Jean! Voici votre aperçu d'études.</p>
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
            24 Mai 2024
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temps d'étude aujourd'hui</CardTitle>
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
            <div className="text-2xl font-bold">1,5 heures</div>
            <p className="text-xs text-muted-foreground">75% de l'objectif quotidien</p>
            <div className="mt-2 h-2 w-full rounded-full bg-primary/20">
              <div className="h-full w-[75%] rounded-full bg-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progrès hebdomadaire</CardTitle>
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
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,5 heures</div>
            <p className="text-xs text-muted-foreground">85% de l'objectif hebdomadaire</p>
            <div className="mt-2 h-2 w-full rounded-full bg-purple-100">
              <div className="h-full w-[85%] rounded-full bg-purple-500"></div>
            </div>
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
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/15</div>
            <p className="text-xs text-muted-foreground">80% taux d'achèvement</p>
            <div className="mt-2 h-2 w-full rounded-full bg-green-100">
              <div className="h-full w-[80%] rounded-full bg-green-500"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Échéances à venir</CardTitle>
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
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Prochain: Devoir d'Algèbre (2 jours)</p>
            <div className="mt-2 h-2 w-full rounded-full bg-orange-100">
              <div className="h-full w-[66%] rounded-full bg-orange-500"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="planning">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="planning">Planning du jour</TabsTrigger>
          <TabsTrigger value="recommandations">Recommandations</TabsTrigger>
          <TabsTrigger value="progres">Progrès par matière</TabsTrigger>
        </TabsList>
        <TabsContent value="planning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Planning d'étude du jour</CardTitle>
              <CardDescription>Votre plan d'étude personnalisé pour aujourd'hui</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary p-2">
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
                        className="h-5 w-5 text-white"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Algèbre 4</h3>
                      <p className="text-sm text-muted-foreground">Révision du chapitre 5</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">9:00 - 10:30</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-purple-500 p-2">
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
                        className="h-5 w-5 text-white"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Structure des Données en C</h3>
                      <p className="text-sm text-muted-foreground">Compléter le TP de programmation</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">11:00 - 12:30</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-pink-500 p-2">
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
                        className="h-5 w-5 text-white"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Electronique Analogique</h3>
                      <p className="text-sm text-muted-foreground">Lire le chapitre 7 sur les amplificateurs</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">14:00 - 15:30</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recommandations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supports d'étude recommandés</CardTitle>
              <CardDescription>Basés sur votre progression et vos échéances à venir</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-amber-100 p-2">
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
                        className="h-5 w-5 text-amber-600"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Algèbre 4</h3>
                      <p className="text-sm text-muted-foreground">Exercices pour l'examen à venir</p>
                    </div>
                  </div>
                  <Button size="sm">Voir</Button>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-red-100 p-2">
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
                        className="h-5 w-5 text-red-600"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Structure des Données en C</h3>
                      <p className="text-sm text-muted-foreground">Tutoriel vidéo sur les arbres binaires</p>
                    </div>
                  </div>
                  <Button size="sm">Voir</Button>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2">
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
                        className="h-5 w-5 text-blue-600"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Electronique Numérique</h3>
                      <p className="text-sm text-muted-foreground">Simulation interactive sur les circuits logiques</p>
                    </div>
                  </div>
                  <Button size="sm">Voir</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="progres" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Progrès par matière</CardTitle>
              <CardDescription>Votre progression dans les différentes matières</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Algèbre 4</div>
                    <div className="text-sm text-muted-foreground">75%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[75%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Structure des Données en C</div>
                    <div className="text-sm text-muted-foreground">90%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[90%] rounded-full bg-purple-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Electronique Analogique</div>
                    <div className="text-sm text-muted-foreground">60%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[60%] rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Probabilités et Statistique</div>
                    <div className="text-sm text-muted-foreground">45%</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[45%] rounded-full bg-orange-500"></div>
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
