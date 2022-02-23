import React, { useContext, useState } from 'react';
import { FilterStyle } from '../Filter.style';
import { MyContext } from '../../contexts/Context';
import { useDispatch } from 'react-redux';
import { searchTask } from '../../actions/actions';

const Filter = () => {
    const dispatch = useDispatch()
    const value = useContext(MyContext);
    const { setSearchTasks } = value;
    const [searchText, setSearchText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchTask({ value: searchText.toLowerCase(), setSearchTasks }))
    }

    return (
        <FilterStyle>
            <form action="#FIXME" method="GET" onSubmit={handleSubmit}>
                <input type="number" placeholder="Enter Phase Number" onChange={e => setSearchText(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </FilterStyle>
    )
}

export default Filter