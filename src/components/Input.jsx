import React from 'react';

export const Input = ({
  type,
  name,
  id,
  className,
  placeholder,
  isRequired = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={className}
      placeholder={placeholder}
      required={isRequired}
    />
  );
};
