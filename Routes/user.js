import express from 'express'
import { register, login, update } from '../controllers/userController.js'
const router = express.Router()


router.route('/register').post(register)
router.route('/login').post(login)
router.route('/update').post(update)


export default router
