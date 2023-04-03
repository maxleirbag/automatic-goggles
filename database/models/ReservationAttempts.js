const { DataTypes } = require('sequelize');
const database = require('../config/config');

const ReservationAttempts = database.define('ReservationAttempts', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	price: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	main_image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	images: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true
	},
	promocode: {
		type: DataTypes.STRING,
		allowNull: true
	},
	booking_engine: {
		type: DataTypes.STRING,
		allowNull: true
	},
	search_query: {
		type: DataTypes.TEXT,
		allowNull: true
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	deletedAt: {
		type: DataTypes.DATE,
		allowNull: true,
		default: null
	}
}, {
	timestamp: true, paranoid: true,
	freezeTableName: true
});

module.exports = ReservationAttempts
