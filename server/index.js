import express from 'express';
import cors from 'cors';
import ytdl from 'ytdl-core';

const app = express();
app.use(cors());  // enable CORS for all routes

// Proxy endpoint: /stream?url=<YouTube URL>
app.get('/stream', (req, res) => {
  const url = req.query.url;
  ytdl(url, { quality: 'highestvideo' }).pipe(res);
});

app.listen(3000, () =>
  console.log('Proxy server running at http://localhost:3000')
);
