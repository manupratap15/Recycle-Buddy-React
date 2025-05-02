"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Recycle, ArrowLeft, Calendar, Clock, Loader2, Truck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FacilitySchedulePickupPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [date, setDate] = useState("")
  const [timeFrom, setTimeFrom] = useState("")
  const [timeTo, setTimeTo] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [notes, setNotes] = useState("")

  // In a real implementation, you would fetch the report details from your database
  const report = {
    id: params.id,
    imageUrl: "/placeholder.svg?height=300&width=500",
    location: "123 Main St, Anytown",
    coordinates: "40.7128, -74.0060",
    description: "Plastic waste and cardboard boxes",
    category: "General Waste",
    status: "pending",
    user: "john.doe@example.com",
    submittedAt: "2024-04-28",
    distance: "1.2 miles",
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !timeFrom || !timeTo || !vehicleType) {
      alert("Please fill in all required fields")
      return
    }

    setIsLoading(true)

    try {
      // In a real implementation, you would update the report in your database
      // and send a notification to the user
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      router.push("/facilities/scheduled")
    } catch (error) {
      console.error("Error scheduling pickup:", error)
      alert("Failed to schedule pickup. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Recycle className="h-6 w-6 text-green-600" />
          <span className="text-lg">WasteConnect</span>
          <Badge className="ml-2">Facility Portal</Badge>
        </Link>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/facilities">
              <Button variant="ghost" className="pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Available Pickups
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Report #{report.id}</CardTitle>
                <CardDescription>View waste report details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-md border">
                  <img
                    src={report.imageUrl || "/placeholder.svg"}
                    alt={`Waste report ${report.id}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Category</h3>
                  <Badge className="mt-1 bg-green-100 text-green-800">{report.category}</Badge>
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-gray-500">{report.location}</p>
                </div>
                <div>
                  <h3 className="font-medium">Description</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
                <div>
                  <h3 className="font-medium">Distance</h3>
                  <p className="text-sm text-gray-500">{report.distance} from your facility</p>
                </div>
                <div>
                  <h3 className="font-medium">Reported</h3>
                  <p className="text-sm text-gray-500">{report.submittedAt}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Schedule Pickup</CardTitle>
                <CardDescription>Set date and time for waste collection</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Pickup Date
                    </Label>
                    <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="timeFrom" className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        From
                      </Label>
                      <Input
                        id="timeFrom"
                        type="time"
                        value={timeFrom}
                        onChange={(e) => setTimeFrom(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeTo">To</Label>
                      <Input
                        id="timeTo"
                        type="time"
                        value={timeTo}
                        onChange={(e) => setTimeTo(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicleType" className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Vehicle Type
                    </Label>
                    <Select value={vehicleType} onValueChange={setVehicleType} required>
                      <SelectTrigger id="vehicleType">
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small-truck">Small Truck</SelectItem>
                        <SelectItem value="large-truck">Large Truck</SelectItem>
                        <SelectItem value="specialized">Specialized Vehicle (E-Waste)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special instructions for pickup"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Scheduling...
                      </>
                    ) : (
                      "Schedule Pickup"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
