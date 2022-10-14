import insertProductsService from "../../services/products/insertProduct.service";

const insertProductController = async (req, res) => {
    try{
        const { name, price, category_id } = req.body;
        const product = await insertProductsService(name, price, category_id);

        return res.status(201).json({message:"Product inserted successfully", product: product});

    }catch(err){
        return res.status(400).json({message: err.message});
    }
}

export default insertProductController;