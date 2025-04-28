"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Clock,
  Download,
  FileText,
  Filter,
  Folder,
  Grid3X3,
  List,
  MoreHorizontal,
  Plus,
  Search,
  Share2,
  Star,
  Tag,
  Trash2,
  Upload,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MaterialsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const materials = [
    {
      id: 1,
      title: "Calculus Lecture Notes",
      type: "PDF",
      subject: "Mathematics",
      size: "2.4 MB",
      date: "May 15, 2024",
      starred: true,
    },
    {
      id: 2,
      title: "Data Structures Cheat Sheet",
      type: "PDF",
      subject: "Computer Science",
      size: "1.2 MB",
      date: "May 10, 2024",
      starred: false,
    },
    {
      id: 3,
      title: "Physics Formulas",
      type: "PDF",
      subject: "Physics",
      size: "3.1 MB",
      date: "May 8, 2024",
      starred: true,
    },
    {
      id: 4,
      title: "Programming Assignment 3",
      type: "ZIP",
      subject: "Computer Science",
      size: "4.5 MB",
      date: "May 5, 2024",
      starred: false,
    },
    {
      id: 5,
      title: "Chemistry Lab Report",
      type: "DOCX",
      subject: "Chemistry",
      size: "1.8 MB",
      date: "May 3, 2024",
      starred: false,
    },
    {
      id: 6,
      title: "Linear Algebra Slides",
      type: "PPTX",
      subject: "Mathematics",
      size: "5.2 MB",
      date: "April 28, 2024",
      starred: false,
    },
  ]

  const notes = [
    {
      id: 1,
      title: "Calculus Integration Techniques",
      subject: "Mathematics",
      date: "May 16, 2024",
      excerpt: "Notes on various integration techniques including substitution, parts, and partial fractions...",
    },
    {
      id: 2,
      title: "Binary Search Trees",
      subject: "Computer Science",
      date: "May 12, 2024",
      excerpt: "Implementation details and complexity analysis of binary search trees...",
    },
    {
      id: 3,
      title: "Electromagnetic Fields",
      subject: "Physics",
      date: "May 9, 2024",
      excerpt: "Maxwell's equations and their applications in electromagnetic field theory...",
    },
  ]

  const flashcards = [
    {
      id: 1,
      title: "Calculus Definitions",
      subject: "Mathematics",
      count: 24,
      progress: 75,
    },
    {
      id: 2,
      title: "Programming Concepts",
      subject: "Computer Science",
      count: 36,
      progress: 60,
    },
    {
      id: 3,
      title: "Physics Laws",
      subject: "Physics",
      count: 18,
      progress: 90,
    },
  ]

  const folders = [
    { id: 1, name: "Mathematics", count: 12 },
    { id: 2, name: "Computer Science", count: 15 },
    { id: 3, name: "Physics", count: 8 },
    { id: 4, name: "Chemistry", count: 5 },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-10 w-10 text-red-500" />
      case "DOCX":
        return <FileText className="h-10 w-10 text-blue-500" />
      case "PPTX":
        return <FileText className="h-10 w-10 text-orange-500" />
      case "ZIP":
        return <FileText className="h-10 w-10 text-purple-500" />
      default:
        return <FileText className="h-10 w-10 text-gray-500" />
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Materials</h1>
          <p className="text-muted-foreground">Manage your notes, documents, and flashcards</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="gradient-primary">
            <Plus className="mr-2 h-4 w-4" />
            New Material
          </Button>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Folders</h3>
                <div className="space-y-1">
                  {folders.map((folder) => (
                    <Button key={folder.id} variant="ghost" className="w-full justify-start">
                      <Folder className="mr-2 h-4 w-4 text-primary" />
                      {folder.name}
                      <Badge variant="outline" className="ml-auto">
                        {folder.count}
                      </Badge>
                    </Button>
                  ))}
                  <Button variant="ghost" className="w-full justify-start text-primary">
                    <Plus className="mr-2 h-4 w-4" />
                    New Folder
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer">
                    <Tag className="mr-1 h-3 w-3" />
                    Exam
                  </Badge>
                  <Badge className="bg-accent/10 text-accent hover:bg-accent/20 cursor-pointer">
                    <Tag className="mr-1 h-3 w-3" />
                    Important
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer">
                    <Tag className="mr-1 h-3 w-3" />
                    Lecture
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 cursor-pointer">
                    <Tag className="mr-1 h-3 w-3" />
                    Assignment
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-primary">
                    <Plus className="mr-1 h-3 w-3" />
                    Add Tag
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Quick Filters</h3>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <Star className="mr-2 h-4 w-4 text-amber-500" />
                    Starred
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Clock className="mr-2 h-4 w-4 text-blue-500" />
                    Recent
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium">Storage</h3>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-full w-[35%] rounded-full gradient-primary"></div>
                  </div>
                  <p className="text-xs text-muted-foreground">3.5 GB used of 10 GB</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search materials..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  className={viewMode === "grid" ? "bg-muted" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={viewMode === "list" ? "bg-muted" : ""}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="files" className="space-y-4">
            <TabsList>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
            </TabsList>

            <TabsContent value="files">
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {materials.map((material) => (
                    <Card key={material.id} className="hover-scale">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center p-4">
                          {getFileIcon(material.type)}
                          <h3 className="mt-2 font-medium">{material.title}</h3>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Badge variant="outline" className="mr-2">
                              {material.type}
                            </Badge>
                            <span>{material.size}</span>
                          </div>
                          <Badge className="mt-2 bg-primary/10 text-primary border-primary/20">
                            {material.subject}
                          </Badge>
                          <div className="flex items-center justify-between w-full mt-4">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <div className="flex items-center">
                              {material.starred && (
                                <Button variant="ghost" size="sm" className="text-amber-500">
                                  <Star className="h-4 w-4 fill-amber-500" />
                                </Button>
                              )}
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Share2 className="mr-2 h-4 w-4" />
                                    Share
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Star className="mr-2 h-4 w-4" />
                                    {material.starred ? "Unstar" : "Star"}
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <div className="grid grid-cols-12 gap-2 p-3 font-medium text-sm bg-muted">
                        <div className="col-span-5">Name</div>
                        <div className="col-span-2">Type</div>
                        <div className="col-span-2">Subject</div>
                        <div className="col-span-2">Date</div>
                        <div className="col-span-1">Actions</div>
                      </div>
                      {materials.map((material) => (
                        <div key={material.id} className="grid grid-cols-12 gap-2 p-3 items-center hover:bg-muted/50">
                          <div className="col-span-5 flex items-center">
                            {getFileIcon(material.type.toLowerCase())}
                            <div className="ml-3">
                              <div className="font-medium">{material.title}</div>
                              <div className="text-xs text-muted-foreground">{material.size}</div>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Badge variant="outline">{material.type}</Badge>
                          </div>
                          <div className="col-span-2">
                            <Badge className="bg-primary/10 text-primary border-primary/20">{material.subject}</Badge>
                          </div>
                          <div className="col-span-2 text-sm text-muted-foreground">{material.date}</div>
                          <div className="col-span-1 flex items-center justify-end">
                            {material.starred && (
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-amber-500">
                                <Star className="h-4 w-4 fill-amber-500" />
                              </Button>
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Share2 className="mr-2 h-4 w-4" />
                                  Share
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Star className="mr-2 h-4 w-4" />
                                  {material.starred ? "Unstar" : "Star"}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="notes">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {notes.map((note) => (
                  <Card key={note.id} className="hover-scale">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{note.title}</CardTitle>
                          <CardDescription>{note.date}</CardDescription>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">{note.subject}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">{note.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Export
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardFooter>
                  </Card>
                ))}
                <Card className="border-dashed hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                  <CardContent className="flex flex-col items-center justify-center h-full py-8">
                    <Plus className="h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 font-medium">Create New Note</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="flashcards">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {flashcards.map((deck) => (
                  <Card key={deck.id} className="hover-scale">
                    <CardHeader>
                      <CardTitle>{deck.title}</CardTitle>
                      <CardDescription>{deck.count} cards</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{deck.progress}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-full rounded-full gradient-primary"
                            style={{ width: `${deck.progress}%` }}
                          ></div>
                        </div>
                        <Badge className="mt-2 bg-primary/10 text-primary border-primary/20">{deck.subject}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button className="gradient-primary">Study Now</Button>
                      <Button variant="outline" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                <Card className="border-dashed hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors">
                  <CardContent className="flex flex-col items-center justify-center h-full py-8">
                    <Plus className="h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 font-medium">Create New Flashcard Deck</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
