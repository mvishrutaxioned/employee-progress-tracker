import React from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import SingleSchedule from '../../components/SingleSchedule/SingleSchedule';
import TablePageHeading from '../../components/TablePageHeading/TablePageHeading';
import { TableListStyle, TableStyle, TableHeadStyle2 } from '../Pages.style';
import { scheduleInfo } from '../../utils/formData';

const ScheduleTable = () => {
  return (
        <TableListStyle>
          <div className="wrapper">
            <PageHeading text="Log Weekly Shift" />
            <TablePageHeading />
            <TableStyle width="1100px">
              <TableHeadStyle2>
                <tr>
                  <th>No.</th>
                  <th><span className="icon">name</span> Employee Name</th>
                  <th><span className="icon">week</span> Week</th>
                  <th><span className="icon">day</span> Monday</th>
                  <th><span className="icon">day</span> Tuesday</th>
                  <th><span className="icon">day</span> Wednesday</th>
                  <th><span className="icon">day</span> Thursday</th>
                  <th><span className="icon">day</span> Friday</th>
                  <th><span className="icon">day</span> Sunday</th>
                  <th><span className="icon">day</span> Saturday</th>
                  <th>Hours</th>
                </tr>
              </TableHeadStyle2>
              <tbody>
                {
                  scheduleInfo.map((schedule, i) => <SingleSchedule key={i} schedule={schedule} />)
                }
              </tbody>
            </TableStyle>
          </div>
        </TableListStyle>
  )
}

export default ScheduleTable;