import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


const boardsURL = `${process.env.REACT_APP_BACKEND_URL}`

import React from 'react';
import CreateAccount from './CreateAccount';

const App = () => {
    return (
        <div>
        {/* Add other components and content here */}
        <CreateAccount />
        </div>
    );
};

export default App;
