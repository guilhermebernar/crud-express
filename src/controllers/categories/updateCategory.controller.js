import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (req, res) => {
    const { id } = req.headers;
    const { name } = req.body;

    try{
        const data = await updateCategoryService(id, name);
        return res.status(201).json(data);

    }catch(err){
        return res.status(400).json(err.message);
    }
}

export default updateCategoryController;