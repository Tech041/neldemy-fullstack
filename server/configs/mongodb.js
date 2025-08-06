import mongoose from "mongoose";

// Connect to MongoDb
const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}/Neldemy`);
  console.log("Database Connected");
};
export default connectDB;
