import express from 'express';
import dotenv from 'dotenv'; 
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());

app.get('/', (req, res) => {
  res.send('testing server!'); 
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
