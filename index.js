const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const servicesRouter = require("./src/routes/servicesRouter");
const contactRouter = require("./src/routes/contactRouter");
const aboutRouter = require("./src/routes/aboutRouter");
const projectsRouter = require("./src/routes/projectsRouter");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", servicesRouter);
app.use("/api", contactRouter);
app.use("/api", aboutRouter);
app.use("/api", projectsRouter);

const { MONGODB_URI, PORT } = process.env;
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT || 3000, () => {
            console.log(`Server running on port ${PORT || 3000}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });