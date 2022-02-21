import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../../components/HomeButton/HomeButton';
import { HomeBtnStyle, PageHeadStyle, MainStyle } from './InitialPage.style';

const InitialPage = () => {
  return (
    <MainStyle className="initialPage">
        <PageHeadStyle className="page-heading">
            <div className="wrapper">
                <span className="user-heading icon">user heading</span>
                <h1 className="logo"><Link to="/" title="Company X">Company X</Link></h1>
                <p>For internal use only.</p>
            </div>
        </PageHeadStyle>
        <HomeBtnStyle className="home-btns">
            <div className="wrapper">
                <ul>
                    <HomeButton link={'/logShift'} color={'#1C77F4'} icon={'calender'} content={"\\f073"} text={'Log Weekly Shift'} />
                    <HomeButton link={'/scheduleTable'} color={'#1C77F4'} icon={'sheet'} content={"\\f0ce"} text={'Employee Schedule Table'} />
                    <HomeButton link={'/assignTask'} color={'#34a853'} icon={'task'} content={"\\f46c"} text={'Assign Task'} />
                    <HomeButton link={'taskList'} color={'#34a853'} icon={'sheet'} content={"\\f0ce"} text={'Employee Task List'} />
                    {/* <li> 
                        <Link to="/logShift">Log Weekly Shift</Link>
                    </li>
                    <li> 
                        <Link to="/scheduleTable">Employee Schedule Table</Link>
                    </li>
                    <li> 
                        <Link to="/assignTask">Assign Task</Link>
                    </li>
                    <li> 
                        <Link to="/taskList">Employee Task List</Link>
                    </li> */}
                </ul>
            </div>
        </HomeBtnStyle>
    </MainStyle>
  )
}

export default InitialPage