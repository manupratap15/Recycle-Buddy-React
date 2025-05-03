
# ♻️ Recycle Buddy (React)

Recycle Buddy is a web application built using React.js that helps users manage recyclable waste effectively. It aims to promote sustainable living by connecting users with recycling centers and providing features to track recyclable materials.

## 🚀 Features

- 🔍 View and manage recyclables
- 📍 Locate nearby recycling centers
- 🧾 Submit pickup requests for recyclable materials
- 📊 Dashboard to monitor recycling activity
- 🔐 User authentication and session management

## 📸 Screenshots

> (Add screenshots here to showcase app UI - e.g., homepage, dashboard, etc.)

## 🛠 Tech Stack

- **Frontend:** React.js, React Router, Axios, Bootstrap
- **State Management:** useState, useEffect (React Hooks)
- **Backend:** Firebase (Authentication, Firestore)
- **Styling:** CSS, Bootstrap

## ⚙️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/manupratap15/Recycle-Buddy-React.git
cd Recycle-Buddy-React
```

2. **Install dependencies:**

```bash
npm install
```

3. **Setup Firebase:**

- Create a Firebase project from [Firebase Console](https://console.firebase.google.com/)
- Enable **Authentication** (Email/Password)
- Set up **Cloud Firestore**
- Replace the Firebase config in `/src/firebase.js` with your project credentials.

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

4. **Run the development server:**

```bash
npm start
```

App will be available at `http://localhost:3000`

## 📂 Project Structure

```
Recycle-Buddy-React/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── firebase.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 📌 Future Enhancements

- Integration with Google Maps API
- Admin panel for managing user requests
- Push notifications for pickups
- AI-based recycling tips

## 🤝 Contributing

Contributions are welcome! Please fork the repository and open a pull request with your changes.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Manupratap Singh Rajawat**  
GitHub: [@manupratap15](https://github.com/manupratap15)  
Feel free to reach out for suggestions or collaboration!
