require('../models/Track.cjs')
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Tracks = mongoose.model('Track');
const user = mongoose.model('User');
const router = express.Router();
router.get('/tracks',async(req,res)=>{
  const trackData = await Tracks.find({userId:user._id});
  if(trackData){
    res.send({trackData});
    console.log("not found");
  }else{
    console.log("not found");
  }
 
});
router.post('/tracks',async(req,res)=>{
    const{name,locations} = req.body;
    if(!name || !locations){
        res.status(422).send({error:'You must provide name and location'});
    }
    try {
        const track = new Tracks({name,locations,userId:user._id});
        await track.save();
        res.send(track);
    } catch (error) {
        res.status(422).send({error:error.message});
    }
   
})
module.exports = router;