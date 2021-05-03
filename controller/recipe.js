import RecipeInfo from '../models/recipe.js';

export const getAllRecipes = async (req, res) => {
	try {
		const recipeData = await RecipeInfo.find()
		const newRecipeData = await recipeData.map(r => {
			const recipe = {
				...r._doc,
				request: {
					type: 'GET',
					url: `http://localhost:5000/${r.picture}`
				}
			}
			return recipe;
		})
		res.status(200).json(newRecipeData);
	} catch (error) {
		console.log(error);
	}
}
export const postRecipe = async (req, res) => {
	const recipeData = {
		...req.body,
		picture: req.file.path,
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