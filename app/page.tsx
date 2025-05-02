import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, Calendar, MapPin, ImageIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Recycle className="h-6 w-6 text-green-600" />
          <span className="text-lg">WasteConnect</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
            How It Works
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Simplify Waste Collection & Recycling
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Upload a picture of your waste, share your location, and we'll connect you with local waste
                    management facilities for scheduled pickups.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/upload">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Report Waste
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/facilities">
                    <Button variant="outline">For Waste Facilities</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src="/placeholder.svg?height=500&width=800"
                    alt="Waste management illustration"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects waste generators with waste management facilities for efficient collection and
                  recycling.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <ImageIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Upload Photo</h3>
                  <p className="text-gray-500">
                    Take a picture of the waste that needs to be collected and upload it to our platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Share Location</h3>
                  <p className="text-gray-500">
                    Provide your location so waste management facilities know where to pick up the waste.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Schedule Pickup</h3>
                  <p className="text-gray-500">
                    Waste management facilities will review your request and schedule a convenient pickup time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2024 WasteConnect. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
