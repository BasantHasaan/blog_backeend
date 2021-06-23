const _ = require('lodash');
const { User } = require('../../models/user');
const ApiError = require('../../helpers/ApiError');

exports.getUser = (req, res, next) => {
	const userId = req.user.userId;
	User.findById(userId)
		.select('-__v -password -createdAt -updatedAt')
		.then((user) => {
			if (!user) {
				return next(new ApiError('The user with the given ID was not found.', 400));
			}
			res.status(200).json({
				message: 'a user is retrieved successfully',
				user: user
			});
		})
		.catch((err) => {
			next(err);
		});
};










