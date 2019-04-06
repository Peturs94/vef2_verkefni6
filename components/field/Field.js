import React from 'react';
import PropTypes from 'prop-types';
import css from './Field.css';

export default function Field(props) {
  const { label, name, type, placeholder, checked, onChange, noInput, value } = props;

  if (noInput)
    return (
      <div className= {css.field__input}>
        <label className= {css.field__label}>{label}</label>
        <p className= {css.field}>{name}</p>
      </div>
    );

  if (checked === undefined || checked === null || checked === '')
    return (
      <div className= {css.field__input}>
        <label className= {css.field__label}>{label}</label>
        {(value) ? (
          <input className= {css.field} type={type} name={name} defaultValue={value} placeholder={placeholder} />
        ) : (
          <input className= {css.field} type={type} name={name} placeholder={placeholder} />
        )}
      </div>
    );

  return (
    <div className= {css.field__input}>
      <label className= {css.field__label}>{label}</label>
      <div className= {css.field}>
        <input type= {type} name={name} placeholder={placeholder} checked={checked} onChange={onChange} />
      </div>
    </div>
  );  
}

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  noInput: PropTypes.bool,
  value: PropTypes.string,
}
