
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection cache
let connectionPromise;

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) {
        return;
    }

    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI environment variable is missing");
    }

    if (!connectionPromise) {
        connectionPromise = mongoose
            .connect(process.env.MONGO_URI)
            .catch((error) => {
                connectionPromise = null;
                throw error;
            });
    }

    await connectionPromise;
}

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Portfolio API is running successfully!"
    });
});

// Connect to MongoDB before handling API requests
app.use("/api", async (req, res, next) => {
    try {
        await connectToDatabase();
        next();
    } catch (error) {
        console.error("MongoDB connection error:", error.message);

        res.status(503).json({
            message: "Database connection failed"
        });
    }
});

// Project routes
app.use("/api/projects", projectRoutes);

// Local development server
if (require.main === module) {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export Express app for Vercel
module.exports = app;
