import { Router } from 'express';
import createCategoryController from '../controllers/categories/createCategory.controller';
import listAllController from '../controllers/categories/listAllCategories.controller';
import verifyCategoryCreation from '../middlewares/categories/verifyCategoryCreate.middleware';
import createCategoryService from '../services/categories/createCategory.service';
import listAllService from '../services/categories/listAllCategories.service';

const categoriesRoute = Router();

categoriesRoute.post('', verifyCategoryCreation, createCategoryController, createCategoryService);
categoriesRoute.get('', listAllController, listAllService);
categoriesRoute.get('/:id', "imports");
categoriesRoute.patch('/:id', "imports");
categoriesRoute.delete('/:id', "imports");

export default categoriesRoute;