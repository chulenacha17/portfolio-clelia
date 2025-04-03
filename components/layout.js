import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import { Menu, Burger } from './Menu';
import { Nav, Navbar, StyledFooter } from './style';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NextSeo
        title ='clelia | front-end web developer'
        description='Design e desenvolvimento de produtos digitais.'
        canonical='https://viniciusmoreeira.now.sh/'
        hrefLang='pt-BR'
        openGraph={{
          url: 'https://viniciusmoreeira.now.sh/',
          title: 'clelia | front-end web developer',
          description: 'Design e desenvolvimento de produtos digitais.',
          images: [
            {
              url: 'https://i.imgur.com/CDmlNOF.png',
              width: 800,
              height: 600,
              alt: 'Website Logo',
            },
          ],
          site_name: 'clelia | front-end web developer',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Nav>
        <Navbar>
          <a className='logo' href='/'>
            clelia
          </a>
          <Burger open={open} setOpen={setOpen} />
        </Navbar>
      </Nav>

      <Menu open={open} setOpen={setOpen} />

      {children}

      <StyledFooter>
        <div className='icons'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github Link'
            href='https://github.com/chulenacha17'
          >
            github
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin Link'
            href='https://www.linkedin.com/in/clelia-ponce-212926163'
          >
            linkedin
          </a>       
        </div>
        <span>
          © {new Date().getFullYear()} Clelia Ponce. Todos los derechos reservados.
          reservados.
        </span>
      </StyledFooter>
    </>
  );
}
