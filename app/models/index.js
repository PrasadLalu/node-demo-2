const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require('./task.model.js')(sequelize, Sequelize);
db.users = require('./user.model.js')(sequelize, Sequelize);

module.exports = db;