import React from 'react';
import { RadioStyle } from '../../pages/Pages.style';
import { DayRadioBtnStyle } from './DayRadioBtn.style';
import Radios from '../Radios/Radios';
import { dayInfo } from '../../utils/formData';

const DayRadioBtn = ({ dayName, change, errors }) => {
  return (
    <DayRadioBtnStyle>
        <p>{dayName}</p>
        <RadioStyle>
            { dayInfo.map((day, i) => <Radios change={change} key={i} name={dayName.toLowerCase()} title={day.title} id={`${day.id}-${dayName.toLowerCase()}`} /> )}
        </RadioStyle>
        <span className="error">{errors[dayName]}</span>
    </DayRadioBtnStyle>
  )
}

export default DayRadioBtn