# Student Course Portal

## Overview

The Student Course Portal is a web application developed using **Angular 20** as part of the **Digital Nurture 5.0 Angular Hands-On Exercises**. The project demonstrates Angular concepts by building a complete student management portal, progressing from basic components to advanced state management and testing.

The portal allows students to browse courses, enroll in courses, view their profiles, and interact with data through a responsive single-page application.

---

## Features

- Dashboard with student statistics
- Course listing and details
- Student profile management
- Template-driven forms
- Reactive forms with custom validation
- Angular routing with route guards
- Shared services using Dependency Injection
- REST API integration using HttpClient
- RxJS operators for asynchronous programming
- HTTP interceptors
- NgRx state management
- Unit testing with Jasmine and Karma

---

## Technologies Used

- Angular 20
- TypeScript
- HTML5
- CSS3
- Angular CLI
- Angular Router
- Angular Forms
- HttpClient
- RxJS
- JSON Server
- NgRx
- Jasmine
- Karma

---

## Project Structure

```text
student-course-portal/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── models/
│   │   ├── directives/
│   │   ├── pipes/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── store/
│   │   ├── app.routes.ts
│   │   └── app.component.*
│   │
│   ├── assets/
│   └── main.ts
│
├── angular.json
├── package.json
└── README.md
```

---

## Hands-On Modules

### Hands-On 1
- Environment setup
- Angular project structure
- Components
- Navigation

### Hands-On 2
- Data binding
- Lifecycle hooks
- Parent-child communication

### Hands-On 3
- Structural directives
- Attribute directives
- Custom directives
- Custom pipes

### Hands-On 4
- Template-driven forms
- Form validation

### Hands-On 5
- Reactive forms
- FormBuilder
- Custom validators
- FormArray

### Hands-On 6
- Angular services
- Dependency Injection
- Shared data services

### Hands-On 7
- Routing
- Route parameters
- Lazy loading
- Route guards

### Hands-On 8
- HTTP Client
- CRUD operations
- RxJS operators
- HTTP interceptors

### Hands-On 9
- NgRx Store
- Actions
- Reducers
- Effects
- Selectors

### Hands-On 10
- Component testing
- Service testing
- Mock Store testing

---

## Installation

Clone the repository.

```bash
git clone https://github.com/your-username/student-course-portal.git
```

Navigate to the project directory.

```bash
cd student-course-portal
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
ng serve
```

Open the application in your browser.

```
http://localhost:4200
```

---

## Backend Setup

Install JSON Server.

```bash
npm install -g json-server
```

Run the mock backend.

```bash
json-server --watch db.json --port 3000
```

The API will be available at:

```
http://localhost:3000
```

---

## Running Tests

Run all unit tests.

```bash
ng test
```

Generate a code coverage report.

```bash
ng test --code-coverage
```

---

## Learning Outcomes

This project demonstrates practical implementation of:

- Angular Components
- Data Binding
- Directives and Pipes
- Routing
- Forms and Validation
- Dependency Injection
- HTTP Communication
- RxJS
- NgRx State Management
- Route Guards
- Lazy Loading
- Unit Testing

---

## Developed By

**Wanshika Gautam**

B.Tech Computer Science Engineering

Digital Nurture 5.0 – Angular Hands-On Project

---

## License

This project was developed for educational purposes as part of the Digital Nurture 5.0 Angular Training Program.