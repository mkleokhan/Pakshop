const jwt = require('jsonwebtoken');
const User = require('../models/user-model')

const authMiddleware = async (req, res,next)=>{

    const token = req.header('Authorization');
    if(!token){
        
       return  res.status(401).json({msg:"Something went wrong......"})

    }

    else{
        

        const jwtToken = token.replace("Bearer ", '').trim();
        // console.log('\n\n')
        // console.log(jwtToken)
        

        try {

            const isVerfied = jwt.verify(jwtToken, process.env.JSON_WEB_TOKEN)
            // console.log(isVerfied)
            const userData = await User.findOne({email: isVerfied.email}).
            select({
                password : 0 
            })
            // console.log(userData)
            req.user = userData;
            req.token = token;
            req.userId = userData._id

            next();
        } catch (error) {
             console.log(error)
            res.status(401).json({msg:"Token not found..."})
            
        }
    }

}

module.exports = authMiddleware