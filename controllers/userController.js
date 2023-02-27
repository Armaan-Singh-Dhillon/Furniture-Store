import User from '../models/user.js'

const register = async (req, res) => {

    const data = await User.create(req.body)
    res.send({
        "message":"registered successfully",
        data
    })
}
const login = async (req, res) => {
    res.send('log in user')
}


export { register, login }