import React from 'react';
import { RadioStyle } from '../../pages/Pages.style';
import { DayRadioBtnStyle } from './DayRadioBtn.style';
import Radios from '../Radios/Radios';
import { dayInfo } from '../../utils/formData';

const DayRadioBtn = ({ dayName }) => {
  return (
    <DayRadioBtnStyle>
        <p>{dayName}</p>
        <RadioStyle>
            { dayInfo.map((day, i) => <Radios key={i} name={dayName.toLowerCase()} title={day.title} id={`${day.id}-${dayName.toLowerCase()}`} /> )}
        </RadioStyle>
        <span className="error">error</span>
    </DayRadioBtnStyle>
  )
}

export default DayRadioBtn