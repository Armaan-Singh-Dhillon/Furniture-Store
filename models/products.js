import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    price: {
        type: String,
        
    },
    photo: {
        type: String,
        default: 'default.svg'
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
