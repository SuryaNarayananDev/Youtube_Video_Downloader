const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
}));
app.use(bodyParser.json());

// Endpoint: POST /download
app.post('/download', async (req, res) => {
  const videoUrl = req.body.url;

  if (!videoUrl) {
    return res.status(400).json({ error: 'No URL provided' });
  }

  // Prepare output directory
  const outputDir = path.join(__dirname, 'downloads');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  const outputFile = `${outputDir}/video.mp4`;

  // Remove previous video if it exists
  if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);

  // ✅ Use full path to yt-dlp.exe here
const command = `python -m yt_dlp -f mp4 -o "${outputFile}" "${videoUrl}"`;


  // Execute the yt-dlp command
 exec(command, (error, stdout, stderr) => {
  console.log("COMMAND OUTPUT:", stdout);
  console.error("COMMAND ERROR:", stderr);

  if (error) {
    return res.status(500).json({ error: 'Download failed', stderr });
  }

  // Use protocol and host from request for deploy-friendly download URL
  const protocol = req.protocol;
  const host = req.get('host');
  return res.json({ downloadUrl: `${protocol}://${host}/downloads/video.mp4` });
});

});

// Serve static files (the downloaded videos)
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
