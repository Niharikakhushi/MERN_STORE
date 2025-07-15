import express from "express";
import connectDB from "./Db.js";
import cors from "cors";
 
import userRoutes from "./routes/UserRoute.js"
const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
 
app.use("/User",userRoutes)
 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
