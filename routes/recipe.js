import express from 'express';

import { postRecipe, getAllRecipes } from '../controller/recipe.js';

const router = express.Router();

router.post('/', postRecipe);
router.get('/', getAllRecipes);

export default router;
