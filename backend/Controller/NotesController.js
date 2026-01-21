
export const getAllNotes = (req, res) => {

    res.status(200).send("You just fetched the notes");
}



export const createNotes = (req, res, id) => {

    res.status(200).json({ message: "Notes are updated " })
}


export const updateNotes = (req, res, id) => {

    res.status(200).json({ message: "note was successfully updated" })
}



export const deleteNotes = (req, res, id) => {

    res.status(200).json({ message: "note was deleted" })
}