import React from 'react';
import {
  CVContainer,
  HeaderSection,
  ProfileImage,
  NameTitle,
  Section,
  Title,
  Subtitle,
  Paragraph,
  Item,
  List,
  ListItem
} from './CV.styles';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const CV = () => {
  return (
    <CVContainer>
      <HeaderSection>
        <ProfileImage src="/Img/profile.jpg" alt="Foto de Clelia" />
        <NameTitle>
          <Title>Clelia Ponce</Title>
          <Subtitle>Desarrolladora de Software · Estudiante de Ingeniería Informática</Subtitle>
        </NameTitle>
      </HeaderSection>

      <Section>
        <h2>Sobre mí</h2>
           <Paragraph>
              Soy una persona activa y creativa, orientada al diseño y desarrollo tanto front-end como back-end. 
                Me interesa comprender profundamente el funcionamiento completo de una aplicación, 
                incluyendo la lógica del servidor y la gestión de bases de datos. 
                Realicé un bootcamp de programación y actualmente estudio Ingeniería Informática. 
                Aunque no tengo experiencia formal en empresas de tecnología,
                he desarrollado diversos proyectos personales que me han permitido afianzar mis conocimientos técnicos. 
                Además, cuento con nociones de servicios en la nube como Amazon Web Services (AWS) y siempre estoy dispuesta a aprender nuevas tecnologías que me ayuden a seguir creciendo como profesional.
            </Paragraph>
      </Section>

      <Section>
        <h2>Educación</h2>
        <Item>
          <strong>DEUSTON Formación</strong> (2021 – 2022)
          <Paragraph>Programación en PHP, MySQL y tecnologías web</Paragraph>
        </Item>
        <Item>
          <strong>Ingeniería Informática</strong> (En curso)
        </Item>
      </Section>

      <Section>
        <h2>Experiencia</h2>
        <Paragraph>No tengo experiencia laboral formal en tecnología, pero he trabajado en proyectos personales donde apliqué lo aprendido en desarrollo de software.</Paragraph>
      </Section>

      <Section>
        <h2>Habilidades Técnicas</h2>
        <List>
          <ListItem>React</ListItem>
          <ListItem>Node.js</ListItem>
          <ListItem>MySQL</ListItem>
          <ListItem>SASS</ListItem>
          <ListItem>GiT</ListItem>
          <ListItem>PHP</ListItem>
          <ListItem>Python</ListItem>
          <ListItem>Conocimientos UX UI</ListItem>
        </List>
      </Section>

      <Section>
        <h2>Idiomas</h2>
        <List>
          <ListItem>Español (Lengua materna)</ListItem>
          <ListItem>Inglés (B2)</ListItem>
          <ListItem>Catalán (B1)</ListItem>
        </List>
      </Section>

      <Section>
        <h2>Contacto</h2>
        <Paragraph><FaEnvelope /> cleliajuli1997@gmail.com</Paragraph>
        <Paragraph><FaPhone /> +34 627 455 248</Paragraph>
        <Paragraph><FaMapMarkerAlt /> Barcelona, España</Paragraph>
        <Paragraph><FaLinkedin /> <a href="https://www.linkedin.com/in/clelia-ponce-" target="_blank" rel="noreferrer">linkedin.com/in/clelia-ponce-</a></Paragraph>
        <Paragraph><FaGithub /> <a href="https://github.com/chulenacha17" target="_blank" rel="noreferrer">chulenacha17</a></Paragraph>
      </Section>
    </CVContainer>
  );
};

export default CV;
