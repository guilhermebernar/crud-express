import database from "../../database/index";

const updateCategoryService = async (id, name) => {        
    try{
        const res = await database.query(
            "UPDATE categories SET name = $2 WHERE id = $1",
            [id, name]
        );
        return res.rows[0]
    } catch(err){
        throw new Error(err);
    };
};

export default updateCategoryService;