import React from 'react';

const Image = ({ url, alt, link }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',     // Posiciona el contenido relativamente
      width: '100%',
      height: '100%',
      backgroundColor: '#000',  // Fondo negro en áreas vacías
    }}
  >
    <img
      draggable={false}
      style={{
        display: 'block',
        width: '100%',             // Ocupa todo el ancho del contenedor
        height: '100%',            // Ocupa todo el alto del contenedor
        objectFit: 'contain',      // Asegura que la imagen se ajuste completamente dentro del contenedor sin recortar
      }}
      src={url}
      alt={alt}
    />
    
    {/* Aquí está el botón con el enlace dinámico */}
    <a
      href={link}  // Enlace dinámico pasado desde Carousel.js
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'absolute',      // Posiciona el botón dentro del contenedor
        bottom: '140px',           // Lo coloca en la parte inferior
        padding: '10px 20px',
        backgroundColor: '#cc63ec46',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      Ir al enlace
    </a>
  </div>
);

export default Image;
