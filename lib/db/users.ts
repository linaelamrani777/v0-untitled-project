// Simulation d'une base de données d'utilisateurs
export const users = [
  {
    id: 1,
    email: "jean.dupont@exemple.com",
    password: "motdepasse123", // En production, utilisez des mots de passe hachés
    name: "Jean Dupont",
    role: "student",
    createdAt: "2023-01-15T10:30:00Z",
  },
  {
    id: 2,
    email: "marie.martin@exemple.com",
    password: "motdepasse456",
    name: "Marie Martin",
    role: "student",
    createdAt: "2023-02-20T14:45:00Z",
  },
  {
    id: 3,
    email: "admin@studymate.fr",
    password: "admin123",
    name: "Admin",
    role: "admin",
    createdAt: "2022-12-01T09:00:00Z",
  },
]
