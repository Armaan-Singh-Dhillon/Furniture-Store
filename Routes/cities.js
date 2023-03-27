import express from 'express'

import { getAll } from '../controllers/cities.js'
const router = express.Router()

router.route('/getAll').get(getAll)

export default router