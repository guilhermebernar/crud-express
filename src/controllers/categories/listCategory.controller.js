import listCategoryService from "../../services/categories/listCategory.service";

const listCategoryController = async (req, res) => {
    const { id } = req.headers;

    try{
        const data = await listCategoryService(id);
        return res.status(201).json(data);

    }catch(err){
        return res.status(400).json(err.message);
    }
}

export default listCategoryController;