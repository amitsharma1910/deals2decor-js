const express = require('express');
const userRoutes = require('./routes/user.routes');
const categoryRoutes = require('./routes/category.routes');
const {sequelize,connectToDb} = require('./config/db.config');
const body_parser = require('body-parser');

const app = express();
const PORT = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api/category',categoryRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, null));




app.use((request,response)=>{
    response.status(404);
    response.json({message:"Resource not found"});
})


app.use((request,response)=>{
    response.status(500);
    response.json({message:"Oops... Something went wrong"});
})

app.get('/',(request,response)=>{
    response.status(200).json({message:"Hello World"})
})

app.listen(PORT , async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectToDb();
})