import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import recipeRoutes from './routes/recipe.js'

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());


app.use('/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
	.catch((err) => console.log(err)) 