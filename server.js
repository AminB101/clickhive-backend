require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripeRoutes = require("./routes/stripeRoutes"); // adjust path if needed

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/stripe", stripeRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Stripe backend running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
