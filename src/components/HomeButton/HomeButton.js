import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeButtonStyle from './HomeButton.style';
import { MyContext } from '../../contexts/Context';

const HomeButton = ({ link, color, icon, text, content }) => {
  const value = useContext(MyContext);

  const removeData = () => {
    value.setEditInfo([])
    value.setSearchTasks([])
    value.setSearchReports([])
  }
  
  return (
    <HomeButtonStyle color={color} content={content}>
        <Link to={link} onClick={removeData} title={text}>
            <span className={icon}>icon</span>
            {text}
        </Link>
    </HomeButtonStyle>
  )
}

export default HomeButton