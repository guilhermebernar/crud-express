import listProductsService from "../../services/products/listProducts.service";

const listProductsController = async (req, res) => {
    const { id } = req.headers;

    try{
        const data = await listProductsService(id);
        return res.status(201).json(data);

    }catch(err){
        return res.status(400).json(err.message);
    }
}

export default listProductsController;