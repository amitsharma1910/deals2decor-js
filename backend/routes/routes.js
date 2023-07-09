const express = require('express');
const router = express.Router()
const User = require('../models/user.model');


router.get('/users', async(request,response)=>{
    const users = await User.findAll();

    response.status(200).json(users);
});

router.post('/users', async (request,response)=>{
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

router.get('/users/:id', async (request,response)=>{
    const user = await User.findOne({
        where: {
            id:request.params.id
        }
    });

    response.status(200).json(user)
});



router.put('/users/:id', async(request,response)=>{
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



router.delete('/users/:id', async(request,response)=>{
    const user = await User.findOne({
        where: {
            id:request.params.id
        }
    });

    await user.destroy();

    response.status(204).json({});
});

module.exports = router;