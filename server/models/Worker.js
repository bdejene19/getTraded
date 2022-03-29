const { Schema, model } = require("mongoose");
const PreviousWork = require("./PreviousWork");

const workerSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    businessName: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    deactivated: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      require: true,
    },

    phoneNumber: {
      type: String,
      require: true,
    },

    previousWork: {
      type: [PreviousWork],
      default: [],
    },

    score: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const fullNameVirtual = workerSchema.virtual("fullName");
fullNameVirtual.get(function () {
  return `${this.firstName} ${this.lastName}`;
});

fullNameVirtual.set(function (name) {
  [first, last] = name.split(" ");
  this.firstName = first;
  this.lastName = last;
});

const Worker = model("Worker", workerSchema);

module.exports = Worker;
