import React from 'react';
import { RadioComponentStyle } from './radioButton.style'

const RadioButton = ({ title, name, id, change, check}) => {
  const checked = (check ? true : false);
  
  return (
    <RadioComponentStyle>
      <input type="radio" checked={checked} name={name} id={id} value={title} onChange={change} />
      <label htmlFor={id}>{title}</label>
    </RadioComponentStyle>
  )
}

export default RadioButton;