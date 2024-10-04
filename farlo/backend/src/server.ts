import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 5001;
const DATA_FILE = "./showsData.json";

// Middleware
app.use(cors());

// Endpoint to get shows data
app.get("/api/shows", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading shows data." });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
