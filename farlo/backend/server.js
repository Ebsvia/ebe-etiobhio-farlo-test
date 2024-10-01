import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs/promises'; 
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const DATA_FILE = './showsData.json';

app.use(cors());

app.get('/api/shows', async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const parsedData = JSON.parse(data);

    const sanitisedData = parsedData.map(show => ({
      id: show.id,
      title: show.title || 'Untitled Show',
      image: show.image || 'No Image',
      see_tickets_url_infos: show.see_tickets_url_infos || []
    }));

    res.json(sanitisedData);
  } catch (error) {
    // Return a 500 status if there is an issue reading the file
    res.status(500).json({ message: 'Error reading shows data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
