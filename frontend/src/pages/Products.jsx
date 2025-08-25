// src/pages/Products.js
import React from "react";

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 799,
        description: "Smooth and ergonomic wireless mouse.",
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 2499,
        description: "RGB backlit mechanical keyboard.",
    },
    {
        id: 3,
        name: "Noise Cancelling Headphones",
        price: 4999,
        description: "Over-ear headphones with ANC.",
    },
];

const Products = () => {
    const handleBuy = async (product) => {
        const res = await fetch("http://localhost:3000/api/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: product.price }),
        });
        const order = await res.json();

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: "My Shop",
            description: product.name,
            order_id: order.id,
            handler: async function (response) {
                // send payment details to backend for verification
                const verifyRes = await fetch("http://localhost:3000/api/verify-payment", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(response),
                });
                const data = await verifyRes.json();

                if (data.success) {
                    // redirect to success page with order_id
                    window.location.href = `/success?order_id=${order.id}`;
                } else {
                    alert("Payment verification failed!");
                }
            },
            theme: { color: "#3399cc" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Products</h1>
            <div style={{ display: "flex", gap: "20px" }}>
                {products.map((p) => (
                    <div
                        key={p.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "15px",
                            width: "250px",
                        }}>
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <p>
                            <b>₹{p.price}</b>
                        </p>
                        <button onClick={() => handleBuy(p)}>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
