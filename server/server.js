import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express();
const PORT = 8080; // Choose a port for your server

app.use(express.json());
app.use(cors())

app.get('/google-places', async (req, res) => {
  const { placeId, apiKey } = req.query;
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});