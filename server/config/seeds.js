const db = require('./connection');
const { User, Business, Category, Review, PreviousWork } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});
    const users = await User.insertMany([
        {
            firstName: 'Joe',
            lastName: 'Smith',
            email: 'joesmith@testmail.com',
            password: 'password12345',
            phoneNumber: '1234567890',
            business: null,
        },
        {
            firstName: 'Jim',
            lastName: 'Smith',
            email: 'jimsmith@testmail.com',
            password: 'password12345',
            phoneNumber: '12345467890',
            business: null,
        },
        {
            firstName: 'John',
            lastName: 'Smith',
            email: 'johnsmith@testmail.com',
            password: 'password12345',
            phoneNumber: '12345567890',
            business: null,
        },
    ]);

    console.log('users seeded');

    await Category.deleteMany({});

    const categories = await Category.insertMany([
        { name: 'Auto Mechanic' },
        { name: 'Carpenter' },
        { name: 'Carpet/Tile insteller' },
        { name: 'Electricain' },
        { name: 'Landscaper' },
        { name: 'Locksmith' },
        { name: 'Painter' },
        { name: 'Plumber' },
    ]);
    console.log('categories seeded');

    await Business.deleteMany();

    const businesses = await Business.insertMany([
        {
            owner: users[2]._id,
            name: 'Carpet Muncher',
            description:
                'We tear up your old carpets. Count on us for your next carpet renovation!',
            categories: categories[0]._id,
            experience: null,
            Score: 78,
            reviews: [],
        },
        {
            owner: users[1]._id,
            name: 'Best Carpenter',
            description:
                'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            categories: categories[1]._id,
            experience: null,
            Score: 78,
            reviews: [],
        },
        {
            owner: users[2]._id,
            name: 'one of a kind mechanic',
            description:
                'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            categories: categories[0]._id,
            experience: null,
            Score: 78,
            reviews: [],
        },
    ]);

    console.log('business seeded');

    await PreviousWork.deleteMany();

    const workexperiences = await PreviousWork.insertMany([
        {
            business: businesses[0]._id,
            workType: 'Carpet Removal and Installation',
            workImages: [],
            workDescription: 'We tore up old carpets. Put down new carpet.',
            jobCompleted: true,
        },
        {
            business: businesses[1]._id,
            workType: 'Kitchen shelving and flooring',
            workImages: [],
            workDescription:
                'We replaced old shelving. Put in new polished hardwood flooring.',
            jobCompleted: true,
        },
    ]);

    console.log('previous work seeded');

    await Review.deleteMany();

    const reviews = await Review.insertMany([
        {
            business: businesses[0]._id,
            user: users[0]._id,
            score: 5,
            comment: 'This is a great1 business',
        },
        {
            business: businesses[1]._id,
            user: users[1]._id,
            score: 5,
            comment: 'This is a great2 business',
        },
        {
            business: businesses[2]._id,
            user: users[2]._id,
            score: 5,
            comment: 'This is a great3 business',
        },
    ]);
    console.log('reviews seeded');

    process.exit();
});
