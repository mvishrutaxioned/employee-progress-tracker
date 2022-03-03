import React from 'react';
import { SingleScheduleStyle } from './singleSchedule.style';

const SingleSchedule = ({ report, change, index }) => {
  const num = index+1;
  return (
    <SingleScheduleStyle>
        <td>{num}<input type="checkbox" onChange={() => change(index, report.id)} /></td>
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