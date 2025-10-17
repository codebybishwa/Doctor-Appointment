# MediNexusHealth – Doctor Appointment Booking System

🌐 **Frontend Live:** [Click here to view](https://doctor-appointment-7hrs.vercel.app/)

A **full-stack doctor appointment booking system** that allows **patients, doctors, and admins** to manage appointments efficiently. This platform is designed for clinics, hospitals, or individual doctors to handle appointments and payments online seamlessly.

**Disclaimer:** This project name is for demonstration purposes and may be similar to an existing brand. This project is not affiliated with any existing company or brand.


---

## **Table of Contents**

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Project Structure](#project-structure)  
- [Screenshots](#screenshots)  
- [Future Enhancements](#future-enhancements)
- [Steps to Setup Project Locally](#steps-to-setup-project-locally)   
- [License](#license)  

---

## **Features**

### 1️⃣ Patient Portal
- Register and login as a patient.  
- Browse all available doctors.  
- Book appointments with doctors.  
- Manage and cancel appointments.  
- Pay appointment fees online (integration with payment gateways).  

### 2️⃣ Doctor Portal
- Login as a doctor.  
- View all booked appointments.  
- Track earnings and appointment history.  
- Update profile and availability.  

### 3️⃣ Admin Dashboard
- Login as admin.  
- Manage doctor profiles (add, edit, remove).  
- Monitor all appointments across the platform.  

---

## **Technologies Used**
- **Frontend:** React, Tailwind CSS, React Router DOM  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT-based authentication for Patients, Doctors, and Admins  
- **Other Tools:** Stripe/Razorpay Payment Gateway (planned integration), Axios  

---

## **Project Structure**

- **admin/** – Admin dashboard frontend.  
- **backend/** – Server, API routes, database models.  
- **frontend/** – Patient and doctor web interface.  

---

## **Screenshots**

### Home Page
<img width="1831" height="875" alt="image" src="https://github.com/user-attachments/assets/f2d2958e-abe2-4bf1-bae4-ee684e28640b" />

<img width="1603" height="924" alt="image" src="https://github.com/user-attachments/assets/ef10bf42-1c35-48a8-9219-5559390b5987" />



### Patient Profile
<img width="1614" height="907" alt="image" src="https://github.com/user-attachments/assets/e392975d-7bb7-4be1-9d04-d896e35beef2" />


### Doctor Dashboard
<img width="1881" height="846" alt="image" src="https://github.com/user-attachments/assets/80da1748-70cc-4bae-9194-c72e8898639f" />


### Admin Dashboard
<img width="1907" height="767" alt="image" src="https://github.com/user-attachments/assets/4b8f8b74-48d3-4c70-a9b9-30a7cc3b7735" />

---

## **Future Enhancements**
- Email/SMS notifications for appointment confirmation and reminders.  
- Advanced analytics and reporting for admin.

---

## **Steps to Setup Project Locally**

1. **Clone the repository:**  
```bash
git clone <your-repo-link>
```

2. **Install dependencies:**
 ```bash
cd frontend
npm install
```
 ```bash
cd backend
npm install
```
 ```bash
cd admin
npm install
```

3.**Configure environment variables:**
- In backend/.env, set the following:

```bash
MONGODB_URI=<your-mongodb-uri>
CLOUDINARY_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_SECRET_KEY=<your-cloudinary-secret-key>
RAZORPAY_KEY_ID=<optional>
STRIPE_SECRET_KEY=<optional>
```

4. **Run the backend server:**
```bash
cd backend
npm run server
```

5. **Run the frontend server:**
```bash
cd frontend
npm run dev
```

---
## 📜 License
This project is licensed under the MIT License.



