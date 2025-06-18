// Simulation d'une base de données de modules
export const modules = [
  {
    id: "algebre4",
    title: "Algèbre 4",
    description: "Approfondissement des concepts algébriques avancés",
    professor: "Pr. MAZGOURI ZAKARIA",
    credits: 1,
  },
  {
    id: "analyse4",
    title: "Analyse 4",
    description: "l’étude des séries et transformées de Fourier ainsi que des fonctions complexes, pour analyser et résoudre des problèmes liés aux signaux et équations différentielles.",
    professor: "Pr. JERROUDI AMINE",
    credits: 1,
  },
  {
    id: "anglais3",
    title: "Anglais 3",
    description: "Communication professionnelle et technique en anglais",
    professor: "Pr. DAHBI MANAR",
    credits: 1,
  },
  {
    id: "droit-environnement",
    title: "Droit Environnement",
    description: "Droit de l’environnement est l’étude des règles juridiques visant à protéger la nature, encadrer les activités humaines et préserver les ressources naturelles pour les générations futures.",
    professor: "Pr. LAHRECH Khadija",
    credits: 1,
  },
  {
    id: "electronique-analogique",
    title: "Electronique Analogique",
    description: "L’électronique analogique concerne les circuits qui utilisent des signaux électriques continus pour transmettre et traiter des informations avec des valeurs variables.",
    professor: "Pr. MAZER Said",
    credits: 1,
  },
  {
    id: "electronique-numerique",
    title: "Electronique Numérique",
    description: "L’électronique numérique étudie et conçoit des circuits qui traitent des signaux à deux niveaux (0 et 1) pour manipuler et stocker des informations binaires.",
    professor: "Pr. MRABTI Mostafa",
    credits: 1,
  },
  {
    id: "espagnol",
    title: "Espagnol",
    description: "Espagnol  est l’apprentissage des bases pour communiquer à l’oral et à l’écrit dans des situations simples de la vie quotidienne.",
    professor: "Pr. KHALID NEJJARI",
    credits: 1,
  },
  {
    id: "probabilites-statistique",
    title: "Probabilités et Statistique",
    description: "Statistique et Probabilités est l’étude des outils mathématiques pour analyser des données, mesurer des tendances et modéliser l’incertitude dans des phénomènes aléatoires",
    professor: "Pr. OUGHDIR LAHCEN",
    credits: 1,
  },
  {
    id: "structure-donnees-c",
    title: "Structure des Données en C",
    description: "Structures en C est l’apprentissage de la définition et l’utilisation de types de données personnalisés pour organiser et manipuler des informations complexes en langage C.",
    professor: "Pr. HRAOUI Said",
    credits: 1,
  },
  {
    id: "systeme-exploitation",
    title: "Système d'Exploitation",
    description: "Systèmes d’exploitation (Linux) est une introduction au rôle et au fonctionnement d’un système comme Linux, utilisé pour contrôler, organiser et exécuter les opérations d’un ordinateur.",
    professor: "Pr. CHETIOUI Kaouthar",
    credits: 1,
  },
]

// Détails supplémentaires pour chaque module
export const moduleDetails = {
  algebre4: {
    chapters: [
      "Anneaux, morphismes et idéaux",
      "Anneaux : principaux, noethériens, euclidiens et factoriels",
    ],
    resources: ["Polycopié du cours", "Exercices", " Examen Normal avec correction", "Examen de Rattrapage avec correction"],
    schedule: "Lundi 9h-11h, 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "26-05-20255T09:00:00Z",
  },
  analyse4: {
    chapters: [
      "Chapitre I : les séries numériques, les suites et les séries de fonctions,",
      "Chapitre II : les séries de Fourier",
      "Chapitre III : les fonctions holomorphes",
      "Chapitre IV : la transformée de Laplace",
      "Chapitre V : la transformée de Fourier",
    ],
    resources: ["Polycopié du cours", "Exercices", "Annales d'examens"],
    schedule: "JEUDI 14H30-16H30, 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "2024-06-18T14:00:00Z",
  },
  anglais3: {
    chapters: [
      "Rédaction technique",
      "Présentation orale",
      "Vocabulaire scientifique",
      "Compréhension de documents techniques",
      "Communication professionnelle",
    ],
    schedule: "JEUDI 16H45-18H45, 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "29/05/2025T10:00:00Z",
  },
  "droit-environnement": {
    chapters: [
      "Principes fondamentaux du droit de l'environnement",
      "Réglementation des installations classées"
    ],
    resources: ["Code de l'environnement"],
    schedule: "VENDREDI 11H15-13H15, 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "30/05/2025T13:00:00Z",
  },
  "electronique-analogique": {
    chapters: [
      "Chapitre I :jonction pn",
      "Chapitre II : la diode et ses applications ",
      "Chapitre III : le transistor bipolaire",
      "Chapitre IV : amplificateur opérationnel",
    ],
    resources: ["Polycopié du cours", "Travaux pratiques", "Simulations"],
    schedule: "Vendredi 09H00-11H00, 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "30/05/2025T09:00:00Z",
  },
  "electronique-numerique": {
    chapters: [
      "Chapitre I : Généralités",
      "Chapitre II : les bascules",
      "Chapitre III : applications",
    ],
    resources: ["Polycopié du cours", "Travaux pratiques", "Simulations"],
    schedule: "MERCREDI 09H00-11H00, 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "28/05/2025T14:00:00Z",
  },
  espagnol: {
    chapters: [
      "Unité I :Saludos y presentaciones",
      "Unité II : las profesiones",
      "Unité III : La familia",
      "Unité IV : La escuela",
      "Unité V : Las actividades cotidianas.",
      "Unité VI :  El barrio – La casa",
    ],
    resources: ["Manuel de cours", "Exercices"],
    schedule: "MERCREDI 11H15-13H15 , 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "28/05/2025T10:00:00Z",
  },
  "probabilites-statistique": {
    chapters: [
      "Chapitre 1: Introduction à GNU/Linux",
      "Chapitre 2: Commandes de base et manipulation des fichiers",
      "Chapitre 3: Tâches administratives",
      "Chapitre 4: Gestion des disques et Systèmes de fichiers",
      "Chapitre 5: Programmation et scripts Shell",
    ],
    resources: ["Polycopié du cours", "Exercices corrigés", "Jeux de données"],
    schedule: "LUNDI 11H15-13H15, 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "26/05/2025T14:00:00Z",
  },
  "structure-donnees-c": {
    chapters: ["CHAPITRE 1:Introduction", "CHAPITRE 2 : Concepts fondamentaux en C", "CHAPITRE 3: Notion de récursivité" , "CHAPITRE 4: Types de Structures de Données",],
    resources: ["Polycopié du cours", "Travaux pratiques",],
    schedule: "MARDI 14H30-16H30, 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "27/05/2025T09:00:00Z",
  },
  "systeme-exploitation": {
    chapters: ["Chapitre 1: Introduction à GNU/Linux", "Chapitre 2: Commandes de base et manipulation des fichiers","Chapitre 3: Tâches administratives", "Chapitre 4: Gestion des disques et Systèmes de fichiers", "Chapitre 5: Programmation et scripts Shell" , "Gestion de la mémoire", "Systèmes de fichiers", "Sécurité"],
    resources: ["Polycopié du cours", "Travaux pratiques"],
    schedule: "MARDI 16H45-18H45, 0.5, 1.1, 1.4,1.5, AMPHI",
    examDate: "27/05/2025T14:00:00Z",
  },
}
