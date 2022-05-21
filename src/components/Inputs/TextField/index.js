import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox } from '../../Layouts'

import './style.css'

const TextField = ({
  register,
  className,
  type = 'text',
  disabled,
  onChange,
  onBlur,
  name,
  label,
  prefix,
  suffix,
  error,
  value,
  id,
  defaultValue,
  ...props
}) => (
    <FlexBox className={`text-input-filed-container ${className} ${label ? 'with-label' : ''}`}>
      {label && (
        <label htmlFor="" className='input-label'>{label}</label>
      )}

      {prefix && (
        <div className="input-field-prefix">
          {prefix}
        </div>
      )}
      <input
        ref={register}
        type={type}
        name={name}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        className={`text-input-filed ${error ? 'error' : ''}`}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        {...props}
      />
      {suffix && suffix}
    </FlexBox>
  );

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};
TextField.defaultProps = {
  className: '',
  type: 'text',
};

export default TextField;
