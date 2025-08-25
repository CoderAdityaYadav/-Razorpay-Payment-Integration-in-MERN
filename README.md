# 💳 Razorpay Payment Integration in MERN

A full-stack MERN application demonstrating seamless Razorpay payment gateway integration — from product listing to secure order verification and a celebratory success page. Built for developers who want to understand real-world payment flows in modern web apps.

---

## 🚀 Features

✨ This project includes:

- 📦 **Product Listing Page** – Built with React + Vite  
- 💰 **Razorpay Checkout Integration** – Smooth and secure payment experience  
- 🔐 **Secure Backend Order Creation** – Node.js + Express  
- ✅ **Payment Verification** – HMAC-SHA256 signature validation  
- 🗄️ **MongoDB Transaction Storage** – Optional persistence layer  
- 🎉 **Success Page** – Displays order confirmation and details  

---

## 🛠️ Tech Stack

| Layer       | Technology                         |
|------------|-------------------------------------|
| Frontend   | React (Vite), Razorpay Checkout.js |
| Backend    | Node.js, Express.js                |
| Database   | MongoDB (optional)                 |
| Payment    | Razorpay API                       |

---

## 🔄 Payment Flow

``` graph TD
A[User visits /products] --> B[Clicks "Buy Now"]
B --> C[Frontend calls /create-order]
C --> D[Backend creates Razorpay order]
D --> E[Returns order_id to frontend]
E --> F[Razorpay Checkout popup opens]
F --> G[User completes payment]
G --> H[Frontend sends details to /verify-payment]
H --> I[Backend verifies signature with HMAC-SHA256]
I --> J[If valid → redirect to /success?order_id=xxxx]
```

---

## 📁 Project Structure

```
Payment-Razorpay/
│
├── backend/              # Express server
│   ├── src/
│   │   ├── routes/       # Payment routes
│   │   └── server.js     # App entry point
│   ├── .env              # Razorpay keys (ignored in git)
│   └── package.json
│
├── frontend/             # React app (Vite)
│   ├── src/
│   │   ├── pages/        # Products & Success pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env              # Frontend env (ignored in git)
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 📦 Environment Setup

Create `.env` files in both `backend/` and `frontend/` directories:

### `backend/.env.example`

```env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=5000
```

### `frontend/.env.example`

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

## 🧪 Getting Started

1. Clone the repo  
   ```bash
   git clone [https://github.com/your-username/razorpay-mern-integration.git](https://github.com/CoderAdityaYadav/-Razorpay-Payment-Integration-in-MERN.git)
   ```

2. Install dependencies  
   ```bash
   cd backend && npm install  
   cd ../frontend && npm install
   ```

3. Add your Razorpay credentials to `.env` files

4. Start the servers  
   ```bash
   # In backend/
   npm run dev

   # In frontend/
   npm run dev
   ```

5. Visit `http://localhost:5173/products` to test the flow

---

## 🛡️ Security Note

Always keep your Razorpay secret key safe and never expose it on the frontend. This project uses HMAC-SHA256 to verify payment authenticity on the backend.

---

## 🙌 Credits

Built with ❤️ by [Aditya](https://github.com/CoderAdityaYadav)  
Inspired by real-world payment integration needs for modern web apps.
