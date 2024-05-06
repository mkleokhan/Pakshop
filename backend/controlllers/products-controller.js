const Products = require("../models/products-model")

const createProduct = async (req, res)=>{
   try {
    const {name,category} = req.body;
    // console.log('got something in request body', response)
    // console.log('files in the request', req.file)
    const product = new Products({ name, category, image: req.file.originalname });
    const createdProduct = await Products.create(product)
    product.save( product)

    console.log("\nProducted ",createdProduct)
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