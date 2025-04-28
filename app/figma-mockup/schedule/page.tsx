"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertCircle,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Plus,
  Settings,
} from "lucide-react"

export default function SchedulePage() {
  const [currentView, setCurrentView] = useState("week")
  const [currentDate, setCurrentDate] = useState(new Date())

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  }

  // Get current week dates
  const getCurrentWeekDates = () => {
    const dates = []
    const startOfWeek = new Date(currentDate)
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + i)
      dates.push(date)
    }

    return dates
  }

  const weekDates = getCurrentWeekDates()

  // Navigate to previous/next period
  const navigatePrevious = () => {
    const newDate = new Date(currentDate)
    if (currentView === "day") {
      newDate.setDate(currentDate.getDate() - 1)
    } else if (currentView === "week") {
      newDate.setDate(currentDate.getDate() - 7)
    } else if (currentView === "month") {
      newDate.setMonth(currentDate.getMonth() - 1)
    }
    setCurrentDate(newDate)
  }

  const navigateNext = () => {
    const newDate = new Date(currentDate)
    if (currentView === "day") {
      newDate.setDate(currentDate.getDate() + 1)
    } else if (currentView === "week") {
      newDate.setDate(currentDate.getDate() + 7)
    } else if (currentView === "month") {
      newDate.setMonth(currentDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Mathematics Study Session",
      type: "Study",
      subject: "Mathematics",
      start: "09:00",
      end: "10:30",
      day: 1, // Monday
      description: "Review Calculus Chapter 5",
      color: "primary",
    },
    {
      id: 2,
      title: "Computer Science Assignment",
      type: "Assignment",
      subject: "Computer Science",
      start: "11:00",
      end: "12:30",
      day: 1, // Monday
      description: "Complete Programming Assignment",
      color: "secondary",
    },
    {
      id: 3,
      title: "Physics Reading",
      type: "Study",
      subject: "Physics",
      start: "14:00",
      end: "15:30",
      day: 1, // Monday
      description: "Read Chapter 7 on Electromagnetism",
      color: "accent",
    },
    {
      id: 4,
      title: "Chemistry Lab Preparation",
      type: "Study",
      subject: "Chemistry",
      start: "10:00",
      end: "11:30",
      day: 2, // Tuesday
      description: "Prepare for tomorrow's lab experiment",
      color: "green",
    },
    {
      id: 5,
      title: "Math Assignment Due",
      type: "Deadline",
      subject: "Mathematics",
      start: "23:59",
      end: "23:59",
      day: 3, // Wednesday
      description: "Submit Calculus Problem Set 4",
      color: "destructive",
    },
    {
      id: 6,
      title: "Study Group - Data Structures",
      type: "Meeting",
      subject: "Computer Science",
      start: "15:00",
      end: "16:30",
      day: 4, // Thursday
      description: "Virtual study group session",
      color: "secondary",
    },
    {
      id: 7,
      title: "Physics Lab",
      type: "Lab",
      subject: "Physics",
      start: "13:00",
      end: "15:00",
      day: 5, // Friday
      description: "Electromagnetic experiments",
      color: "accent",
    },
  ]

  // Get events for a specific day
  const getEventsForDay = (day: number) => {
    return events.filter((event) => event.day === day)
  }

  // Get color class based on event color
  const getColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "gradient-primary"
      case "secondary":
        return "gradient-secondary"
      case "accent":
        return "gradient-accent"
      case "green":
        return "gradient-success"
      case "destructive":
        return "bg-destructive"
      default:
        return "gradient-primary"
    }
  }

  // Get icon based on event type
  const getEventIcon = (type: string) => {
    switch (type) {
      case "Study":
        return <BookOpen className="h-4 w-4" />
      case "Assignment":
        return <FileText className="h-4 w-4" />
      case "Deadline":
        return <AlertCircle className="h-4 w-4" />
      case "Meeting":
        return <Calendar className="h-4 w-4" />
      case "Lab":
        return <FileText className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
          <p className="text-muted-foreground">Manage your study sessions and deadlines</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="gradient-primary">
            <Plus className="mr-2 h-4 w-4" />
            Add Event
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={navigatePrevious}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-lg font-medium">
                {currentView === "day"
                  ? formatDate(currentDate)
                  : currentView === "week"
                    ? `${formatDate(weekDates[0])} - ${formatDate(weekDates[6])}`
                    : new Date(currentDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </div>
              <Button variant="outline" size="icon" onClick={navigateNext}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">Today</Button>
            </div>
            <Tabs value={currentView} onValueChange={setCurrentView} className="w-auto">
              <TabsList>
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          {currentView === "week" && (
            <div className="space-y-6">
              <div className="grid grid-cols-7 gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-sm font-medium">{day}</div>
                    <div
                      className={`text-sm mt-1 h-8 w-8 rounded-full flex items-center justify-center mx-auto ${
                        new Date().getDate() === weekDates[index].getDate() &&
                        new Date().getMonth() === weekDates[index].getMonth()
                          ? "gradient-primary text-white"
                          : ""
                      }`}
                    >
                      {weekDates[index].getDate()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 border-t pt-4">
                {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
                  <div key={dayIndex} className="min-h-[300px]">
                    <div className="space-y-2">
                      {getEventsForDay(dayIndex).map((event) => (
                        <div
                          key={event.id}
                          className={`rounded-md p-2 text-white ${getColorClass(event.color)} hover-scale cursor-pointer`}
                        >
                          <div className="text-xs font-medium">
                            {event.start} - {event.end}
                          </div>
                          <div className="font-medium text-sm">{event.title}</div>
                          <div className="flex items-center mt-1 text-xs">
                            {getEventIcon(event.type)}
                            <span className="ml-1">{event.type}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentView === "day" && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <div className="text-lg font-medium">{formatDate(currentDate)}</div>
              </div>

              <div className="space-y-2">
                {getEventsForDay(currentDate.getDay()).map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-4 p-3 rounded-lg border hover:bg-muted/50 hover-scale cursor-pointer"
                  >
                    <div className={`rounded-full ${getColorClass(event.color)} p-2 text-white`}>
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      <div className="flex items-center mt-2 text-sm">
                        <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {event.start} - {event.end}
                        </span>
                        <Badge className="ml-2 bg-primary/10 text-primary border-primary/20">{event.subject}</Badge>
                      </div>
                    </div>
                  </div>
                ))}

                {getEventsForDay(currentDate.getDay()).length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calendar className="h-12 w-12 mx-auto mb-2 opacity-20" />
                    <p>No events scheduled for this day</p>
                    <Button className="mt-4 gradient-primary">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Event
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentView === "month" && (
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-1 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-sm font-medium p-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-sm">
                {Array.from({ length: 35 }).map((_, index) => (
                  <div
                    key={index}
                    className={`border rounded-md p-1 min-h-[100px] ${
                      index % 7 === 0 || index % 7 === 6 ? "bg-muted/30" : ""
                    }`}
                  >
                    <div className="text-right mb-1">{index + 1}</div>
                    {index === 8 && (
                      <div className="text-xs rounded bg-primary/10 text-primary p-1 mb-1 truncate">
                        Math Study - 9:00 AM
                      </div>
                    )}
                    {index === 9 && (
                      <div className="text-xs rounded bg-secondary/10 text-secondary p-1 mb-1 truncate">
                        CS Assignment - 11:00 AM
                      </div>
                    )}
                    {index === 15 && (
                      <div className="text-xs rounded bg-destructive/10 text-destructive p-1 mb-1 truncate">
                        Math Assignment Due
                      </div>
                    )}
                    {index === 22 && (
                      <div className="text-xs rounded bg-accent/10 text-accent p-1 mb-1 truncate">
                        Physics Lab - 1:00 PM
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Your upcoming assignments and exams</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-3 hover-scale">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-destructive p-2 text-white">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Math Assignment</h3>
                  <p className="text-sm text-muted-foreground">Calculus Problem Set 4</p>
                </div>
              </div>
              <div className="text-sm font-medium text-destructive">2 days left</div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3 hover-scale">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-amber-500 p-2 text-white">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Physics Exam</h3>
                  <p className="text-sm text-muted-foreground">Chapters 5-7</p>
                </div>
              </div>
              <div className="text-sm font-medium text-amber-500">5 days left</div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3 hover-scale">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-500 p-2 text-white">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">CS Project</h3>
                  <p className="text-sm text-muted-foreground">Final Project Submission</p>
                </div>
              </div>
              <div className="text-sm font-medium text-green-500">10 days left</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Deadlines
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add New Event</CardTitle>
            <CardDescription>Schedule a new study session or deadline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="event-title">Event Title</Label>
              <Input id="event-title" placeholder="Enter event title" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event-date">Date</Label>
                <Input id="event-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type</Label>
                <Select defaultValue="study">
                  <SelectTrigger id="event-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="study">Study Session</SelectItem>
                    <SelectItem value="assignment">Assignment</SelectItem>
                    <SelectItem value="deadline">Deadline</SelectItem>
                    <SelectItem value="meeting">Meeting</SelectItem>
                    <SelectItem value="exam">Exam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-time">Start Time</Label>
                <Input id="start-time" type="time" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-time">End Time</Label>
                <Input id="end-time" type="time" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-subject">Subject</Label>
              <Select defaultValue="math">
                <SelectTrigger id="event-subject">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-description">Description</Label>
              <Input id="event-description" placeholder="Add details about this event" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full gradient-primary">
              <Plus className="mr-2 h-4 w-4" />
              Add to Schedule
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study Analytics</CardTitle>
            <CardDescription>Your study time distribution</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Mathematics</span>
                <span className="font-medium">8 hours</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full w-[40%] rounded-full gradient-primary"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Computer Science</span>
                <span className="font-medium">6 hours</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full w-[30%] rounded-full gradient-secondary"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Physics</span>
                <span className="font-medium">4 hours</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full w-[20%] rounded-full gradient-accent"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Chemistry</span>
                <span className="font-medium">2 hours</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full w-[10%] rounded-full gradient-success"></div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between text-sm font-medium">
                <span>Total Study Time This Week</span>
                <span>20 hours</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Detailed Analytics
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
