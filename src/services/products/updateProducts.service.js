import database from "../../database/index";

const updateProductsService = async (queryCompiled) => {        
    try{
        const res = await database.query(
            queryCompiled
        )
        return res.rows[0]
    } catch(err){
        throw new Error(err);
    };
};

export default updateProductsService;