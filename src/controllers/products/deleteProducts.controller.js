import deleteProductService from "../../services/products/deleteProducts.service";

const deleteProductController = async (req, res) => {
    try{
        const { id } = req.params;
        await deleteProductService(id);
        return res.status(204).json();

    }catch(err){
        return res.status(400).json({message: err.message});
    }
}

export default deleteProductController;
