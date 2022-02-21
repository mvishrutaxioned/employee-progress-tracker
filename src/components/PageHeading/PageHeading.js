import React from 'react';
import { Link } from 'react-router-dom';
import PageHeadStyle from './PageHeading.style';

const PageHeading = ({text}) => {
  return (
    <PageHeadStyle>
        <Link to="/" title="Back"><span className="icon">back</span>BACK</Link>
        <p>{text}</p>
    </PageHeadStyle>
  )
}

export default PageHeading;