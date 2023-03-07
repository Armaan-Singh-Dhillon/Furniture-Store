import mongoose from "mongoose"
import productModel from '../models/products.js'

const create= async (req,res)=>{
    
    const{user}=req.body
    const data = await productModel.create({ ...req.body,Owner:user })
    res.send({
        
        data
    })
}
const getAll = async (req, res)=>{
    const data =await productModel.find({})
    res.send({
        data
    })

}
const update = async (req, res)=>{
    res.send('i update a product')
}
const deleteProduct = async (req, res)=>{
    console.log(req.body.id)
    await productModel.findByIdAndDelete(req.body.id)
    res.send({
        "message":"item Deleted"
    })
}

export { create, update, deleteProduct, getAll }