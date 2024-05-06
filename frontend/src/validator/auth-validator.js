const z = require('zod');

const signupSchema= z.object({
    name: z.string({required_error:"Username is required!!!"})
    .trim()
    .min(4, {message:"Username must be atleast 4 characters"})
    .max(255,{message:"Username must not be greater than 255 characters"}),

    email: z
    .string({required_error:"Email is required!!!"})
    .email({message: "Invalid email address"})
    .trim()
    .min(7, "Email must be atleast 7 characters")
    .max(255,"Email must not be greater than 255 characters"),

    phone: z.string({required_error:"Phone Number is required!!!"})
    .trim()
    .min(11, {message:"Phone number must be atleast 11 characters"})
    .max(11,{message:"Phone numnber must not be greater than 11 characters"}),

    password: z
    .string({required_error: "Password is required"})
    .min(8, "Password must be atleast 8 characters")
    .max(255,"Password  must not be greater than 255 characters")

})



module.exports = signupSchema;

