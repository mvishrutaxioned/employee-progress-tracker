import React from 'react';
import './assets/css/style.css';
import InitialPage from './pages/initialPage';
import ScheduleForm from './pages/scheduleForm';
import TaskForm from './pages/taskForm';
import ScheduleTable from './pages/scheduleTable';
import TaskTable from './pages/taskTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './contexts/context';

const  App = () => {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/logShift" element={<ScheduleForm />} />
            <Route path="/assignTask" element={<TaskForm />} />
            <Route path="/scheduleTable" element={<ScheduleTable />} />
            <Route path="/taskList" element={<TaskTable />} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
