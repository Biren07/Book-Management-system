import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import bookRoutes from "./routes/book.route.js";
import userRoutes from "./routes/User.route.js";
import authRoutes from "./routes/auth.route.js";
import authorRoutes from "./routes/author.route.js";
import borrowRoute from "./routes/borrow.route.js"
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/borrow",borrowRoute);
app.use("/api/author",authorRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/user",userRoutes);

// Health check
app.get("/", (req, res) => {
    res.send("Book Management API is running");
});

// Database connection
connectDb();

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
