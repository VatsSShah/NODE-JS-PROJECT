import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from "./routes/UserRoute.js";
const app= express();
const PORT= 3000;
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://Priyanka:srcn1224@cluster0.mobsisi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    // Start the Express server and listen on the specified port
    app.listen(PORT, () => console.log(`Server PORT: ${PORT}, DB connected`));
  })
  .catch((error) => console.log(`${error} did not connect`));

  app.use("/users", UserRoutes)
  