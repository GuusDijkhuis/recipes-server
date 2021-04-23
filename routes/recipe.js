import express from 'express';

import { postRecipe } from '../controller/recipe.js';

const router = express.Router();

router.post('/', postRecipe);

export default router;
