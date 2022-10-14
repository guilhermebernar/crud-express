import updateProductsService from "../../services/products/updateProducts.service";

const updateProductsController = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;

        const data = await updateProductsService(id, body);
        return res.status(200).json({message:"Updated product", product: data});

    }catch(err){
        return res.status(400).json({message: err.message});
    }
}

export default updateProductsController;