const Products = require("../models/products-model")
const Categories = require("../models/categories-model")
const upload = require('../middlewares/upload');
const { response } = require("express");

const createProduct = async (req, res)=>{
   try {
    const {name,category} = req.body;
    const imageName = req.file.filename;
    // Check if category exists
        let existingCategory = await Categories.findOne({ name: category });
        if (existingCategory) {
            // Category exists, create product and return
            const product = await Products.create({ name, category, image: imageName });
            console.log("\nProduct created: ", product);
            return res.status(200).json({ msg: "Product added successfully..." });
        } else {
            // Category doesn't exist, create category first
            const createdCategory = await Categories.create({ name: category });
            // Create product with the newly created category
            const product = await Products.create({ name,  category, image: imageName });
            console.log("\nProduct created: ", product);
            console.log("\nCategory created: ", createdCategory);
            return res.status(200).json({ msg: "Product and Category added successfully..." });
        }
    } catch (error) {
        console.log('Error occurred: ', error);
        return res.status(400).json({ error: "Error on server side: " + error });
    }
};

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