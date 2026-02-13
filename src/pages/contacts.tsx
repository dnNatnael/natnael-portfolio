import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Head from "next/head"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "natnael.yilma27@gmail.com",
    href: "mailto:hello@natnael.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/dnNatnael", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/natnael-ketema-0a8613351/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/YilmaNatna79065", icon: Twitter },
]

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Natnael Yilma Ketema</title>
        <meta
          name="description"
          content="Get in touch with Natnael for project inquiries, collaborations, or just to say hello."
        />
      </Head>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                Contact
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Let&apos;s Work Together
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential collaborations? I&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                {contactInfo.map((item) => (
                  <Card key={item.label}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Social Links */}
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                          aria-label={social.name}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

