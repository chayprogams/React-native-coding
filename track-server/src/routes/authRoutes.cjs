require('../models/User.cjs')
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const model = mongoose.model('User');
const router = express.Router()
router.post('/signup',async(req,res)=>{
    const{email,password} = req.body;
    try {
        const user = new model({email,password})
        await user.save();
        const token = jwt.sign({userId:user._id},'MY_SECRET_KEY')
        return res.send({token:token});
    } catch (error) {
       return res.status(422).send(error.message);
    }
   
});
router.post('/signin',async(req,res)=>{
    const{email,password} = req.body;
    if(!email || !password){
        return res.status(422).send({error:'Must provide email and password'});
    }
    const userData = await model.findOne({email});
    if(!userData){
        return res.status(422).send({email:'Email not found'});
    }
    try {
        await userData.comparePassword(password);
        const token = jwt.sign({userId:userData._id},'MY_SECRET_KEY');
        res.send({token});
    } catch (err) {
        return res.status(422).send("Invalid password or email");
    }
})
module.exports = router