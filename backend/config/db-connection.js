const Sequelize = require('sequelize')

const sequelize = new Sequelize("saugat","root","",{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize