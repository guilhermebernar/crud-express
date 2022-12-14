import database from "../../database/index";

const deleteCategoryService = async (id) => {        
    try{
        await database.query(
            "DELETE FROM categories WHERE id = $1 RETURNING *",
            [id]
        );
    } catch(err){
        throw new Error(err);
    };
};

export default deleteCategoryService;