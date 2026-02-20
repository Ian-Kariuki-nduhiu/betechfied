import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  if (req.body) {
    console.log("Request body:", JSON.stringify(req.body));
  } else {
    console.log("Request body: (empty)");
  }

  next();
});

app.get("/", (req, res) => {
  res.json({ message: "My week 2 API" });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(`User ${id} profile`);
});

app.post("/user", (req, res) => {
  try {
    const name = req.body?.name;

    if (!name) {
      res.status(400).json({ error: "Name required" });
    }
    res.status(201).send(`hello ${name}`);
  } catch (err) {
    res.status(500).json({ error: `Error: ${err}` });
  }
});

app.listen(PORT, () => {
  console.log("Server started at port: 3000");
});
