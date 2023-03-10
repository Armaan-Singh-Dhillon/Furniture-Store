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
    const { page, limit } = req.query;

    const startIndex = (page - 1) * limit;

    const products = await productModel.find({})
        .skip(startIndex)
        .limit(parseInt(limit));

    res.send({
        data: products,
        currentPage: parseInt(page),
        totalPages: Math.ceil(await productModel.countDocuments({}) / limit),
    });
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


export { create, update, deleteProduct, getAll, getById, updateReviews }