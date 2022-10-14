const verifyInputs = (req, res, next) => {;
    const {id} = req.params;
    if (id===undefined) 
    {
        return res
        .status(401)
        .json({"message": "Id undefined."})
    };
    const {category_id} = req.body
    if (category_id===undefined) 
    {
        return res
        .status(401)
        .json({"message": "Category id is undefined."})
    };
    const {name, price} = req.body
    if(name && price === undefined){
        return res
        .status(401)
        .json({"message": "Nothing to change."})

    };
    if(name || price === undefined){
        if(name === undefined){
            req.body = {price, category_id};
            next();
        }
        else if(price === undefined){
            req.body = {name, category_id};
            next();
        };
    };
    next();
};

export default verifyInputs;