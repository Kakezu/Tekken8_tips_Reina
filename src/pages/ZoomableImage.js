import React, { useState } from 'react';

function ZoomableImage({src, alt}) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <img className={`gif-image ${isZoomed ? 'zoomed' : ''}`} src={src} alt={alt} onClick={handleClick}/>
  );
}

export default ZoomableImage;
