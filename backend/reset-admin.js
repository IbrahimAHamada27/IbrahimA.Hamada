const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

async function resetAdmin() {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Delete existing admin
    await User.deleteMany({ email: 'ibrahima.hamada277@gmail.com' });
    console.log('Deleted old admin user');
    
    // Create fresh with known password hash
    const hash = await bcrypt.hash('Hamada@2006#', 10);
    await User.create({
        email: 'ibrahima.hamada277@gmail.com',
        password: hash,
        role: 'admin'
    });
    
    console.log('✅ Admin user reset successfully!');
    console.log('Email: ibrahima.hamada277@gmail.com');
    console.log('Password: Hamada@2006#');
    
    await mongoose.disconnect();
}

resetAdmin().catch(console.error);

