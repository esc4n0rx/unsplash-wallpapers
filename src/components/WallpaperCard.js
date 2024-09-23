import React, { useState } from 'react';
import './WallpaperCard.css';

const WallpaperCard = ({ wallpaper }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="card" onClick={toggleModal}>
        <img className="thumbnail" src={wallpaper.urls.thumb} alt={wallpaper.alt_description} />
      </div>

      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'active' : ''}`}>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>X</button> {/* Botão de fechar */}
            <h2>{wallpaper.description || "Sem descrição"}</h2>
            <p>❤️ {wallpaper.likes} likes</p>
            <a href={wallpaper.links.download} target="_blank" rel="noopener noreferrer">
              Baixar Wallpaper
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default WallpaperCard;
