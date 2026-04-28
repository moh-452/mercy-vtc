"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import analytics from "@/lib/analytics"

const programs = ["Food & Beverage", "Dressmaking", "Hairdressing", "ICT", "Electrical"]

export default function ApplyPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = "Name is required"
    if (!email.trim()) e.email = "Email is required"
    else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(email)) e.email = "Email is invalid"
    if (!program) e.program = "Please choose a program"
    if (phone && !/^\+?[0-9 \-]{7,15}$/.test(phone)) e.phone = "Phone number is invalid"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("submitting")

    // Track analytics event
    analytics.trackEvent("application_submitted", { email, program })

    // Simulate submission (replace with real API call if available)
    try {
      await new Promise((res) => setTimeout(res, 700))
      setStatus("success")
      // optionally clear form
      setName("")
      setEmail("")
      setProgram("")
      setPhone("")
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      setStatus("idle")
    }
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-4">Apply — Our Lady of Mercy VTC</h1>
      <p className="text-muted-foreground mb-8">Fill the form below to start your application.</p>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <div>
          <Label>Name</Label>
          <Input value={name} onChange={(v) => setName((v as any).target.value)} className={cn(errors.name && "border-destructive")} />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label>Email</Label>
          <Input value={email} onChange={(v) => setEmail((v as any).target.value)} className={cn(errors.email && "border-destructive")} />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label>Program</Label>
          <select value={program} onChange={(e) => setProgram(e.target.value)} className="w-full rounded-md border px-3 py-2">
            <option value="">Select a program</option>
            {programs.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          {errors.program && <p className="text-sm text-destructive mt-1">{errors.program}</p>}
        </div>

        <div>
          <Label>Phone (optional)</Label>
          <Input value={phone} onChange={(v) => setPhone((v as any).target.value)} className={cn(errors.phone && "border-destructive")} />
          {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
        </div>

        <div className="pt-4">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit Application"}
          </Button>
        </div>

        {status === "success" && (
          <p className="text-sm text-green-600">Thank you — your application was submitted.</p>
        )}
      </form>
    </main>
  )
}
