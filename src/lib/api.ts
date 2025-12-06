const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  category: string
  featured: boolean
  completedAt: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${API_BASE_URL}/projects`, {
    next: { revalidate: 60 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch projects")
  }
  return res.json()
}

export async function fetchProject(id: string): Promise<Project> {
  const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
    next: { revalidate: 60 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch project")
  }
  return res.json()
}

export async function submitContact(data: ContactFormData): Promise<ContactResponse> {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    throw new Error("Failed to submit contact form")
  }
  return res.json()
}
