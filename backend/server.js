import express from 'express'
import notesRoutes from "./routes/notesRoute.js"
import { connectDB } from './Config/Config.js';
import dotenv from "dotenv"

const app = express();


const PORT = process.env.PORT || 5000

connectDB()


// Middleware
app.use(express.json())


app.use("/api/notes", notesRoutes)



app.listen(PORT, () => {

    console.log("Server started on port:5000");
})

