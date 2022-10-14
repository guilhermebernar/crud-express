import database from "../../database/index";

const updateProductsService = async (id, body) => {        
    try{
        const res = await database.query(
            "UPDATE products SET name = $1 WHERE id = $2 RETURNING products.id, products.name",
            [body.name, id]
        )
        return res.rows[0]
    } catch(err){
        throw new Error(err);
    };
};

export default updateProductsService;