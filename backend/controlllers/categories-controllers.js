const categories = require('../models/categories-model');

const createCategory = async(req, res)=>{
    try {
        const response = req.body;
        
        
        const categoryExist = await categories.findOne(response)
        if(categoryExist){
            return res.status(409).json({message: "Category already Exists"})
            
        }
    else{
        await categories.create(response);
        console.log(response)
        return res.status(200).json({message: "Category Created..."})
        
    }
    } catch (error) {
        console.log(error);
        return res.status(500).json("error creating categories", error)
    }
}

const getCategories = async(req, res)=>{
    try {
        const response = req.categories;
        const allCategories = await categories.find(response);
        
        let nameList = [];
        for (let i = 0; i < allCategories.length; i++) {
            nameList.push(allCategories[i].name);
        }
        console.log(nameList)
        return res.status(200).json({Categories: nameList})

    } catch (error) {
        console.log(error);
        return res.status(500).json("error getting categories", error)
    }
}

const deleteCategory = async (req, res) => {
    try {
        const {name} = req.body; // Assuming you are passing category ID in the request params
        const deletedCategory = await categories.deleteOne({ name });
        

        if (deletedCategory.deletedCount === 1) {
            console.log("category deleted", deleteCategory)
            return res.status(200).json({ message: "Category deleted successfully." });
        } else {
            return res.status(404).json({ message: "Category not found." });
        }
    } catch (error) {
        console.error("Error deleting category:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};
module.exports = [createCategory,getCategories,deleteCategory]