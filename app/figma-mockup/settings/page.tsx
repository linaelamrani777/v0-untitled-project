"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Camera, Globe, Lock, LogOut, Moon, Palette, Save, Shield, Sun, Volume2 } from "lucide-react"

export default function SettingsPage() {
  const [theme, setTheme] = useState("light")

  return (
    <div className="container mx-auto py-6 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="study">Study Preferences</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile picture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback className="text-xl gradient-primary text-white">JD</AvatarFallback>
                  </Avatar>
                  <Button size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full gradient-secondary">
                    <Camera className="h-4 w-4 text-white" />
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" defaultValue="Computer Science student at University of Technology" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">University/School</Label>
                    <Input id="university" defaultValue="University of Technology" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button className="gradient-primary">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Account Settings */}
        <TabsContent value="account">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="johndoe" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gradient-primary">Update Account</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="gradient-primary">
                  <Lock className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-destructive/20 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Delete Account</h4>
                      <p className="text-sm text-muted-foreground">
                        Permanently delete your account and all associated data
                      </p>
                    </div>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Log out from all devices</h4>
                      <p className="text-sm text-muted-foreground">End all active sessions on other devices</p>
                    </div>
                    <Button variant="outline">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how EduSmart looks and feels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex gap-4">
                  <div
                    className={`flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover-scale ${theme === "light" ? "border-primary bg-primary/5" : ""}`}
                    onClick={() => setTheme("light")}
                  >
                    <div className="rounded-full bg-white border p-2">
                      <Sun className="h-5 w-5 text-amber-500" />
                    </div>
                    <span className="text-sm font-medium">Light</span>
                  </div>
                  <div
                    className={`flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover-scale ${theme === "dark" ? "border-primary bg-primary/5" : ""}`}
                    onClick={() => setTheme("dark")}
                  >
                    <div className="rounded-full bg-gray-900 border p-2">
                      <Moon className="h-5 w-5 text-gray-100" />
                    </div>
                    <span className="text-sm font-medium">Dark</span>
                  </div>
                  <div
                    className={`flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover-scale ${theme === "system" ? "border-primary bg-primary/5" : ""}`}
                    onClick={() => setTheme("system")}
                  >
                    <div className="rounded-full bg-gradient-to-r from-white to-gray-900 border p-2">
                      <Palette className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">System</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Color Scheme</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover-scale border-primary bg-primary/5">
                    <div className="h-8 w-8 rounded-full gradient-primary"></div>
                    <span className="text-sm font-medium">Purple (Default)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover-scale">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    <span className="text-sm font-medium">Ocean</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 cursor-pointer hover-scale">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    <span className="text-sm font-medium">Forest</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4" />
                        English
                      </div>
                    </SelectItem>
                    <SelectItem value="fr">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4" />
                        Français
                      </div>
                    </SelectItem>
                    <SelectItem value="es">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4" />
                        Español
                      </div>
                    </SelectItem>
                    <SelectItem value="de">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4" />
                        Deutsch
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gradient-primary">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-assignments">Assignment Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about upcoming assignments and deadlines
                      </p>
                    </div>
                    <Switch id="email-assignments" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-study">Study Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about your scheduled study sessions
                      </p>
                    </div>
                    <Switch id="email-study" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-news">Platform Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about new features and platform updates
                      </p>
                    </div>
                    <Switch id="email-news" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-assignments">Assignment Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications for assignment deadlines
                      </p>
                    </div>
                    <Switch id="push-assignments" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-study">Study Session Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications for upcoming study sessions
                      </p>
                    </div>
                    <Switch id="push-study" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-messages">Chat Messages</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications for new AI chatbot responses
                      </p>
                    </div>
                    <Switch id="push-messages" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Sounds</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sound-enabled">Enable Sounds</Label>
                      <p className="text-sm text-muted-foreground">Play sounds for notifications and alerts</p>
                    </div>
                    <Switch id="sound-enabled" defaultChecked />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="sound-volume">Sound Volume</Label>
                    <div className="flex items-center gap-2">
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                      <Input id="sound-volume" type="range" className="h-2" defaultValue={75} />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gradient-primary">
                <Bell className="mr-2 h-4 w-4" />
                Save Notification Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Study Preferences */}
        <TabsContent value="study">
          <Card>
            <CardHeader>
              <CardTitle>Study Preferences</CardTitle>
              <CardDescription>Customize your study experience and schedule</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Study Schedule</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label>Preferred Study Time</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="morning"
                          name="study-time"
                          className="h-4 w-4 accent-primary"
                          defaultChecked
                        />
                        <Label htmlFor="morning">Morning</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="afternoon" name="study-time" className="h-4 w-4 accent-primary" />
                        <Label htmlFor="afternoon">Afternoon</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="evening" name="study-time" className="h-4 w-4 accent-primary" />
                        <Label htmlFor="evening">Evening</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="study-goal">Daily Study Goal (hours)</Label>
                    <Select defaultValue="2">
                      <SelectTrigger id="study-goal">
                        <SelectValue placeholder="Select hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour</SelectItem>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="3">3 hours</SelectItem>
                        <SelectItem value="4">4 hours</SelectItem>
                        <SelectItem value="5">5+ hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="study-days">Study Days</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <div
                          key={day}
                          className="h-10 w-10 rounded-full flex items-center justify-center border cursor-pointer hover:bg-primary/10 hover:border-primary"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Learning Preferences</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label>Preferred Learning Styles</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="videos" className="h-4 w-4 accent-primary" defaultChecked />
                        <Label htmlFor="videos">Video lectures</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="reading" className="h-4 w-4 accent-primary" defaultChecked />
                        <Label htmlFor="reading">Reading materials</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="exercises" className="h-4 w-4 accent-primary" defaultChecked />
                        <Label htmlFor="exercises">Practice exercises</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="summaries" className="h-4 w-4 accent-primary" />
                        <Label htmlFor="summaries">Summaries</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="study-session">Study Session Duration</Label>
                    <Select defaultValue="25">
                      <SelectTrigger id="study-session">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="25">25 minutes (Pomodoro)</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="break-reminder">Break Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive reminders to take breaks during long study sessions
                      </p>
                    </div>
                    <Switch id="break-reminder" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Privacy</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="share-progress">Share Progress</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow the platform to use your progress data for personalized recommendations
                      </p>
                    </div>
                    <Switch id="share-progress" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ai-data">AI Learning</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow the AI to learn from your interactions to improve recommendations
                      </p>
                    </div>
                    <Switch id="ai-data" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gradient-primary">
                <Shield className="mr-2 h-4 w-4" />
                Save Study Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
