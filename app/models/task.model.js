module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            required: true
        },
        priority: {
            type: DataTypes.STRING,
            required: true
        },
        description: {
            type: DataTypes.STRING
        }
    });
    return Task;
}