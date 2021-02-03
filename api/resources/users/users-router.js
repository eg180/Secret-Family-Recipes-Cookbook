const router = require("express").Router();


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







module.exports = router;