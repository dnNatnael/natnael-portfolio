from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)


def test_contact_success():
    payload = {
        "name": "Natnael",
        "email": "test@example.com",
        "message": "Hello world!"
    }

    response = client.post("/contact", json=payload)
    assert response.status_code == 200

    data = response.json()
    assert data["message"] == "Contact form submitted successfully"


def test_contact_missing_fields():
    payload = {
        "name": "Natnael",
        # missing email
        "message": "Hi"
    }

    response = client.post("/contact", json=payload)
    assert response.status_code == 422
