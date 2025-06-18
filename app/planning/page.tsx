"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function PlanningPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Planning des cours</h1>
          <p className="text-muted-foreground">Consultez votre emploi du temps hebdomadaire</p>
        </div>
        <Button asChild>
          <Link href="/dashboard">Retour au tableau de bord</Link>
        </Button>
      </div>

      {/* Image du planning */}
      <Card>
        <CardHeader>
          <CardTitle>Emploi du temps</CardTitle>
          <CardDescription>Votre planning de la semaine</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <Image
              src="/planning.jpg"
              alt="Planning des cours"
              width={800}
              height={600}
              className="rounded-lg border shadow-sm max-w-full h-auto"
              priority
            />
          </div>
        </CardContent>
      </Card>

      {/* Modules de la semaine */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Algèbre 4</CardTitle>
            <CardDescription>Pr. Mezgouri Zakaria</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Lundi 8h00 - 10h00</p>
            <p className="text-sm text-muted-foreground">Amphithéâtre A</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Analyse 4</CardTitle>
            <CardDescription>Dr. Marie Dubois</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Mardi 10h00 - 12h00</p>
            <p className="text-sm text-muted-foreground">Salle 201</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Système d'exploitation</CardTitle>
            <CardDescription>Prof. Jean Laurent</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Mercredi 14h00 - 16h00</p>
            <p className="text-sm text-muted-foreground">Lab Informatique</p>
          </CardContent>
        </Card>
      </div>

      {/* Actions rapides */}
      <Card>
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/modules">Voir tous les modules</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard">Tableau de bord</Link>
          </Button>
          <Button variant="outline">Télécharger le planning</Button>
        </CardContent>
      </Card>
    </div>
  )
}