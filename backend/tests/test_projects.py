from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)


def test_get_projects():
    response = client.get("/projects")
    assert response.status_code == 200

    data = response.json()
    assert isinstance(data, list)

    # Only validate first item if list is not empty
    if data:
        project = data[0]
        assert "id" in project
        assert "title" in project
        assert "description" in project
