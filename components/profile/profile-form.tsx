"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/lib/auth/auth-context"

// Schéma de validation pour le formulaire
const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm({ user }: { user: any }) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { updateUserProfile } = useAuth()

  // Initialiser le formulaire avec les valeurs actuelles de l'utilisateur
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  })

  async function onSubmit(data: ProfileFormValues) {
    setIsSubmitting(true)
    try {
      // Simuler une mise à jour du profil
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mettre à jour le profil utilisateur
      if (updateUserProfile) {
        await updateUserProfile({
          name: data.name,
          email: data.email,
        })
      }

      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été mises à jour avec succès.",
      })
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la mise à jour du profil.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations personnelles</CardTitle>
        <CardDescription>Mettez à jour vos informations de profil.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom" {...field} />
                  </FormControl>
                  <FormDescription>C'est le nom qui sera affiché sur votre profil.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre email" type="email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Cet email sera utilisé pour vous connecter et recevoir des notifications.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Mise à jour..." : "Mettre à jour le profil"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}