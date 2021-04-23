import RecipeInfo from '../models/recipe.js';

export const postRecipe = async (req, res) => {
	// console.log(req)
	console.log('server postt');
	try {
		// const recipes = await RecipeInfo.find();
		// res.status(200).json(recipes);
	} catch (error) {
		console.log(error);
	}
}