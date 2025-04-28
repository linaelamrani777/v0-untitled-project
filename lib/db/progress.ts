// Simulation d'une base de données de progression des utilisateurs
export const userProgress: Record<number, Record<string, any>> = {
  1: {
    // Utilisateur Jean Dupont
    algebre4: {
      completed: 40, // Pourcentage de complétion
      lastAccessed: "2023-10-15T14:30:00Z",
      chapters: {
        "Espaces vectoriels avancés": {
          completed: true,
          score: 85, // Score sur 100
        },
        "Formes bilinéaires et quadratiques": {
          completed: true,
          score: 75,
        },
        "Théorie des groupes": {
          completed: false,
          score: 0,
        },
        "Anneaux et corps": {
          completed: false,
          score: 0,
        },
        "Applications linéaires": {
          completed: false,
          score: 0,
        },
      },
    },
    analyse4: {
      completed: 20,
      lastAccessed: "2023-10-16T10:15:00Z",
      chapters: {
        "Fonctions holomorphes": {
          completed: true,
          score: 80,
        },
        "Intégrales de contour": {
          completed: false,
          score: 0,
        },
        "Séries de Laurent": {
          completed: false,
          score: 0,
        },
        "Théorème des résidus": {
          completed: false,
          score: 0,
        },
        "Équations différentielles complexes": {
          completed: false,
          score: 0,
        },
      },
    },
  },
  2: {
    // Utilisateur Marie Martin
    "electronique-numerique": {
      completed: 60,
      lastAccessed: "2023-10-14T16:45:00Z",
      chapters: {
        "Systèmes combinatoires": {
          completed: true,
          score: 90,
        },
        "Systèmes séquentiels": {
          completed: true,
          score: 85,
        },
        "Architectures FPGA": {
          completed: true,
          score: 75,
        },
        "Langages de description matérielle": {
          completed: false,
          score: 0,
        },
        "Conception de systèmes numériques": {
          completed: false,
          score: 0,
        },
      },
    },
    "structure-donnees-c": {
      completed: 40,
      lastAccessed: "2023-10-17T11:30:00Z",
      chapters: {
        "Tableaux et listes chaînées": {
          completed: true,
          score: 95,
        },
        "Piles et files": {
          completed: true,
          score: 90,
        },
        "Arbres binaires": {
          completed: false,
          score: 0,
        },
        "Tables de hachage": {
          completed: false,
          score: 0,
        },
        Graphes: {
          completed: false,
          score: 0,
        },
      },
    },
  },
}
