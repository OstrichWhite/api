import mongoose from "mongoose";

const { DB_URL }= process.env;

const connectDB = async (): Promise<void> => {
  if (!DB_URL) throw new Error('DB_URL is not defined.');
  
  try {
    await mongoose.connect(DB_URL)
    console.log("DB connected successfully.")
    
  } catch (error) {
    console.log("DB not connected.")
    
  }
}

export default connectDB;