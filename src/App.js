import React from 'react';
import './assets/css/style.css';
import InitialPage from './pages/initialPage';
import LogShift from './pages/logShift';
import AssignTask from './pages/assignTask';
import ScheduleTable from './pages/scheduleTable';
import TaskList from './pages/taskList';
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
