// src/pages/Success.js
import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
    const query = new URLSearchParams(useLocation().search);
    const orderId = query.get("order_id");

    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h1 style={{ color: "green" }}>Payment Successful 🎉</h1>
            <p>Thank you for your purchase!</p>
            <p>
                <b>Order ID:</b> {orderId}
            </p>
            <a href="/products">
                <button style={{ marginTop: "20px" }}>Back to Shop</button>
            </a>
        </div>
    );
};

export default Success;
