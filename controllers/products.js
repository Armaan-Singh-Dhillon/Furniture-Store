import mongoose from "mongoose"
import productModel from '../models/products.js'

const create = async (req, res) => {

    const { user } = req.body
    const data = await productModel.create({ ...req.body, Owner: user })
    res.send({

        data
    })
}
const getAll = async (req, res) => {
   
    const {sortname,sortprice}=req.body
    if(sortname==0){

        const products = await productModel.find({}).sort({price:sortprice})
        res.send({
            data: products,
        });
    }
    else{

        const products = await productModel.find({}).sort({name:sortname})
        res.send({
            data: products,
        });
    }
        

   
};

const update = async (req, res) => {
    res.send('i update a product')
}
const deleteProduct = async (req, res) => {
    console.log(req.body.id)
    await productModel.findByIdAndDelete(req.body.id)
    res.send({
        "message": "item Deleted"
    })
}
const getById = async (req, res) => {
   console.log(req.body._id)
    const data =await productModel.findById(req.body._id)
    res.send({
        data
    })
}
const updateReviews = async (req, res) => {
   const {_id,reviews} = req.body
    const data =await productModel.findByIdAndUpdate(_id,{reviews})
    res.send({
        data
    })
}
const search = async (req, res) => {
   const {search} = req.body
    const { page, limit } = req.query;
    const startIndex = (page - 1) * limit;
   console.log(search)
    const data = await productModel.find({ $text: { $search: search } }).skip(startIndex)
        .limit(parseInt(limit));
    res.send({
        data,
        currentPage: parseInt(page),
        totalPages: Math.ceil(await productModel.countDocuments({}) / limit),
    })
}



export { create, update, deleteProduct, getAll, getById, updateReviews, search }