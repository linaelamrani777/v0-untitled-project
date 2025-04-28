"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/lib/auth/auth-context"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  // Rediriger si déjà connecté
  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs.")
      return
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }

    setIsLoading(true)

    try {
      // Pour les besoins de démonstration, nous allons simuler une inscription réussie
      // et rediriger vers la page de connexion

      // Dans une application réelle, nous ferions un appel API ici
      // const response = await fetch("/api/auth/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ name, email, password }),
      // })

      // Simuler un délai pour l'inscription
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Rediriger vers la page de connexion avec un paramètre de succès
      router.push("/login?registered=true")
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="rounded-md bg-primary p-2 text-white">
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
            className="h-5 w-5"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <span className="text-xl font-bold">StudyMate</span>
      </Link>
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="text-2xl">Créer un compte</CardTitle>
            <CardDescription>Entrez vos informations pour créer votre compte StudyMate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input
                id="name"
                placeholder="Jean Dupont"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="jean.dupont@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-primary" type="submit" disabled={isLoading}>
              {isLoading ? "Inscription en cours..." : "Créer un compte"}
            </Button>
            <div className="text-center text-sm">
              Vous avez déjà un compte?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Se connecter
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
