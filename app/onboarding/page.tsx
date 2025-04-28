import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="rounded-md gradient-primary p-2 text-white">
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
      </Link>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Personalize Your Experience</CardTitle>
          <CardDescription>Help us create a personalized study plan tailored to your needs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>When do you prefer to study?</Label>
            <RadioGroup defaultValue="morning" className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="morning" id="morning" />
                <Label htmlFor="morning">Morning</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="afternoon" id="afternoon" />
                <Label htmlFor="afternoon">Afternoon</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="evening" id="evening" />
                <Label htmlFor="evening">Evening</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Daily study goal (in hours)</Label>
            <Select defaultValue="2">
              <SelectTrigger>
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

          <div className="space-y-2">
            <Label>Preferred learning styles</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="videos" />
                <Label htmlFor="videos">Video lectures</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="reading" />
                <Label htmlFor="reading">Reading materials</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="exercises" />
                <Label htmlFor="exercises">Practice exercises</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="summaries" />
                <Label htmlFor="summaries">Summaries</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Subjects you are enrolled in</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="math" />
                <Label htmlFor="math">Mathematics</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="cs" />
                <Label htmlFor="cs">Computer Science</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="physics" />
                <Label htmlFor="physics">Physics</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="chemistry" />
                <Label htmlFor="chemistry">Chemistry</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="biology" />
                <Label htmlFor="biology">Biology</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="literature" />
                <Label htmlFor="literature">Literature</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="other-subjects">Other subjects (comma separated)</Label>
            <Input id="other-subjects" placeholder="Economics, History, etc." />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full gradient-primary" asChild>
            <Link href="/dashboard">Complete Setup</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
