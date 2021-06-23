const Joi = require('joi');
Joi.ObjectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const ApiError = require('../helpers/ApiError');

const userSchema = new mongoose.Schema(
	{

		userId: {
			type: String,
			required:true,
		},
	},
	{ timestamps: true }
);





userSchema.pre('save', async function (next, meta) {
	if (!this.isNew) return;
	if (!this.userId) this.userId = "";
	const user = await User.findOne({ userId: this.userId });
	if (user) {
		return { userId: this.userId }
		
	}
});



const User = mongoose.model('User', userSchema);

exports.User = User;