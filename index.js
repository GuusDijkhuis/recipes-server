import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


const app = express();
const PORT = 5000;

dotenv.config();

app.use(cors());
app.use(express.json());


app.listen(PORT, () => console.log(`server running on port: ${PORT}`));