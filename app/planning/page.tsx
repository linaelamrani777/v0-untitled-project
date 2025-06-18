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
          <h1 className="text-3xl font-bold tracking-tight">Planning des examens</h1>
          <p className="text-muted-foreground">Consultez votre emploi </p>
        </div>
        <Button asChild>
          <Link href="/dashboard">Retour au tableau de bord</Link>
        </Button>
      </div>

      {/* Image du planning */}
      <Card>
        <CardHeader>
          <CardTitle>Emploi du temps</CardTitle>
          <CardDescription>Votre planning de la semaine des examens</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <Image
              src="/planning.jpg"
              alt="Planning des examens"
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
            <p className="text-sm text-muted-foreground">Lundi 9h00 - 11h00</p>
            <p className="text-sm text-muted-foreground">0.5, 1.1, 1.4,1.5, AMPHI </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Analyse 4</CardTitle>
            <CardDescription>Pr. JERROUDI AMINE</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Jeudi 14H30-16H30 0</p>
            <p className="text-sm text-muted-foreground">0.5, 1.1, 1.4,1.5, AMPHI</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Système d'exploitation</CardTitle>
            <CardDescription>Pr. CHETIOUI Kaouthar</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Mardi 16H45-18H45</p>
            <p className="text-sm text-muted-foreground">0.5, 1.1, 1.4,1.5, AMPHI</p>
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
        </CardContent>
      </Card>
    </div>
  )
}