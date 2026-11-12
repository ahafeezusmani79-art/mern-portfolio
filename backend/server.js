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
app.use("/api/projects", projectRoutes);

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Portfolio API is running successfully!"
    });
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
