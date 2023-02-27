import express from 'express'
import {create,update,deleteProduct ,getAll} from '../controllers/products.js'
const router = express.Router()

router.route('/getAll').get(getAll)
router.route('/create').post(create)
router.route('/update').patch(update)
router.route('/delete').delete(deleteProduct)

export default router
