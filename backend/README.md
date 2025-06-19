# Prescripto Backend
---

## 📚 Table of Contents

- [Overview](#-overview)
- [Getting Started](#️-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
    - [User APIs](#user-apis)
    - [Doctor APIs](#doctor-apis)
    - [Admin APIs](#admin-apis)
- [Authentication](#-authentication)
- [File Uploads](#-file-uploads)
- [Functionality Summary](#-functionality-summary)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Overview

The backend handles authentication, user and doctor management, appointment booking, and admin operations. It also manages file uploads (profile images), JWT-based authentication, and integrates with Cloudinary for image storage.

---

## ⚙️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the backend folder:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
ADMIN_EMAIL=admin@prescripto.com
ADMIN_PASSWORD=qwerty123
JWT_SECRET=your_jwt_secret
```

### 3. Run the Server

```bash
npm run dev
```

The backend will run at [http://localhost:4000](http://localhost:4000) by default.

---

## ⚙️ Environment Variables

See the `.env` example above for all required variables.

---

## 🛠️ API Endpoints

### User APIs

| Method | Endpoint                         | Description                        | Auth Required |
|--------|----------------------------------|------------------------------------|:------------:|
| POST   | `/api/user/register`             | Register a new user                | No           |
| POST   | `/api/user/login`                | User login                         | No           |
| GET    | `/api/user/get-profile`          | Get user profile                   | Yes          |
| POST   | `/api/user/update-profile`       | Update user profile (with image)   | Yes          |
| POST   | `/api/user/book-appointment`     | Book an appointment                | Yes          |
| GET    | `/api/user/appointments`         | List user's appointments           | Yes          |
| POST   | `/api/user/cancel-appointment`   | Cancel an appointment              | Yes          |
| GET    | `/api/user/doctors`              | List all available doctors         | No           |
| GET    | `/api/user/doctor/:id`           | Get doctor details                 | No           |
| POST   | `/api/user/change-password`      | Change user password               | Yes          |
| POST   | `/api/user/forgot-password`      | Request password reset             | No           |
| POST   | `/api/user/reset-password`       | Reset password with token          | No           |

---

### Doctor APIs

| Method | Endpoint                              | Description                        | Auth Required |
|--------|---------------------------------------|------------------------------------|:------------:|
| POST   | `/api/doctor/login`                   | Doctor login                       | No           |
| GET    | `/api/doctor/get-profile`             | Get doctor profile                 | Yes          |
| POST   | `/api/doctor/update-profile`          | Update doctor profile (with image) | Yes          |
| GET    | `/api/doctor/appointments`            | List doctor's appointments         | Yes          |
| POST   | `/api/doctor/complete-appointment`    | Mark appointment as completed      | Yes          |
| POST   | `/api/doctor/change-password`         | Change doctor password             | Yes          |
| POST   | `/api/doctor/forgot-password`         | Request password reset             | No           |
| POST   | `/api/doctor/reset-password`          | Reset password with token          | No           |
| POST   | `/api/doctor/update-availability`     | Update doctor's availability       | Yes          |
| GET    | `/api/doctor/patients`                | List all patients                  | Yes          |

---

### Admin APIs

| Method | Endpoint                           | Description                | Auth Required |
|--------|------------------------------------|----------------------------|:------------:|
| POST   | `/api/admin/login`                 | Admin login                | No           |
| GET    | `/api/admin/dashboard`             | Get dashboard stats        | Yes          |
| POST   | `/api/admin/add-doctor`            | Add a new doctor           | Yes          |
| GET    | `/api/admin/doctors`               | List all doctors           | Yes          |
| POST   | `/api/admin/update-doctor`         | Update doctor details      | Yes          |
| GET    | `/api/admin/appointments`          | List all appointments      | Yes          |
| POST   | `/api/admin/remove-doctor`         | Remove a doctor            | Yes          |
| GET    | `/api/admin/users`                 | List all users             | Yes          |
| POST   | `/api/admin/remove-user`           | Remove a user              | Yes          |

---

## 🔒 Authentication

- JWT tokens are used for authentication.
- Users, doctors, and admins receive a token on login.
- The token must be sent in the `Authorization` header for protected routes.

---

## 📦 File Uploads

- Profile images are uploaded using [multer](https://github.com/expressjs/multer).
- Images are stored on [Cloudinary](https://cloudinary.com/).

---

## 📝 Functionality Summary

### User

- Register and login
- View and update profile (including profile image)
- Change and reset password
- Browse doctors and view doctor details
- Book, view, and cancel appointments
- View appointment history

### Doctor

- Login
- View and update profile (including profile image)
- Change and reset password
- Set and update availability
- View all appointments
- Mark appointments as completed
- View list of patients

### Admin

- Login
- View dashboard analytics
- Add, update, and remove doctors
- View all doctors and users
- Remove users
- View all appointments

---

## 🧑‍💻 Tech Stack

- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- Cloudinary for image storage
- Multer for file uploads

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch:  
     ```bash
     git checkout -b feature/YourFeature
     ```
3. Commit your changes:  
     ```bash
     git commit -am 'Add some feature'
     ```
4. Push to the branch:  
     ```bash
     git push origin feature/YourFeature
     ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

