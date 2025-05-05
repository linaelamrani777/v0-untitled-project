import type { StudyPreferences } from "@/components/questionnaire/study-questionnaire"

// Types pour le planning d'étude
export type StudyBlock = {
  id: string
  day: string
  startTime: string
  endTime: string
  subject: string
  topic: string
  completed: boolean
}

export type StudySchedule = {
  weeklyHours: number
  blocks: StudyBlock[]
}

// Types pour la liste de vérification
export type StudyChecklist = {
  id: string
  subject: string
  task: string
  dueDate: string
  priority: "high" | "medium" | "low"
  completed: boolean
}

// Fonction pour générer un planning d'étude basé sur les préférences
export function generateStudySchedule(preferences: StudyPreferences): StudySchedule {
  const { subjects, studyHoursPerWeek, preferredStudyTime, studyStyle } = preferences

  // Calculer le nombre d'heures par matière
  const hoursPerSubject = Math.floor(studyHoursPerWeek / subjects.length)
  const remainingHours = studyHoursPerWeek % subjects.length

  // Répartir les heures sur les jours de la semaine
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
  const blocks: StudyBlock[] = []

  // Déterminer les heures de début en fonction des préférences
  let startHour = 8 // Par défaut
  if (preferredStudyTime === "evening") {
    startHour = 18
  } else if (preferredStudyTime === "night") {
    startHour = 20
  }

  // Générer les blocs d'étude
  let currentDay = 0
  let currentHour = startHour
  let totalHoursAssigned = 0

  // Distribuer les heures entre les matières
  const subjectHours = subjects.map((subject, index) => {
    return {
      subject,
      hours: index < remainingHours ? hoursPerSubject + 1 : hoursPerSubject,
    }
  })

  // Créer les blocs d'étude
  subjectHours.forEach(({ subject, hours }) => {
    let hoursAssigned = 0

    while (hoursAssigned < hours) {
      // Déterminer la durée du bloc (1 ou 2 heures)
      const blockDuration = Math.min(2, hours - hoursAssigned)

      // Créer un bloc d'étude
      const startTime = `${currentHour}:00`
      const endTime = `${currentHour + blockDuration}:00`

      blocks.push({
        id: `block_${blocks.length + 1}`,
        day: days[currentDay],
        startTime,
        endTime,
        subject,
        topic: generateTopicForSubject(subject),
        completed: false,
      })

      // Mettre à jour les compteurs
      hoursAssigned += blockDuration
      totalHoursAssigned += blockDuration
      currentHour += blockDuration

      // Passer au jour suivant si nécessaire
      if (currentHour >= startHour + 4) {
        currentDay = (currentDay + 1) % 7
        currentHour = startHour
      }
    }
  })

  return {
    weeklyHours: studyHoursPerWeek,
    blocks,
  }
}

// Fonction pour générer une liste de vérification basée sur les préférences
export function generateStudyChecklist(preferences: StudyPreferences): StudyChecklist[] {
  const { subjects } = preferences
  const checklist: StudyChecklist[] = []

  // Générer des tâches pour chaque matière
  subjects.forEach((subject) => {
    // Ajouter 2-3 tâches par matière
    const numTasks = 2 + Math.floor(Math.random() * 2)
    for (let i = 0; i < numTasks; i++) {
      const task = generateTaskForSubject(subject, i)
      const daysToAdd = 3 + Math.floor(Math.random() * 11) // Entre 3 et 14 jours
      const dueDate = new Date()
      dueDate.setDate(dueDate.getDate() + daysToAdd)

      checklist.push({
        id: `task_${checklist.length + 1}`,
        subject,
        task,
        dueDate: dueDate.toISOString().split("T")[0],
        priority: i === 0 ? "high" : i === 1 ? "medium" : "low",
        completed: false,
      })
    }
  })

  return checklist
}

// Fonction utilitaire pour générer un sujet d'étude pour une matière
function generateTopicForSubject(subject: string): string {
  const topics: Record<string, string[]> = {
    Mathématiques: ["Algèbre linéaire", "Calcul différentiel", "Probabilités", "Statistiques", "Géométrie"],
    Physique: ["Mécanique classique", "Électromagnétisme", "Thermodynamique", "Optique", "Physique quantique"],
    Chimie: ["Chimie organique", "Chimie inorganique", "Thermochimie", "Électrochimie", "Chimie analytique"],
    Biologie: ["Biologie cellulaire", "Génétique", "Écologie", "Physiologie", "Microbiologie"],
    Informatique: [
      "Algorithmes",
      "Structures de données",
      "Programmation orientée objet",
      "Bases de données",
      "Intelligence artificielle",
    ],
    Histoire: ["Histoire ancienne", "Moyen Âge", "Renaissance", "Époque moderne", "Histoire contemporaine"],
    Géographie: ["Géographie physique", "Géographie humaine", "Climatologie", "Géopolitique", "Développement durable"],
    Philosophie: ["Métaphysique", "Éthique", "Logique", "Philosophie politique", "Esthétique"],
    Économie: ["Microéconomie", "Macroéconomie", "Économie internationale", "Finance", "Développement économique"],
    Droit: ["Droit civil", "Droit pénal", "Droit constitutionnel", "Droit international", "Droit des affaires"],
    Psychologie: [
      "Psychologie cognitive",
      "Psychologie sociale",
      "Psychologie du développement",
      "Neuropsychologie",
      "Psychologie clinique",
    ],
    Sociologie: [
      "Théories sociologiques",
      "Méthodes de recherche",
      "Stratification sociale",
      "Sociologie urbaine",
      "Changement social",
    ],
    Littérature: ["Littérature classique", "Littérature moderne", "Poésie", "Roman", "Théâtre"],
    Langues: ["Grammaire", "Vocabulaire", "Expression écrite", "Expression orale", "Compréhension orale"],
    "Sciences politiques": [
      "Théorie politique",
      "Relations internationales",
      "Politique comparée",
      "Administration publique",
      "Politiques publiques",
    ],
  }

  // Si la matière n'est pas dans la liste, retourner un sujet générique
  if (!topics[subject]) {
    return `Chapitre ${Math.floor(Math.random() * 10) + 1}`
  }

  // Sinon, retourner un sujet aléatoire pour cette matière
  const subjectTopics = topics[subject]
  return subjectTopics[Math.floor(Math.random() * subjectTopics.length)]
}

// Fonction utilitaire pour générer une tâche pour une matière
function generateTaskForSubject(subject: string, taskIndex: number): string {
  const taskTypes = [
    "Réviser",
    "Faire des exercices sur",
    "Préparer une présentation sur",
    "Lire un article sur",
    "Rédiger une synthèse sur",
  ]

  const taskType = taskTypes[taskIndex % taskTypes.length]
  const topic = generateTopicForSubject(subject)

  return `${taskType} ${topic}`
}