import express from 'express'
import notesRoutes from "./routes/notesRoute.js"

const app = express();


app.use("/api/notes", notesRoutes)
app.use("/api/products", productRoutes)
app.use("/api/posts", productRoutes)
app.use("/api/payments", productRoutes)
app.use("/api/emails", productRoutes);
// app.get("/api/notes", (req, res) => {


//     res.send("you got 5 notes");
//     res.status(200).send("your notes are savefully saved");

// })



// app.post("/api/notes", (req, res) => {

//     res.status(201).json({ message: 'post created successfully' })

// })


// app.put("/api/notes/:id", (req, res) => {
//     res.status(200).json({ message: "Post updated successfully!" })
// })


// app.delete("/api/notes/:id", (req, res) => {

//     res.status(200).json({ message: "Note deleted successfully" })


// })


app.listen(5001, () => {

    console.log("Server started on port:5000");
})

