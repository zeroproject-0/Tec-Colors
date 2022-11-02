import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Color = sequelize.define(
	'Color',
	{
		r: {
			type: DataTypes.INTEGER,
			validate: {
				min: 0,
				max: 255,
			},
			allowNull: false,
		},

		g: {
			type: DataTypes.INTEGER,
			validate: {
				min: 0,
				max: 255,
			},
			allowNull: false,
		},

		b: {
			type: DataTypes.INTEGER,
			validate: {
				min: 0,
				max: 255,
			},
			allowNull: false,
		},

		like: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);
