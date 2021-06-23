const bcrypt = require('bcryptjs');
const ApiError = require('../../helpers/ApiError');
const { User } = require('../../models/user');
const _get = require('lodash/get');

exports.login = async (req, res, next) => {
	try {
		let {userId} = req.body;
		let user = new User({
			userId,
		});
		user = await user.save();
		
		res.status(201).json({
			message: 'تم التسجيل بنجاح',
			userId: user._id,

		});
	} catch (err) {
		next(err)
	}
};










