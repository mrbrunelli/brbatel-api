import "dotenv";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));