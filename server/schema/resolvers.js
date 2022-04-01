const { AuthenticationError } = require("apollo-server-express");
const { User, Business, Review, Category, PreviousWork } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // get all categories
    categories: async () => {
      return await Category.find();
    },
    //we query businesses by category below
    businesses: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Business.find(params).populate("category");
    },
    // query business by id
    getBusinessesById: async (parent, { _id }) => {
      return await Business.findById(_id).populate("category");
    },
    getBusinessesByCategory: async (parent, { category }) => {
      return await Business.find({
        category: category,
      })
        .populate("category")
        .catch((err) => err);
    },
    // query user by id
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    // create a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //update user by id
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    // getting a user's info from the database by email if it exists and comparing the password entered with one in the database
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
