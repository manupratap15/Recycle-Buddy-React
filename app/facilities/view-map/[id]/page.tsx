"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Recycle, ArrowLeft, MapPin } from "lucide-react"

export default function ViewMapPage({ params }: { params: { id: string } }) {
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  // In a real implementation, you would fetch the report details from your database
  const report = {
    id: params.id,
    imageUrl: "/placeholder.svg?height=300&width=500",
    location: "123 Main St, Anytown",
    coordinates: "40.7128, -74.0060", // Example coordinates (New York City)
    description: "Plastic waste and cardboard boxes",
    category: "General Waste",
    status: "pending",
    user: "john.doe@example.com",
    submittedAt: "2024-04-28",
    distance: "1.2 miles",
  }

  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

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
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link href="/facilities">
              <Button variant="ghost" className="pl-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Available Pickups
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
            <Card>
              <CardHeader>
                <CardTitle>Report #{report.id}</CardTitle>
                <CardDescription>Waste details and location</CardDescription>
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
                  <h3 className="font-medium">Coordinates</h3>
                  <p className="text-sm text-gray-500">{report.coordinates}</p>
                </div>
                <div>
                  <h3 className="font-medium">Description</h3>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
                <div>
                  <h3 className="font-medium">Reported</h3>
                  <p className="text-sm text-gray-500">{report.submittedAt}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/facilities/schedule/${report.id}`} className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Schedule Pickup</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location Map</CardTitle>
                <CardDescription>Waste location and directions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-md border bg-gray-100 relative">
                  {!isMapLoaded ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                    </div>
                  ) : (
                    <>
                      {/* This would be replaced with an actual map component in a real implementation */}
                      <div className="absolute inset-0 bg-gray-200">
                        <img
                          src="/placeholder.svg?height=600&width=800"
                          alt="Map placeholder"
                          className="h-full w-full object-cover opacity-50"
                        />
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-green-600 rounded-full h-8 w-8 flex items-center justify-center shadow-lg">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md">
                        <p className="text-sm font-medium">{report.location}</p>
                        <p className="text-xs text-gray-500">{report.coordinates}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <h3 className="font-medium mb-2">Directions</h3>
                  <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
                    <li>Head north on Current St toward Main Ave</li>
                    <li>Turn right onto Oak St</li>
                    <li>Continue straight for 0.5 miles</li>
                    <li>Turn left onto Pine Rd</li>
                    <li>Destination will be on your right</li>
                  </ol>
                  <p className="mt-4 text-sm text-gray-500">Estimated travel time: 15 minutes ({report.distance})</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
