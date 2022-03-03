import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchFilter from '../searchFilter/index';
import { MyContext } from '../../contexts/context';
import { useNavigate, useLocation  } from 'react-router-dom';
import { TablePageStyle, TablePageFormStyle, FilterStyle } from './tablePageHeading.style';
import { editTaskAssigned, searchTaskAssigned, delTaskAssigned } from '../../reducers/taskReducer';
import { delScheduleReport, editScheduleReport, searchScheduleReports } from '../../reducers/reportReducer';

const TablePageHeading = ({ elem, setElem }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const value = useContext(MyContext);
  const [showFilter, setShowFilter] = useState(false);
  const { showDel, showEdit, deleteIds, editId } = elem;
  const { setEditInfo, setSearchReports, setSearchTasks } = value;
  const {setShowEdit, setShowDel, setDeleteIds, setEditId } = setElem;

  const editData = () => {
    if(location.pathname === '/taskList') {
      dispatch(editTaskAssigned({setEditInfo, setShowEdit, setEditId, editId}))
      navigate("/assignTask")
    } else {
      dispatch(editScheduleReport({setEditInfo, setShowEdit, setEditId, editId}))
      navigate("/logShift")
    }
  }

  const deleteData = () => {
    location.pathname === '/taskList'
    ? dispatch(delTaskAssigned({deleteIds, setDeleteIds, setShowDel, setShowEdit }))
    : dispatch(delScheduleReport({deleteIds, setDeleteIds, setShowDel, setShowEdit }))
  }

  const handleChange= e => {
    e.preventDefault();
    const { value } = e.target;
    location.pathname === '/taskList'
    ? dispatch(searchTaskAssigned({ value: value.toLowerCase(), setSearchTasks }))
    : dispatch(searchScheduleReports({ value: value.toLowerCase(), setSearchReports }))
  }

  return (
    <>
      <TablePageStyle>
        <TablePageFormStyle>
            <form action="#FIXME" method="POST" onSubmit={e => e.preventDefault()}>
                <button className="icon" type="submit">search</button>
                <input type="text" placeholder="Search" onChange={handleChange} />
            </form>
            <FilterStyle onClick={() => setShowFilter(!showFilter)}>Filter <span className="icon">filter</span></FilterStyle>
        </TablePageFormStyle>
        <div>
          {showDel && <a href="#FIXME" title="Delete" onClick={() => deleteData()}><span className="icon">del</span> Delete</a>}
          {showEdit && <a href="#FIXME" title="Edit" onClick={() => editData()}><span className="icon">edit</span> Edit</a>}
        </div>
      </TablePageStyle>
      {showFilter && <SearchFilter />}
    </>
  )
}

export default TablePageHeading