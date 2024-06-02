import express from "express";

const app = express();
const port = 8000;

app.get("/info", (req, res) => {
  res.json({ message: "hello from server." });
});

app.listen(port, () => console.log(`Server listening on port ${port}.`));
