import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { Project } from "@/lib/api"

interface CaseStudyProps {
  project: Project
}

export function CaseStudy({ project }: CaseStudyProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="secondary">{project.category}</Badge>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={project.completedAt}>
              {new Date(project.completedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </time>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{project.title}</h1>

        <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Site
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </header>

      {/* Project Image */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-12 shadow-2xl">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <Separator className="my-12" />

      {/* Project Details */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Project Overview</h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.longDescription}</p>
        </div>

        <aside className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Project Type</h3>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
        </aside>
      </div>

      <Separator className="my-12" />

      {/* Navigation */}
      <nav className="flex justify-between items-center">
        <Button asChild variant="ghost">
          <Link href="/projects">← Back to Projects</Link>
        </Button>
      </nav>
    </article>
  )
}
