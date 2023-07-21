const express = require('express');
const categoryRouter = express.Router()
const Category = require('../models/category.model');
const { EmptyResultError } = require('sequelize');


categoryRouter.get('/', async(request,response)=>{
    const categorys = await Category.findAll();

    response.status(200).json(categorys);
});

categoryRouter.post('/', async (request,response)=>{
    const { name, description, active, parent_category_id,createdAt, updatedAt} = request.body;

    const newCategory = Category.build({
        
        'name': name,
        'description': description,
        'active':active ,
        'parent_category_id': parent_category_id,
        'createdAt': createdAt,
        'updatedAt':updatedAt
    })

    try{
        await newCategory.save()

        response.status(201).json(newCategory);
    }
    catch(error){
        response.json(error)
    }
});

categoryRouter.get('/:id', async (request,response)=>{
    const category = await Category.findOne({
        where: {
            id:request.params.id
        }
    });
    if(category != null)
    response.status(200).json(category)
    else
    response.status(200).json({})

});



categoryRouter.put('/:id', async(request,response)=>{
    const category = await Category.findOne({
        where: {
            id:request.params.id
        }
    });

    const { category_name, password, login_with_gmail, login_with_facebook,email,phone_no,artist,status,activationcode,createdAt, updatedAt, activated_on} = request.body;

    await category.set(
        {
            category_name: category_name,
        password: password,
        login_with_gmail:login_with_gmail ,
        login_with_facebook: login_with_facebook,
        email: email,
        phone_no: phone_no,
        artist: artist,
        status: status,
        activationcode: activationcode,
        createdAt: createdAt,
        updatedAt:updatedAt,
        activated_on:activated_on
        }
    )

    await category.save();  

    if(category != null)
    response.status(200).json(category)
    else
    response.status(200).json({})
});



categoryRouter.delete('/:id', async(request,response)=>{
    const category = await Category.findOne({
        where: {
            id:request.params.id
        }
    });

    await category.destroy();

    response.status(204).json({});
});

module.exports = categoryRouter;