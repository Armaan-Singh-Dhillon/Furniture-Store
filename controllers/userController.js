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
    
    try {
        const user = await User.findOne({ email: req.body.email }).select('+password')
       
        
       if(! await user.comparePassword(req.body.password)){
        throw new Error('incorect Password')
       }
         

        const token = user.createJWT()

        res.json({
           
            user,
            token
        })
        
    } catch (error) {
        
        res.json({
            "message": "Error ",
            
        })
    }
    
}
const update = async (req, res) => {

    const {_id,products} =req.body
    try {
        const user = await User.findOneAndUpdate(_id,{ products })
       console.log(user)
        res.json({
           
            user,
            
        })
        
    } catch (error) {
        
        res.json({
            "message": "Error ",
            
        })
    }
    
}
const getById = async (req, res) => {

    
    const { _id } =req.body
    try {
        const user = await User.findOne({_id})
       console.log(user)
        res.json({
           
            user,
            
        })
        
    } catch (error) {
        
        res.json({
            "message": "Error ",
            
        })
    }
    
}



export { register, login, update, getById }