import mongoose from "mongoose"
import productModel from '../models/products.js'

const create= async (req,res)=>{
    
    const {name,price ,photo} =req.body
    const data = await productModel.create({name,price,photo})
    res.send({
        "message":"product created",
        data
    })
}
const getAll = async (req, res)=>{
  res.send('i get a product')
}
const update = async (req, res)=>{
    res.send('i update a product')
}
const deleteProduct = async (req, res)=>{
    res.send('i delete a product')
}

export { create, update, deleteProduct, getAll }