import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeButtonStyle from './homeButton.style';
import { MyContext } from '../../contexts/context';

const HomeButton = ({ link, color, text }) => {
  const value = useContext(MyContext);

  const removeData = () => {
    value.setEditInfo([])
    value.setSearchTasks([])
    value.setSearchReports([])
  }
  
  return (
    <HomeButtonStyle color={color}>
        <Link to={link} onClick={() => removeData} title={text}>
            <span className="icon">icon</span>
            {text}
        </Link>
    </HomeButtonStyle>
  )
}

export default HomeButton