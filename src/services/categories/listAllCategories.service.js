import database from "../../database/index";

const listAllService = async () => {        
    try{
        const res = await database.query(
            "SELECT * FROM categories RETURNING *"
        );
        return res.rows[0]
    } catch(err){
        throw new Error(err);
    };
};

export default listAllService;