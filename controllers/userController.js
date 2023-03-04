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
    console.log(req.body)
    try {
        const user = await User.findOne({email:req.body.email})
       
        
       if(! await user.comparePassword(req.body.password)){
        throw new Error('incorect Password')
       }
         

        const token = user.createJWT()

        res.json({
            "message": "logged in successfully",
            user,
            token
        })
        
    } catch (error) {
        
        res.json({
            "message": "Error ",
            
        })
    }
    
}


export { register, login }