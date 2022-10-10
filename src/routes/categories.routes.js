import { Router } from 'express';
import createCategoryController from '../controllers/categories/createCategory.controller';
import verifyCategoryCreation from '../middlewares/categories/verifyCategoryCreate.middleware';
import createCategoryService from '../services/categories/createCategory.service';

// imports

const categoriesRoute = Router();

categoriesRoute.post('', verifyCategoryCreation, createCategoryController, createCategoryService);
categoriesRoute.get('', "imports");
categoriesRoute.get('/:id', "imports");
categoriesRoute.patch('/:id', "imports");
categoriesRoute.delete('/:id', "imports");

export default categoriesRoute;