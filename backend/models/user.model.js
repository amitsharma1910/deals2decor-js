const {sequelize} = require('../config/db.config')
const {DataTypes} = require('sequelize');
const User = sequelize.define('Users',{
    
    user_name: {
        type:DataTypes.STRING,
        validate:{
            max:100
        }
    },
    password: {
        type:DataTypes.STRING,
        validate:{
            max:100
        }
    },
    login_with_gmail: {
        type: DataTypes.BOOLEAN
    },
    login_with_facebook: {
        type: DataTypes.BOOLEAN
    },
    email: {
        type:DataTypes.STRING
        
    },
    phone_no: {
        type:DataTypes.STRING
    },
    artist: {
        type: DataTypes.BOOLEAN
    },
    status: {
        type: DataTypes.INTEGER
    },
    activationcode: {
        type:DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    activated_on: {
        type: DataTypes.DATE
    }
})
 sequelize.sync()
module.exports = User