import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid'
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'images');
	},
	filename: function(req, file, cb) {   
		cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
	}
});

const fileFilter = (req, file, cb) => {
	const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
	if(allowedFileTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
}

let upload = multer({ storage, fileFilter });


import { postRecipe, getAllRecipes, getRecipe, deleteRecipe, updateRecipe } from '../controller/recipe.js';


router.post('/', upload.single('picture'), postRecipe);
router.get('/', getAllRecipes);
router.get('/:id', getRecipe);
router.delete('/:id', deleteRecipe)
router.patch('/:id', upload.single('picture'), updateRecipe);


export default router;



