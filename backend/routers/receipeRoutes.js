const express = require('express')
const router = express.Router()
const { uid } = require("uuidv4")

const { fetchRecipes, postRecipes, editRecipes, deleteRecipes } = require('../controllers/recipeControllers')

router.get('/',fetchRecipes)

router.post('/', postRecipes)

router.put('/:id', editRecipes)

router.delete('/:id', deleteRecipes)

module.exports = router