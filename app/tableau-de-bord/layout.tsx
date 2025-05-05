import type React from "react"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/lib/auth/auth-context"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}