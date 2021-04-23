import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
	title: String,
	introduction: String,
	cookingtime: {
		value: Number,
		unit: String
	},
	personCount: Number,
	ingredients: [
		{
			name: String,
			quantity: {
				number: Number,
				unit: String
			}
			
		}
	],
	tools: [String],
	steps: [
		{
			name: String,
			description: String,
			file: String,
			time: {
				value: Number,
				unit: String
			}
		}
	]
})

const RecipeInfo = mongoose.model('RecipeInfo', RecipeSchema);

export default RecipeInfo;