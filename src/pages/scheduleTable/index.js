import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { MyContext } from '../../contexts/context';
import PageHeading from '../../components/pageHeading';
import SingleSchedule from '../../components/singleSchedule';
import TablePageHeading from '../../components/tablePageHeading';
import { TableListStyle, TableStyle, TableHeadStyle2 } from '../pages.style';

const ScheduleTable = () => {
  const reports = useSelector(state => state.reports);
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [deleteIds, setDeleteIds] = useState([]);
  const [editId, setEditId] = useState();

  const value = useContext(MyContext);
  const { searchReports } = value;

  /**
  * @param {number} position
  * @param {number} myId
  * @description sets delete & edit on change
  */
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

    currentId.length === 0 ? setShowDel(false) : setShowDel(true)

    if(currentId.length === 1) {
      setShowEdit(true)
      setEditId(currentId[0])
    } else setShowEdit(false)
  }

  return (
    <TableListStyle>
        <PageHeading text="Log Weekly Shift" />
        <TablePageHeading 
        setElem={{setShowEdit, setShowDel, setDeleteIds, setEditId}} 
        elem={{showDel, showEdit, deleteIds, editId}} />
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
            {searchReports.length
            ? searchReports.map((report, i) => {
                return <SingleSchedule key={report.id} index={i} report={report} change={handleChange} />
              })
            : (reports.length
              ? reports.map((report, i) => {
                  return <SingleSchedule key={report.id} index={i} report={report} change={handleChange} />
                })
              : <tr><td className="not">No Data Found</td></tr>)
            }
          </tbody>
        </TableStyle>
    </TableListStyle>
  )
}

export default ScheduleTable;