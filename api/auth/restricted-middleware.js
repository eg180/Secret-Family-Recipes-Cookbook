const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || 'shh';

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                // something wrong with token?
                res.status(401).json({ you: "can't touch this" })
            } else {
                // token is good and we can see the data inside the decoded token
                req.jwt = decodedToken; // we now have access to it in req so we have access to data  / optional
                next();
            }
        })
 
    } else {
        res.status(401).json({ you: "shall not pass" })
    }
}