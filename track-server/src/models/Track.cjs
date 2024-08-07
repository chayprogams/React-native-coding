const mongoose = require('mongoose');
const { Schema } = mongoose;
const pointSchema = new Schema({
    timestamp:Number,
    coords:{
        latitude:Number,
        longitude:Number,
        altitude:Number,
        accuracy:Number,
        heading:Number,
        speed:Number
    }
})
const trackSchema = new Schema({
userId:{
    type:Schema.Types.ObjectId,
    ref:'User'
},
name:{
    type:String,
    default:''
},
locations:[pointSchema]
});
mongoose.model('Track',trackSchema);