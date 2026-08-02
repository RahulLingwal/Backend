import express from "express";
import userRoute from "./routes/userRoute.js";
import connectDB from "./dbconnection.js";

const app = express();
const PORT = 8000;

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", userRoute);

//db connection
connectDB("mongodb://localhost:27017/user-info")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at : http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed!", error);
  });
