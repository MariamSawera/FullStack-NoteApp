import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';

const app = express();

connectDB();

app.use("/api/notes", notesRoutes); //instead of writting api/notes in all routes we using app.use ....by importing





app.listen(5001, () => {
  console.log('Server is running on port 5001');
});