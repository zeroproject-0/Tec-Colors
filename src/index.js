import app from './app.js';
import { sequelize } from './database/database.js';

import './models/Color.js';

try {
	await sequelize.sync({ force: false });
	console.log('Connection has been established successfully.');

	app.listen(app.get('PORT'), () => {
		console.log('Server is running on port ' + app.get('PORT'));
	});
} catch (error) {
	console.log(error);
}
