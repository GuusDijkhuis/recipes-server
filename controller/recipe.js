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
	const filePath = req.file ? req.file.path : req.body.picture;
	const recipeData = dbFormat(req.body, filePath);
	const newRecipe = new RecipeInfo(recipeData);
	try {
		await newRecipe.save();
	} catch (error) {
		console.log(error);
	}
}
export const getRecipe = async (req, res) => {
	try {
		const recipeData = await RecipeInfo.findOne({ _id: req.params.id});
		res.status(200).json(recipeData);
	} catch (error) {
		console.log(error);
	}
}
export const deleteRecipe = async (req, res) => {
	try {
		await RecipeInfo.deleteOne({ _id: req.params.id});
	} catch (error) {
		console.log(error);
	}
}
export const updateRecipe = async (req, res) => {
	const filePath = req.file ? req.file.path : req.body.picture;
	const recipeData = dbFormat(req.body, filePath);
	try {
		await RecipeInfo.findOneAndUpdate({ _id: req.params.id }, recipeData)
	} catch(error) {
		console.log(error)
	}
}

const dbFormat = (recipe, file) => {
	return {
		...recipe,
		picture: file,
		cookingtime: JSON.parse(recipe.cookingtime),
		ingredients: JSON.parse(recipe.ingredients),
		tools: JSON.parse(recipe.tools),
		steps: JSON.parse(recipe.steps)
	}
}