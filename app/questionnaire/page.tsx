"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"

export type StudyPreferences = {
  subjects: string[]
  studyHoursPerWeek: number
  preferredStudyTime: "morning" | "afternoon" | "evening" | "night"
  studyStyle: "visual" | "auditory" | "reading" | "kinesthetic"
}

interface StudyQuestionnaireProps {
  onComplete: (preferences: StudyPreferences) => void
  isLoading?: boolean
}

export default function StudyQuestionnaire({ onComplete, isLoading = false }: StudyQuestionnaireProps) {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [preferences, setPreferences] = useState<StudyPreferences>({
    subjects: [],
    studyHoursPerWeek: 10,
    preferredStudyTime: "afternoon",
    studyStyle: "visual",
  })

  // Liste des modules spécifiques demandés par l'utilisateur
  const availableSubjects = [
    "Système d'exploitation",
    "Structure des données en C",
    "Probabilités et Statistiques",
    "Espagnol",
    "Électronique numérique",
    "Électronique analogique",
    "EEDD",
    "Droit de l'environnement",
    "Anglais 3",
    "Analyse 4",
    "Algèbre 4",
  ]

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleComplete = () => {
    onComplete(preferences)
    toast({
      title: "Questionnaire complété",
      description: "Vos préférences d'étude ont été enregistrées avec succès.",
    })
  }

  const handleSubjectChange = (subject: string, checked: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      subjects: checked ? [...prev.subjects, subject] : prev.subjects.filter((s) => s !== subject),
    }))
  }

  const handleStudyHoursChange = (value: number[]) => {
    setPreferences((prev) => ({
      ...prev,
      studyHoursPerWeek: value[0],
    }))
  }

  const handlePreferredTimeChange = (value: string) => {
    setPreferences((prev) => ({
      ...prev,
      preferredStudyTime: value as "morning" | "afternoon" | "evening" | "night",
    }))
  }

  const handleStudyStyleChange = (value: string) => {
    setPreferences((prev) => ({
      ...prev,
      studyStyle: value as "visual" | "auditory" | "reading" | "kinesthetic",
    }))
  }

  // Vérifiez si ce fichier contient des modules avec des professeurs
  // Si oui, il faudra les modifier aussi
  const subjectsWithProfessors = availableSubjects.map((subject) => ({
    name: subject,
    professor: "John Doe", // Exemple de professeur, à remplacer par la logique réelle
  }))

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Questionnaire d'étude</CardTitle>
        <CardDescription>
          Aidez-nous à personnaliser votre expérience d'apprentissage en répondant à quelques questions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h3 className="mb-4 text-lg font-medium">Quels modules souhaitez-vous étudier ?</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {subjectsWithProfessors.map((subjectWithProfessor) => (
                  <div key={subjectWithProfessor.name} className="flex items-center space-x-2">
                    <Checkbox
                      id={`subject-${subjectWithProfessor.name}`}
                      checked={preferences.subjects.includes(subjectWithProfessor.name)}
                      onCheckedChange={(checked) => handleSubjectChange(subjectWithProfessor.name, checked === true)}
                    />
                    <label
                      htmlFor={`subject-${subjectWithProfessor.name}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {subjectWithProfessor.name} - Professeur: {subjectWithProfessor.professor}
                    </label>
                  </div>
                ))}
              </div>
              {preferences.subjects.length === 0 && (
                <p className="mt-2 text-sm text-red-500">Veuillez sélectionner au moins un module.</p>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Combien d'heures par semaine souhaitez-vous étudier ?</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">5 heures</span>
                  <span className="text-sm">{preferences.studyHoursPerWeek} heures</span>
                  <span className="text-sm">30 heures</span>
                </div>
                <Slider
                  value={[preferences.studyHoursPerWeek]}
                  min={5}
                  max={30}
                  step={1}
                  onValueChange={handleStudyHoursChange}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="mb-4 text-lg font-medium">À quel moment de la journée préférez-vous étudier ?</h3>
                <RadioGroup
                  value={preferences.preferredStudyTime}
                  onValueChange={handlePreferredTimeChange}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="morning" id="morning" />
                    <Label htmlFor="morning">Matin (6h - 12h)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="afternoon" id="afternoon" />
                    <Label htmlFor="afternoon">Après-midi (12h - 18h)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="evening" id="evening" />
                    <Label htmlFor="evening">Soirée (18h - 22h)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="night" id="night" />
                    <Label htmlFor="night">Nuit (22h - 6h)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="mb-4 text-lg font-medium">Quel est votre style d'apprentissage préféré ?</h3>
              <RadioGroup value={preferences.studyStyle} onValueChange={handleStudyStyleChange} className="space-y-3">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="visual" id="visual" className="mt-1" />
                  <div>
                    <Label htmlFor="visual" className="font-medium">
                      Visuel
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Vous apprenez mieux avec des images, des diagrammes et des vidéos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="auditory" id="auditory" className="mt-1" />
                  <div>
                    <Label htmlFor="auditory" className="font-medium">
                      Auditif
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Vous apprenez mieux en écoutant des explications et des discussions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="reading" id="reading" className="mt-1" />
                  <div>
                    <Label htmlFor="reading" className="font-medium">
                      Lecture/Écriture
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Vous apprenez mieux en lisant et en prenant des notes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="kinesthetic" id="kinesthetic" className="mt-1" />
                  <div>
                    <Label htmlFor="kinesthetic" className="font-medium">
                      Kinesthésique
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Vous apprenez mieux en pratiquant et en expérimentant.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 ? (
          <Button variant="outline" onClick={handlePrevStep} disabled={isLoading}>
            Précédent
          </Button>
        ) : (
          <div></div>
        )}
        {step < 3 ? (
          <Button onClick={handleNextStep} disabled={(step === 1 && preferences.subjects.length === 0) || isLoading}>
            Suivant
          </Button>
        ) : (
          <Button onClick={handleComplete} disabled={isLoading}>
            {isLoading ? "Chargement..." : "Terminer"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
