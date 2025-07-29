# YouTube Video Downloader 🚀


## Overview 🎬✨
Welcome to your all-in-one YouTube video downloader! This simple and fun app lets you grab your favorite YouTube videos with just a click — no complicated stuff, no headaches. Just paste the link, hit the button, and voilà! Your video is ready to download. Perfect for anyone who wants videos offline, anytime, anywhere. Easy, fast, and hassle-free! 🚀💻

---
DEMO : [LIVE SITE](https://downysite.vercel.app) 🧑‍🚀


---

## Features

- Paste YouTube video URL and get a downloadable MP4 link  
- Backend uses `yt-dlp` Python library for video downloading  
- Handles download requests via REST API  
- Cool typing effect tagline on frontend  
- Basic error handling and loading states  

---

## Contributing 🙌🎉

Love this project? Want to make it even cooler? We’d be super happy if you joined the fun! Feel free to add awesome features like Instagram reel downloads 🎥, photo downloaders 📸, or even support for other social platforms 🌐. Fork the repo 🍴, play around with the code 🛠️, and send us a pull request 📩. Let’s team up and build the ultimate media downloader — together! Your ideas and help make all the difference! 💪🔥


---

## Technologies Used

- Frontend: React (JavaScript)  
- Backend: Node.js (Express)  
- Video Download: Python `yt-dlp`  
- Deployment: Render.com (or any similar service)  

---

## Setup & Installation

### Prerequisites

- Node.js installed  
- Python 3.x installed  
- `yt-dlp` Python package installed (`pip install yt-dlp`)  

### Clone the repository

```bash
git clone https://github.com/SuryaNarayananDev/Youtube_Video_Downloader.git
cd Youtube_Video_Downloader
```

### Backend Setup

1. Navigate to backend folder (e.g. `yt-backend`)  
2. Install dependencies:

```bash
npm install
pip install -r requirements.txt  # contains yt-dlp and other Python dependencies
```

3. Ensure your backend `index.js` is configured to call `yt-dlp` via Python (e.g., `python -m yt_dlp` command).

4. Start the backend server:

```bash
node index.js
```

### Frontend Setup

1. Navigate to frontend folder (e.g. `yt-frontend`)  
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your backend URL:

```
REACT_APP_API_URL=http://localhost:5000
```

4. Start the frontend app:

```bash
npm start
```

---

## Usage

1. Open the React frontend in your browser  
2. Paste a valid YouTube video URL  
3. Click **Get Download Link**  
4. Once processed, click the download button to save the video locally  

---

## Notes & Troubleshooting

- **HTTP 429 Too Many Requests**: YouTube rate-limits IPs after many requests.  
  - Wait some time before retrying.  
  - Use cookies file with `yt-dlp` if needed for authentication.  
- Ensure `yt-dlp` is properly installed and accessible in your backend environment.  
- Downloaded videos are temporarily stored on the server in `/downloads` folder.

---

## Contributing

Feel free to fork and send pull requests for improvements or bug fixes.

---

## License

This project is open-source under the MIT License.

---

## Contact

Developed by Surya Narayanan  
Email: suryavignesh6238@gmail.com  
GitHub: [SuryaNarayananDev](https://github.com/SuryaNarayananDev)  
Portfolio: https://suryanarayanans.netlify.app  
