import Note from "../models/Note.js"


export const getAllNotes = async (req, res) => {


    try {

        const notes = await Note.find()
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
        await Note.findByIdAndUpdate(req.params.id, { title, content })

        res.status(200).json({ message: "Note updated successfully" })


    }

    catch (err) {

        console.error("Error in update controller ", err)
        res.status(500).json({ message: "Internal sever error " })

    }


}



export const deleteNotes = (req, res, id) => {

    res.status(200).json({ message: "note was deleted" })
}