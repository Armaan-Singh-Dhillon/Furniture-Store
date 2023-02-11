import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/connectDB.js'
import notFoundMiddleware from './middleware/notFoundMiddleware.js'
import errorHandlerMiddleware from './middleware/auth.js'
import 'express-async-errors'

dotenv.config()
const app = express()
app.use(express.json())

app.use('')
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

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