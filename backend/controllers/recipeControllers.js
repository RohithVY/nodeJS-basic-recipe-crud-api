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
    const { id } = req.params;
    const { name, toppings, price } = req.body;

    const item = itemData.find((item) => item.id === id);

    if (name) item.name = name;
    if (toppings) item.toppings = toppings;
    if (price) item.price = price;

    res.send(
        `Item with id ${id} and name ${item.name} has been updated successfully`
    );
})

const deleteRecipes = asyncHandler( async (req, res) => {
    const { id } = req.params;

    itemData = itemData.filter((item) => item.id !== id);
    res.send(`Item with id ${id} has been deleted successfully.`);
})

const getParticularRecipe = asyncHandler( async(req, res) => {
    const { id } = req.params;

    const itemFound = itemData.find((item) => item.id === id);
    res.json(itemFound)
})

module.exports = {
    fetchRecipes,
    postRecipes,
    editRecipes,
    deleteRecipes,
    getParticularRecipe
}