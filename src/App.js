import React from 'react';
import './assets/css/style.css';
import InitialPage from './pages/InitialPage';
import LogShift from './pages/LogShift';
import AssignTask from './pages/AssignTask';
import ScheduleTable from './pages/ScheduleTable';
import TaskList from './pages/TaskList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './contexts/context';

const  App = () => {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/logShift" element={<LogShift />} />
            <Route path="/assignTask" element={<AssignTask />} />
            <Route path="/scheduleTable" element={<ScheduleTable />} />
            <Route path="/taskList" element={<TaskList />} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
