export const getAllNotes = (req,res) => {                            //use router instead of app and / no need to write api/notes bcz its prefixed in server.js                    
    res.status(200).send("fetched notes");
 }

export const createNote = (req, res) => {                               //endpoint
    res.status(201).json({message:"Note created succesfully!"})

}

 export const updateNote = (req, res) => {
    res.status(200).json({message:"Note updated successfully!"})
}

export const deleteNote = (req, res) => {
    res.status(200).json({message:"Note deleted successfully!"})
}

