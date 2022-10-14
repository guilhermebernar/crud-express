import listProductsService from "../../services/products/listProducts.service";

const listProductsController = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await listProductsService(id);
        return res.status(200).json(data);

    }catch(err){
        return res.status(400).json({message: err.message});
    }
}

export default listProductsController;