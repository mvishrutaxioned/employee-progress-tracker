import React from 'react';
import { RadioComponentStyle } from './Radios.style'

const Radios = ({ title, name, id}) => {
  console.log(name)
  return (
    <RadioComponentStyle>
        <input type="radio" name={name} id={id} />
        <label htmlFor={id}>{title}</label>
    </RadioComponentStyle>
  )
}

export default Radios;