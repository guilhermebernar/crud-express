import { Router } from 'express';
import createCategoryController from '../controllers/categories/createCategory.controller';
import listAllController from '../controllers/categories/listAllCategories.controller';
import listCategoryController from '../controllers/categories/listCategory.controller';
import updateCategoryController from '../controllers/categories/updateCategory.controller';
import verifyCategory from '../middlewares/categories/verifyCategory.middleware';

const categoriesRoute = Router();

categoriesRoute.post('', verifyCategory, createCategoryController);
categoriesRoute.get('', listAllController);
categoriesRoute.get('/:id', listCategoryController);
categoriesRoute.patch('/:id', updateCategoryController);
categoriesRoute.delete('/:id', "imports");

export default categoriesRoute;