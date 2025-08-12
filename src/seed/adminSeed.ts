// src/seed/adminSeed.ts
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import AdminUser from '../models/AdminUser';

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '', { dbName: 'video_portfolio' });

    const email = 'admin@videocrew.com';
    const password = 'Test@123';

    const existingAdmin = await AdminUser.findOne({ email });
    if (existingAdmin) {
      console.log('⚠️ Admin user already exists');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new AdminUser({
      email,
      password: hashedPassword,
      name: 'Admin User',
    });

    await admin.save();
    console.log('✅ Admin user created successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding admin user:', error);
    process.exit(1);
  }
};

seedAdmin();
