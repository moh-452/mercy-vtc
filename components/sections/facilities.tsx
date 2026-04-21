import {
  Users,
  Wifi,
  Home,
  UtensilsCrossed,
  Building2,
  BedDouble,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const facilities = [
  {
    icon: Users,
    title: "Qualified Trainers",
    description: "Experienced and certified instructors dedicated to your success.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Enabled",
    description: "Modern learning environment with high-speed internet connectivity.",
  },
  {
    icon: Home,
    title: "Boarding Facilities",
    description: "Comfortable on-campus accommodation for students.",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering Services",
    description: "Nutritious meals prepared by our food service team.",
  },
  {
    icon: Building2,
    title: "Conference & Hall Hire",
    description: "Well-equipped facilities available for events and meetings.",
  },
  {
    icon: BedDouble,
    title: "Guest Accommodation",
    description: "Welcoming lodging for visitors and guests.",
  },
]

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Our Facilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            World-Class Learning Environment
          </h2>
          <p className="text-muted-foreground text-pretty">
            We provide modern facilities and amenities to ensure a comfortable
            and conducive learning experience for all our students.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <Card
              key={facility.title}
              className="group hover:shadow-lg transition-all duration-300 border-none bg-card"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <facility.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
