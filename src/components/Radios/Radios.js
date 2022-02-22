import React from 'react';
import { RadioComponentStyle } from './Radios.style'

const Radios = ({ title, name, id, change}) => {

  return (
    <RadioComponentStyle>
        <input type="radio" name={name} id={id} value={title} onChange={change} />
        <label htmlFor={id}>{title}</label>
    </RadioComponentStyle>
  )
}

export default Radios;