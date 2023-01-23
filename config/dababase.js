import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected with ${connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
