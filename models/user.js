import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import validator from "validator";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true

    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please provide a valid email address'],
        unique: true
    },
    phone:{
        type: String,
        required: true,
        validate: [validator.isMobilePhone, 'Please provide a valid phone no'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        unique: true
        
    },
    address1: {
        type: String,
        required:true,
        unique: true
        
    },
    address2: {
        type: String,
        unique: true
        
    },
    orders:{
         type:Array,
         default:[]
    },
    offers:{
         type:Array,
         default:[]
    },
    products:{
         type:Array,
         default:[],
         unique: true
    },

    
}, { timestamps: true });
userSchema.pre('save', async function () {
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}
userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

const User = mongoose.model('User', userSchema);

export default User;
