import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import 'dotenv/config'
// import path from 'path'
const app = express();
const PORT = process.env.PORT;
const corsOptions = {
  // origin: 'http://localhost:8080/',
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// const __dirname = path.resolve(path.dirname(''));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/assets')));
// app.use(express.static(path.join(__dirname, 'public/assets/fonts')));


// app.get('/', (req, res)=>{
//   res.sendFile("/index.html")
// })
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