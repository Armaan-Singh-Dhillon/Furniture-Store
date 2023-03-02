import User from '../models/user.js'

const register = async (req, res) => {
    
    const user = await User.create(req.body)
    const token = user.createJWT()
    
    res.send({
        "message":"registered successfully",
        user,
        token
    })
}
const login = async (req, res) => {
    res.send('log in user')
}


export { register, login }