const db = require('../models');
const User = db.users;

// Create new user
exports.createUser = async(req, res) => {
    try {
        const {name, email, city} = req.body;
        const user = await User.create({
            name,
            email,
            city
        });

        // Send response
        res.status(201).send({
            success: true,
            data: user
        });
    } catch (error) {
        // Send response
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
}

// List users
exports.getUsers = async(req, res) => {
    try {
        const users = await User.findAll({});

        // Send response
        res.status(200).send({
            success: true,
            data: users
        });
    } catch (error) {
        // Send response
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
}