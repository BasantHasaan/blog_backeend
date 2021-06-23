const express = require('express');
const router = express.Router();
const articleController = require('../../controllers/article/article');


//  http://localhost:3200/api/articles

router
	.route('/')
	.get( articleController.getAllarticles)
	.post( articleController.postArticle)
	// .put( articleController.UpdateArticle)
	.delete( articleController.deleteArticle);

module.exports = router;
