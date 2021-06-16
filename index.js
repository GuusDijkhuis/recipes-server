import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import recipeRoutes from './routes/recipe.js'

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'));

app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => {
	res.send('Database status: Online');
})


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
	.then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
	.catch((err) => console.log(err)) 