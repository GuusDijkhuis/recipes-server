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
	const recipeData = {
		...req.body,
		picture: req.file.filename,
		cookingtime: JSON.parse(req.body.cookingtime),
		ingredients: JSON.parse(req.body.ingredients),
		tools: JSON.parse(req.body.tools),
		steps: JSON.parse(req.body.steps)
	}
	const newRecipe = new RecipeInfo(recipeData);
	try {
		await newRecipe.save();
	} catch (error) {
		console.log(error);
	}
}