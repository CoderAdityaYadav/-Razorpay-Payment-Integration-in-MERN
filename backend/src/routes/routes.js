import express from 'express'
const router = express.Router();
import Razorpay from 'razorpay';
import crypto from "crypto"
import dotenv from "dotenv"

dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/create-order", async (req, res) => {
    try {
        const { amount, currency } = req.body;

        const options = {
            amount: amount * 100, // Razorpay works in paise (₹500 → 50000)
            currency: currency || "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating order");
    }
});

router.post("/verify-payment", async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (expectedSign === razorpay_signature) {
            // Payment success → save to DB
            // Example: await Payment.create({ razorpay_order_id, razorpay_payment_id, amount: ... })
            res.json({ success: true, message: "Payment verified" });
        } else {
            res.status(400).json({
                success: false,
                message: "Payment verification failed",
            });
        }
    } catch (err) {
        res.status(500).send("Error verifying payment");
    }
});

export default router;