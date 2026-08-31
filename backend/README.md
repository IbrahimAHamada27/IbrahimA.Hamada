# 🚀 Portfolio Backend REST API

<div align="center">

[![NodeJS](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![ExpressJS](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

</div>

Backend REST API service powering **Ibrahim A. Hamada's Portfolio & QA Management System**. Provides secure endpoints for fetching public portfolio data and authenticated CRUD operations for portfolio management.

---

## 🛠️ API Endpoints

### 🔓 Public Routes (Read-Only)
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api` | Server health check |
| `GET` | `/api/siteinfo` | Get site metadata, hero text, and about info |
| `GET` | `/api/projects` | Get list of showcased software & QA projects |
| `GET` | `/api/skills` | Get technical skills & categories |
| `GET` | `/api/experience` | Get career & testing work history |
| `GET` | `/api/education` | Get academic degrees & professional training |
| `GET` | `/api/certificates`| Get certifications & accreditations |
| `GET` | `/api/activities` | Get volunteering, events & tech activities |
| `GET` | `/api/testimonials`| Get testimonials & client reviews |
| `POST`| `/api/messages` | Submit a public contact message |

### 🔒 Protected Admin Routes (`Bearer <JWT_TOKEN>` required)
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/login` | Admin login & token generation |
| `POST` | `/api/projects` | Add a new project |
| `PUT` | `/api/projects/:id` | Update an existing project |
| `DELETE`| `/api/projects/:id` | Delete a project |
| `POST / PUT / DELETE` | `/api/skills`, `/api/experience`, etc. | Manage other resources |

---

## ⚙️ Environment Variables

Create a `.env` file in the `backend/` directory:
```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio_db
JWT_SECRET=your_jwt_secret_key_here
ADMIN_PASSWORD=your_secure_admin_password
```

---

## 📦 Scripts

```bash
# Install dependencies
npm install

# Seed the database with all 12 projects & portfolio records
npm run seed

# Run in development mode (with nodemon)
npm run dev

# Run in production mode
npm start
```
