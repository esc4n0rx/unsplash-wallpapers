import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import WallpaperCard from '../components/WallpaperCard';
import './Categories.css';

const Categories = () => {
  const [category, setCategory] = useState('nature');
  const [wallpapers, setWallpapers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchWallpapers();
  }, [page, category]);

  const fetchWallpapers = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${category}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    );
    setWallpapers((prevWallpapers) => [...prevWallpapers, ...res.data.results]);
  };

  return (
    <div>
      <select onChange={(e) => { setCategory(e.target.value); setPage(1); setWallpapers([]); }} value={category}>
        <option value="nature">Nature</option>
        <option value="animals">Animals</option>
        <option value="travel">Travel</option>
        <option value="technology">Technology</option>
        <option value="architecture">Architecture</option>
        <option value="people">People</option>
      </select>

      <InfiniteScroll
        dataLength={wallpapers.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<h4>Carregando...</h4>}
        className="wallpaper-grid"
      >
        {wallpapers.map((wallpaper) => (
          <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Categories;
