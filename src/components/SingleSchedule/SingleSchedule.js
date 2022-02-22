import React from 'react';
import { SingleScheduleStyle } from './SingleSchedule.style'

const SingleSchedule = ({ report, name, change, index }) => {
  return (
    <SingleScheduleStyle>
        <td><input type="checkbox" name={name} onChange={() => change(index, report.id)} /></td>
        <td><span>{report.name}</span></td>
        <td><span>{report.weekDate}</span></td>
        <td><span>{report.monday}</span></td>
        <td><span>{report.tuesday}</span></td>
        <td><span>{report.wednesday}</span></td>
        <td><span>{report.thursday}</span></td>
        <td><span>{report.friday}</span></td>
        <td><span>{report.saturday}</span></td>
        <td><span>{report.sunday}</span></td>
        <td><span>{report.hours}</span></td>
    </SingleScheduleStyle>
  )
}

export default SingleSchedule