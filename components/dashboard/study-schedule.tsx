"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import type { StudySchedule } from "@/lib/services/schedule-generator"

interface StudyScheduleDisplayProps {
  schedule: StudySchedule
  onBlockComplete: (blockId: string, completed: boolean) => void
}

export function StudyScheduleDisplay({ schedule, onBlockComplete }: StudyScheduleDisplayProps) {
  // Regrouper les blocs par jour
  const blocksByDay: Record<string, typeof schedule.blocks> = {}
  schedule.blocks.forEach((block) => {
    if (!blocksByDay[block.day]) {
      blocksByDay[block.day] = []
    }
    blocksByDay[block.day].push(block)
  })

  // Obtenir les jours de la semaine dans l'ordre
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
  const orderedDays = days.filter((day) => blocksByDay[day])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Planning d'étude</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {orderedDays.map((day) => (
            <div key={day} className="space-y-2">
              <h3 className="font-medium">{day}</h3>
              <div className="space-y-2">
                {blocksByDay[day].map((block) => (
                  <div
                    key={block.id}
                    className={`flex items-start space-x-2 rounded-md border p-3 ${
                      block.completed ? "bg-muted/50" : ""
                    }`}
                  >
                    <Checkbox
                      id={block.id}
                      checked={block.completed}
                      onCheckedChange={(checked) => onBlockComplete(block.id, checked === true)}
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor={block.id}
                          className={`font-medium ${block.completed ? "line-through opacity-70" : ""}`}
                        >
                          {block.subject}
                        </label>
                        <span className="text-sm text-muted-foreground">
                          {block.startTime} - {block.endTime}
                        </span>
                      </div>
                      <p className={`text-sm ${block.completed ? "line-through opacity-70" : ""}`}>{block.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}