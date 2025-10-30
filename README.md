Symptom Detector Health App

A full‑stack AI‑assisted health symptom checker that takes user symptoms and medical history to provide personalized health insights.

🚀 Features

User authentication (JWT)

Symptom input & analysis

Medical history tracking

Secure MongoDB storage

Real‑time recommendations

Scalable modular architecture

🛠️ Tech Stack

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Auth: JWT

📦 Installation

1️⃣ Clone the repository

git clone https://github.com/1200nk/health-app.git

cd health-app

2️⃣ Install dependencies

Frontend:

cd client

npm install

Backend:

cd server

npm install

🔑 Environment Variables Setup

Create .env file under /server with:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

SYMPTOM_API_KEY=your_optional_external_api

🧪 Sample Test Data

Example user JSON for testing registration:

{
"name": "John Doe",
"email": "john@example.com",
"password": "123456"
}

Example symptom submission:

{
"symptoms": ["fever", "cough", "fatigue"],
"age": 25,
"gender": "male",
"history": ["asthma"]
}

▶️ Running the App

Backend:

cd server

npm start

Frontend:


cd client


npm start

App runs on:


Frontend: http://localhost:3000

Backend: http://localhost:5000

🌐 Deployment


Deploy Backend


Render / Railway / Vercel / AWS

Add environment variables

Connect MongoDB Atlas

Deploy Frontend


Vercel / Netlify

Important


Update the frontend .env with deployed backend URL

📎 Folder Structure

project

├── client (React)

└── server (Node/Express)

📹 Demo & Docs

Demo Video Link

Architecture Diagram

PPT Link

📡 API Documentation

🔐 Authentication

Register User

POST /api/auth/register

Body: { name, email, password }

Login User

POST /api/auth/login

Body: { email, password }

💊 Symptom Analysis

Submit Symptoms

POST /api/symptom/analyze

Headers: Authorization: Bearer <token>

Body: { symptoms: [], age, gender, history: [] }

Get User History

GET /api/symptom/history

Headers: Authorization: Bearer <token>

Responses include condition suggestions, risk level, and advice.

🚀 Future Enhancements

AI model integration for advanced diagnosis

Chatbot assistant for health queries

Integration with wearable devices for vitals monitoring

Doctor tele‑consultation module

Admin dashboard for analytics

Notifications & reminders for medication/history

⭐ Star this repo if you find it useful!
