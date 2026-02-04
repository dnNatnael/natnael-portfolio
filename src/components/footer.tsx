import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Code2 } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/dnNatnael", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/natnael-ketema-0a8613351/", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/natnael", icon: Twitter },
  { name: "Email", href: "mailto:hello@natnael.dev", icon: Mail },
]

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contacts" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Skills", href: "/skills" },
      { name: "Resume", href: "/resume" },
    ],
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Code2 className="h-7 w-7 text-primary" />
              <span>Natnael Builds</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed justified-text">
              Front-end and Back-end Developer with a strong enthusiasm for AI and Machine Learning, specializing in building modern, scalable web applications and intelligent systems that support business growth and innovation.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Natnael. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built with Next.js, Tailwind CSS & FastAPI</p>
        </div>
      </div>
    </footer>
  )
}
