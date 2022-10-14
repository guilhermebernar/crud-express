import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (req, res) => {
    try{
        const { id } = req.params;
        const { name } = req.body;
        const category = await updateCategoryService(id, name);
        return res.status(200).json({message:"Updated successfully", category:{name:name}});

    }catch(err){
        return res.status(400).json({message: err.message});
    }
}

export default updateCategoryController;