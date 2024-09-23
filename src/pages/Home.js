import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import WallpaperCard from '../components/WallpaperCard';
import './Home.css';

const Home = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchWallpapers = async () => {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=${page}&query=nature&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      setWallpapers((prevWallpapers) => [...prevWallpapers, ...res.data.results]);
    };

    fetchWallpapers(); 
  }, [page]); 

  return (
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
  );
};

export default Home;
