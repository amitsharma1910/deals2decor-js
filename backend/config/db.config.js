const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'decorDB',
    'root',
    'India@1234',{
        dialect:'mysql',
        host:'localhost'
    }
);

const connectToDb = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Successfully connected to our db");
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {sequelize , connectToDb}