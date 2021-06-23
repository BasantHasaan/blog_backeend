const { Article, validateArticle } = require('../../models/article');
const ApiError = require('../../helpers/ApiError');
exports.getAllarticles = (req, res, next) => {
	Article.find()
		.select('-__v')
		.then((articles) => {
			res.status(200).json({
				message: 'All articles retrieved successfully',
				articles: articles
			});
		})
		.catch((err) => {
			next(err);
		});
};

exports.postArticle = (req, res, next) => {
	const { error } = validateArticle(req.body);
	if (error) {
		return next(new ApiError(error.details[0].message, 422));
	}
			let article = new Article({
				title: req.body.title,
				description: req.body.description,
				userId: req.body.userId,

			});
			article.save().then((article) => {
			res.status(201).json({
				message: 'تم اضافة البيانات بنجاح',
				article
			}).catch((err) => {
			next(err);
		})
	});
};

exports.UpdateArticle = (req, res, next) => {
	Article.findOneAndUpdate(
		{ _id: req.body._id },
		{
			articleName: req.body.articleName
		},
		{ new: true }
	)
		.select('-__v')
		.then((article) => {
			res.status(200).json({
				message: 'تم تعديل البيانات بنجاح',
				article
			});
		})
		.catch((err) => {
			next(err);
		});
};

exports.deleteArticle = (req, res, next) => {
	Article.findOneAndDelete({
		_id: req.body._id
	})
		.select('-__v')
		.then((article) => {
			if (!article) {
				return next(new ApiError('يوجد خطأ ', 400));
			}
			res.status(200).json({
				message: 'تم حذف البيانات بنجاح',
				article
			});
		})
		.catch((err) => {
			next(err);
		});
};
