import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
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
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Connexion</Link>
            </Button>
            <Button className="bg-primary" asChild>
              <Link href="/dashboard">Tableau de bord</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Plteforme Éducative pour Étudiants
                </h1>
                <p className="text-lg text-gray-600">
                  Guides d'étude personnalisés, chatbot IA et intégration de bibliothèque pour améliorer votre
                  expérience d'apprentissage.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="bg-primary" asChild>
                    <Link href="/dashboard">Commencer</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg bg-white shadow-xl">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Aperçu de la plateforme"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="modules" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">Nos Modules de Cours</h2>
              <p className="mt-4 text-gray-600">Explorez nos modules d'enseignement spécialisés</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Algèbre 4</h3>
                <p className="text-sm text-gray-600">Approfondissement des concepts algébriques avancés</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Analyse 4</h3>
                <p className="text-sm text-gray-600">Étude des fonctions complexes et équations différentielles</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Anglais 3</h3>
                <p className="text-sm text-gray-600">Communication professionnelle et technique en anglais</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Droit Environnement</h3>
                <p className="text-sm text-gray-600">Législation et réglementation environnementale</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Electronique Analogique</h3>
                <p className="text-sm text-gray-600">Conception et analyse de circuits analogiques</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Electronique Numérique</h3>
                <p className="text-sm text-gray-600">Systèmes numériques et conception logique</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Espagnol</h3>
                <p className="text-sm text-gray-600">Compétences linguistiques et culturelles en espagnol</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Probabilités et Statistique</h3>
                <p className="text-sm text-gray-600">Analyse de données et modèles probabilistes</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Structure des Données en C</h3>
                <p className="text-sm text-gray-600">Implémentation et optimisation des structures de données</p>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold">Système d'Exploitation</h3>
                <p className="text-sm text-gray-600">Architecture et fonctionnement des systèmes d'exploitation</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50 px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} StudyMate. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
