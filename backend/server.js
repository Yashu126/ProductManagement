import express from 'express';
import Cors from 'cors'
import dotenv from 'dotenv';
import path from 'path';
import { connectDb } from './Config/db.js';
import productRoutes from './Routes/product.route.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 2627
app.use(express.json())
app.use(Cors());
const __dirname = path.resolve()


app.use("/products", productRoutes)

if(process.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (_, res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}


connectDb().then(
  app.listen(port, async () => {
    await connectDb();
    console.log(`Server stated runing http://localhost:${port}/Products`);
  })
);

















//fG7RDs6cHxSXSamN

//oGhv9wXx8kaE5Yet