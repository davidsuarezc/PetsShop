const sequelize = require("../database");

module.exports = (sequelize, type) => {
    return sequelize.define('Shop', {
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
        tableName: 'Shops'
    })
}