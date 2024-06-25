import express from "express";
import router from "./routes";

const app = express();

app.use("/api/v1", router)
app.get("/info", (req, res) => {
  res.json({ message: "hello from server." });
});

export default app