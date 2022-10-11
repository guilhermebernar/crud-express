import { Router } from 'express';
import insertProductController from '../controllers/products/insertProduct.controlle';
import listAllProductsController from '../controllers/products/listAllProducts.controller';
import listProductsController from '../controllers/products/listProducts.controller';

// imports

const productsRoute = Router();

productsRoute.post('', insertProductController);
productsRoute.get('', listAllProductsController);
productsRoute.get('/:id', listProductsController);
productsRoute.patch('/:id', "imports");
productsRoute.delete('/:id', "imports");
productsRoute.get('/category/:id', "imports");

export default productsRoute;