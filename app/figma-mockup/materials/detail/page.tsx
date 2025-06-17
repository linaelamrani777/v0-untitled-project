"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock,
  Download,
  Edit,
  FileText,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  Plus,
  Save,
  Share2,
  Star,
  ThumbsUp,
} from "lucide-react"
import Link from "next/link"

export default function MaterialDetailPage() {
  const [isStarred, setIsStarred] = useState(true)
  const [showNoteForm, setShowNoteForm] = useState(false)
  const [activeTab, setActiveTab] = useState("preview")

  // Sample material data
  const material = {
    id: 1,
    title: "Calculus Lecture Notes",
    type: "PDF",
    subject: "Mathematics",
    size: "2.4 MB",
    date: "May 15, 2024",
    author: "Prof. Johnson",
    description:
      "Comprehensive lecture notes covering integration techniques, including substitution, integration by parts, and partial fractions. These notes also include example problems and step-by-step solutions.",
    pages: 24,
    tags: ["Calculus", "Integration", "Lecture Notes", "Exam Prep"],
  }

  // Sample notes data
  const notes = [
    {
      id: 1,
      content:
        "The substitution method is particularly useful when dealing with composite functions. Remember to adjust the limits of integration when using this method.",
      timestamp: "May 16, 2024 • 10:23 AM",
      page: 5,
    },
    {
      id: 2,
      content:
        "Integration by parts formula: ∫u(x)v'(x)dx = u(x)v(x) - ∫v(x)u'(x)dx. Choose u and v carefully to simplify the integral.",
      timestamp: "May 16, 2024 • 11:45 AM",
      page: 12,
    },
    {
      id: 3,
      content:
        "For partial fractions, remember to factor the denominator completely and set up the decomposition correctly.",
      timestamp: "May 17, 2024 • 2:30 PM",
      page: 18,
    },
  ]

  // Sample related materials
  const relatedMaterials = [
    {
      id: 2,
      title: "Calculus Practice Problems",
      type: "PDF",
      subject: "Mathematics",
    },
    {
      id: 3,
      title: "Integration Techniques Video",
      type: "MP4",
      subject: "Mathematics",
    },
    {
      id: 4,
      title: "Calculus Exam Review",
      type: "PDF",
      subject: "Mathematics",
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <Button variant="ghost" className="mb-2" asChild>
          <Link href="/figma-mockup/materials">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Materials
          </Link>
        </Button>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">{material.title}</h1>
              <Button
                variant="ghost"
                size="icon"
                className={isStarred ? "text-amber-500" : ""}
                onClick={() => setIsStarred(!isStarred)}
              >
                <Star className={`h-5 w-5 ${isStarred ? "fill-amber-500" : ""}`} />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Badge className="bg-primary/10 text-primary border-primary/20">{material.subject}</Badge>
              <Badge variant="outline">{material.type}</Badge>
              <span className="text-sm">
                <Clock className="inline h-3 w-3 mr-1" />
                {material.date}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button className="gradient-primary">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>


                <TabsContent value="preview" className="mt-0">
                  <div className="aspect-[3/4] bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    <div className="text-center p-6">
                      <FileText className="h-16 w-16 mx-auto text-primary/50 mb-4" />
                      <h3 className="text-lg font-medium">PDF Preview</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Preview is available for the first 5 pages of this document
                      </p>
                      <div className="bg-white rounded-md border p-6 max-w-md mx-auto text-left">
                        <h2 className="text-xl font-bold text-center mb-4">Integration Techniques</h2>
                        <p className="mb-2">This chapter covers the following integration techniques:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          <li>Substitution Method</li>
                          <li>Integration by Parts</li>
                          <li>Partial Fractions</li>
                          <li>Trigonometric Substitution</li>
                        </ul>
                        <p>
                          Each technique will be explained with examples and practice problems to help you master these
                          important calculus concepts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Previous Page
                      </Button>
                      <Button variant="outline" size="sm">
                        Next Page
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">Page 1 of {material.pages}</div>
                  </div>
                </TabsContent>

                <TabsContent value="notes" className="mt-0 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Your Notes</h3>
                    <Button size="sm" onClick={() => setShowNoteForm(!showNoteForm)}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Note
                    </Button>
                  </div>

                  {showNoteForm && (
                      <Card>
                        <CardContent className="p-4 space-y-4">
                          <div className="space-y-2">
                            <Textarea placeholder="Write your note here..." className="min-h-[100px]" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Input type="number" placeholder="Page number" className="w-32" />
                            <Button className="gradient-primary">
                              <Save className="mr-2 h-4 w-4" />
                              Save Note
                            </Button>
                            <Button variant="outline" onClick={() => setShowNoteForm(false)}>
                              Cancel
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                  )}

                  {notes.map((note) => (
                      <Card key={note.id} className="hover-scale">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="text-sm">{note.content}</p>
                              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3 mr-1" />
                                {note.timestamp}
                                <Badge variant="outline" className="ml-2">
                                  Page {note.page}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </TabsContent>

                <TabsContent value="details" className="mt-0 space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Description</h3>
                      <p className="text-sm text-muted-foreground mt-1">{material.description}</p>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium">File Type</h4>
                        <p className="text-sm text-muted-foreground">{material.type}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Size</h4>
                        <p className="text-sm text-muted-foreground">{material.size}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Pages</h4>
                        <p className="text-sm text-muted-foreground">{material.pages}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Author</h4>
                        <p className="text-sm text-muted-foreground">{material.author}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Upload Date</h4>
                        <p className="text-sm text-muted-foreground">{material.date}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Subject</h4>
                        <p className="text-sm text-muted-foreground">{material.subject}</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium">Tags</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {material.tags.map((tag) => (
                            <Badge key={tag} className="bg-primary/10 text-primary border-primary/20">
                              {tag}
                            </Badge>
                        ))}
                        <Button variant="ghost" size="sm" className="text-primary">
                          <Plus className="mr-1 h-3 w-3" />
                          Add Tag
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>

          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Discussion</CardTitle>
              <CardDescription>Ask questions or discuss this material with classmates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input placeholder="Add a comment or question..." className="flex-1" />
                <Button className="gradient-primary">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Post
                </Button>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                    <span className="font-medium text-primary">AS</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Alex Smith</h4>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-sm mt-1">
                      Can someone explain the difference between substitution and integration by parts? When should I
                      use each method?
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <Button variant="ghost" size="sm" className="h-8 text-xs">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        Like (3)
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 text-xs">
                        <MessageSquare className="mr-1 h-3 w-3" />
                        Reply
                      </Button>
                    </div>

                    <div className="pl-6 mt-4 border-l-2 border-muted">
                      <div className="flex gap-4">
                        <div className="rounded-full bg-secondary/10 h-8 w-8 flex items-center justify-center">
                          <span className="font-medium text-secondary text-xs">JD</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-sm">John Doe</h4>
                            <span className="text-xs text-muted-foreground">1 day ago</span>
                          </div>
                          <p className="text-sm mt-1">
                            Use substitution when you can identify a composite function. Use integration by parts when
                            you have a product of functions and one of them is easily differentiable while the other is
                            easily integrable.
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <Button variant="ghost" size="sm" className="h-8 text-xs">
                              <ThumbsUp className="mr-1 h-3 w-3" />
                              Like (2)
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 text-xs">
                              <MessageSquare className="mr-1 h-3 w-3" />
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Comments
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Related Materials</CardTitle>
              <CardDescription>Other materials you might find useful</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {relatedMaterials.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <div className="rounded-md bg-primary/10 p-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.title}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {item.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{item.subject}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View More
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study with AI</CardTitle>
              <CardDescription>Ask questions about this material</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4 bg-muted/30">
                <h4 className="font-medium mb-2">Suggested Questions</h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                    Explain integration by parts
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                    When to use partial fractions?
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                    Summarize key concepts
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Ask a question about this material..." />
                <Button className="gradient-primary">Ask</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Statistics</CardTitle>
              <CardDescription>Your interaction with this material</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm">Time Spent</div>
                <div className="font-medium">2h 15m</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Last Accessed</div>
                <div className="font-medium">Today, 10:23 AM</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Notes Created</div>
                <div className="font-medium">3</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Pages Read</div>
                <div className="font-medium">18 of 24</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Reading Progress</span>
                  <span>75%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-full w-[75%] rounded-full gradient-primary"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
