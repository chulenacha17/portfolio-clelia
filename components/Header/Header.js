import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';
import Lottie from './Lottie';

import { Wrapper, Hero, Icons } from './style';

function Header() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <Wrapper id="header">
      <Hero>
        <div className="container">
          <div>
            <Fade cascade>
              <h1>Design e desenvolvimento de produtos digitais.</h1>
              <h2>Vamos trabalhar juntos para criar algo verdadeiramente único.</h2>
              {isHome && (
                <ScrollLink to="form" smooth duration={1500}>
                  <button type="button" aria-label="Iniciar um Projeto">
                    Iniciar un proyecto
                  </button>
                </ScrollLink>
              )}
            </Fade>
          </div>
          <Lottie />
        </div>
      </Hero>

      <Icons>
        <div className="networks">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Link"
            href="https://github.com/clelia-dev"
          >
            <FaGithub size={26} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin Link"
            href="https://www.linkedin.com/in/clelia-dev/"
          >
            <FaLinkedin size={26} />
          </a>
        </div>

        {isHome && (
          <div className="scroll">
            <FiArrowDown size={22} />
            <ScrollLink to="about" smooth>
              <span>descer</span>
            </ScrollLink>
          </div>
        )}
      </Icons>
    </Wrapper>
  );
}

export default Header;
