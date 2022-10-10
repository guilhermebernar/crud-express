
const verifyCategory = (req, res, next) => {;
    const name = req.body.name;
    
    if (name===undefined) 
    {
        return res
        .status(401)
        .json({"message": "Null request is not allowed."})
    }
    if(name.length>50){
        return res
        .status(401)
        .json({"message": "String too long, maximum 50 characters allowed."})
    }
    if(name.indexOf(' ')>=0){
        return res
        .status(401)
        .json({"message": "Only one word allowed, if applicable, check for empty space."})
    }
    next();
};

export default verifyCategory;