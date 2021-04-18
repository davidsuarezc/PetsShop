const sequelize = require("../database");

module.exports = (sequelize, type) => {
    return sequelize.define('Person', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        username: {
            type: type.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: type.STRING,
            allowNull: false
        },
        photo: type.STRING
    }, {
        tableName: 'People'
    })
}