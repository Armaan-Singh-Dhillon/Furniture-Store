import mongoose from "mongoose"
import productModel from '../models/products.js'

const create= async (req,res)=>{
    
    
    const data = await productModel.create({ ...req.body })
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
    res.send('i delete a product')
}

export { create, update, deleteProduct, getAll }