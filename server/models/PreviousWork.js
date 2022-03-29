const { Schema, model } = require("mongoose");

const previousWorkSchema = new Schema({
  workType: {
    type: String,
    require: true,
  },

  workImages: {
    type: [String],
    default: [],
  },

  workDescription: {
    type: String,
    maxlength: 500,
  },
  jobCompleted: {
    type: Boolean,
    require: true,
  },
});

const PreviousWork = model("PreviousWork", previousWorkSchema);

module.exports = PreviousWork;
