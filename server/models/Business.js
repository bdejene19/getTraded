const mongoose = require('mongoose');

const { Schema } = mongoose;

const businessSchema = new Schema({
  createdDate: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description : {
    type: String,
    required: false
    },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  categories: {
    type: Schema.Types.ObjectId,
    ref: 'Catergory',
    required: true
  },
  experience: [   {
    type: Schema.Types.ObjectId,
    ref: 'PreviousWork'
  }],
  score: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
