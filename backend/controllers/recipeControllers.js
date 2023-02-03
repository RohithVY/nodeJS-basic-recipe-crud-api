const fetchRecipes = (req, res) => {
    res.json({message : `get request executed`})
}

const postRecipes = (req, res) => {
    res.json({message : `post request executed`})
}

const editRecipes = (req, res) => {
    res.json({message : `put request executed using ${req.params.id}`})
}

const deleteRecipes = (req, res) => {
    res.json({message : `delete request executed using ${req.params.id}`})
}

module.exports = {
    fetchRecipes,
    postRecipes,
    editRecipes,
    deleteRecipes
}