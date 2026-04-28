"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  FileText,
  Phone,
  CheckCircle,
  ArrowRight,
  Download,
} from "lucide-react"

const intakes = [
  { month: "January", status: "Closed", deadline: "December 15" },
  { month: "May", status: "Open", deadline: "April 30" },
  { month: "September", status: "Coming Soon", deadline: "August 15" },
]

const steps = [
  {
    step: 1,
    title: "Download Form",
    description: "Get the application form from our website or office.",
  },
  {
    step: 2,
    title: "Fill & Submit",
    description: "Complete the form and submit with required documents.",
  },
  {
    step: 3,
    title: "Pay Fees",
    description: "Complete the registration fee payment.",
  },
  {
    step: 4,
    title: "Start Learning",
    description: "Join your class and begin your journey.",
  },
]

const requirements = [
  "KCPE or KCSE Certificate (or equivalent)",
  "Birth Certificate or National ID",
  "2 Passport-size Photos",
  "Application Fee",
]

export function AdmissionsSection() {
  // Use Link/asChild for client navigation and anchor download for efficiency

  return (
    <section id="admissions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Admissions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Begin Your Journey Today
          </h2>
          <p className="text-muted-foreground text-pretty">
            Our admission process is simple and straightforward. We welcome
            students from all backgrounds who are ready to learn.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Intakes */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Intake Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {intakes.map((intake) => (
                <div
                  key={intake.month}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                >
                  <div>
                    <p className="font-semibold text-foreground">
                      {intake.month}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Deadline: {intake.deadline}
                    </p>
                  </div>
                  <Badge
                    variant={intake.status === "Open" ? "default" : "secondary"}
                  >
                    {intake.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Application Process */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                How to Apply
              </CardTitle>
            </CardHeader>

            <CardContent>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/apply" aria-label="Apply Now">
                    <ArrowRight className="h-5 w-5" />
                    <span>Apply Now</span>
                  </Link>
                </Button>

                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a
                    href="/documents/application-form.pdf"
                    download
                    aria-label="Download Application Form"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Form</span>
                  </a>
                </Button>

                <Button variant="ghost" size="lg" className="gap-2" asChild>
                  <Link href="#contact" aria-label="Contact Admissions">
                    <Phone className="h-5 w-5" />
                    <span>Contact Admissions</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}