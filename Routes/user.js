import express from 'express'
import { register, login, update, getById } from '../controllers/userController.js'
const router = express.Router()


router.route('/register').post(register)
router.route('/login').post(login)
router.route('/update').post(update)
router.route('/getbyid').post(getById)


export default router
