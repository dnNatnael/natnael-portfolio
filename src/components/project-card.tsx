import Image from "next/image"
import { Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Project } from "@/lib/api"

interface ProjectCardProps {
  project: Project
  featured?: boolean
  compact?: boolean
}

export function ProjectCard({ project, featured = false, compact = false }: ProjectCardProps) {
  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/5 ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {project.featured && !compact && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
        )}
      </div>

      <div className="flex flex-col">
        <CardContent className="flex-1 p-6">
          {!compact && (
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="text-xs">
                {project.category}
              </Badge>
            </div>
          )}

          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>

          {!compact && project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="p-6 pt-0 flex items-center gap-3">
          {project.githubUrl && (
            <Button asChild variant="default" size="sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code on GitHub"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  )
}
