const Joi = require('joi');
const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  // imgUrl: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  description: {
    type: String,
    required: true,
    trim: true
  },
  userId: {
  	type: mongoose.Schema.Types.String,
  	ref: 'User',
  	required: true
  },
}, { timestamps: true });
const Article = mongoose.model("Article", articleSchema);


const validateArticle =  (userData) => {
  let schema = Joi.object({
    _id: Joi.ObjectId(),
    title: Joi.string().trim().required(),
    // imgUrl: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    userId: Joi.string().required(),
    updatedAt: Joi.date(),
    createdAt: Joi.date()
  })

  return schema.validate(userData);
};

articleSchema.pre('validate', async function () {
  const doc = this.toJSON();
  const { error } = validateArticle(doc);
  if (error) {
    throw new ApiError(error.details[0].message, 422, error.details);
  }
})

exports.Article = Article;
exports.validateArticle = validateArticle;
