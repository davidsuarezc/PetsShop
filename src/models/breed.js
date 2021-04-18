const sequelize = require("../database");

module.exports = (sequelize, type) => {
    return sequelize.define('Breed', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Breeds'
    })
}