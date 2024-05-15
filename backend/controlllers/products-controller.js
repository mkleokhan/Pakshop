const Products = require("../models/products-model")
const upload = require('../middlewares/upload')

const createProduct = async (req, res)=>{
   try {
    const {name,category} = req.body;
    const imageName = req.file.filename;
    // console.log('got something in request body', response)
    // console.log('files in the request', req.file)
    const product =  await Products.create({ name, category, image: imageName });
    
    
    

    console.log("\nProducted ",product)
    return res.status(200).json({msg:"Product added successfully..."})

    
   } catch (error) {
    
    console.log('error occured... ',error)
    return res.status(400).json({"error on server side..": error})
   }
}

const getProducts = async (req, res)=>{
   try {
      const response = req.Products;
      const allProducts = await Products.find(response);
      
      let nameList = [];
      for (let i = 0; i < allProducts.length; i++) {
          nameList.push(allProducts[i]);
      }
      console.log(nameList)
      return res.status(200).json({Products: nameList})

  } catch (error) {
      console.log(error);
      return res.status(500).json("error getting products", error)
  }
}
module.exports = [createProduct, getProducts];