import Sequelize from 'sequelize';

export const sequelize = new Sequelize('tec', 'user', 'password', {
	host: 'localhost',
	dialect: 'mariadb',
});
