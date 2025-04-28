"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, FileUp, Send } from "lucide-react"

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI study assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { role: "user", content: input }])

      // Simulate AI response
      setTimeout(() => {
        let response
        if (input.toLowerCase().includes("summarize") || input.toLowerCase().includes("summary")) {
          response =
            "Here's a summary of the key concepts from your course materials: \n\n1. The fundamental theorem of calculus establishes the relationship between differentiation and integration.\n\n2. Newton's laws of motion describe the relationship between a body and the forces acting upon it.\n\n3. Data structures are specialized formats for organizing and storing data to enable efficient access and modification."
        } else if (input.toLowerCase().includes("recommend") || input.toLowerCase().includes("suggestion")) {
          response =
            "Based on your current progress, I recommend focusing on these areas:\n\n1. Practice more calculus integration problems\n\n2. Review the chapter on electromagnetic fields\n\n3. Complete the programming exercises on recursive algorithms"
        } else {
          response =
            "I've analyzed your question and found relevant information in your course materials. The concept you're asking about is covered in Chapter 4 of your textbook. The key points to understand are the fundamental principles and how they apply in different contexts."
        }

        setMessages((prev) => [...prev, { role: "assistant", content: response }])
      }, 1000)

      setInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Study Chatbot</h1>
        <p className="text-muted-foreground">Ask questions about your course materials and get instant help</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="h-[calc(100vh-220px)] flex flex-col">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
              <CardTitle>Study Assistant</CardTitle>
              <CardDescription>Powered by AI and your course materials</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex max-w-[80%] items-start gap-3 rounded-lg p-3 ${
                        message.role === "user" ? "gradient-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <Avatar className="h-8 w-8 border-2 border-white">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback className="gradient-secondary text-white">AI</AvatarFallback>
                        </Avatar>
                      )}
                      <div className="text-sm">
                        {message.content.split("\n\n").map((paragraph, i) => (
                          <p key={i} className={i > 0 ? "mt-2" : ""}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-3">
              <div className="flex w-full items-center gap-2">
                <Button variant="outline" size="icon" className="text-accent hover:text-accent hover:bg-accent/10">
                  <FileUp className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Ask a question about your course materials..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button size="icon" className="gradient-primary">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="materials">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            </TabsList>
            <TabsContent value="materials" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Uploaded Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 rounded-lg border p-2 hover-scale">
                    <div className="rounded-full gradient-primary p-1.5">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">Mathematics_Lecture_Notes.pdf</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-2 hover-scale">
                    <div className="rounded-full gradient-secondary p-1.5">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">Physics_TD3.pdf</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-2 hover-scale">
                    <div className="rounded-full gradient-accent p-1.5">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">CS_Programming_TP4.pdf</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    <FileUp className="mr-2 h-4 w-4" />
                    Upload New Material
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="suggestions" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Try Asking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-sm"
                    onClick={() => {
                      setInput("Summarize TD3 for math")
                    }}
                  >
                    Summarize TD3 for math
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-sm"
                    onClick={() => {
                      setInput("What are the key concepts in TP4?")
                    }}
                  >
                    What are the key concepts in TP4?
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-sm"
                    onClick={() => {
                      setInput("Recommend what I should study next")
                    }}
                  >
                    Recommend what I should study next
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
