from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from typing import List

app = FastAPI(
    title="Natnael Portfolio API",
    version="1.0.0"
)


# ============================
# Pydantic Models
# ============================

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


class Project(BaseModel):
    id: int
    title: str
    description: str


# ============================
# Routes
# ============================

@app.post("/contact")
def submit_contact(form: ContactForm):
    """Handle contact form submission."""
    return {"message": "Contact form submitted successfully"}


@app.get("/projects", response_model=List[Project])
def get_projects():
    """Return portfolio projects."""
    return [
        {"id": 1, "title": "AI Trading Bot", "description": "Automated trading system."},
        {"id": 2, "title": "Portfolio Website", "description": "Modern full-stack portfolio site."}
    ]


@app.get("/")
def root():
    """Root endpoint."""
    return {"status": "API Running"}
