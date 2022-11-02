import express from 'express';
import colorsRoutes from './routes/colors.routes.js';
import cors from 'cors';

const app = express();

let corsOptions = {
	origin: function (origin, cb) {
		if (/\.grupoether\.xyz$/.test(origin)) {
			cb(null, true);
		} else {
			cb(new Error('Not allowed by CORS'));
		}
	},
};

app.use(cors(corsOptions));

app.set('PORT', process.env.PORT || 3000);

app.use(express.json());

app.use(colorsRoutes);

export default app;
