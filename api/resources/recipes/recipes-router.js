const router = require("express").Router();
const Recipes = require("./recipes-model.js");


router.get("/", (req, res) => {
    Recipes.getAllUserRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json(err.message);
    });
});







module.exports = router;