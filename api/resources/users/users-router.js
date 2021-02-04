const router = require("express").Router();
const Users = require("./users-model.js");


router.get("/", (req, res) => {
    res.status(200).json({ message: "USERS WILL APPEAR HERE!"})
    // Users.getAll()
    // .then(users => {
    //     res.status(200).json(users);
    // })
    // .catch(err => {
    //     res.status(500).json(err.message);
    // });
});

// endpoint for creating account
router.post("/", (req, res) => {

    // const { user_username, user_email, user_password } = req.body;
    // try {
    //     const newUser = await Users.registerUser(req.body)
    //     res.status(200).json(newUser)
    // } catch (error) {
    //     res.status(400).json({ message: error.message })
    // }
    let { user } = req.body;

    Users.registerUser(user)
    .then(newUser => {
        res.status(201).json({ data: newUser })
    })
    .catch(error => {
        res.status(500).json({ error: error.message })
    })

    
   
})







module.exports = router;