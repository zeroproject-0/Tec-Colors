import express from 'express';
import colorsRoutes from './routes/colors.routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.set('PORT', process.env.PORT || 3000);

app.use(express.json());

app.use(colorsRoutes);

export default app;
