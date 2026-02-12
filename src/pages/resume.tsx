import Link from "next/link"
import { Download, Briefcase, GraduationCap, Award, MapPin, Mail, Github, Linkedin, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Head from "next/head"

const personalInfo = {
  name: "Natnael Yilma Ketema",
  title: "Full-Stack Developer | AI/ML Entusiast",
  email: "natnaelyilma27@gmail.com",
  phone: "+251 929 709 562",
  location: "Addis Ababa, Ethiopia",
  website: "natnael.dev",
  github: "github.com/dnNatnael",
  linkedin: "linkedin.com/in/natnael-ketema-0a8613351/",
}

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "Bulgaria, Addis Ababa, Ethiopia",
    period: "July 01, 2025 - September 30, 2025",
    type: "Full-time",
    achievements: [
      "Led development of barcode scanning web application supporting 500+ warehouse workers and logistics staff with 99.9% system availability during peak operations",  
      "Architected microservices for real-time location tracking and inventory updates, reducing scan-to-database latency by 60%",  
      "Optimated database indexing and query structure for location history logs, resulting in 40% faster load times for asset tracking views",
    ],
    technologies: ["React", "JavaScript", "Node.js", "Firebase", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    role: "AI/ML Engineer Intern",
    company: "10 Academy",
    location: "Comet Building 22, Addis Ababa, Ethiopia",
    period: "Dec 2025 - Feb 2026",
    type: "Remote",
    achievements: [
      "Developed interactive dashboards and data visualization tools, driving 35% improvement in user engagement metrics",
      "Created reusable feature engineering pipelines and analytical modules adopted across different products",
    ],
    technologies: ["Python", "Jupyter Notebook", "Docker", "Postgres"],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Adama Science and Technology University",
    location: "Adama, Ethiopia",
    period: "2022 - 2027",
    highlights: [
      "UnderGraduate Student"
    ],
  },
]

const certifications = [
  {
    name: "How to Evaluate Resources",
    issuer: "A course study offered by Ministry of Education",
    date: "2024",
    credentialId: "59ae60798222400fb2bfe4b111afaa2d",
  },
  {
    name: "Set Goals to Manage Your Time",
    issuer: "A course study offered by Ministry of Education",
    date: "2024",
    credentialId: "2d0501b49c544fcf9c9340eba2d1dce4",
  },
  {
    name: "Android Developer Fundamentals",
    issuer: "Issued by Udacity in partnership with the Ministry of Education",
    date: "2024",
    credentialId: "b5c-4bee-11ef-85b7-5750c02b60ff",
  },
  {
    name: "Digital Literacy Skills",
    issuer: "Issued by Dereja.com in partnership with Adama Science and Technology University",
    date: "2024",
    credentialId: "430b0eb8-0185-4041-ac79-19fbda32f69c",
  },
]

const coreSkills = [
  "JavaScript/TypeScript",
  "React/Next.js",
  "Python/FastAPI",
  "Node.js",
  "PostgreSQL",
  "Docker"
]

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume | Natnael Yilma Ketema</title>
        <meta
          name="description"
          content="Professional resume of Natnael - Full-Stack Developer with 5+ years of experience in web development, cloud architecture, and scalable solutions."
        />
      </Head>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <Badge className="mb-2" variant="secondary">
                  Resume
                </Badge>
                <h1 className="text-4xl font-bold text-foreground">{personalInfo.name}</h1>
                <p className="text-xl text-primary font-medium">{personalInfo.title}</p>
              </div>
              <Button asChild size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {personalInfo.email}
                  </a>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {personalInfo.location}
                  </span>
                  <a
                    href={`https://${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <section className="mb-10">
              <h2 className="text-lg font-semibold text-foreground mb-3">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed justified-text">
                Innovative Frontend & Backend Developer and AI Enthusiast with 1+ years of experience architecting full-stack solutions and integrating intelligent automation into web ecosystems. Junior developer in modern JavaScript frameworks, Python-based AI/ML services, and cloud infrastructure. Passionate about bridging the gap between robust software engineering and cutting-edge artificial intelligence. Proven track record of deploying LLM-powered features, optimizing data pipelines, and building intuitive interfaces that make complex AI accessible to end-users.
              </p>
            </section>

            {/* Core Skills */}
            <section className="mb-10">
              <h2 className="text-lg font-semibold text-foreground mb-3">Core Skills</h2>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Experience */}
            <section className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Professional Experience</h2>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Education */}
            <section className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Education</h2>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{edu.period}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <Separator className="my-8" />

            {/* Certifications */}
            <section className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Certifications</h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h3>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mt-2">Issued: {cert.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Interested in working together?</h3>
                <p className="opacity-90 mb-6">
                  I'm currently open to new opportunities and would love to discuss how I can contribute to your team.
                </p>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contacts">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

