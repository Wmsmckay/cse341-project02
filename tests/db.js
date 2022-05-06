const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// connect to db
module.exports.connect = async () => {
  const uri = await mongod.getUri();
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10
  };
  await mongoose.connect(uri, mongooseOpts);
};

// disconect and close connection
module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

// clear the db, remove all data
module.exports.clearDatabase = async () => {
  const collections = mongoose.connect.collections;
  for (const key in collection) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};
