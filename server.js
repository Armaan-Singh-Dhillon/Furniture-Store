import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/connectDB.js'
import productRoute from './Routes/products.js'
import userRoute from './Routes/user.js'
import cityRoute from './Routes/cities.js'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/products', productRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/cities', cityRoute)

const port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error)
    }
}
start()