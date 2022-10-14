import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (req, res) => {
    try{
        const {name} = req.body;
        const category = await createCategoryService(name);
    
        return res.status(201).json({message:"Category created successfully", category: category});

    }catch(err){
        return res.status(400).json({message: err.message});
    }
}

export default createCategoryController;