import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PageHeadStyle from './pageHeading.style';
import { MyContext } from '../../contexts/context';

const PageHeading = ({text}) => {
  const value = useContext(MyContext);

  const removeData = () => {
    value.setEditInfo([])
    value.setSearchTasks([])
    value.setSearchReports([])
  }

  return (
    <PageHeadStyle>
        <Link to="/" onClick={removeData} title="Back"><span className="icon">back</span>BACK</Link>
        <p>{text}</p>
    </PageHeadStyle>
  )
}

export default PageHeading