
# Task Manager Application

## Overview

Task Manager is a React-based web application that helps users organize, track, and manage tasks efficiently through a structured workflow.

The application includes user authentication, protected routes, task management, task filtering, and local storage persistence.

---

## Features

### Authentication
- User Login
- Protected Routes
- Logout Functionality
- Authentication Token stored in Local Storage

### Dashboard
- Search tasks by title or description
- Filter tasks by priority
- View tasks in:
  - To Do
  - In Progress
  - Done

### Task Management
- Add New Tasks
- View Task Details
- Priority Badges
- Deadline Tracking
- Persistent Storage using Local Storage

### Task Details Page
- Complete Task Information
- Task Status
- Priority Level
- Deadline Information
- Back to Dashboard Navigation

### Not Found Page
- Custom 404 Page
- Redirect Back to Dashboard/Login

---

## Technologies Used

- React JS
- React Router DOM
- React Modal
- JavaScript (ES6+)
- HTML5
- CSS3
- Local Storage
- Vite

---

## Project Structure

```text
src/
├── components/
│   ├── AddTaskModal/
│   ├── Header/
│   ├── TaskCard/
│   ├── TaskColumn/
│   └── ProtectedRoute.jsx
│
├── data/
│   └── tasks.jsx
│
├── pages/
│   ├── Login/
│   ├── Dashboard/
│   ├── TaskDetails/
│   └── NotFound/
│
├── utils/
│   └── localStorage.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/LakshmiBhagyasri/task-manager-app.git
```

### Navigate to Project Folder

```bash
cd task-manager-app
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## Test Credentials

### Email

```text
sara@example.com
```

### Password

```text
user123
```

---

## Routes

| Route | Description |
|---------|-------------|
| /login | Login Page |
| /dashboard | Dashboard Page |
| /task/:id | Task Details Page |
| * | Not Found Page |

---

## Local Storage

### Authentication Token

```text
authToken
```

### Task Storage

```text
tasks
```

---

## Future Enhancements

- Edit Existing Tasks
- Delete Tasks
- Drag and Drop Task Movement
- User Registration
- Backend Database Integration
- Dark Mode Support

---

## Author

**Lakshmi Bhagyasri**

This project was developed as a React Task Manager Application focusing on authentication, protected routes, task management, task details, local storage persistence, and responsive user interface design.
