import listAllService from "../../services/categories/listAllCategories.service";

const listAllController = async (req, res) => {
    const ok = req != null;
    if(ok===true){
        try
        {
            const data = await listAllService(req);
            return res.status(201).json(data);
        }
        catch(err)
        {
            return res.status(400).json(err.message);
        };
    };
};

export default listAllController;