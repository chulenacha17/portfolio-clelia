import React from 'react';
import LazyLoad from 'react-lazyload';
import { Fade } from 'react-awesome-reveal';

import { StyledProject } from './style';

const Featured = () => {
  return (
    <StyledProject>
      <LazyLoad height={200} offset={280}>
        <img
          src='https://cdn.dribbble.com/users/1553101/screenshots/4585382/dribbble_post.png'
          alt='Featured Project'
        />
      </LazyLoad>
      <div className='right-text'>
        <Fade cascade>
          <h2>Desarrolla lo que necesitas.</h2>
          <p>
            Como desarrollador, sé cómo crear su sitio web para ejecutarlo.
            dispositivos que utilizan las últimas tecnologías disponibles.
          </p>
        </Fade>
      </div>
    </StyledProject>
  );
};

export default Featured;
