// src/pages/Categories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WallpaperCard from '../components/WallpaperCard';
import './Categories.css';

const Categories = () => {
  const [category, setCategory] = useState('nature');
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${category}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      setWallpapers(res.data.results);
    };
    
    fetchWallpapers();
  }, [category]);

  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="nature">Nature</option>
        <option value="animals">Animals</option>
        <option value="city">City</option>
      </select>

      <div className="wallpaper-grid">
        {wallpapers.map((wallpaper) => (
          <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
