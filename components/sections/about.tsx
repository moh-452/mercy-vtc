import Image from "next/image"
import { Target, Eye, Heart, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: BookOpen,
    title: "Affordable Education",
    description: "Quality vocational training accessible to all, regardless of financial background.",
  },
  {
    icon: Target,
    title: "Practical Skills",
    description: "Hands-on training that prepares students for real-world employment.",
  },
  {
    icon: Heart,
    title: "Community Focus",
    description: "Transforming communities through skilled and empowered graduates.",
  },
  {
    icon: Eye,
    title: "Moral Foundation",
    description: "Building character alongside technical expertise for holistic development.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/campus.jpg"
                alt="Our Lady of Mercy College Campus"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="text-sm text-muted-foreground">Managed by</p>
              <p className="font-semibold text-foreground">Sisters of Mercy</p>
              <p className="text-xs text-muted-foreground mt-1">
                A faith-based institution committed to excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold mb-2">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Building a Skilled and Self-Reliant Generation
            </h2>
            <p className="text-muted-foreground mb-4 text-pretty">
              Our Lady of Mercy College – Mercy Vocational Training Centre is a
              Christian faith-based institution managed by the Sisters of Mercy.
              Located in Chepareria, West Pokot County, along the Kapenguria–Lodwar
              road, we are a registered private TVET institution under the Kenyan
              TVET Act (2013).
            </p>
            <p className="text-muted-foreground mb-8 text-pretty">
              We focus on technical and vocational education, empowering students
              through practical skills training to promote holistic human development
              and self-reliance.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Empower students through technical and social skills training to
                  promote holistic human development and self-reliance.
                </p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-5 w-5 text-accent-foreground" />
                  <h3 className="font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  To be a leading technical institution producing skilled, reliable,
                  and self-reliant graduates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
