import React from 'react';
import "./dash.css"
import Sidebar from './leftSidebar/Sidebar';
import Main from './main/Main';
const Dashbord = () => {
    return (
        <div className='dash'>
           
            <Sidebar/> 
           
           
           <Main/>
        </div>
    );
};

export default Dashbord;