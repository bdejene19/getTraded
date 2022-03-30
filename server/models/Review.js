const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  reviewDate: {
    type: Date,
    default: Date.now
  },
  business: {
      type: Schema.Types.ObjectId,
      ref: 'Business'
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  score: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
    required: false,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
