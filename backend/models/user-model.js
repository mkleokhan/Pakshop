const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
    },

    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
      type : Boolean,
      default: false
    },
  }, { collection: 'users' });

userSchema.methods.generateToken = async function (){
    try {
            return jwt.sign({
                userID: this._id.toString(),
                name: this.name,
                email: this.email,
                isAdmin: this.isAdmin
            },
                process.env.JSON_WEB_TOKEN, {
                    expiresIn: "30d"
                }
            )
        
    } catch (error) {
        
    }
}
const User = new mongoose.model("users", userSchema)
module.exports = User