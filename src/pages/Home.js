// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WallpaperCard from '../components/WallpaperCard';
import './Home.css';

const Home = () => {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=nature&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      setWallpapers(res.data.results);
    };
    
    fetchWallpapers();
  }, []);

  return (
    <div className="wallpaper-grid">
      {wallpapers.map((wallpaper) => (
        <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
      ))}
    </div>
  );
};

export default Home;
