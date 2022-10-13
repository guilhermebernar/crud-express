import updateProductsService from "../../services/products/updateProducts.service";

const updateProductsController = async (req, res) => {
    const {id} = req.headers;
    const body = req.body;

    let queryCompiled = ""

    function updateProductByID(id, cols) {
        let query = ['UPDATE products'];
        query.push('SET');
        let set = [];
        
        Object.keys(cols).forEach(
            function (key, i) {set.push(key + ' = ($' + (i + 1) + ')');});
        
        query.push(set.join(', '));
        query.push('WHERE products.id = ' + id );
        return queryCompiled = query.join(' ');
      }
    
      updateProductByID(id, body)

    try{
        const data = await updateProductsService(queryCompiled);
        return res.status(201).json(data);

    }catch(err){
        return res.status(400).json(err.message);
    }
}

export default updateProductsController;