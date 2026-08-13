import React from 'react';
import './MarqueeMessage.css'; // Asegúrate de tener el CSS en la misma carpeta

export default function MarqueeMessage({ text }) {
  return (
    <div className="marquee-container">
      <div className="marquee-text">
        {text}
      </div>
    </div>
  );
}