import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FilterStyle } from './Filter.style';
import { MyContext } from '../../contexts/Context';
import { searchReport, searchTask } from '../../actions/actions';

const Filter = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const value = useContext(MyContext);
    const { setSearchReports, setSearchTasks } = value;
    const filterCondition = location.pathname === "/scheduleTable";

    const handleChange = e => {
        const { value } = e.target;
        (filterCondition
        ? dispatch(searchReport({ value: value.toLowerCase(), setSearchReports }))
        : dispatch(searchTask({ value: value.toLowerCase(), setSearchTasks })))
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