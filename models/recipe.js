import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
	title: String,
	picture: {
		type: String
	},
	introduction: String,
	cookingtime: {
		value: Number,
		unit: String
	},
	personCount: Number,
	ingredients: [
		{
			name: String,
			quantity: String,
			unit: String
		}
	],
	tools: [
		{
			name: String
		}
	],
	steps: [
		{
			name: String,
			description: String,
			file: String,
			expectedtime: {
				value: Number,
				unit: String
			}
		}
	]
})

const RecipeInfo = mongoose.model('RecipeInfo', RecipeSchema);

export default RecipeInfo;