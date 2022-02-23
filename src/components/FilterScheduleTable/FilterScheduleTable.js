import React, { useContext, useState } from 'react';
import { FilterStyle } from '../Filter.style';
import { MyContext } from '../../contexts/Context';
import { useDispatch } from 'react-redux';
import { searchReport } from '../../actions/actions';

const Filter = () => {
    const dispatch = useDispatch()
    const value = useContext(MyContext);
    const { setSearchReports } = value;
    const [searchText, setSearchText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchReport({ value: searchText.toLowerCase(), setSearchReports }))
    }

    return (
        <FilterStyle>
            <form action="#FIXME" method="GET" onSubmit={handleSubmit}>
                <input type="number" placeholder="Enter Hours" onChange={e => setSearchText(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </FilterStyle>
    )
}

export default Filter