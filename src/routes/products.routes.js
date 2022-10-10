import { Router } from 'express';

// imports

const productsRoute = Router();

productsRoute.post('', "imports");
productsRoute.get('', "imports");
productsRoute.get('/:id', "imports");
productsRoute.patch('/:id', "imports");
productsRoute.delete('/:id', "imports");
productsRoute.get('/category/:id', "imports");

export default productsRoute;