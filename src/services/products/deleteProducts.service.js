import database from "../../database/index";

const deleteProductService = async (id) => {        
    try{
        await database.query(
            "DELETE FROM products WHERE id = $1",
            [id]
        );
    } catch(err){
        throw new Error(err);
    };
};

export default deleteProductService;