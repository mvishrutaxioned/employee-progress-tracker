import React from 'react';
import TablePageHeading from '../../components/TablePageHeading/TablePageHeading';
import PageHeading from '../../components/PageHeading/PageHeading';
import SingleTask from '../../components/SingleTask/SingleTask';
import { taskInfo } from '../../utils/formData';
import { TableListStyle, TableHeadStyle, TableStyle } from '../Pages.style'

const TaskList = () => {
  return (
    <TableListStyle>
      <div className="wrapper">
        <PageHeading text="Assign Task" />
        <TablePageHeading />
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
            {
              taskInfo.map((task, i) => <SingleTask key={i} task={task} />)
            }
          </tbody>
        </TableStyle>
      </div>
    </TableListStyle>
  )
}

export default TaskList