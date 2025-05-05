"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ProfileForm } from "@/components/profile/profile-form"
import { useAuth } from "@/lib/auth/auth-context"

export default function ProfilePage() {
  const router = useRouter()
  const { user, isLoading, isAuthenticated, logout } = useAuth()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isLoading, isAuthenticated, router])

  // Afficher un état de chargement pendant la vérification de l'authentification
  if (isLoading || !isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium">Chargement...</p>
        </div>
      </div>
    )
  }

  // Si l'utilisateur n'est pas authentifié, ne rien afficher (la redirection se fera via useEffect)
  if (!user) {
    return null
  }

  // Obtenir l'initiale du nom pour l'avatar
  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Mon Profil</h1>
        <Button variant="outline" onClick={() => router.push("/dashboard")}>
          Retour au tableau de bord
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarFallback className="text-2xl">{getInitials(user.name)}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-sm text-muted-foreground mt-1">{user.role || "Étudiant"}</p>
              </div>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button variant="destructive" onClick={logout}>
                Se déconnecter
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <ProfileForm user={user} />
        </div>
      </div>
    </div>
  )
}