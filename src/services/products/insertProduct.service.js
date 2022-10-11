import database from "../../database/index";

const insertProductsService = async (name, price, category_id ) => {        
    try{
        const res = await database.query(
            "INSERT INTO products (name, price, category_id ) VALUES ($1, $2, $3)",
            [name, price, category_id]
        );
        return res.rows[0]
    } catch(err){
        throw new Error(err);
    };
};

export default insertProductsService;