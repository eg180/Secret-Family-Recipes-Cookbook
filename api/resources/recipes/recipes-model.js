const db = require('../../data/dbConfig.js');

module.exports = {
    getAllUserRecipes,
    getRecipeById,
    getIngredientsInDb,
    getUnits

}

function getAllUserRecipes() {

    // should return all data relating to user_recipes

    // select users.user_id, users.user_username, recipes.recipe_name, categories.category
    // from users
    // INNER JOIN user_recipes ON users.user_id = user_recipes.user_id
    // INNER JOIN categories ON user_recipes.category = categories.category_id
    // INNER JOIN recipes ON user_recipes.recipe_id = recipes.recipe_id;

    return db('users')
    .innerJoin('user_recipes', 'users.user_id', 'user_recipes.user_id')
    .innerJoin('categories', 'user_recipes.category', 'categories.category_id')
    .innerJoin('recipes', 'user_recipes.recipe_id', 'recipes.recipe_id')
    .select(
        'users.user_id',
        'users.user_username',
        'recipes.recipe_name',
        'categories.category'
    )
}


function getRecipeById(user_id) {
    return getAllUserRecipes().where('q.recipe_id', user_id)
}

function getIngredientsInDb() {
    return db('ingredients')
    .select(
        'ingredient_name'
    )
}


function getUnits() {
    return db('units')
    .select(
        'unit'
    )
}


