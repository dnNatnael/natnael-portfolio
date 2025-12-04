import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { mockProjects } from "@/lib/mock-data"
import Head from "next/head"

const categories = ["All", "Full-Stack", "Frontend", "AI/ML", "Mobile", "Data Visualization"]

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Natnael Builds</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects including full-stack applications, AI tools, and mobile apps."
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
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">My Projects</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of projects I&apos;ve built, ranging from full-stack applications to AI-powered tools and
                mobile apps.
              </p>
            </div>

            {/* Category Filter (visual only - can be enhanced with client-side filtering) */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

