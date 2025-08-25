// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Success from "./pages/Success";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </Router>
    );
}

export default App;
