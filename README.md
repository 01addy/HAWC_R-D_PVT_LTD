# 🔐 LoginApp – React Native (Expo)

A clean and functional login/signup application built with **React Native (Expo)**. It stores user data locally and demonstrates basic authentication logic with screen navigation.

---

## 📱 App Features

### 👤 Authentication
- **Sign Up**
  - Validates email & password format
  - Stores user info in a local `.json` file
- **Login**
  - Checks user credentials from stored data
  - Redirects to **About Developer** screen upon success

### 👨‍💻 About Developer Screen
- Highlights developer profile and resume link
- Displays tech stack used in the project
- Includes **Log Out** button

---

## 🔄 App Flow

Start Screen → Sign Up or Login
↓
Login success → About Developer Screen
↓
User can Log Out and return to Login


---

## 💻 Tech Stack

### 🔧 Core Technologies
- **React Native (Expo)** – Mobile UI framework
- **Expo FileSystem** – To store user data locally
- **React Navigation** – For screen routing and transitions

### 🎨 Styling & UI
- **StyleSheet** – Consistent layout and design
- **Custom Components** – `Header`, `PrimaryButton`, etc.

---

## 📁 Folder Structure

```plaintext
LoginApp/
├── App.js                      # Main app entry
├── app.json                   # Expo config
├── package.json               # Project metadata
│
├── backend/
│   └── users.json             # Local storage of user credentials
│
├── components/
│   ├── Header.js              # Reusable header component
│   └── PrimaryButton.js       # Custom button component
│
├── screens/
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   └── AboutDeveloper.js
│
├── utils/
│   └── storage.js             # Read/write utility functions
│
├── assets/
│   └── images/                # App icons, splash, etc.
│
├── .gitignore
└── README.md

🚀 How to Run This App Locally
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/LoginApp.git
cd LoginApp
2. Install Dependencies
Make sure you have Node.js and Expo CLI installed.

bash
Copy
Edit
npm install
3. Start the App
bash
Copy
Edit
npx expo start
Then:

Scan the QR Code from your phone using Expo Go

Or run on emulator using i (iOS) or a (Android)

📷 Preview

![WhatsApp Image 2025-06-20 at 01 50 42_8fbf44f7](https://github.com/user-attachments/assets/98cc7927-7c7a-4c32-9298-f84da2205b8f)
![WhatsApp Image 2025-06-20 at 01 50 42_a6382d39](https://github.com/user-attachments/assets/1bfebc29-cf56-4e1c-aa00-22b664e9e017)


