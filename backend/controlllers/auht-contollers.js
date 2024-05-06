const express = require('express')
const route = require('../auth-router.js');
const User = require('../models/user-model.js');
const bcrypt = require("bcryptjs");
const { decrypt } = require('dotenv');

const home = (req,res)=>{
    try {
            res.status(200).send('HomePage From controller auth-controller.js')
        
    } catch (error) {
        console.log(error)
    }
}

const register =  async (req,res)=>{

   try {
    //  res.status(200).json({message: req.body})
        const {name,email,phone, password} = req.body;
        console.log('this is request.body', req.body)
        const userExist = await User.findOne({email:email})
        if(userExist){

            console.log('User Already Exists...')
            res.status(400).json({msg: 'User Already Exists'})
            
        }  
        // else  if (password === ""){
        //    return  res.status(400).json({message: "password can't be empty..."})
        // }
        // else if (password.length<8){
        //     return res.status(400).json({message: "password must not be less than 9 characters"})
        // }
        // else if(phone ===""){
        //     return res.status(400).json({message: "phone number can't be empty"})
        // }
        // else if (phone.length<11){
        //     return res.status(400).json({message:"invalid phone number...."})
        // }
        
        else {
            const saltRound = 10;
            const encryptedPassword = await bcrypt.hash(password,saltRound)
            const userCreated = await User.create({name, email, phone, password: encryptedPassword});
            console.log('Sign up successful.\n',userCreated);
        return  res.status(200).json({msg:userCreated,  token : await  userCreated.generateToken(), userId:userCreated._id.toString()});
        
    }
        
        
   } catch (error) {
        res.status(500).send("internal server error")
        console.log(error)
   }
}

// const login = async (req, res) =>{
//     const {email, password} = req.body;
//    const  userExist = await User.findOne({email});
//    console.log("user exist for now....", userExist.password)
//     if(userExist){
        
//         const decryptedPassword = await bcrypt.compare(password,userExist.password)
//         if(decryptedPassword){
//             return  res.status(201).json({
//                 msg: "login succesful",
//                 token : await userExist.generateToken(),
//                 userId: userExist._id.toString()
            
//             })
            
//             console.log("Login Successful...")
//         }
//         else {
//            return res.status(400).send("Invalid Password...")
//             console.log("Invalid Password...")
//         }
//         }
//         else{

//            return  res.status(400).json({msg: "User not found..."})
//         }
        
// }

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExist = await User.findOne({ email });
        
        if (userExist) {
            const decryptedPassword = await bcrypt.compare(password, userExist.password);
            
            if (decryptedPassword) {
                res.status(201).json({
                    msg: "Login successful",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString()
                });
            } else {
                res.status(400).send("Wrong password");
            }
        } else {
            res.status(400).json({ msg: "User not found..." });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error");
    }
}

const userController = async (req, res)=>{
    const userData = await User.find(req.user);

    
    // res.status(200).json({Id: userData._id, email: userData.email, name: userData.name, phone: userData.phone })
    // json({id: userData._id, name: userData.name, email:userData.email, })
    res.status(200).json({users: userData})
}




module.exports = [home, register,login,userController]