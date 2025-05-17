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
- **Frontend**: React ,Tailwind css 
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
Create a .env file inside the server folder with the following content:
```bash
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development or server 
SMPT_USER=your_smpt_user_id
SMPT_PASSWORD=Password
SENDER_EMAIL=sender_email_id
```

Also create .env file in client folder with following content:

```bash
VITE_BACKEND_URL='http://localhost:3000'
```

3. **Install dependencies:**

In client folder -:
```bash
npm install axios react-router-dom react-toastify
```

In server folder -:
```bash
npm i express cors dotenv nodemon jsonwebtoken mongoose bcryptjs nodemailer cookie-parser
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
- Two-Factor Authentication(2FA) 
- User Dashboard/Profile  
- Logs and Analytics  

## 🤝 Contributing  
Pull requests are welcome! Fork this repo, make your changes, and submit a PR.