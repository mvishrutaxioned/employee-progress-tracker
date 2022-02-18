import React from 'react';
import { Link } from 'react-router-dom';
import HomeButtonStyle from './HomeButton.style';

const HomeButton = ({ link, color, icon, text, content }) => {
  
  return (
    <HomeButtonStyle color={color} content={content}>
        <Link to={link} title={text}>
            <span className={icon}>icon</span>
            {text}
        </Link>
    </HomeButtonStyle>
  )
}

export default HomeButton