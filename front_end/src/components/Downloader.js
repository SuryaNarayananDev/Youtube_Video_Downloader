import React, { useState, useEffect } from 'react';
import './Downloader.css'; // Assuming you have a CSS file for styling
const Downloader = () => {
  const [url, setUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleDownload = async () => {
    setLoading(true);
    setErrorMsg('');
    setDownloadLink('');
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || 'Server error');
      }
      const data = await response.json();
      if (data && data.downloadUrl) {
        setDownloadLink(data.downloadUrl);
      } else {
        setErrorMsg('No download link received.');
      }
    } catch (error) {
      setErrorMsg('Download failed or invalid URL. ' + (error.message || ''));
    }
    setLoading(false);
  };


  // Taglines for the header
  const taglines = [
    "Click. Chill. (Even your grandma could do it)",
    "Click. Wait. Boom. Video in your pocket.",
    "Downy does the dirty work. You just chill.",
    "Copy link. Press button. Feel powerful.",
    "Paste. Boom. It’s yours. (No PhD needed)",
    "Grab YouTube vids faster than your Wi-Fi regrets it."
  ];

  // Typing effect state
  const [displayed, setDisplayed] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentTagline = taglines[taglineIndex];
    if (typing) {
      if (displayed.length < currentTagline.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentTagline.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentTagline.slice(0, displayed.length - 1));
        }, 30);
      } else {
        setTyping(true);
        setTaglineIndex((taglineIndex + 1) % taglines.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, taglineIndex, taglines]);

  return (
    <div className="downloader-container">
      <div className='height'>
        <h1 className="header-title">{displayed}</h1>
      </div>
      <input
        type="text"
        placeholder="Paste YouTube URL here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleDownload} disabled={loading || !url.trim()}>
        {loading ? 'Processing...' : 'Get Download Link'}
      </button>
      {loading && (
        <div className="downloader-status">Sending secret agents to grab your video...🤠</div>
      )}
      {errorMsg && (
        <div className="downloader-error" style={{ color: 'red', marginTop: '10px' }}>{errorMsg}</div>
      )}
      {downloadLink && (
        <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="downloader-link">
          Click here to download
        </a>
      )}
    </div>
  );
};

export default Downloader;
