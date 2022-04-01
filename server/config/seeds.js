const db = require('./connection');
const { User, Business, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const businessSeeds = require('./businessSeeds.json');

db.once('open', async () => {
    try {
        await Category.deleteMany({});

        const categories = await Category.insertMany([
            { name: 'Carpet' },
            { name: 'Carpenter' },
            { name: 'Auto Mechanic' },
            { name: 'Electrician' },
            { name: 'Landscaper' },
            { name: 'Locksmith' },
            { name: 'Painter' },
            { name: 'Plumber' },
        ]);
        console.log('Categories seeded');

        // await Business.deleteMany();

        // const businesses = await Business.insertMany(businessSeeds);

        // console.log('business seeded');

        await User.deleteMany({});
        await Business.deleteMany({});
        await User.create(userSeeds);

        console.log('Users seeded');

        //seed businesses but also add created business id to user business's array
        for (let i = 0; i < businessSeeds.length; i++) {
            const { _id, owner } = await Business.create(businessSeeds[i]);
            const user = await User.findOneAndUpdate(
                { fullName: owner },
                {
                    $addToSet: {
                        business: _id,
                    },
                }
            );
        }
        //add category ids to respective businesses in businessSeeds
        for (let i = 0; i < businessSeeds.length; i++) {
            const { _id } = await Business.findOne({
                name: businessSeeds[i].name,
            });
            await Business.findOneAndUpdate(
                { _id: _id },
                {
                    $addToSet: {
                        category: categories[i]._id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Businesss Seeded!');
    console.log('Seeding all done!');
    process.exit();
});
