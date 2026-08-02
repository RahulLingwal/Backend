import mongoose from "mongoose";

async function connectDB(uri) {
  try {
    const connectionInstance = await mongoose.connect(uri);
    console.log(
      `\nMongoDB connected !! DB Host : ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("MongoDB connection FAILED : ", error);
    process.exit(1);
  }
}

export default connectDB;
