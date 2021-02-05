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

router.get("/ingredients", (req, res) => {
    Recipes.getIngredientsInDb()
    .then(ingredients => {
        res.status(200).json(ingredients);
    })
    .catch(err => {
        res.status(500).json(err.message);
    });
});

router.get("/units", (req, res) => {
    Recipes.getUnits()
    .then(quantities => {
        res.status(200).json(quantities);
    })
    .catch(err => {
        res.status(500).json(err.message);
    });
});


router.post("/search", (req, res) => {
    const { recipe_name } = req.body;
    console.log(recipe_name)

    Recipes.findRecipeByName(recipe_name)
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json(err.message);
    });
});








module.exports = router;