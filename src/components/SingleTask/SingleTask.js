import React from 'react';
import { SingleTaskStyle } from './SingleTask.style';

const SingleTask = ({ task }) => {

    return (
        <SingleTaskStyle>
            <td><input type="checkbox" /></td>
            <td><span>{task.task}</span></td>
            <td><span>{task.assignTo}</span></td>
            <td><span>{task.phase}</span></td>
            <td><span>{task.status}</span></td>
            <td><span>{task.date}</span></td>
            <td><span>{task.notes}</span></td>
        </SingleTaskStyle>
    )
}

export default SingleTask