import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
});

const City = mongoose.model('City', citySchema);

export default City
