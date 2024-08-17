const Genre = require("../model/Genres")

//Get all Data
const getAllData = async (req , res) => {
    try{
        const genres = await Genre.find()
        res.json(genres)
    }
    catch (err) { 
        res.status(500).json({mgs: err.message})
    }
}



module.exports = {
    getAllData
}