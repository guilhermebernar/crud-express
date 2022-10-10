import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (req, res) => {
    const { name } = req.body;

    try{
        const data = await createCategoryService(name);
        return res.status(201).json(data);

    }catch(err){
        return res.status(400).json(err.message);
    }
}

export default createCategoryController;