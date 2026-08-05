const mongoose = require('mongoose');
require('dotenv').config();

async function checkDb() {
  await mongoose.connect(process.env.MONGO_URI);
  const db = mongoose.connection.db;
  const siteinfos = await db.collection('siteinfos').find({}).toArray();
  console.log('SITE INFOS IN ATLAS:', JSON.stringify(siteinfos, null, 2));
  await mongoose.disconnect();
}

checkDb().catch(console.error);
