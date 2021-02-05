const router = require("express").Router();
const Users = require("./users-model.js");



// endpoint for creating account
router.post("/register", (req, res) => {

    // const { user_username, user_email, user_password } = req.body;
    // try {
    //     const newUser = await Users.registerUser(req.body)
    //     res.status(200).json(newUser)
    // } catch (error) {
    //     res.status(400).json({ message: error.message })
    // }
    const { user } = req.body;

    // console.log(user)

    Users.registerUser(user)
    .then(newUser => {
        res.status(201).json(newUser)
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })

    
   
})







module.exports = router;