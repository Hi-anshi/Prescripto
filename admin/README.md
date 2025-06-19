# Prescripto Admin Panel

The **Prescripto Admin Panel** is a web-based interface built with React, designed for administrators and doctors to manage users, appointments, and platform data efficiently.

---

## 🚀 Overview

The Prescripto Admin Panel provides:

- Secure admin login
- Doctor and appointment management
- Dashboard insights and platform analytics
- Doctor-specific views and profile management
- Responsive UI optimized for both desktop and mobile
- Seamless integration with a Node.js + MongoDB backend

---

## 🧩 Features

### ✅ Admin Functionality

- **Admin Login** with secure credentials
- **Dashboard Overview**:
  - Total doctors, appointments, and patients
  - Recent appointments list
- **Doctor Management**:
  - Add a new doctor via form
  - View/edit all registered doctors
  - Manage doctor availability
- **Appointment Management**:
  - View all appointments with details
  - Cancel or complete appointments
- **Role Switching**:
  - Easily switch between **Admin** and **Doctor** login

### ✅ Doctor Functionality

- **Doctor Dashboard**:
  - View upcoming and past appointments
- **Appointments Page**:
  - Filter and manage patient appointments
- **Profile Page**:
  - View and update personal details
  - Upload profile picture (Cloudinary supported)

### ✅ UI/UX

- Responsive layout
- Toast notifications for success/error messages
- Sidebar + Navbar layout
- Route protection using tokens
- Tailwind CSS styling

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Hi-anshi/prescripto.git
cd prescripto/admin
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `admin` directory and add your environment-specific variables (e.g., API endpoints, Cloudinary keys).

### 4. Run the Development Server

```bash
npm start
```

The app will be available at  http://localhost:5174/

### 5. Build for Production

```bash
npm run build
```

---

## 🛠️ Full Functionality Breakdown

### Admin Functionalities

- **Authentication**
    - Secure admin login/logout
    - Token-based route protection
- **Dashboard**
    - View total doctors, appointments, and patients
    - See recent appointments and platform analytics
- **Doctor Management**
    - Add, edit, or remove doctors
    - Manage doctor profiles and availability
    - View doctor details and statistics
- **Appointment Management**
    - View all appointments
    - Filter by status (upcoming, completed, cancelled)
    - Cancel or mark appointments as completed
- **User Management**
    - View all registered users
    - Edit or deactivate user accounts
- **Role Switching**
    - Switch between admin and doctor views
- **Notifications**
    - Receive real-time updates and toast notifications

### Doctor Functionalities

- **Authentication**
    - Secure doctor login/logout
- **Dashboard**
    - View upcoming and past appointments
    - Quick stats on appointments and patients
- **Appointments**
    - View, filter, and manage appointments
    - Mark appointments as completed or cancelled
- **Profile Management**
    - View and update personal details
    - Upload/change profile picture (Cloudinary integration)
    - Manage availability and working hours
- **Notifications**
    - Receive appointment updates and reminders

---


## 📚 Additional Notes

- Ensure the backend server is running and accessible.
- For Cloudinary integration, set your Cloudinary credentials in the `.env` file.
- For any issues, please open an issue on the repository.

---
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> db6a3ff (Final commit)
>>>>>>> 1be4a6d (Final commit)
