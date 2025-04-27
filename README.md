# MediAddicts - Medication Reminder App 💊

**MediAddicts** is a simple web application that helps users and their families remember to take their medications on time by scheduling daily SMS reminders.  
The system uses a user-friendly form interface to collect information and a backend server powered by **Node.js**, **Express**, and **Twilio** to send scheduled SMS reminders.

---

## 🚀 Features
- 📋 Collect user's name and phone number
- 👨‍👩‍👧‍👦 Add multiple family members' names and phone numbers
- ⏰ Set multiple daily medication times
- 📲 Automatically send SMS reminders at the specified times
- 🧹 Cancel all scheduled reminders easily
- ⚡ Clean, simple, and mobile-friendly interface

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **SMS Service:** Twilio API
- **Scheduling:** node-cron

---


## 📋 How It Works

1. **User Registration:**  
   The user enters their name and phone number.

2. **Family Members:**  
   The user can add additional family members and their phone numbers.

3. **Medicine Scheduling:**  
   The user specifies how many times a day they take their medicine.

4. **Backend Communication:**  
   When the user submits the times, the frontend sends all collected data to the Node.js backend.

5. **SMS Scheduling:**  
   The backend uses Twilio and node-cron to schedule and send SMS reminders daily at the selected times.

---


