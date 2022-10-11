import database from "../../database/index";

const listAllProductsService = async () => {        
    try{
        const res = await database.query(
            "SELECT * FROM products RETURNING *"
        );
        return res.rows[0]
    } catch(err){
        throw new Error(err);
    };
};

export default listAllProductsService;