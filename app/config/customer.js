// *********************************************************************************
// CUSTOMER.JS - THIS FILE CREATES A MODELED OF INDIVIDUAL CUSTOMER IN DB
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "customer" model that matches up with DB
var Character = sequelize.define("customer", {
	customerName: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	customerEmail: {
		type: Sequelize.STRING,
	},
	customerID: {
		type: Sequelize.STRING,
	},
	phoneNumber: {
		type: Sequelize.INTEGER,
	},
});

// Syncs with DB
customer.sync();

// Makes the customer Model available for other files (will also create a table)
module.exports = customer;