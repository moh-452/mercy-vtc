import { Users, Shield, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const governanceAreas = [
  {
    icon: Shield,
    title: "Board of Management",
    description:
      "Our dedicated board provides strategic direction and oversight, ensuring the institution maintains high standards of education and governance.",
  },
  {
    icon: Users,
    title: "Principal & Leadership Team",
    description:
      "Experienced educational leaders who guide the day-to-day operations and ensure quality training delivery.",
  },
  {
    icon: Award,
    title: "Sisters of Mercy",
    description:
      "The institution is managed by the Sisters of Mercy, bringing a strong tradition of service, compassion, and excellence in education.",
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">
            Leadership & Governance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Guided by Experience & Values
          </h2>
          <p className="text-muted-foreground text-pretty">
            Our leadership is committed to providing quality education while
            upholding the highest standards of integrity and accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {governanceAreas.map((area) => (
            <Card
              key={area.title}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 p-8 rounded-2xl bg-secondary/30 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">Registered</p>
              <p className="text-sm text-muted-foreground">
                Private TVET Institution under TVET Act 2013
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">Accredited</p>
              <p className="text-sm text-muted-foreground">
                NITA, KNEC & CDACC Certified Programs
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">Faith-Based</p>
              <p className="text-sm text-muted-foreground">
                Christian Values & Holistic Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
