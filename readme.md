# 🔐 Authenticator  
**Authenticator** is a full-featured authentication system built using React for the frontend and Node.js with Express for the backend. It supports user registration, login, email verification with OTP, password reset, and forgot password functionality. OTPs are securely sent via email using Nodemailer.  

## 🚀 Features  
- ✅ User Registration  
- 🔐 Secure Login  
- 📧 Email Verification with OTP  
- 🔁 Password Reset  
- 😵 Forgot Password Support  
- ✉️ OTP sent via Email  

## 🛠️ Tech Stack  
- **Frontend**: React  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Email Service**: Nodemailer (SMTP)    

## 🧑‍💻 How to Run Locally  

1. **Clone the repository:**  
```bash
git clone https://github.com/NeerajParamkar/Authenticator.git
cd Authenticator
```
2. **Set up environment variables:**
Create a .env file inside the server/ directory with the following content:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```
3. **Install dependencies:**
```bash
cd server
npm install
cd ../client
npm install
```

4 .**Run the project:**
Open two terminals or tabs, then run:

### Start backend server:
```bash
cd server
npm run dev
```

Backend runs at http://localhost:3000

### Start frontend React app:
```bash
cd client
npm run dev
```
Frontend runs at http://localhost:5173

## 🌱 Future Improvements  
- OAuth with Google/Facebook  
- Two-Factor Authentication (2FA)  
- User Dashboard/Profile  
- Logs and Analytics  

## 🤝 Contributing  
Pull requests are welcome! Fork this repo, make your changes, and submit a PR.

