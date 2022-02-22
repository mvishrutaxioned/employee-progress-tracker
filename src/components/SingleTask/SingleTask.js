import React from 'react';
import { SingleTaskStyle } from './SingleTask.style';

const SingleTask = ({ task, name, change, index }) => {

    return (
        <SingleTaskStyle>
            <td><input type="checkbox" name={name} onChange={() => change(index, task.id)} /></td>
            <td><span>{task.task}</span></td>
            <td><span>{task.assignTo}</span></td>
            <td><span>{task.phase}</span></td>
            <td><span>{task.status}</span></td>
            <td><span>{task.dueDate}</span></td>
            <td><span>{task.notes}</span></td>
        </SingleTaskStyle>
    )
}

export default SingleTask