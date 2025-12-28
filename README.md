# Real-Time Incident Reporting System 

A web-based platform to **report, track, and manage incidents in real time**, designed to improve transparency, response efficiency, and incident verification.

This project was developed as part of an **online development hackathon**, focusing on clean architecture, scalability, and real-world applicability.

---

##  Live Demo

**Frontend (User Interface):**  
https://real-time-incident-reporting-efuk.onrender.com  

**Backend API:**  
https://real-time-incident-reporting.onrender.com/api/incidents  

>  Note: The application is fully deployed. Localhost demos are not used.

---

##  Problem Statement

In many real-world scenarios, incident reporting systems suffer from:
- Delayed reporting
- Lack of verification
- No real-time visibility
- Poor coordination between citizens and authorities

This project aims to address these issues by providing a **centralized, real-time incident monitoring system** with clear role separation and persistent data storage.

---

##  Solution Overview

The system allows:
- **Citizens** to report incidents with details like type, description, and location
- **Users** to view and track reported incidents in real time
- **Admins** to verify incidents and update their status

The application follows a **decoupled frontend-backend architecture**, ensuring scalability and maintainability.

---

##  Key Features

###  Citizen Features
- Report an incident
- View live incident dashboard
- Track incident status and severity

###  Admin Features
- Verify/unverify incident reports
- Update incident status (Reported / In Progress / Resolved)
- Monitor all incidents centrally

###  System Features
- REST API–based backend
- Persistent cloud database
- Deployed and publicly accessible application

---

##  System Architecture
Frontend (React)
? REST APIs
Backend (Node.js + Express)
?
Database (Supabase)


- Frontend handles UI and user interaction
- Backend manages business logic and APIs
- Supabase ensures persistent storage

---

##  Tech Stack

### Frontend
- React
- CSS / Tailwind (as applicable)

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- Supabase (PostgreSQL)

### Deployment
- Render (Frontend + Backend)

---

##  API Endpoints (Backend)

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/api/incidents` | Fetch all incidents |
| POST | `/api/incidents` | Report a new incident |
| PUT | `/api/incidents/:id` | Update incident status / verification |

---

##  Scalability & Design Decisions

- Decoupled frontend and backend allows independent scaling
- REST APIs enable future mobile or third-party integrations
- Cloud-based deployment supports concurrent users
- Polling-based updates simulate real-time behavior

---

##  Future Enhancements

- Authentication & role-based access control
- Media uploads (images/videos)
- Map-based incident visualization
- Real-time updates using WebSockets
- AI-based incident prioritization and duplicate detection

---

##  Team & Collaboration

- Team Size: 2 members
- Work Division:
  - Backend, database, APIs, deployment
  - Frontend, UI/UX, integration, presentation
- Collaboration done remotely using GitHub

---

##  Conclusion

This project demonstrates a **practical, deployable MVP** that aligns with real-world incident management needs.  
It emphasizes clean architecture, scalability, and usability while remaining extensible for future improvements.

---

##  License

This project uses open-source tools and libraries and is intended for educational and hackathon purposes.


