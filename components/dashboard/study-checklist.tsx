"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import type { StudyChecklist } from "@/lib/services/schedule-generator"

interface StudyChecklistDisplayProps {
  checklist: StudyChecklist[]
  onTaskComplete: (taskId: string, completed: boolean) => void
}

export function StudyChecklistDisplay({ checklist, onTaskComplete }: StudyChecklistDisplayProps) {
  // Trier les tâches par priorité et date d'échéance
  const sortedChecklist = [...checklist].sort((a, b) => {
    // D'abord par statut (non complété en premier)
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1
    }

    // Ensuite par priorité
    const priorityOrder = { high: 0, medium: 1, low: 2 }
    if (a.priority !== b.priority) {
      return priorityOrder[a.priority] - priorityOrder[b.priority]
    }

    // Enfin par date d'échéance
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  })

  // Fonction pour formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }).format(date)
  }

  // Fonction pour obtenir la couleur de la priorité
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  // Fonction pour obtenir le libellé de la priorité
  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "Haute"
      case "medium":
        return "Moyenne"
      case "low":
        return "Basse"
      default:
        return priority
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Liste de tâches</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedChecklist.map((task) => (
            <div
              key={task.id}
              className={`flex items-start space-x-2 rounded-md border p-3 ${task.completed ? "bg-muted/50" : ""}`}
            >
              <Checkbox
                id={task.id}
                checked={task.completed}
                onCheckedChange={(checked) => onTaskComplete(task.id, checked === true)}
              />
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label htmlFor={task.id} className={`font-medium ${task.completed ? "line-through opacity-70" : ""}`}>
                    {task.task}
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className={getPriorityColor(task.priority)}>
                      {getPriorityLabel(task.priority)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{formatDate(task.dueDate)}</span>
                  </div>
                </div>
                <p className={`text-sm text-muted-foreground ${task.completed ? "line-through opacity-70" : ""}`}>
                  {task.subject}
                </p>
              </div>
            </div>
          ))}

          {checklist.length === 0 && <p className="text-center text-muted-foreground">Aucune tâche pour le moment.</p>}
        </div>
      </CardContent>
    </Card>
  )
}
