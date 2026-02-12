import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { mockProjects } from "@/lib/mock-data"
import Head from "next/head"
import type { Project } from "@/lib/api"

const FILTERS = ["All", "AI/ML", "Full-Stack", "Frontend"] as const
type Filter = (typeof FILTERS)[number]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return mockProjects
    return mockProjects.filter((p: Project) => p.category === activeFilter)
  }, [activeFilter])

  return (
    <>
      <Head>
        <title>Projects | Natnael Builds</title>
        <meta
          name="description"
          content="Explore my portfolio of projects including AI/ML models, full-stack applications, and frontend development."
        />
      </Head>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                Portfolio
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of projects spanning AI/ML, full-stack development, and frontend
                applications.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {FILTERS.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
