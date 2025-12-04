import type React from "react"
import { Database, Cloud, Wrench, Palette, Server, Layers } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Head from "next/head"

interface SkillCategory {
  title: string
  icon: React.ElementType
  description: string
  skills: {
    name: string
    level: number
    years?: number
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Palette,
    description: "Building responsive, accessible, and performant user interfaces",
    skills: [
      { name: "React / Next.js", level: 95, years: 5 },
      { name: "TypeScript", level: 90, years: 4 },
      { name: "Tailwind CSS", level: 95, years: 3 },
      { name: "HTML5 / CSS3", level: 95, years: 6 },
      { name: "Framer Motion", level: 80, years: 2 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Designing and implementing scalable server-side solutions",
    skills: [
      { name: "Python / FastAPI", level: 90, years: 4 },
      { name: "Node.js / Express", level: 85, years: 4 },
      { name: "REST API Design", level: 92, years: 5 },
      { name: "GraphQL", level: 75, years: 2 },
      { name: "WebSockets", level: 80, years: 3 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    description: "Managing data with SQL and NoSQL databases",
    skills: [
      { name: "PostgreSQL", level: 90, years: 5 },
      { name: "MongoDB", level: 85, years: 4 },
      { name: "Redis", level: 80, years: 3 },
      { name: "Prisma ORM", level: 85, years: 2 },
      { name: "Firebase", level: 75, years: 3 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    description: "Deploying and maintaining cloud infrastructure",
    skills: [
      { name: "Docker", level: 88, years: 4 },
      { name: "AWS (EC2, S3, Lambda)", level: 82, years: 3 },
      { name: "GitHub Actions", level: 90, years: 3 },
      { name: "Vercel / Netlify", level: 95, years: 4 },
      { name: "Linux / Bash", level: 85, years: 5 },
    ],
  },
]

const additionalSkills = [
  "Git & Version Control",
  "Agile / Scrum",
  "Testing (Jest, Pytest)",
  "CI/CD Pipelines",
  "System Design",
  "API Security",
  "Performance Optimization",
  "Technical Writing",
  "Code Review",
  "Mentoring",
]

const tools = [
  { name: "VS Code", category: "Editor" },
  { name: "Figma", category: "Design" },
  { name: "Postman", category: "API" },
  { name: "Notion", category: "Productivity" },
  { name: "Slack", category: "Communication" },
  { name: "Linear", category: "Project Management" },
]

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills | Natnael Builds</title>
        <meta
          name="description"
          content="Technical skills and expertise in frontend, backend, DevOps, and more. Explore my proficiency in modern web technologies."
        />
      </Head>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="secondary">
                Technical Expertise
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Skills & <span className="gradient-text">Technologies</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills, tools, and areas of expertise developed over 5+ years
                of professional experience.
              </p>
            </div>

            {/* Skill Categories */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {skillCategories.map((category) => (
                <Card key={category.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.years && `${skill.years}+ yrs`}</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Skills */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Additional Skills</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Tools */}
            <section className="bg-secondary/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Tools & Software</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {tools.map((tool) => (
                  <div key={tool.name} className="bg-card rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <p className="font-medium text-foreground">{tool.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

