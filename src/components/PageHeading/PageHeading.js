import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PageHeadStyle from './PageHeading.style';
import { MyContext } from '../../contexts/Context';

const PageHeading = ({text}) => {
  const value = useContext(MyContext);

  return (
    <PageHeadStyle>
        <Link to="/" onClick={() => value.setEditInfo([])} title="Back"><span className="icon">back</span>BACK</Link>
        <p>{text}</p>
    </PageHeadStyle>
  )
}

export default PageHeading