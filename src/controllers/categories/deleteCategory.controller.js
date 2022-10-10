import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (req, res) => {
    const { id } = req.headers;

    try{
        const data = await deleteCategoryService(id);
        return res.status(201).json(data);

    }catch(err){
        return res.status(400).json(err.message);
    }
}

export default deleteCategoryController;