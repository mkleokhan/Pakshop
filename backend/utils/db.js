const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI
const connectDB = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connected to DB")
    } catch (error) {
        console.error("Connection Falied")
        console.log(error)
       
    }
}

module.exports = connectDB;