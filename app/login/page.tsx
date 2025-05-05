"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useAuth } from "@/lib/auth/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const { login, user, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()

  // Vérifier si l'utilisateur vient de s'inscrire
  useEffect(() => {
    const registered = searchParams.get("registered")
    if (registered === "true") {
      setSuccessMessage("Inscription réussie ! Vous pouvez maintenant vous connecter.")
    }
  }, [searchParams])

  // Rediriger si déjà connecté
  useEffect(() => {
    if (user && !authLoading) {
      router.push("/dashboard")
    }
  }, [user, authLoading, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccessMessage("")
    setIsLoading(true)

    try {
      // Validation simple
      if (!email || !password) {
        setError("Veuillez remplir tous les champs.")
        setIsLoading(false)
        return
      }

      const result = await login(email, password)

      if (result.success) {
        router.push("/dashboard")
      } else {
        setError(result.message || "Une erreur est survenue lors de la connexion. Veuillez réessayer.")
      }
    } catch (err: any) {
      setError(err?.message || "Une erreur est survenue. Veuillez réessayer.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // Afficher un écran de chargement pendant la vérification de l'authentification
  if (authLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Chargement...</p>
        </div>
      </div>
    )
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
            <CardTitle className="text-2xl">Connexion</CardTitle>
            <CardDescription>Entrez n'importe quels identifiants pour vous connecter</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {successMessage && (
              <Alert className="border-green-200 bg-green-50 text-green-800">
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nom.prenom@exemple.com"
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
            <div className="text-sm text-muted-foreground">
              <p>Vous pouvez utiliser n'importe quels identifiants pour vous connecter.</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-primary" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Connexion en cours...
                </>
              ) : (
                "Se connecter"
              )}
            </Button>
            <div className="text-center text-sm">
              Vous n'avez pas de compte?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                S'inscrire
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}