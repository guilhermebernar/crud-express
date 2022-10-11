import listAllProductsService from "../../services/products/listAllProducts.service";

const listAllProductsController = async (req, res) => {
    const ok = req != null;
    if(ok===true){
        try
        {
            const data = await listAllProductsService(req);
            return res.status(201).json(data);
        }
        catch(err)
        {
            return res.status(400).json(err.message);
        };
    };
};

export default listAllProductsController;