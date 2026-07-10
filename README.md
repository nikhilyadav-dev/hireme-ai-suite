
<p align="center">
  <img src="https://github.com/nikhilyadav-dev/hireme-ai-suite/blob/main/cilent/screenshots/1.-Dashboard.jpg?raw=true" width="900" alt="Hireme AI Suite Banner"/>

</p>



<h1 align="center">🚀 Hireme AI Suite — AI-Powered Resume Builder 📝</h1>

<p align="center">
  <em>A full-scale AI resume generator featuring dynamic forms, cloud CMS, smart authentication, and one-click PDF export.</em>
</p>

<div align="center">
 
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Shadcn UI](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Gemini AI](https://img.shields.io/badge/Google_Gemini_AI-Latest-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Strapi](https://img.shields.io/badge/Strapi-5.x-4945FF?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

</div>


---
## 🎯 About Project

Hireme AI Suite is a full-stack AI-powered platform that helps users:

- Build professional resumes
- Generate AI-written summaries, experiences, and skill descriptions
- Export resumes as PDFs
- Manage content using a custom backend powered by Strapi
- Authenticate securely using Clerk (Google + Email/Password)

The project is built as a complete real-world Full-Stack + AI case study, covering frontend, backend, CMS, authentication, cloud deployment, and automation workflows

---

## ✨ Key Features
🎨 Frontend (React + Vite + Tailwind)

- Clean and responsive UI using Tailwind
- Dynamic multi-step resume forms
- Real-time PDF preview
- Theme color customization
- Modern dashboard for managing documents
---

## 🤖 AI Features (Google Gemini API)

- AI-generated resume summaries
- AI-powered experience writing
- Auto-generated skills description
- Structured AI prompt engineering

---

## 💻 Tech Stack

<div align="center">

### 🎨 Frontend

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Language-FFD600?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)



### 🔐 Authentication

