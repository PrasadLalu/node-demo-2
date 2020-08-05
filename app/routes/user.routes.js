var router = require('express').Router();
const { 
    createUser,
    getUsers
} = require('../controllers/user.controller');

router
    .route('/')
    .post(createUser)
    .get(getUsers);

module.exports = router;