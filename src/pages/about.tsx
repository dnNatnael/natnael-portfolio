import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Head from "next/head"

const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "10 Academy",
    period: "11/2025 - Present",
    description: "Improved data accuracy by 19% by implementing advanced solar data analytics techniques.",
  },
  {
    role: "Web Developer",
    company: "Internal Clinical Laboratories",
    period: "07/2025 - 09/2025",
    description: "Enhanced sample tracking efficiency by 80% by developing a web app with barcode scan and GPS features and reduced manual entry time by 30% by automating sample identification.",
  },
]

const education = [
  {
    degree: "BSc Computer Science and Engineering",
    institution: "Adama Science and Technology University",
    period: "2022 - 2027",
    //description: "Graduated with a BSc in Computer Science and Engineering from State University.",
  },
]

const techStack = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "FastAPI", "PostgreSQL",],
  DevOps: ["Docker", "GitHub Actions",],
  Tools: ["Git", "VS Code", "Postman", "Notion"],
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Natnael Yilma Ketema</title>
        <meta
          name="description"
          content="Learn more about Natnael - a full-stack developer with expertise in modern web technologies, cloud architecture, and scalable solutions."
        />
      </Head>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative aspect-s4/5 max-w-md mx-auto">
                  <Image
                    src="/professional-developer-working-at-desk.jpg"
                    alt="Natnael at work"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>

              <div>
                <Badge className="mb-4" variant="secondary">
                  About Me
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                  Turning Ideas Into
                  <span className="gradient-text"> Reality</span>
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a full-stack developer specializing in modern web applications, cloud architecture, and scalable solutions that drive business growth. With 1 year of hands-on experience, I focus on building reliable, efficient systems that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  My skill set includes front-end development, back-end development, and I'm an AI & Machine Learning enthusiast, continuously learning how intelligent systems can improve applications and user experiences. I enjoy writing clean code and designing solutions with scalability in mind.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blog posts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="/contacts">
                      Get in Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/resume.pdf" download>
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Experience</h2>
            </div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                      <Badge variant="outline">{job.period}</Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{job.company}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Education & Certifications</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Tech Stack</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

