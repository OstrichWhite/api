import express from "express";

const app = express();

app.get("/info", (req, res) => {
  res.json({ message: "hello from server." });
});

export default app