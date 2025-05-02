import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Recycle, Calendar, MapPin, CheckCircle, Truck, Clock } from "lucide-react"

export default function ScheduledPickupsPage() {
  // In a real implementation, this data would come from your database
  const scheduledPickups = [
    {
      id: "1",
      imageUrl: "/placeholder.svg?height=200&width=300",
      location: "123 Main St, Anytown",
      coordinates: "40.7128, -74.0060",
      description: "Plastic waste and cardboard boxes",
      category: "General Waste",
      status: "scheduled",
      date: "2024-05-05",
      time: "10:00 AM - 12:00 PM",
      vehicleType: "Small Truck",
      user: "john.doe@example.com",
      distance: "1.2 miles",
    },
    {
      id: "3",
      imageUrl: "/placeholder.svg?height=200&width=300",
      location: "789 Pine St, Nowhere",
      coordinates: "40.7023, -74.0156",
      description: "Garden waste and old furniture",
      category: "General Waste",
      status: "completed",
      date: "2024-04-20",
      time: "2:00 PM - 4:00 PM",
      vehicleType: "Large Truck",
      user: "bob.johnson@example.com",
      distance: "0.8 miles",
    },
    {
      id: "2",
      imageUrl: "/placeholder.svg?height=200&width=300",
      location: "456 Oak Ave, Somewhere",
      coordinates: "40.7282, -74.0776",
      description: "Old computers and electronic devices",
      category: "E-Waste",
      status: "scheduled",
      date: "2024-05-10",
      time: "1:00 PM - 3:00 PM",
      vehicleType: "Specialized Vehicle (E-Waste)",
      user: "jane.smith@example.com",
      distance: "2.5 miles",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge className="bg-blue-500 flex items-center gap-1">
            <Calendar className="h-3 w-3" /> Scheduled
          </Badge>
        )
      case "completed":
        return (
          <Badge className="bg-green-500 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> Completed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
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
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/facilities" className="text-sm font-medium hover:underline underline-offset-4">
            Available Pickups
          </Link>
          <Link href="/facilities/scheduled" className="text-sm font-medium hover:underline underline-offset-4">
            My Scheduled Pickups
          </Link>
          <Link href="/facilities/profile" className="text-sm font-medium hover:underline underline-offset-4">
            Facility Profile
          </Link>
          <Link href="/logout" className="text-sm font-medium hover:underline underline-offset-4">
            Logout
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">My Scheduled Pickups</h1>
              <p className="text-gray-500">Manage your scheduled waste pickups</p>
            </div>
            <Link href="/facilities">
              <Button className="bg-green-600 hover:bg-green-700">Find More Pickups</Button>
            </Link>
          </div>

          <Tabs defaultValue="scheduled" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="scheduled" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {scheduledPickups
                  .filter((pickup) => pickup.status === "scheduled")
                  .map((pickup) => (
                    <Card key={pickup.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={pickup.imageUrl || "/placeholder.svg"}
                          alt={`Waste pickup ${pickup.id}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">Pickup #{pickup.id}</CardTitle>
                          <Badge className="bg-green-100 text-green-800">{pickup.category}</Badge>
                        </div>
                        <CardDescription>{pickup.location}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-4">{pickup.description}</p>

                        <div className="p-3 bg-blue-50 rounded-md text-sm mb-4">
                          <div className="flex items-center gap-1 font-medium">
                            <Calendar className="h-4 w-4" />
                            <span>{pickup.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Clock className="h-4 w-4" />
                            <span>{pickup.time}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Truck className="h-4 w-4" />
                            <span>{pickup.vehicleType}</span>
                          </div>
                        </div>

                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>{pickup.distance} away</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex gap-2">
                        <Link href={`/facilities/view-map/${pickup.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View on Map
                          </Button>
                        </Link>
                        <Link href={`/facilities/complete/${pickup.id}`} className="flex-1">
                          <Button className="w-full bg-green-600 hover:bg-green-700">Mark Complete</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {scheduledPickups
                  .filter((pickup) => pickup.status === "completed")
                  .map((pickup) => (
                    <Card key={pickup.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={pickup.imageUrl || "/placeholder.svg"}
                          alt={`Waste pickup ${pickup.id}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">Pickup #{pickup.id}</CardTitle>
                          <Badge className="bg-green-100 text-green-800">{pickup.category}</Badge>
                        </div>
                        <CardDescription>{pickup.location}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm mb-4">{pickup.description}</p>

                        <div className="p-3 bg-green-50 rounded-md text-sm mb-4">
                          <div className="flex items-center gap-1 font-medium">
                            <CheckCircle className="h-4 w-4" />
                            <span>Completed on {pickup.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Clock className="h-4 w-4" />
                            <span>{pickup.time}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Truck className="h-4 w-4" />
                            <span>{pickup.vehicleType}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Link href={`/facilities/report/${pickup.id}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            View Report
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
