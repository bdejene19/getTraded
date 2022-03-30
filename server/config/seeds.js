const db = require('./connection');
const { User, Business, Worker, Category, Review } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Auto Mechanic' },
    { name: 'Carpenter' },
    { name: 'Carpet/Tile insteller' },
    { name: 'Electricain' },
    { name: 'Landscaper' },
    { name: 'Locksmith' },
    { name: 'Painter' },
    { name: 'Plumber' }

  ]);
    console.log('categories seeded');

    await Business.deleteMany();

    const businesses = await Business.insertMany([
        {
          owner: users[0]._id,
          name: 'Jack of all trades',
          description:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          category: categories[0]._id,
          experience: 'All you can eat', 
          Score: 78,
          reviews: [reviews[0]._id, reviews[1]._id]
        },
        {
          owner: users[1]._id,
          name: 'Best Carpenter',
          description:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          category: categories[4]._id,
          experience: 'The wood is afraid of me ', 
          Score: 78,
          reviews: [reviews[2]._id, reviews[1]._id]
        },
        {
          owner: users[2]._id,
          name: 'one of a kind mechanic',
          description:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          category: categories[0]._id,
          experience: 'Your car is happy to see me', 
          Score: 78,
          reviews: [reviews[0]._id, reviews[2]._id]
        },   
      ]);
    
      console.log('business seeded');


    await Worker.deleteMany();

    await Worker.insertMany([
        { name: 'John Smith', category: categories[0]._id },
        { name: 'Jane Smith', category: categories[1]._id },
        { name: 'Jack Smith', category: categories[2]._id },
        { name: 'Jill Smith', category: categories[3]._id },
        { name: 'Jim Smith', category: categories[4]._id },
        { name: 'Joe Smith', category: categories[5]._id }, 
        { name: 'Joan Smith', category: categories[6]._id },
        { name: 'John Smith', category: categories[7]._id }
    ]);
    console.log('worker seeded');

    await User.deleteMany();

    const reviews = await Review.insertMany([
        {business: businesses[0]._id, user: User[0]._id, score: 5, comment: 'This is a great1 business'},
        {business: businesses[1]._id, user: User[1]._id, score: 5, comment: 'This is a great2 business'},
        {business: businesses[2]._id, user: User[2]._id, score: 5, comment: 'This is a great3 business'},

    ]);
    console.log('reviews seeded');

    const users = await User.insertMany([
        {
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joesmith@testmail.com',
        password: 'password12345',
        phoneNumber: '1234567890',
        business: Business[0]._id,
        },
        {   
        firstName: 'Jim',
        lastName: 'Smith',
        email: 'jimsmith@testmail.com',
        password: 'password12345',
        phoneNumber: '12345467890',
        business: Business[1]._id,
        },
        {   
        firstName: 'John',
        lastName: 'Smith',
        email: 'johnsmith@testmail.com',
        password: 'password12345',
        phoneNumber: '12345567890',
        business: Business[2]._id,
}]);

    console.log('users seeded');

    process.exit();
});
