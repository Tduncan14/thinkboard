import express from 'express'
import notesRoutes from "./routes/notesRoute.js"
import { connectDB } from './Config/Config.js';

const app = express();

connectDB()

app.use("/api/notes", notesRoutes)



app.listen(5001, () => {

    console.log("Server started on port:5000");
})

