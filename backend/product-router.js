
const express = require('express');
const router = express.Router();
const multer = require('multer');

// Import the controller function for creating a product
const [createProduct, getProducts] = require('./controlllers/products-controller');

// Create an instance of Multer middleware with the configured storage options
const upload = require('./middlewares/upload');


// Route for creating a product with file upload
// console.log('PRODUCT ROUTER')
// const image = upload.single('image')
// console.log('upload.single k baad waali line')
// console.log(typeof(image))

router.route('/createProduct').post( upload.single('image'), createProduct);
router.route('/allProducts').get(getProducts)

module.exports = router;