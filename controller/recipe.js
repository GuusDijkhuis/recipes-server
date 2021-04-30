import RecipeInfo from '../models/recipe.js';

export const getAllRecipes = async (req, res) => {
	try {
		const allRecipes = await RecipeInfo.find();
		res.status(200).json(allRecipes);
	} catch (error) {
		console.log(error);
	}
}
export const postRecipe = async (req, res) => {
	const newRecipe = new RecipeInfo(req.body);
	try {
		await newRecipe.save();
	} catch (error) {
		console.log(error);
	}
}
