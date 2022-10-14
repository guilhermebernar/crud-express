import listAllProductsService from "../../services/products/listAllProducts.service";

const listAllProductsController = async (req, res) => {
    const ok = req != null;
    if(ok===true){
        try
        {
            const products = await listAllProductsService(req);
            return res.status(200).json(products);
        }
        catch(err)
        {
            return res.status(400).json({message: err.message});
        };
    };
};

export default listAllProductsController;