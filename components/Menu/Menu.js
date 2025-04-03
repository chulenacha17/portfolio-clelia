import React from 'react';
import { bool, func } from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';

import { StyledBurger, StyledMenu } from './style';

function lockScroll() {
  const body = document.body.style;
  if (body.overflow === '' || body.overflow === 'unset') {
    body.overflow = 'hidden';
  } else {
    body.overflow = 'unset';
  }
}

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen(!open);
        lockScroll();
      }}
      aria-label="Abrir menu"
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export const Menu = ({ open, setOpen }) => {
  const router = useRouter();

  const goToHomeAndScroll = (target) => {
    if (router.pathname === '/') {
      // ya estamos en home, hacemos scroll
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // redirigimos a home y hacemos scroll después
      router.push(`/#${target}`);
    }
    setOpen(false);
    lockScroll();
  };

  return (
    <StyledMenu open={open}>
      <div className="links">
        <a onClick={() => goToHomeAndScroll('about')}>Sobre mí</a>
        <a onClick={() => goToHomeAndScroll('projects')}>Proyectos</a>
        <a onClick={() => goToHomeAndScroll('form')}>Contacto</a>
        <a onClick={() => router.push('/cv')}>CV</a>
      </div>
      <img
        src="https://images.unsplash.com/photo-1531592937781-344ad608fabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Sombra de una persona acenando"
      />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
