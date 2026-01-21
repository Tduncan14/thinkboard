import Note from "../models/Note.js"


export const getAllNotes = async (req, res) => {


    try {

        const notes = await Note.find().sort({ createdAt: -1 }); // show the newest first
        res.status(200).json(notes);

    }

    catch (err) {
        console.error(` this is the error ${err}`)
        res.status(500).json({ message: "Internal server error" })


    }
}



export const createNotes = async (req, res,) => {


    try {
        const { title, content } = req.body
        const newNote = new Note({ title, content })

        const saveNote = await newNote.save();

        res.status(201).json({ message: "Note created successfully", saveNote })

    }

    catch (err) {
        console.error("error in createNote controller", err)

    }

}


export const updateNotes = async (req, res) => {

    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true })


        if (!updatedNote) return res.status(404).json({ message: "Note not found" })

        res.status(200).json({ message: "Note updated successfully", updatedNote })


    }

    catch (err) {

        console.error("Error in update controller ", err)
        res.status(500).json({ message: "Internal sever error " })

    }


}


export async function getNoteById(req, res) {

    try {

        const getNote = await Note.findById(req.params.id)

        if (!getNote) res.status(404).json({ message: "single as message not found" })


        res.status(200).json({ message: "single note is found", getNote })


    }

    catch (err) {

        console.error('this is the error', err)

        process.exit(1)

    }

}



export const deleteNotes = async (req, res) => {

    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);

        if (!deleteNote) return res.status(404).json({ message: "message not found" })
        res.status(200).json({
            message: "successfully deleted"
        })

    }

    catch (err) {

        console.error("this is the error", err)

    }
}