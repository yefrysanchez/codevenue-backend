const Genre = require("../model/Song")

//Get all Data
const getAllData = async (req , res) => {
    const genres = await Genre.find()
    try{
        res.json(genres)
    }
    catch (err) { 
        res.status(500).json({mgs: err.message})
    }
}



module.exports = {
    getAllData
}