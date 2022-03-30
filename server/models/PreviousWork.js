const { Schema, model } = require("mongoose");

const previousWorkSchema = new Schema({
  business: {
    type: Schema.Types.ObjectId,
    ref: "Business",
    required: true
  },
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
