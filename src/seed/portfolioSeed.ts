// src/seed/portfolioSeed.ts
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import PortfolioItem from '../models/PortfolioItem';

dotenv.config();

const sampleItems = Array.from({ length: 10 }).map((_, i) => ({
  title: `Sample Project ${i + 1}`,
  category: ['Corporate', 'Commercial', 'Music Video', 'Documentary'][i % 4],
  client: `Client ${i + 1}`,
  description: `This is a sample description for project ${i + 1}.`,
  thumbnail_url: `https://via.placeholder.com/300x200?text=Thumbnail+${i + 1}`,
  video_url: `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_${i + 1}.mp4`,
  featured: i % 2 === 0,
  display_order: i,
}));

const seedPortfolio = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '', { dbName: 'video_portfolio' });

    await PortfolioItem.deleteMany({});
    await PortfolioItem.insertMany(sampleItems);

    console.log('✅ Portfolio items seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding portfolio items:', error);
    process.exit(1);
  }
};

seedPortfolio();
