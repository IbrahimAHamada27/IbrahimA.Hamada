const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 }).then(async () => {
  const data = await mongoose.connection.db.collection('siteinfos').findOne({});
  if (data) {
    console.log('profileImage format:', data.profileImage ? data.profileImage.substring(0, 60) : 'null');
    console.log('logoImage format:', data.logoImage ? data.logoImage.substring(0, 60) : 'null');
  } else {
    console.log('No siteinfo document found in Atlas!');
  }
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
