const db = require('../../data/dbConfig.js');

module.exports = {
    getAllUserRecipes,
    getRecipeById
}

function getAllUserRecipes() {

    // should return all data relating to user_recipes
    return db('user_recipes')
}


function getRecipeById(user_id) {
    return getAllUserRecipes().where('q.recipe_id', user_id)
}


