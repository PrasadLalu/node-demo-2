module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return User;
}