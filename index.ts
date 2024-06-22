import { config } from "dotenv";
config()

import express from "express";
import connectDB from "./connectDB";

const app = express();
const {PORT: port = 3000 }= process.env;

const main = async () =>{
  app.get("/info", (req, res) => {
    res.json({ message: "hello from server." });
  });

  await connectDB()
  app.listen(port, () => console.log(`Server listening on port ${port}.`));  
}

main()