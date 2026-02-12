export interface Project {
  id: string
  title: string
  description: string
  category: "AI/ML" | "Full-Stack" | "Frontend"
  imageUrl: string
  githubUrl: string
  liveUrl?: string
  technologies?: string[]
  completedAt?: string
  longDescription?: string
  featured?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContact(data: ContactFormData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to send message')
  }

  return response.json()
}