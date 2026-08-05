const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 }).then(async () => {
  const data = await mongoose.connection.db.collection('siteinfos').findOne({});
  console.log('PROFILE_IMAGE:', data ? data.profileImage : 'NO DATA');
  console.log('LOGO_IMAGE:', data ? data.logoImage : 'NO DATA');
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
