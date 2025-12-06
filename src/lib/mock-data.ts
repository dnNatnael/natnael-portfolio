import type { Project } from "./api"

export const mockProjects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
    longDescription:
      "Built a comprehensive e-commerce solution featuring user authentication, product catalog management, shopping cart functionality, Stripe payment integration, and an admin dashboard for inventory and order management. The platform handles 10,000+ daily transactions with 99.9% uptime.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    imageUrl: "/ecommerce-dashboard-with-products.jpg",
    liveUrl: "https://shop.example.com",
    githubUrl: "https://github.com/natnael/ecommerce-platform",
    category: "Full-Stack",
    featured: true,
    completedAt: "2024-08-15",
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy.",
    longDescription:
      "Developed an AI content generation platform leveraging OpenAI's GPT-4 API. Features include content templates, tone customization, SEO optimization suggestions, and bulk generation capabilities. Integrated with popular CMS platforms for direct publishing.",
    technologies: ["Python", "FastAPI", "React", "OpenAI", "MongoDB"],
    imageUrl: "/ai-writing-interface-with-generated-text.jpg",
    liveUrl: "https://content-ai.example.com",
    githubUrl: "https://github.com/natnael/ai-content-gen",
    category: "AI/ML",
    featured: true,
    completedAt: "2024-06-20",
  },
  {
    id: "task-management-app",
    title: "Task Management System",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
    longDescription:
      "Created a modern task management solution with features including kanban boards, Gantt charts, time tracking, team collaboration tools, and automated workflow triggers. Real-time synchronization ensures all team members stay updated instantly.",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Docker", "AWS"],
    imageUrl: "/kanban-board-task-management-interface.jpg",
    liveUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/natnael/task-manager",
    category: "Full-Stack",
    featured: true,
    completedAt: "2024-04-10",
  },
  {
    id: "analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    description:
      "A data visualization dashboard providing real-time insights with customizable widgets and automated reporting.",
    longDescription:
      "Built an enterprise-grade analytics dashboard that processes millions of data points in real-time. Features include customizable charts, automated PDF reports, anomaly detection alerts, and data export capabilities. Optimized for performance with WebSocket updates.",
    technologies: ["React", "D3.js", "Python", "ClickHouse", "Kafka"],
    imageUrl: "/analytics-dashboard.png",
    githubUrl: "https://github.com/natnael/analytics-dashboard",
    category: "Data Visualization",
    featured: false,
    completedAt: "2024-02-28",
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness Tracking Mobile App",
    description:
      "A cross-platform fitness application with workout tracking, nutrition logging, and progress visualization.",
    longDescription:
      "Developed a comprehensive fitness tracking app with features including workout plan creation, exercise library with video demonstrations, calorie tracking with barcode scanning, progress photos, and social challenges. Syncs with popular wearables.",
    technologies: ["React Native", "Node.js", "Firebase", "TensorFlow Lite"],
    imageUrl: "/fitness-app-workout-tracking-interface.jpg",
    liveUrl: "https://fitness.example.com",
    category: "Mobile",
    featured: false,
    completedAt: "2024-01-15",
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio Template",
    description:
      "A modern, customizable portfolio template for developers with dark mode, animations, and CMS integration.",
    longDescription:
      "Created an open-source portfolio template featuring smooth animations, dark/light mode toggle, blog integration, project showcase with filtering, contact form, and SEO optimization. Used by 500+ developers worldwide.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    imageUrl: "/modern-developer-portfolio-website.jpg",
    githubUrl: "https://github.com/natnael/dev-portfolio",
    category: "Frontend",
    featured: false,
    completedAt: "2023-11-20",
  },
]

export const blogPosts = [
  {
    id: "building-scalable-apis",
    title: "Building Scalable APIs with FastAPI and PostgreSQL",
    excerpt: "Learn how to design and implement high-performance REST APIs that can handle millions of requests.",
    date: "2024-10-15",
    readTime: "8 min read",
    category: "Backend",
  },
  {
    id: "nextjs-server-components",
    title: "Mastering Next.js Server Components",
    excerpt: "A deep dive into React Server Components and how to leverage them for better performance.",
    date: "2024-09-22",
    readTime: "12 min read",
    category: "Frontend",
  },
  {
    id: "docker-production",
    title: "Docker Best Practices for Production",
    excerpt: "Essential tips for containerizing your applications and deploying them reliably.",
    date: "2024-08-30",
    readTime: "10 min read",
    category: "DevOps",
  },
]
