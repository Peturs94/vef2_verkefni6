import React from 'react';
import PropTypes from 'prop-types';
import Errors from '../errors/Errors';

import css from './Form.css';

// Form á forsíðu
export default function Form(props) {
  const { children, errors, callback } = props;


  async function onSubmit(e) {
    e.preventDefault();
    await callback(e.target);
  }

  return (
    <form className={css.form} onSubmit={onSubmit}>
      {children}
      <Errors errors={errors} />
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.any,
  errors: PropTypes.array,
  callback: PropTypes.func,
}
