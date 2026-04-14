# enterprise_project_app 
# Todo App Backend (Django REST API)

## Overview
This is the backend for a full-stack Todo application built using Django REST Framework. It provides authentication and CRUD functionality for managing user-specific todos.

---

## Architecture
This project follows a 3-layer enterprise architecture:

- **Frontend (React)** → handles UI and user interaction
- **Backend (Django REST API)** → handles authentication, business logic, and API endpoints
- **Database (SQLite/PostgreSQL)** → stores users and todos

The frontend communicates ONLY with the backend via REST API.

---

## Features

### Authentication
- User registration
- User login using JWT
- Protected routes using token authentication

### Todo Management
- Create todos
- View todos (user-specific)
- Update todos (toggle complete)
- Delete todos

Each todo is linked to the authenticated user.

---

## API Endpoints

### Auth
- `POST /api/auth/register/`
- `POST /api/auth/token/`

### Todos
- `GET /api/todos/`
- `POST /api/todos/`
- `PATCH /api/todos/{id}/`
- `DELETE /api/todos/{id}/`

---

## Authentication
The application uses JWT-based authentication.

All protected endpoints require the following header:

Authorization: Bearer <access_token>

## Setup Instructions

1. Create virtual environment

python -m venv venv
source venv/bin/activate

2. Install dependencies

pip install -r requirements.txt

3. Apply migrations

python manage.py migrate

4. Run development server

python manage.py runserver