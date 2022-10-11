import { Router } from 'express';
import insertProductController from '../controllers/products/insertProduct.controlle';

// imports

const productsRoute = Router();

productsRoute.post('', insertProductController);
productsRoute.get('', );
productsRoute.get('/:id', "imports");
productsRoute.patch('/:id', "imports");
productsRoute.delete('/:id', "imports");
productsRoute.get('/category/:id', "imports");

export default productsRoute;