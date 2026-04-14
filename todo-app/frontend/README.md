# enterprise_project_app
# Todo App Frontend (React)

## Overview

This is the frontend for a full-stack Todo application built using React. It provides a user interface for authentication and CRUD functionality, and communicates with a Django REST API backend.

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

* User registration
* User login using JWT
* Token stored in localStorage
* Protected routes using token authentication

### Todo Management

* Create todos
* View todos (user-specific)
* Update todos (toggle complete)
* Delete todos

Each todo is linked to the authenticated user.

---

## API Integration

### Auth

* `POST /api/auth/register/`
* `POST /api/auth/token/`

### Todos

* `GET /api/todos/`
* `POST /api/todos/`
* `PATCH /api/todos/{id}/`
* `DELETE /api/todos/{id}/`

All requests are handled via a centralised Axios instance.

---

## Authentication

The application uses JWT-based authentication.

After login, the token is stored in localStorage and sent with every request:

Authorization: Bearer <access_token>

---

## Setup Instructions

1. Install dependencies

npm install

2. Configure environment variables

Create a `.env` file:

VITE_API_URL=https://your-backend-url

3. Run development server

npm run dev

---

## Project Structure

* `src/components/` → React components (Auth, TodoApp)
* `src/api.js` → API configuration and Axios instance
* `src/App.jsx` → Main application logic
* `src/main.jsx` → Application entry point

---

## Notes

* The frontend depends on the backend API being running
* Tokens expire and require re-authentication
* Error handling is minimal and can be improved

---

## Future Improvements

* Implement token refresh handling
* Improve UI and user experience
* Add loading states and error feedback
* Add filtering and sorting functionality for todos
