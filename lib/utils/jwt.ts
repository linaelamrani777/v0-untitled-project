import { sign, verify } from "jsonwebtoken"

// Clé secrète pour JWT - en production, utilisez une variable d'environnement
const JWT_SECRET = "studymate-secret-key"

// Générer un token JWT
export function generateToken(payload: any, expiresIn = "7d") {
  return sign(payload, JWT_SECRET, { expiresIn })
}

// Vérifier un token JWT
export function verifyToken(token: string) {
  try {
    return verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}
