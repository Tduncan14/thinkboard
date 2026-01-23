import express from 'express'
import notesRoutes from "./routes/notesRoute.js"
import { connectDB } from './Config/Config.js';
import cors from "cors";

import dotenv from "dotenv"
import rateLimiter from './middleware/rateLimiter.js';


const app = express();


const PORT = process.env.PORT || 5000

connectDB()





// Middleware
app.use(express.json())
app.use(rateLimiter)
app.use(cors())


app.use((req, res, next) => {

    console.log("We just got a new req")
    next()

})

app.use("/api/notes", notesRoutes)



app.listen(PORT, () => {

    console.log("Server started on port:5000");
})

