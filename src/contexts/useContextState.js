import React, { useContext } from 'react';
import { MyContext } from './Context';

const useContextState = () => {
    const value = "Hello world"
    return value;
}

export default useContextState;