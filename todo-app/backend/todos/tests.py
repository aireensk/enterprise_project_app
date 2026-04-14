from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from .models import Todo

class TodoAPITest(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username="testuser", password="testpass")

    def authenticate(self):
        response = self.client.post("/api/auth/token/", {
            "username": "testuser",
            "password": "testpass"
        })
        token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {token}")

    def test_create_todo(self):
        self.authenticate()
        response = self.client.post("/api/todos/", {"name": "Test Todo"})
        self.assertEqual(response.status_code, 201)

    def test_get_todos(self):
        self.authenticate()
        Todo.objects.create(name="Test Todo", user=self.user)
        response = self.client.get("/api/todos/")
        self.assertEqual(response.status_code, 200)

    def test_delete_todo(self):
        self.authenticate()
        todo = Todo.objects.create(name="Test Todo", user=self.user)
        response = self.client.delete(f"/api/todos/{todo.id}/")
        self.assertEqual(response.status_code, 204)