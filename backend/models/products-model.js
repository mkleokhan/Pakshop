const mongoose = require('mongoose');
const productSchema= new mongoose.Schema({
    name:{
        type: String,
        // required: true
    },

    category:{
        type: String,
        // required: true
        
    },
    description:{
        type: String,
        
    },

    image:{
        type: String,
        // required: true
       
    }
})

const Products = mongoose.model('Products', productSchema);
module.exports = Products;