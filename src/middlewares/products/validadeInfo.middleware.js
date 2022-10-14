const validateInfoMiddleware = (req, res, next)=>{
    const {name, price} = req.body;
    if(!name){
        return res.status(400).json({message: 'Missing name'});
    }
    if(!price){
        return res.status(400).json({message: 'Missing price'});
    }
    next();
}

export default validateInfoMiddleware;