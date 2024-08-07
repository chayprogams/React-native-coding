const jwt = require('jsonwebtoken');
require('../models/User.cjs');
require('../models/Track.cjs')
const mongoose = require('mongoose');
const user = mongoose.model('User');
module.exports = (req,res,next) => {
const{authorization} = req.headers;

if(!authorization){
    return res.status(401).send({error:"You must be logged in."});
}
const token = authorization.replace('Bearer ',"");
jwt.verify(token,'MY_SECRET_KEY',async(err,payload)=>{
    if(err){
        return res.status(401).send({error:err})
    }
    const {userId} = payload;
    const userdata = await user.findById(userId);
    req.user = userdata;
    next();
})
}