import React from 'react';
import { SingleScheduleStyle } from './SingleSchedule.style'

const SingleSchedule = ({ schedule }) => {
  return (
    <SingleScheduleStyle>
        <td><span>1</span> <input type="checkbox" /></td>
        <td><span>{schedule.name}</span></td>
        <td><span>{schedule.week}</span></td>
        <td><span>{schedule.mon}</span></td>
        <td><span>{schedule.tues}</span></td>
        <td><span>{schedule.wed}</span></td>
        <td><span>{schedule.thur}</span></td>
        <td><span>{schedule.fri}</span></td>
        <td><span>{schedule.sat}</span></td>
        <td><span>{schedule.sun}</span></td>
        <td><span>{schedule.hours}</span></td>
    </SingleScheduleStyle>
  )
}

export default SingleSchedule