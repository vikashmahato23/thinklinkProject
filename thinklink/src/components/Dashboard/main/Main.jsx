import React from 'react';
import Chart from './Chart/Chart';
import "./Main.css"
import Overview from './overview/Overview';
import Ovrdata from './ovrviewData/Ovrdata';
import Table from './Table/Table';
const Main = () => {
    return (
    
        <div className='main'>
              <div className='container'>
                <Overview/>
                <Ovrdata/>
                <p>Sales details</p>
                <Chart/>
                <p style={{marginTop:"10px"}}>Inventory</p>
                <Table/>
              </div>
        </div>
        
    );
};

export default Main;