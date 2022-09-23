import React from 'react';
import add from '../../../../Pictures/add.png'
import './over.css'
const Overview = () => {
    return (
        <div className='overview'>
           <div ><p>Overview</p></div> 
           <div><button><img src={add} alt="" />ADD NEW WINE</button></div>
        </div>
    );
};

export default Overview;