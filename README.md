# 🔐 User Authentication Demo

![Angular](https://img.shields.io/badge/Angular-17-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Frontend](https://img.shields.io/badge/Frontend-SPA-orange)
![Authentication](https://img.shields.io/badge/Auth-localStorage-green)

A frontend-only authentication application built using **Angular 17** that demonstrates **routing, route guards, reactive forms, and localStorage-based authentication**.

---

## 💡 Concepts Demonstrated

This project showcases modern Angular concepts including:

* Angular 17 architecture
* Angular Router
* SPA(Single Page Application) routing
* Authentication flow
* Reactive forms
* Route guards
* State persistence
* Component interaction
* Frontend application structure
* Form Validation

---

## ✨ Features

* User Registration
* User Login
* Protected Dashboard Route
* Route Guard Authentication
* Logout Functionality
* Reactive Form Validation
* Persistent Login using localStorage
* Responsive UI Design
* Angular Standalone Components
* Clean Folder Structure

---

## 🚀 Tech Stack

* Angular 17
* TypeScript
* Angular Router
* Reactive Forms
* HTML5
* CSS3
* localStorage API

---

## 🗂️ Project Structure

```text
src/app/
│
├── components/
│   └── navbar/
│
├── pages/
│   ├── login/
│   ├── register/
│   └── dashboard/
│
├── services/
│   └── auth.ts
│
├── guards/
│   └── auth-guard.ts
│
├── app.routes.ts
│
└── app.html
```

---

## ⚙️ Authentication Flow

### Registration

- User enters:
    - First Name
    - Last Name
    - Username
    - Password
- Data is stored in browser localStorage

---

### Login

- Credentials are validated against stored localStorage data
- Successful login stores authentication state
- Dashboard Protection
- Dashboard route is protected using Angular Route Guards
- Unauthorized users are redirected to Login page

---

## 🔧 Installation & Setup

### Clone Repository
```bash
git clone <your-repository-url>
```
### Install Dependencies
```bash
npm install
```
### Run Application
```bash
ng serve
```
### Open browser:
```text
http://localhost:4200
```

---

## 🌐 Application Routes

|Route|Description|
|-----|-----------|
|/login|User login page|
|/register|User registration page|
|/dashboard|Protected dashboard page|

---

## 📌 Sample Authentication Data

### Registration Example
```json
{
  "firstName": "Zoro",
  "lastName": "Roronoa",
  "username": "PirateHunter",
  "password": "Swords@3"
}
```
---

## 🧠 Key Angular Concepts Used

### 1. Standalone Components

Uses Angular 17 standalone component architecture instead of NgModules.

### 2. Reactive Forms

Implemented using:
```TypeScript
ReactiveFormsModule
```
Provides:

- Form validation
- Better form state management
- Cleaner form handling

### 3. Route Guards

Protected routes using:
```Typecript
CanActivateFn
```
Ensures unauthorized users cannot access dashboard routes.

### 4. localStorage Authentication

Authentication state is stored using browser localStorage:
```Typecript
localStorage.setItem(...)
```
Used for:

- User persistence
- Session simulation
- Authentication state tracking

---

## 📮 Testing

You can test the application by:

* Registering a user
* Logging in with credentials
* Accessing protected dashboard
* Logging out
* Trying direct dashboard access without login

---
