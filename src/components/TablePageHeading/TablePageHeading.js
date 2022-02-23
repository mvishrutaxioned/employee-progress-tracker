import React, { useContext, useState } from 'react';
import { TablePageStyle, TablePageFormStyle, FilterStyle } from './TablePageHeading.style';
import { deleteTask, editTask, editReport, deleteReport, searchReport, searchTask } from '../../actions/actions';
import { MyContext } from '../../contexts/Context';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation  } from 'react-router-dom';
import FilterScheduleTable from '../FilterScheduleTable/FilterScheduleTable';
import FilterTasks from '../FilterTasks/FilterTasks';

const TablePageHeading = ({ elem, setElem }) => {
  const { showDel, showEdit, deleteIds, editId } = elem;
  const {setShowEdit, setShowDel, setDeleteIds, setEditId } = setElem;
  const value = useContext(MyContext);
  const { setEditInfo, setSearchReports, setSearchTasks } = value;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const editData = () => {
    if(location.pathname === '/taskList') {
      dispatch(editTask({setEditInfo, setShowEdit, setEditId, editId}))
      navigate("/assignTask")
    } else {
      dispatch(editReport({setEditInfo, setShowEdit, setEditId, editId}))
      navigate("/logShift")
    }
  }

  const deleteData = () => {
    if(location.pathname === '/taskList') dispatch(deleteTask({deleteIds, setDeleteIds, setShowDel, setShowEdit }))
    else dispatch(deleteReport({deleteIds, setDeleteIds, setShowDel, setShowEdit }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(location.pathname === '/taskList') dispatch(searchTask({ value: searchText.toLowerCase(), setSearchTasks }))
    dispatch(searchReport({ value: searchText.toLowerCase(), setSearchReports }))
  }

  return (
    <>
      <TablePageStyle>
        <TablePageFormStyle>
            <form action="#FIXME" method="POST" onSubmit={handleSubmit}>
                <button className="icon" type="submit">search</button>
                <input type="text" placeholder="Search" onChange={e => setSearchText(e.target.value)} />
            </form>
            <FilterStyle onClick={() => setShowFilter(!showFilter)}>Filter <span className="icon">filter</span></FilterStyle>
        </TablePageFormStyle>
        <div>
          { showDel ? <a href="#FIXME" title="Delete" onClick={() => deleteData()}><span className="icon">del</span> Delete</a> : null }
          { showEdit ? <a href="#FIXME" title="Edit" onClick={() => editData()}><span className="icon">edit</span> Edit</a> : null }
        </div>
      </TablePageStyle>
      { showFilter && (
        location.pathname === '/scheduleTable' ? <FilterScheduleTable /> : <FilterTasks />
      ) }
    </>
  )
}

export default TablePageHeading