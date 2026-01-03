import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import dotenv from "dotenv"

dotenv.config();

const app = express();
app.use(express.json()) //need this for reading body 
const PORT = process.env.PORT || 5001

connectDB();

// middleware

app.use("/api/notes", notesRoutes); //instead of writting api/notes in all routes we using app.use ....by importing




app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});