import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Code2, Zap, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { mockProjects } from "@/lib/mock-data"
import Head from "next/head"

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js","Next.js","Python", "FastAPI", "NumPy", "pandas", "MathLib"]

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code that stands the test of time.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency without compromising functionality.",
  },
  {
    icon: Layers,
    title: "Scalability",
    description: "Building systems that grow seamlessly with your business needs.",
  },
]

export default function HomePage() {
  const featuredProjects = mockProjects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <Head>
        <title>Home | Natnael Yilma Ketema</title>
        <meta
          name="description"
          content="Full-stack developer specializing in modern web applications, cloud architecture, and scalable solutions. View my projects and get in touch."
        />
        <meta
          name="keywords"
          content="Full-Stack Developer, Web Development, React, Next.js, Python, FastAPI, Portfolio"
        />
      </Head>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4" variant="secondary">
                  Available for Work
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  Building Digital
                  <span className="gradient-text"> Experiences</span> That Matter
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl justified-text">
                  Front-end and Back-end Developer with a strong enthusiasm for AI and Machine Learning, specializing in building modern, scalable web applications and intelligent systems that support business growth and innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      View My Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </a>
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-accent/30 rounded-full blur-3xl" />
                  <Image
                    src="/professional-developer-portrait-illustration.jpg"
                    alt="Natnael - Full Stack Developer"
                    width={500}
                    height={500}
                    className="relative rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What I Bring to the Table</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Combining technical expertise with a passion for creating exceptional user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="glass rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-xl">
                  A selection of my recent work showcasing diverse skills and technologies.
                </p>
              </div>
              <Button asChild variant="outline" className="hidden sm:flex bg-transparent">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I&apos;m always open to discussing new opportunities and ideas.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-secondary-foreground">
              <Link href="/contacts">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

