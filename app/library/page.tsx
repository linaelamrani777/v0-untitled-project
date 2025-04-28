"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Clock, Search } from "lucide-react"

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const books = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      category: "Computer Science",
      available: true,
      image: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 2,
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      category: "Mathematics",
      available: true,
      image: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 3,
      title: "Physics for Scientists and Engineers",
      author: "Serway & Jewett",
      category: "Physics",
      available: false,
      image: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 4,
      title: "Organic Chemistry",
      author: "Paula Y. Bruice",
      category: "Chemistry",
      available: true,
      image: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 5,
      title: "Data Structures and Algorithms in Python",
      author: "Michael T. Goodrich",
      category: "Computer Science",
      available: true,
      image: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 6,
      title: "Linear Algebra and Its Applications",
      author: "Gilbert Strang",
      category: "Mathematics",
      available: false,
      image: "/placeholder.svg?height=120&width=80",
    },
  ]

  const borrowedBooks = [
    {
      id: 7,
      title: "Machine Learning: A Probabilistic Perspective",
      author: "Kevin P. Murphy",
      dueDate: "June 10, 2024",
      image: "/placeholder.svg?height=120&width=80",
    },
    {
      id: 8,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell & Peter Norvig",
      dueDate: "June 15, 2024",
      image: "/placeholder.svg?height=120&width=80",
    },
  ]

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Library</h1>
        <p className="text-muted-foreground">Search and browse books available in the university library</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title, author, or subject..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>Search</Button>
      </div>

      <Tabs defaultValue="browse">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="browse">Browse Books</TabsTrigger>
          <TabsTrigger value="borrowed">Borrowed Books</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>
        <TabsContent value="browse" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book) => (
              <Card key={book.id} className="hover-scale">
                <CardContent className="p-0">
                  <div className="flex gap-4 p-4">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="h-[120px] w-[80px] rounded-md object-cover shadow-md"
                    />
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-semibold line-clamp-2">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {book.category}
                        </Badge>
                        <Badge
                          variant={book.available ? "outline" : "secondary"}
                          className={book.available ? "bg-green-100 border-green-300 text-green-700" : ""}
                        >
                          {book.available ? "Available" : "Unavailable"}
                        </Badge>
                      </div>
                      <div className="mt-auto pt-2">
                        <Button
                          size="sm"
                          className={`w-full ${book.available ? "gradient-success" : "bg-gray-200 text-gray-500"}`}
                          disabled={!book.available}
                        >
                          {book.available ? "Reserve" : "Join Waitlist"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="borrowed" className="space-y-4">
          {borrowedBooks.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {borrowedBooks.map((book) => (
                <Card key={book.id} className="hover-scale">
                  <CardContent className="p-0">
                    <div className="flex gap-4 p-4">
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        className="h-[120px] w-[80px] rounded-md object-cover shadow-md"
                      />
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-semibold line-clamp-2">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex items-center text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                            <Clock className="mr-1 h-3 w-3" />
                            Due: {book.dueDate}
                          </div>
                        </div>
                        <div className="mt-auto pt-2">
                          <Button size="sm" className="w-full gradient-info" variant="outline">
                            Renew
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <BookOpen className="h-10 w-10 text-muted-foreground" />
                <h3 className="mt-4 text-xl font-medium">No books borrowed</h3>
                <p className="text-center text-muted-foreground">You haven't borrowed any books yet.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="recommended" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended for Your Courses</CardTitle>
              <CardDescription>Based on your enrolled subjects and study patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-medium">Computer Science</h3>
                  <Separator className="mb-3 bg-primary/30" />
                  <div className="flex gap-4">
                    <img
                      src="/placeholder.svg?height=120&width=80"
                      alt="Book cover"
                      className="h-[120px] w-[80px] rounded-md object-cover shadow-md"
                    />
                    <div>
                      <h4 className="font-medium">Clean Code: A Handbook of Agile Software Craftsmanship</h4>
                      <p className="text-sm text-muted-foreground">Robert C. Martin</p>
                      <p className="mt-2 text-sm">
                        A must-read for programming students, focusing on principles of clean code that will improve
                        your programming skills.
                      </p>
                      <Button size="sm" className="mt-2 gradient-primary">
                        Reserve
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Mathematics</h3>
                  <Separator className="mb-3 bg-accent/30" />
                  <div className="flex gap-4">
                    <img
                      src="/placeholder.svg?height=120&width=80"
                      alt="Book cover"
                      className="h-[120px] w-[80px] rounded-md object-cover shadow-md"
                    />
                    <div>
                      <h4 className="font-medium">A First Course in Probability</h4>
                      <p className="text-sm text-muted-foreground">Sheldon Ross</p>
                      <p className="mt-2 text-sm">
                        Recommended for your statistics course, with clear explanations and examples.
                      </p>
                      <Button size="sm" className="mt-2 gradient-secondary">
                        Reserve
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Recommendations
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
