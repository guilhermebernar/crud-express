import { Router } from 'express';
import deleteProductController from '../controllers/products/deleteProducts.controller';
import getProductsByCategoryController from '../controllers/products/getProductsByCategory.controller';
import insertProductController from '../controllers/products/insertProduct.controller';
import listAllProductsController from '../controllers/products/listAllProducts.controller';
import listProductsController from '../controllers/products/listProducts.controller';
import updateProductsController from '../controllers/products/updateProducts.controller';
import validateInfoMiddleware from '../middlewares/products/validadeInfo.middleware';
import verifyInputs from '../middlewares/products/verifyInputs.middleware';

// imports

const productsRoute = Router();

productsRoute.post('', validateInfoMiddleware, insertProductController);
productsRoute.get('', listAllProductsController);
productsRoute.get('/:id', listProductsController);
productsRoute.patch('/:id', updateProductsController);
productsRoute.delete('/:id', deleteProductController);
productsRoute.get('/category/:id', getProductsByCategoryController);

export default productsRoute;