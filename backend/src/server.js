import express from 'express'
import dotenv from "dotenv"
import Razorpay from "razorpay"
import cors from "cors";
import userRoutes from "./routes/routes.js"

dotenv.config();
const app = express();
app.use(
    cors({
        origin: "http://localhost:5174", // allow frontend
        credentials: true,
    })
);app.use(express.json());



const PORT = process.env.PORT || 3000

app.use("/api", userRoutes);

app.listen(PORT, () => console.log("Server is running on ", PORT));