![Clerk](https://img.shields.io/badge/Clerk-Auth-3B82F6?style=for-the-badge&logo=clerk&logoColor=white)


### 🧠 AI / LLM

![Gemini AI](https://img.shields.io/badge/Google_Gemini_AI-Latest-4285F4?style=for-the-badge&logo=google&logoColor=white)


### 🗂 Backend (CMS)

![Strapi](https://img.shields.io/badge/Strapi-5.x-4945FF?style=for-the-badge&logo=strapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)




### 🗄️ Database

![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql&logoColor=white)


</div>

---

##  📸 Screenshots 

<div align="center">

| Screenshot 1 | Screenshot 2 |
|--------------|--------------|
| ![Screenshot 1](https://github.com/nikhilyadav-dev/hireme-ai-suite/blob/main/cilent/screenshots/3-Authentication.jpg?raw=true) | ![Screenshot 2](https://github.com/nikhilyadav-dev/hireme-ai-suite/blob/main/cilent/screenshots/4-Personal-Details.jpg?raw=true) |
| *Authentication Page* | *Personal Details Form* | 

| Screenshot 2 | Screenshot 3 |
|--------------|--------------|
| ![Screenshot 1](https://github.com/nikhilyadav-dev/hireme-ai-suite/blob/main/cilent/screenshots/5-Add-summery.jpg?raw=true) | ![Screenshot 2](https://github.com/nikhilyadav-dev/hireme-ai-suite/blob/main/cilent/screenshots/6-Professional-Experience.jpg?raw=true) |
| *Summery with AI Suggetions* | *Professional Experience Form* | 


| Screenshot 4 | Screenshot 5 |
|--------------|--------------|
| ![Screenshot 1](https://github.com/nikhilyadav-dev/hireme-ai-suite/blob/main/cilent/screenshots/7-Add-Education.jpg?raw=true) | ![Screenshot 2](https://github.com/nikhilyadav-dev/hireme-ai-suite/blob/main/cilent/screenshots/8-Add-Skills.jpg?raw=true) |
| *Education Details Form* | *Skills Form* | 

</div>

--- 

### 📁 Detailed Project Structure

```
hireme-ai-suite/
├─ client/                                   # Frontend (React + Vite + Tailwind + Clerk Auth)
│  ├─ public/                                # Public static assets (favicon, images, logos)
│  │  ├─ cv.png
│  │  ├─ logo.svg
│  │  └─ vite.svg
│  ├─ screenshots/                           # App screenshots used for documentation
│  │  ├─ 1.-Dashboard.jpg
│  │  ├─ 2-Dashboard.jpg
│  │  ├─ 3-Authentication.jpg
│  │  ├─ 4-Personal-Details.jpg
│  │  ├─ 5-Add-summery.jpg
│  │  ├─ 6-Professional-Experience.jpg
│  │  ├─ 7-Add-Education.jpg
│  │  └─ 8-Add-Skills.jpg
│  ├─ service/                               # API wrappers + Gemini AI modal controller
│  │  ├─ AIModal.js
│  │  └─ GlobalApi.js
│  ├─ src/                                    # Main frontend source code
│  │  ├─ assets/                              # SVGs, images, static assets
│  │  │  └─ react.svg
│  │  ├─ auth/                                # Clerk authentication pages
│  │  │  └─ sign-in/
│  │  │     └─ index.jsx
│  │  ├─ components/                          # UI + custom components
│  │  │  ├─ custom/                           # Custom reusable components
│  │  │  │  └─ header.jsx
│  │  │  └─ ui/                               # shadcn-ui components
│  │  │     ├─ alert-dialog.jsx
│  │  │     ├─ button.jsx
│  │  │     ├─ dialog.jsx
│  │  │     ├─ dropdown-menu.jsx
│  │  │     ├─ input.jsx
│  │  │     ├─ sonner.jsx
│  │  │     └─ textarea.jsx
│  │  ├─ context/                             # Global state context for resume data
│  │  │  └─ ResumeInfoContext.jsx
│  │  ├─ dashboard/                           # Dashboard UI for resume management
│  │  │  ├─ components/
│  │  │  │  ├─ AddResume.jsx
│  │  │  │  └─ ResumeCardItem.jsx
│  │  │  └─ index.jsx
│  │  ├─ data/                                # Dummy/sample data
│  │  │  └─ dummy.jsx
│  │  ├─ home/                                # Home page of the application
│  │  │  └─ index.jsx
│  │  ├─ lib/                                 # Utility helpers
│  │  │  └─ utils.js
│  │  ├─ my-resume/                           # Resume preview routes
│  │  │  └─ [resumeId]/view/
│  │  │        └─ index.jsx
│  │  ├─ resume/                              # Resume editor logic + forms + preview
│  │  │  ├─ [resumeId]/edit/
│  │  │  │     └─ index.jsx
│  │  │  └─ components/
│  │  │     ├─ forms/                         # All dynamic resume form sections
│  │  │     │  ├─ Education.jsx
│  │  │     │  ├─ Experience.jsx
│  │  │     │  ├─ PersonalDetail.jsx
│  │  │     │  ├─ Skills.jsx
│  │  │     │  └─ Summery.jsx
│  │  │     ├─ preview/                       # Resume preview components
│  │  │     │  ├─ EducationalPreview.jsx
│  │  │     │  ├─ ExperiencePreview.jsx
│  │  │     │  ├─ PersonalDetaliPreview.jsx
│  │  │     │  ├─ SkillsPreview.jsx
│  │  │     │  └─ SummeryPreview.jsx
│  │  │     ├─ FormSection.jsx                # Wrapper for form sections
│  │  │     ├─ ResumePreview.jsx              # Full resume real-time preview
│  │  │     └─ RichTextEditor.jsx             # Custom rich text editor component
│  │  ├─ App.css                              # Global CSS overrides
│  │  ├─ App.jsx                              # Root component
│  │  ├─ index.css                            # Tailwind base & utilities
│  │  └─ main.jsx                             # Entry point (React + Vite)
│  ├─ .env.local                              # Frontend environment variables
│  ├─ .gitignore                              # Git ignore rules for client
│  ├─ components.json                         # shadcn-ui component registry
│  ├─ eslint.config.js                        # ESLint configuration
│  ├─ index.html                              # Root HTML template
│  ├─ jsconfig.json                           # JS path aliasing
│  ├─ package-lock.json                       
│  ├─ package.json                            # Frontend dependencies
│  ├─ postcss.config.js                       # PostCSS config for Tailwind
│  ├─ tailwind.config.js                      # Tailwind configuration
│  └─ vite.config.js                          # Vite build configuration
│
├─ strapi/                                    # Backend – Headless CMS (Strapi v4)
│  ├─ .strapi/                                # Internal generated system files
│  │  └─ client/                              # Admin UI build files
│  │     ├─ app.js
│  │     └─ index.html
│  ├─ config/                                 # Main Strapi configuration
│  │  ├─ admin.js                             # Admin panel config
│  │  ├─ api.js                               # API settings
│  │  ├─ database.js                          # MySQL database config
│  │  ├─ middlewares.js                       # Middleware configuration
│  │  ├─ plugins.js                           # Plugin settings
│  │  └─ server.js                            # Server configuration
│  ├─ data/                                   # Uploaded files + seed data
│  │  ├─ uploads/                             # CMS media uploads
│  │  └─ data.json                            # Initial seed data
│  ├─ database/
│  │  └─ migrations/                          # Database migration files
│  │     └─ .gitkeep
│  ├─ public/                                 # Public assets for Strapi
│  │  ├─ uploads/
│  │  │  └─ .gitkeep
│  │  └─ robots.txt                           # Crawling rules
│  ├─ scripts/
│  │  └─ seed.js                              # Seeder script for CMS content
│  ├─ src/                                    # Main backend source code
│  │  ├─ admin/                               # Admin UI config
│  │  ├─ api/                                 # API endpoints (content types)
│  │  ├─ components/                          # Reusable Strapi schema components
│  │  ├─ extensions/                          # Plugin extensions
│  │  └─ index.js                             # Backend entry point
│  ├─ types/                                  # Auto-generated TypeScript definitions
│  ├─ .env                                    # Backend environment config
│  ├─ .env.example                            # Example template for backend env
│  ├─ .gitignore                              # Git ignore rules for backend
│  ├─ .strapi-updater.json                    # Tracks upgrade info
│  ├─ favicon.png                             # Backend Admin favicon
│  ├─ jsconfig.json                           # Path configurations
│  ├─ license.txt                             
│  ├─ package-lock.json
│  └─ package.json                            # Backend dependencies
│
└─ .gitignore                                 # Global Git ignore for full project


```
---


## 📦 Installation Guide
Follow the steps below to set up both the Frontend (React + Vite) and Backend (Strapi CMS) on your local machine.

### ⚙️ Prerequisites

- npm or yarn 
- MySQL (for Strapi backend)  
- Google Gemini API Key
- Clerk Authentication Project

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/hireme-ai-suite.git
cd hireme-ai-suite

```

### 2️⃣ Setup Frontend (Client)
➤ Navigate to Client Folder

```bash
cd client

```

➤ Install Dependencies

```bash
npm install
# or
yarn install

```

➤ Add Environment Variables
Create a file named .env.local:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Strapi API Key
VITE_STRAPI_API_KEY=your_strapi_api_key

# Backend Base URL
VITE_API_BASE_URL=http://localhost:1337

# Google Gemini API
VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key
```

➤ Start Development Server
```bash
npm run dev
```

### Frontend will start at:
 http://localhost:5173



### 3️⃣ Setup Backend (Strapi CMS)
➤ Navigate to Strapi Folder

```bash
cd ../strapi

```

➤ Install Dependencies

```bash
npm install

```

➤ Configure Database (MySQL)
Create .env inside strapi/:

```env

# Server Configuration

HOST=0.0.0.0
PORT=1337

#Security Secrets (Replace with your own secure values)
APP_KEYS=your_app_key_1,your_app_key_2,your_app_key_3,your_app_key_4
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_token_salt
ENCRYPTION_KEY=your_encryption_key
JWT_SECRET=your_jwt_secret


# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=your_database_host
DATABASE_PORT=your_database_port
DATABASE_NAME=your_database_name
DATABASE_USERNAME=your_database_username
DATABASE_PASSWORD=your_database_password

# SSL settings (keep true for production DBs)
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

```

➤ Run Strapi Development Server
```bash
npm run develop
```
### 4️⃣ Build for Production

Frontend:

```bash
cd client
npm run build

```

Backend:

```bash
cd strapi
npm run build


```
---

## 🤝 Contributing 
Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Open a Pull Request.

Please ensure your code adheres to the existing style and that any new features are well-tested. 

---

<div align="center">

### 💼 Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nikhilyadav-developer)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nikhilyadav-dev)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:nikhilyadav.prof@gmail.com)

**⭐ If you found this project helpful, consider giving it a star!**

</div>

