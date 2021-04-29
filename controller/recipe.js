import RecipeInfo from '../models/recipe.js';

export const postRecipe = async (req, res) => {
	const newRecipe = new RecipeInfo(req.body);
	try {
		await newRecipe.save();
	} catch (error) {
		console.log(error);
	}
}