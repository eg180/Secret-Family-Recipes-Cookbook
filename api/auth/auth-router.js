const router = require("express").Router();
// const Users = require("../resources/users/users-model.js");
// const bcrypt = require("bcryptjs");



router.post("/login", async (req, res) => {
    const {user_username, user_password } = req.body;

    try {
        // const allegedUser = await Users.findBy(user_username)
        // res.json('no error, but look at res')
        res.status(200).json('we received something! looking good!')
        
    } catch (err) {
        res.status(500).json(err.message)
    }
});

module.exports = router;