const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.test' });

async function setupTestDB() {
  try {
    // Connect to test database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to test database');
    
    // Optional: Clear any existing test data
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      await collection.deleteMany({});
    }
    
    console.log('Test database cleared and ready');
    await mongoose.connection.close();
  } catch (error) {
    console.error('Test database setup failed:', error);
    process.exit(1);
  }
}

setupTestDB();
