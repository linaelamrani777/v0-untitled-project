"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronDown,
  Clock,
  FileText,
  Home,
  Library,
  MessageSquare,
  Moon,
  Search,
  Settings,
  Target,
} from "lucide-react"

export default function FigmaMockup() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r hidden md:block">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="rounded-md gradient-primary p-1.5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="text-xl font-bold">EduSmart</span>
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-1">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "dashboard" ? "gradient-primary" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={activeTab === "chatbot" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "chatbot" ? "gradient-primary" : ""}`}
              onClick={() => setActiveTab("chatbot")}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              AI Chatbot
            </Button>
            <Button
              variant={activeTab === "library" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "library" ? "gradient-primary" : ""}`}
              onClick={() => setActiveTab("library")}
            >
              <Library className="mr-2 h-4 w-4" />
              Library
            </Button>
            <Button
              variant={activeTab === "schedule" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "schedule" ? "gradient-primary" : ""}`}
              onClick={() => setActiveTab("schedule")}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Button>
            <Button
              variant={activeTab === "materials" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "materials" ? "gradient-primary" : ""}`}
              onClick={() => setActiveTab("materials")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Materials
            </Button>
            <Button
              variant={activeTab === "settings" ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === "settings" ? "gradient-primary" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 p-4 w-64 border-t">
          <div className="flex items-center gap-2">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder.svg?height=36&width=36" />
              <AvatarFallback className="gradient-secondary text-white">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
            <div className="relative md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Moon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Avatar className="h-8 w-8 md:hidden">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="gradient-secondary text-white">JD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Title */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, John! Here's your study overview.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  May 24, 2024
                </Button>
                <Button className="gradient-primary">
                  <FileText className="mr-2 h-4 w-4" />
                  Study Plan
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Time Today</CardTitle>
                  <Clock className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.5 hours</div>
                  <p className="text-xs text-muted-foreground">75% of daily goal</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-primary/20">
                    <div className="h-full w-[75%] rounded-full gradient-primary"></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Weekly Progress</CardTitle>
                  <Target className="h-4 w-4 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.5 hours</div>
                  <p className="text-xs text-muted-foreground">85% of weekly goal</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-accent/20">
                    <div className="h-full w-[85%] rounded-full gradient-secondary"></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
                  <BookOpen className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12/15</div>
                  <p className="text-xs text-muted-foreground">80% completion rate</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-green-100">
                    <div className="h-full w-[80%] rounded-full gradient-success"></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
                  <Calendar className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Next: Math Assignment (2 days)</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-orange-100">
                    <div className="h-full w-[66%] rounded-full gradient-warning"></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="schedule" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                <TabsTrigger value="progress">Subject Progress</TabsTrigger>
              </TabsList>

              <TabsContent value="schedule">
                <Card>
                  <CardHeader>
                    <CardTitle>Today's Study Schedule</CardTitle>
                    <CardDescription>Your personalized study plan for today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg border p-3 hover-scale">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full gradient-primary p-2">
                            <Clock className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium">Mathematics</h3>
                            <p className="text-sm text-muted-foreground">Review Calculus Chapter 5</p>
                          </div>
                        </div>
                        <div className="text-sm font-medium">9:00 - 10:30 AM</div>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3 hover-scale">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full gradient-secondary p-2">
                            <BookOpen className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium">Computer Science</h3>
                            <p className="text-sm text-muted-foreground">Complete Programming Assignment</p>
                          </div>
                        </div>
                        <div className="text-sm font-medium">11:00 - 12:30 PM</div>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3 hover-scale">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full gradient-accent p-2">
                            <BookOpen className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium">Physics</h3>
                            <p className="text-sm text-muted-foreground">Read Chapter 7 on Electromagnetism</p>
                          </div>
                        </div>
                        <div className="text-sm font-medium">2:00 - 3:30 PM</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations">
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Study Materials</CardTitle>
                    <CardDescription>Based on your progress and upcoming deadlines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg border p-3 hover-scale">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-amber-100 p-2">
                            <BookOpen className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Mathematics</h3>
                            <p className="text-sm text-muted-foreground">Practice problems for upcoming exam</p>
                          </div>
                        </div>
                        <Button size="sm" className="gradient-primary">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3 hover-scale">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-red-100 p-2">
                            <BookOpen className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Computer Science</h3>
                            <p className="text-sm text-muted-foreground">Video tutorial on data structures</p>
                          </div>
                        </div>
                        <Button size="sm" className="gradient-secondary">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-3 hover-scale">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-blue-100 p-2">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Physics</h3>
                            <p className="text-sm text-muted-foreground">Interactive simulation on wave properties</p>
                          </div>
                        </div>
                        <Button size="sm" className="gradient-accent">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="progress">
                <Card>
                  <CardHeader>
                    <CardTitle>Subject Progress</CardTitle>
                    <CardDescription>Your progress across different subjects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Mathematics</div>
                          <div className="text-sm text-muted-foreground">75%</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-primary/20">
                          <div className="h-full w-[75%] rounded-full gradient-primary"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Computer Science</div>
                          <div className="text-sm text-muted-foreground">90%</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-accent/20">
                          <div className="h-full w-[90%] rounded-full gradient-secondary"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Physics</div>
                          <div className="text-sm text-muted-foreground">60%</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-green-100">
                          <div className="h-full w-[60%] rounded-full gradient-success"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Chemistry</div>
                          <div className="text-sm text-muted-foreground">45%</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-orange-100">
                          <div className="h-full w-[45%] rounded-full gradient-warning"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest interactions with the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full gradient-primary p-2 mt-0.5">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Completed Reading Assignment</h4>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Physics
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You completed reading Chapter 7 on Electromagnetism
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Today, 3:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full gradient-secondary p-2 mt-0.5">
                      <MessageSquare className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">AI Chatbot Conversation</h4>
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                          AI Assistant
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">You asked about calculus integration techniques</p>
                      <p className="text-xs text-muted-foreground mt-1">Today, 1:45 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full gradient-success p-2 mt-0.5">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Submitted Assignment</h4>
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                          Computer Science
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">You submitted the Programming Assignment #4</p>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday, 11:30 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
