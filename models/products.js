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
        required: true
    },
    category: {
        type: String,
        required: true
    },
    shipping: {
        type: Boolean,
        required: true
    },
    offers: [{
        offerName: {
            type: String,
            required: true
        },
        discount: {
            type: String,
            required: true
        }
    }],
    used: {
        type: Boolean,
        
    },
    woodType: [{
        type: String,
        
    }],
    refundable: {
        type: Boolean,
        
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
    }]

        
    

});

const Product = mongoose.model('Product', productSchema);

export default Product;
