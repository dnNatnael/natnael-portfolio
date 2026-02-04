import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/mock-data"
import Head from "next/head"

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Natnael Yilma Ketema</title>
        <meta
          name="description"
          content="Technical articles and insights on web development, software engineering, and best practices."
        />
      </Head>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                Blog
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Thoughts & Insights</h1>
              <p className="text-xl text-muted-foreground">
                Technical articles, tutorials, and my experiences in software development.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>

                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button asChild variant="ghost" className="group/btn">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <div className="mt-12 text-center p-8 rounded-xl bg-secondary/50">
              <p className="text-muted-foreground">
                More articles coming soon! Subscribe to get notified when new posts are published.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

