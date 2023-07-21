const {sequelize} = require('../config/db.config')
const {DataTypes} = require('sequelize');
const Category = sequelize.define('ProductCategories',{
    
    name: {
        type:DataTypes.STRING,
        validate:{
            max:45
        }
    },
    description: {
        type:DataTypes.STRING,
        validate:{
            max:200
        }
    },
    active: {
        type: DataTypes.BOOLEAN
    },
    
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})
 sequelize.sync()
module.exports = Category