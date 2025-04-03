import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import LazyLoad from 'react-lazyload';

import { Container, StyledForm } from './style';

export default function Form() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  });

  const handleResponse = (status) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false, 
        error: false,
      });
      reset();
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        error: true,
      });
    }
  };

  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async (data) => {
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const res = await fetch('http://127.0.0.1:5000/api/send', {  // Ruta absoluta para Flask local
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const text = await res.text();
      handleResponse(res.status);
    } catch (error) {
      setStatus({ submitting: false, error: true });
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <Container id='form'>
      <div className='left-text'>
        <Fade cascade>
          <h2>¿Vamos a comenzar un proyecto juntos?</h2>
          <p>Cuéntame sobre tu proyecto y me pondré en contacto contigo.</p>
        </Fade>
      </div>

      <LazyLoad height={200} offset={280}>
        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              placeholder='Nombre'
              name='name'
              aria-label='nombre'
              ref={register({ required: true, maxLength: 80 })}
            />
            <span>{errors.name && 'Por favor ingrese su nombre'}</span>

            <input
              type='email'
              placeholder='Email'
              name='email'
              aria-label='email'
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <span>{errors.email && 'Por favor ingrese un email válido'}</span>

            <label>
              ¿Ya tienes un diseño?
              <select name='design' ref={register({ required: true })}>
                <option value='Sí'>Sí</option>
                <option value='No'>No</option>
              </select>
            </label>

            <label>
              Número de páginas del proyecto
              <select name='pages' ref={register({ required: true })}>
                <option value='01'>01</option>
                <option value='02'>02</option>
                <option value='03'>03</option>
                <option value='04'>04</option>
                <option value='05'>05</option>
                <option value='06'>06</option>
                <option value='+07'>+07</option>
              </select>
            </label>

            <label>
              Mensaje
              <textarea name='message' ref={register({ required: true })} />
            </label>
            <span>{errors.message && 'Por favor detalla tu proyecto'}</span>

            <button
              type='submit'
              name='Enviar mensaje'
              disabled={status.submitting}
            >
              {!status.submitting
                ? !status.submitted
                  ? 'Enviar mensaje'
                  : 'Enviado con éxito'
                : 'Enviando...'}
            </button>

            {status.error && (
              <span style={{ color: 'red' }}>Ocurrió un error al enviar. Inténtalo de nuevo.</span>
            )}
          </form>

          <Link className='buttonUp' to='header' smooth>
            <FaArrowUp />
          </Link>
        </StyledForm>
      </LazyLoad>
    </Container>
  );
}
