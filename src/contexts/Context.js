import React, { useState, createContext } from 'react';

export const MyContext = createContext();

export const ContextProvider = (props) => {

    const [editInfo, setEditInfo] = useState([]);
    const [searchReports, setSearchReports] = useState([]);
    const [searchTasks, setSearchTasks] = useState([]);

    const objData = {editInfo, setEditInfo, searchReports, setSearchReports, searchTasks, setSearchTasks};

    return (
        <MyContext.Provider value={objData}>
            {props.children}
        </MyContext.Provider>
    )
}