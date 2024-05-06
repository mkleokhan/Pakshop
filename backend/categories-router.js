const express = require('express');
const router = express.Router();


const [createCategory, getCategories,deleteCategory] = require('./controlllers/categories-controllers');
router.route('/createCategory').post(createCategory);
router.route('/allCategories').get(getCategories);
router.route('/deleteCategory').delete(deleteCategory)

module.exports = router;