const mongoose = require('mongoose');

module.exports = function () {
	const db = 'mongodb+srv://admin:86xBYmXwKLeZLRsk@cluster0.hbhni.mongodb.net/blog?retryWrites=true&w=majority';
	mongoose
		.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		})
		.then(() => {
			mongoose.Promise = global.Promise;
			// console.info(`Connected to ${db}...`);
		})
		.catch((err) => {
			console.log(err);
		});
};
