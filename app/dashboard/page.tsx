import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Recycle, Plus, Clock, CheckCircle, X } from "lucide-react"

export default function DashboardPage() {
  // In a real implementation, this data would come from your database
  const reports = [
    {
      id: "1",
      imageUrl: "/placeholder.svg?height=200&width=300",
      location: "123 Main St, Anytown",
      description: "Plastic waste and cardboard boxes",
      category: "General Waste",
      status: "scheduled",
      date: "2024-05-05",
      time: "10:00 AM - 12:00 PM",
      facility: "Green Recycling Co.",
    },
    {
      id: "2",
      imageUrl: "/placeholder.svg?height=200&width=300",
      location: "456 Oak Ave, Somewhere",
      description: "Electronic waste",
      category: "E-Waste",
      status: "pending",
      date: null,
      time: null,
      facility: null,
    },
    {
      id: "3",
      imageUrl: "/placeholder.svg?height=200&width=300",
      location: "789 Pine St, Nowhere",
      description: "Garden waste and old furniture",
      category: "General Waste",
      status: "completed",
      date: "2024-04-20",
      time: "2:00 PM - 4:00 PM",
      facility: "City Waste Management",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> Pending
          </Badge>
        )
      case "scheduled":
        return (
          <Badge className="bg-blue-500 flex items-center gap-1">
            <Clock className="h-3 w-3" /> Scheduled
          </Badge>
        )
      case "completed":
        return (
          <Badge className="bg-green-500 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <X className="h-3 w-3" /> Cancelled
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
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            Dashboard
          </Link>
          <Link href="/profile" className="text-sm font-medium hover:underline underline-offset-4">
            Profile
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
              <h1 className="text-2xl font-bold tracking-tight">My Waste Reports</h1>
              <p className="text-gray-500">Manage and track your waste collection requests</p>
            </div>
            <Link href="/upload">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="mr-2 h-4 w-4" />
                New Report
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reports.map((report) => (
                  <Card key={report.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={report.imageUrl || "/placeholder.svg"}
                        alt={`Waste report ${report.id}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">Report #{report.id}</CardTitle>
                        {getStatusBadge(report.status)}
                      </div>
                      <CardDescription>{report.location}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm">{report.description}</p>
                        <Badge variant="outline" className="bg-gray-100">
                          {report.category}
                        </Badge>
                      </div>
                      {report.status === "scheduled" && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-md text-sm">
                          <p className="font-medium">Pickup scheduled:</p>
                          <p>
                            {report.date} at {report.time}
                          </p>
                          <p>By: {report.facility}</p>
                        </div>
                      )}
                      {report.status === "completed" && (
                        <div className="mt-4 p-3 bg-green-50 rounded-md text-sm">
                          <p className="font-medium">Pickup completed:</p>
                          <p>
                            {report.date} at {report.time}
                          </p>
                          <p>By: {report.facility}</p>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Link href={`/reports/${report.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pending" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reports
                  .filter((r) => r.status === "pending")
                  .map((report) => (
                    <Card key={report.id} className="overflow-hidden">
                      {/* Same card content as above */}
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={report.imageUrl || "/placeholder.svg"}
                          alt={`Waste report ${report.id}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">Report #{report.id}</CardTitle>
                          {getStatusBadge(report.status)}
                        </div>
                        <CardDescription>{report.location}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm">{report.description}</p>
                          <Badge variant="outline" className="bg-gray-100">
                            {report.category}
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Link href={`/reports/${report.id}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="scheduled" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reports
                  .filter((r) => r.status === "scheduled")
                  .map((report) => (
                    <Card key={report.id} className="overflow-hidden">
                      {/* Same card content as above */}
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={report.imageUrl || "/placeholder.svg"}
                          alt={`Waste report ${report.id}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">Report #{report.id}</CardTitle>
                          {getStatusBadge(report.status)}
                        </div>
                        <CardDescription>{report.location}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm">{report.description}</p>
                          <Badge variant="outline" className="bg-gray-100">
                            {report.category}
                          </Badge>
                        </div>
                        {report.status === "scheduled" && (
                          <div className="mt-4 p-3 bg-blue-50 rounded-md text-sm">
                            <p className="font-medium">Pickup scheduled:</p>
                            <p>
                              {report.date} at {report.time}
                            </p>
                            <p>By: {report.facility}</p>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Link href={`/reports/${report.id}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reports
                  .filter((r) => r.status === "completed")
                  .map((report) => (
                    <Card key={report.id} className="overflow-hidden">
                      {/* Same card content as above */}
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={report.imageUrl || "/placeholder.svg"}
                          alt={`Waste report ${report.id}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">Report #{report.id}</CardTitle>
                          {getStatusBadge(report.status)}
                        </div>
                        <CardDescription>{report.location}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm">{report.description}</p>
                          <Badge variant="outline" className="bg-gray-100">
                            {report.category}
                          </Badge>
                        </div>
                        {report.status === "completed" && (
                          <div className="mt-4 p-3 bg-green-50 rounded-md text-sm">
                            <p className="font-medium">Pickup completed:</p>
                            <p>
                              {report.date} at {report.time}
                            </p>
                            <p>By: {report.facility}</p>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Link href={`/reports/${report.id}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            View Details
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
