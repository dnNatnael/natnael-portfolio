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
  name: "Natnael",
  title: "Senior Full-Stack Developer",
  email: "hello@natnael.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "natnael.dev",
  github: "github.com/natnael",
  linkedin: "linkedin.com/in/natnael",
}

const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    type: "Full-time",
    achievements: [
      "Lead development of enterprise SaaS platform serving 50,000+ active users with 99.9% uptime",
      "Architected microservices infrastructure reducing deployment time by 60%",
      "Mentored team of 4 junior developers, improving code quality and delivery speed",
      "Implemented CI/CD pipelines using GitHub Actions, reducing release cycles from weekly to daily",
      "Optimized database queries resulting in 40% improvement in API response times",
    ],
    technologies: ["Next.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker"],
  },
  {
    role: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    location: "San Jose, CA",
    period: "Jun 2020 - Dec 2021",
    type: "Full-time",
    achievements: [
      "Built and maintained 15+ client projects using React and Node.js",
      "Developed real-time collaboration features using WebSocket technology",
      "Integrated third-party APIs including Stripe, Twilio, and AWS services",
      "Reduced application load time by 50% through code optimization and caching",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS Lambda"],
  },
  {
    role: "Frontend Developer",
    company: "StartupXYZ",
    location: "Palo Alto, CA",
    period: "Aug 2018 - May 2020",
    type: "Full-time",
    achievements: [
      "Developed responsive web applications improving user engagement by 35%",
      "Created reusable component library used across 5 different products",
      "Implemented A/B testing framework leading to 20% increase in conversions",
      "Collaborated with UX team to improve accessibility compliance to WCAG 2.1 AA",
    ],
    technologies: ["React", "JavaScript", "Sass", "Jest", "Webpack"],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2014 - 2018",
    gpa: "3.8/4.0",
    highlights: [
      "Dean's List: 6 semesters",
      "Senior Project: AI-powered code review tool",
      "Teaching Assistant for Data Structures course",
    ],
  },
]

const certifications = [
  {
    name: "AWS Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2021",
    credentialId: "AWS-SAA-12345",
  },
  {
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    date: "2020",
    credentialId: "PSM-67890",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2020",
    credentialId: "MDB-11111",
  },
]

const coreSkills = [
  "JavaScript/TypeScript",
  "React/Next.js",
  "Python/FastAPI",
  "Node.js",
  "PostgreSQL/MongoDB",
  "Docker/Kubernetes",
  "AWS/GCP",
  "CI/CD",
  "System Design",
  "Agile/Scrum",
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
              <p className="text-muted-foreground leading-relaxed">
                Results-driven Full-Stack Developer with 5+ years of experience building scalable web applications and
                leading development teams. Expertise in modern JavaScript frameworks, Python backend development, and
                cloud architecture. Passionate about clean code, performance optimization, and delivering exceptional
                user experiences. Proven track record of reducing deployment times, improving application performance,
                and mentoring junior developers.
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
                      <p>GPA: {edu.gpa}</p>
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

