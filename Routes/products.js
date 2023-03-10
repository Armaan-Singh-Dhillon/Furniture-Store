import express from 'express'
import { create, update, deleteProduct, getAll, getById, updateReviews } from '../controllers/products.js'
const router = express.Router()

router.route('/getAll').get(getAll)
router.route('/get').post(getById)
router.route('/create').post(create)
router.route('/update').patch(update)
router.route('/reviews').post(updateReviews)
router.route('/delete').post(deleteProduct)

export default router
