import {
  TrendingUp,
  Users,
  Briefcase,
  Heart,
  GraduationCap,
  Building,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const impacts = [
  {
    icon: GraduationCap,
    title: "Employable Skills",
    description: "Training youth and adults with market-relevant, employable skills.",
  },
  {
    icon: Briefcase,
    title: "Self-Employment",
    description: "Reducing unemployment through entrepreneurship and self-employment.",
  },
  {
    icon: Building,
    title: "Industry Ready",
    description: "Graduates work in institutions or successfully start their own businesses.",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Supporting disadvantaged communities through accessible education.",
  },
  {
    icon: Users,
    title: "Social Inclusion",
    description: "Promoting social inclusion and building confidence in students.",
  },
  {
    icon: TrendingUp,
    title: "Economic Growth",
    description: "Contributing to regional economic development and bridging skill gaps.",
  },
]

const stats = [
  { number: "100+", label: "Students Enrolled Annually" },
  { number: "10+", label: "Technical Disciplines" },
  { number: "90%", label: "Graduate Employment Rate" },
  { number: "15+", label: "Years of Excellence" },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary-foreground/80 font-semibold mb-2">
            Our Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Transforming Lives, Building Communities
          </h2>
          <p className="text-primary-foreground/80 text-pretty">
            Every student we train is a step toward a stronger, more self-reliant
            community. See the difference we&apos;re making together.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur"
            >
              <p className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact) => (
            <Card
              key={impact.title}
              className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/20 shrink-0">
                    <impact.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      {impact.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/80">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transparency Note */}
        <div className="mt-16 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-primary-foreground mb-4 text-center">
            Transparency & Sustainability
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-center text-sm">
            <div className="p-4">
              <p className="font-medium text-primary-foreground">Income Sources</p>
              <p className="text-primary-foreground/70">
                Tuition fees, donations, auxiliary services
              </p>
            </div>
            <div className="p-4">
              <p className="font-medium text-primary-foreground">Community Support</p>
              <p className="text-primary-foreground/70">
                Partners and donors enabling growth
              </p>
            </div>
            <div className="p-4">
              <p className="font-medium text-primary-foreground">Our Focus</p>
              <p className="text-primary-foreground/70">
                Sustainable growth and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
