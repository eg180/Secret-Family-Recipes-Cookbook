const db = require('../../data/dbConfig.js');

module.exports = {
    registerUser,
    findByUserId
}

// async function registerUser(user) {

//     // https://youtu.be/XrqSmZSkQ4w?t=3580
//     // this will receive the object whose keys will be parsed to create user

//     // INSERT INTO users(user_username, user_email, user_password)
//     // VALUES('deletethisusername', 'deletethisemail@deletemeplz.com', 'deletethisgenericpassword');
//     try {
//         const [user_id] = await db('users').insert(user, "user_id");

//         return findByUserId(user_id);
//     } catch (error) {
//         throw error;
//     }
// }

async function registerUser(user) {
    try {
        const [user_id] = await db('users').insert(user, 'user_id');
        return findByUserId(user_id)
    } catch (error) {
        return error;
    }
}

function findByUserId(user_id) {
    return db('users').where({ user_id }).first();
}