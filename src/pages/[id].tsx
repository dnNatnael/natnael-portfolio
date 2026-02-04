import { useRouter } from "next/router"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseStudy } from "@/components/case-study"
import { mockProjects } from "@/lib/mock-data"
import Head from "next/head"

export default function ProjectDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const project = mockProjects.find((p) => p.id === id)

  if (!project) {
    return (
      <>
        <Head>
          <title>Project Not Found | Natnael Builds</title>
        </Head>
        <Header />
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <p className="text-muted-foreground">The project you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{project.title} | Natnael Builds</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.imageUrl} />
      </Head>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <CaseStudy project={project} />
      </main>
      <Footer />
    </>
  )
}