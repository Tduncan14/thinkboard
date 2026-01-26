import express from 'express'
import notesRoutes from "./routes/notesRoute.js"
import { connectDB } from './Config/Config.js';
import cors from "cors";

// needed for deployment
import path from "path"

import dotenv from "dotenv"
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000

// needed for deployment
const __dirname = path.resolve()

connectDB()

// Middleware
app.use(express.json())

if (process.env.NODE_ENV !== "production") {
    app.use(cors())
}

app.use(rateLimiter)

app.use((req, res, next) => {
    console.log("We just got a new req")
    next()
})

app.use("/api/notes", notesRoutes)

if (process.env.NODE_ENV === "production") {

    // serve frontend build
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    // ✅ FIX: REGEX catch-all (path-to-regexp safe)
    app.get(/.*/, (req, res) => {
        res.sendFile(
            path.join(__dirname, "../frontend", "dist", "index.html")
        )
    })
}

app.listen(PORT, () => {
    console.log(`Server started on port:${PORT}`);
})
