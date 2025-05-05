"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/lib/auth/auth-context"

export function ProfileStats({ user }: { user: any }) {
  const { studySchedule, studyChecklist } = useAuth()

  // Calculer les statistiques
  const calculateStats = () => {
    // Statistiques du planning
    const totalBlocks = studySchedule?.blocks.length || 0
    const completedBlocks = studySchedule?.blocks.filter((block) => block.completed).length || 0
    const scheduleProgress = totalBlocks > 0 ? (completedBlocks / totalBlocks) * 100 : 0

    // Statistiques de la liste de vérification
    const totalTasks = studyChecklist?.length || 0
    const completedTasks = studyChecklist?.filter((task) => task.completed).length || 0
    const taskProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

    // Temps total d'étude (en minutes)
    const totalStudyTime = completedBlocks * (user.studyPreferences?.studyDuration || 30)

    return {
      scheduleProgress,
      taskProgress,
      completedBlocks,
      totalBlocks,
      completedTasks,
      totalTasks,
      totalStudyTime,
    }
  }

  const stats = calculateStats()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistiques d'apprentissage</CardTitle>
        <CardDescription>Votre progression dans votre plan d'étude</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Sessions d'étude</span>
            <span className="text-sm text-muted-foreground">
              {stats.completedBlocks}/{stats.totalBlocks} sessions
            </span>
          </div>
          <Progress value={stats.scheduleProgress} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Tâches</span>
            <span className="text-sm text-muted-foreground">
              {stats.completedTasks}/{stats.totalTasks} tâches
            </span>
          </div>
          <Progress value={stats.taskProgress} className="h-2" />
        </div>

        <div className="rounded-lg bg-muted p-4">
          <div className="text-sm font-medium">Temps total d'étude</div>
          <div className="mt-1 text-2xl font-bold">{stats.totalStudyTime} minutes</div>
          <div className="mt-1 text-xs text-muted-foreground">Basé sur les sessions d'étude complétées</div>
        </div>
      </CardContent>
    </Card>
  )
}
