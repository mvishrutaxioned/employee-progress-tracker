import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { MyContext } from '../../contexts/Context';
import TablePageHeading from '../../components/TablePageHeading';
import PageHeading from '../../components/PageHeading';
import SingleTask from '../../components/SingleTask';
import {
  TableListStyle,
  TableHeadStyle,
  TableStyle } from '../Pages.style';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [deleteIds, setDeleteIds] = useState([]);
  const [editId, setEditId] = useState();
  
  const value = useContext(MyContext);
  const { searchTasks } = value;

  const handleChange = (position, myId) => {
    let present = 0;
    let currId = deleteIds.filter((item,index) => {
     if(item === myId) present = 1;
     else return item;
    })

    if(present === 0) {
      setDeleteIds([...currId,myId]);
      currId = [...currId,myId];
    } else {
      setDeleteIds([...currId]);
      setEditId(null)
      currId = [...currId];
    }

    currId.length === 0 ? setShowDel(false) : setShowDel(true)

    if(currId.length === 1) {
      setShowEdit(true)
      setEditId(currId[0])
    } else setShowEdit(false)
  }

  return (
    <TableListStyle>
      <PageHeading text="Assign Task" />
      <TablePageHeading setElem={{setShowEdit, setShowDel, setDeleteIds, setEditId}} elem={{showDel, showEdit, deleteIds, editId}} />
      <TableStyle width="850px">
        <TableHeadStyle>
          <tr>
            <th>No.</th>
            <th><span className="icon">task</span>Task</th>
            <th><span className="icon">assign</span> Assigned To</th>
            <th><span className="icon">phase</span> Phase</th>
            <th><span className="icon">status</span> Status</th>
            <th><span className="icon">date</span> Due Date</th>
            <th><span className="icon">notes</span> Notes</th>
          </tr>
        </TableHeadStyle>
        <tbody>
          {searchTasks.length
          ? searchTasks.map((task, i) => <SingleTask key={task.id} name={`Task-${i}`} index={i} task={task} change={handleChange} />)
          : (tasks.length
            ? tasks.map((task, i) => <SingleTask key={task.id} name={`Task-${i}`} index={i} task={task} change={handleChange} />)
            : <p>No Data Found</p>)
          }
        </tbody>
      </TableStyle>
    </TableListStyle>
  )
}

export default TaskList