// const { json } = require("express")

const validate = (schema) => async (req,res,next)=>{
try {
    const parseBody = await schema.parseAsync(req.body)
    req.body = parseBody
    next()
    
} catch (error) {
    res.status(400).json({message: error})
    console.log(error)
    const {issues}= error
    
    let messages = []
    for(i=0; i < issues.length; i++)
    {
        messages.push(issues[i].message);
        
        
    }
    const errorDetails = {
        status : 400,
        message : "Fill the form",
        extraDetails: messages
    }
    
    const Object = JSON.stringify(messages)
    console.log(Object)
    console.log("\n\nResolve the following issues:")
    console.log(messages)
    console.log(errorDetails)
    next(errorDetails)
   


}
}
module.exports = validate;