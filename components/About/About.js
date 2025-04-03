import React from 'react';
import LazyLoad from 'react-lazyload';
import { Fade } from 'react-awesome-reveal';

import { StyledAbout } from './style';

const About = () => {
  return (
    <StyledAbout id='about'>
      <LazyLoad height={200} offset={280}>
        <img
          src='https://images.unsplash.com/photo-1528372444006-1bfc81acab02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
          alt='Imagem de uma mesa de trabalho'
        />
      </LazyLoad>
      <div className='right-text'>
        <Fade cascade>
          <h2>Hola!</h2>

          <p>
            Mi nombre es clelia. me gusta crear cosas que viven en internet,
            ya sean sitios web o App, con un enfoque en el diseño positivo.
          </p>
          <p>
            <a href='/cv'>
  Visualizar mi currículo
</a>

          </p>
        </Fade>
      </div>
    </StyledAbout>
  );
};

export default About;
