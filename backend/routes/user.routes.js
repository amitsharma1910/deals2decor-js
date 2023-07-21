const express = require('express');
const userRouter = express.Router()
const User = require('../models/user.model');


userRouter.get('/', async(request,response)=>{
    const users = await User.findAll();

    response.status(200).json(users);
});

userRouter.post('/', async (request,response)=>{
    const { user_name, password, login_with_gmail, login_with_facebook,email,phone_no,artist,status,activationcode,createdAt, updatedAt, activated_on} = request.body;

    const newUser = User.build({
        
        'user_name': user_name,
        'password': password,
        'login_with_gmail':login_with_gmail ,
        'login_with_facebook': login_with_facebook,
        'email': email,
        'phone_no': phone_no,
        'artist': artist,
        'status': status,
        'activationcode': activationcode,
        'createdAt': createdAt,
        'updatedAt':updatedAt,
        'activated_on':activated_on
    })

    try{
        await newUser.save()

        response.status(201).json(newUser);
    }
    catch(error){
        response.json(error)
    }
});

userRouter.get('/:id', async (request,response)=>{
    const user = await User.findOne({
        where: {
            id:request.params.id
        }
    });

    if(user != null)
    response.status(200).json(user)
    else
    response.status(200).json({})
});



userRouter.put('/:id', async(request,response)=>{
    const user = await User.findOne({
        where: {
            id:request.params.id
        }
    });

    const { user_name, password, login_with_gmail, login_with_facebook,email,phone_no,artist,status,activationcode,createdAt, updatedAt, activated_on} = request.body;

    await user.set(
        {
            user_name: user_name,
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

    await user.save();  

    response.status(200).json(user);
});



userRouter.delete('/:id', async(request,response)=>{
    const user = await User.findOne({
        where: {
            id:request.params.id
        }
    });

    await user.destroy();

    response.status(204).json({});
});

module.exports = userRouter;