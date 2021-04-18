const sequelize = require("../database");

module.exports = (sequelize, type) => {
    return sequelize.define('Animal', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: type.DECIMAL,
        amount: type.INTEGER
    }, {
        tableName: 'Animals'
    })
}