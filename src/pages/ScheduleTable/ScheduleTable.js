import React, { useState } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import SingleSchedule from '../../components/SingleSchedule/SingleSchedule';
import TablePageHeading from '../../components/TablePageHeading/TablePageHeading';
import { TableListStyle, TableStyle, TableHeadStyle2 } from '../Pages.style';
import { useSelector } from 'react-redux';

const ScheduleTable = () => {
  const reports = useSelector(state => state.reports);
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [deleteIds, setDeleteIds] = useState([]);

  const handleChange = (position, myId) => {
    let present = 0;
    let currentId = deleteIds.filter((item, index) => {
     if(item === myId) present = 1;
     else return item;
    })

    if(present === 0) {
      setDeleteIds([...currentId,myId]);
      currentId = [...currentId,myId];
    } else {
      setDeleteIds([...currentId]);
      currentId = [...currentId];
    }

    if(currentId.length === 0) setShowDel(false);
    else setShowDel(true)
  }

  return (
        <TableListStyle>
          <div className="wrapper">
            <PageHeading text="Log Weekly Shift" />
            <TablePageHeading setElem={{setShowEdit, setShowDel, setDeleteIds}} elem={{showDel, showEdit, deleteIds}} />
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
                {reports.map((report, i) => <SingleSchedule key={report.id} name={`Report-${i}`} index={i} report={report} change={handleChange} />)}
              </tbody>
            </TableStyle>
          </div>
        </TableListStyle>
  )
}

export default ScheduleTable;