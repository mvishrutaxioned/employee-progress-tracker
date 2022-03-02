import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FilterStyle } from './Filter.style';
import { MyContext } from '../../contexts/context';
import { searchScheduleReports } from '../../reducers/reportReducer';
import { searchTaskAssigned } from '../../reducers/taskReducer';

const Filter = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const value = useContext(MyContext);
    const { setSearchReports, setSearchTasks } = value;
    const filterCondition = location.pathname === "/scheduleTable";

    const handleChange = e => {
        const { value } = e.target;
        (filterCondition
        ? dispatch(searchScheduleReports({ value: value.toLowerCase(), setSearchReports }))
        : dispatch(searchTaskAssigned({ value: value.toLowerCase(), setSearchTasks })))
    }

    return (
        <FilterStyle>
            <form action="#FIXME" method="GET" onSubmit={e => e.preventDefault()}>
                <input type="number" placeholder={filterCondition ? "Enter Hours" : "Enter Phase Number"} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </FilterStyle>
    )
}

export default Filter