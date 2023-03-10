import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        
    },
    category: {
        type: String,
        
    },
    shipping: {
        type: String,
        
    },
    offers: [{
        offerName: {
            type: String,
            
        },
        discount: {
            type: String,
            
        }
    }],
    used: {
        type: String,
        default:false
    },
    woodType: [{
        type: String,
        
    }],
    refundable: {
        type: String,
        default: true
        
    },
    averageRating:{
        type:Number
    },
    reviews: [{
        username: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    Owner:{
        type:Object
    },
    termiteResistant:{
        type:String,
    },
    specifications:{
        type:Object
    }

        
    

},{timestamps:true});

const Product = mongoose.model('Product', productSchema);

export default Product;
