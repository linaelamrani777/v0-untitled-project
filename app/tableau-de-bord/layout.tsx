import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"

export default function TableauDeBordLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppSidebar>{children}</AppSidebar>
}
