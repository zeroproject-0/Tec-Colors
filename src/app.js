import express from 'express';
import colorsRoutes from './routes/colors.routes.js';

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.use(express.json());

app.use(colorsRoutes);

export default app;
