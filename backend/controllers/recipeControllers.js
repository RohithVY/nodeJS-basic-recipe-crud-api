const asyncHandler = require('express-async-handler')
const { v4 } = require('uuid')

let itemData = [
    {
       "name": "Waffles",
       "toppings": "strawberry",
       "price": 200
    }
 ];


const fetchRecipes = asyncHandler( async (req, res) => {
    res.json(itemData)
})

const postRecipes = asyncHandler( async (req, res) => {
    const item = req.body

    itemData.push({...item, id: v4() })
    res.json(item)
})

const editRecipes = asyncHandler( async (req, res) => {
    res.json({message : `put request executed using ${req.params.id}`})
})

const deleteRecipes = asyncHandler( async (req, res) => {
    res.json({message : `delete request executed using ${req.params.id}`})
})

module.exports = {
    fetchRecipes,
    postRecipes,
    editRecipes,
    deleteRecipes
}