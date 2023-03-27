import City from "../models/cities.js"
const getAll = async (req, res) => {

    const cities = await City.find({})
    
    res.json({
        cities
    })
}

export {getAll}