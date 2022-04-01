const { AuthenticationError } = require("apollo-server-express");
const { User, Business, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //returns all users and ascoiated businesses
    users: async () => {
      return User.find().populate("business");
    },
    //returns specific user and ascoiated businesses
    user: async (parent, { fullName }) => {
      return User.findOne({ fullName }).populate("business");
    },
    //returns all businesses
    businesses: async (parent, { fullName }) => {
      const params = fullName ? { fullName } : {};
      return Business.find(params).sort({ createdAt: -1 });
    },
    //returns all businesss from a specific category
    businessesCategory: async (parent, { category, name }) => {
      const params = {};
      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name,
        };
      }

      //return Business.find(params).sort({ createdAt: -1 });
      return await Business.find(params).populate("category");
    },
    //returns specific business using business id
    getBusiness: async (parent, { businessId }, context) => {
      console.log(businessId);
      console.log("hello");
      console.log("my c: ", context);
      const businessFound = await Business.findOne({ _id: businessId })
        .populate("category")
        .catch((err) => err);
      console.log(businessFound);
      return businessFound;
    },
    //will get current logged in user info if logged in if not will throw error
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("business");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  //could still add create category and delete category
  Mutation: {
    addUser: async (parent, { fullName, email, password }) => {
      const user = await User.create({ fullName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addBusiness: async (parent, { name, description, category }, context) => {
      if (context.user) {
        //here below depending on front end if we pass either category actual name or the category id dealt with both ways one will work
        const categoryGet = await Category.findOne({ name: category });
        const business = await Business.create({
          name,
          description,
          //note below might not work so im doing it again line 81 in case should check for doube in db
          $addToSet: { category: category },
          owner: context.user.fullName,
        });
        await Business.findOneAndUpdate(
          { _id: business._id },
          { $addToSet: { category: categoryGet._id } },
          { new: true, runValidators: true }
        );

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { business: business._id } }
        );

        return business;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addReview: async (
      parent,
      { businessId, reviewText, reviewScore },
      context
    ) => {
      if (context.user) {
        return Business.findOneAndUpdate(
          { _id: businessId },
          {
            $addToSet: {
              reviews: {
                reviewText,
                reviewScore,
                reviewAuthor: context.user.fullName,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addExperience: async (
      parent,
      { businessId, workType, workDescription },
      context
    ) => {
      if (context.user) {
        return Business.findOneAndUpdate(
          { _id: businessId },
          {
            $addToSet: {
              experience: {
                workType,
                workDescription,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeBusiness: async (parent, { businessId }, context) => {
      if (context.user) {
        const business = await Business.findOneAndDelete({
          _id: businessId,
          owner: context.user.fullName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { business: business._id } }
        );
        //returns deleted business object
        return business;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeReview: async (parent, { businessId, reviewId }, context) => {
      if (context.user) {
        return Business.findOneAndUpdate(
          { _id: businessId },
          {
            $pull: {
              reviews: {
                _id: reviewId,
                reviewAuthor: context.user.fullName,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeExperience: async (parent, { businessId, experienceId }, context) => {
      if (context.user) {
        return Business.findOneAndUpdate(
          { _id: businessId },
          {
            $pull: {
              experience: {
                _id: experienceId,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
