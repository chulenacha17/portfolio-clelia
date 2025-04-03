import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import CustomCarousel from '../Carousel/Carousel';

import { StyledProjects } from './style';

class Projects extends Component {
  render() {
    return (
      <StyledProjects id='projects'>
        <div className='left-text'>
          <Fade cascade>
            <p>Qué puedo hacer</p>
            <h2>Diseña lo que quieras.</h2>
            <p>
             Me gusta simplificar. Mis objetivos concentrarme en la tipografía,
              en el contenido y transmisión del mensaje que desea enviar.
            </p>
          </Fade>
        </div>
        <CustomCarousel />
      </StyledProjects>
    );
  }
}

export default Projects;
