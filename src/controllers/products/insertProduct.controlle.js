import insertProductsService from "../../services/products/insertProduct.service";

const insertProductController = async (req, res) => {
    const { name, price, category_id } = req.body;

    try{
        const data = await insertProductsService(name, price, category_id);
        return res.status(201).json(data);

    }catch(err){
        return res.status(400).json(err.message);
    }
}

export default insertProductController;