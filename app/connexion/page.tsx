import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ConnexionPage() {
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
        <CardHeader>
          <CardTitle className="text-2xl">Bienvenue</CardTitle>
          <CardDescription>Entrez vos identifiants pour accéder à votre compte</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="nom.prenom@exemple.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" />
          </div>
          <div className="text-right text-sm">
            <Link href="/mot-de-passe-oublie" className="text-blue-600 hover:underline">
              Mot de passe oublié?
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-primary" asChild>
            <Link href="/tableau-de-bord">Se connecter</Link>
          </Button>
          <div className="text-center text-sm">
            Vous n'avez pas de compte?{" "}
            <Link href="/inscription" className="text-blue-600 hover:underline">
              Créer un compte
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
