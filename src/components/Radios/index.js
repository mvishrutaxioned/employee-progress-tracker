import React from 'react';
import { RadioComponentStyle } from './Radios.style'

const Radios = ({ title, name, id, change, value}) => {

  return (
    <RadioComponentStyle>
        <input type="radio" checked={title === value} name={name} id={id} value={title} onChange={change} />
        <label htmlFor={id}>{title}</label>
    </RadioComponentStyle>
  )
}

export default Radios;