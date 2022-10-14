import getProductsByCategoryService from "../../services/products/getProductsByCategory.service";

const   getProductsByCategoryController = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await  getProductsByCategoryService(id);
        return res.status(200).json(data);

    }catch(err){
        return res.status(400).json({message: err.message});
    }
}

export default  getProductsByCategoryController;