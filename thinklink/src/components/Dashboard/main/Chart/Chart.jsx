import React from 'react';
import './chart.css'
import Chartdata from './Chartdata/Chartdata';
import Filter from './filter/Filter';
const Chart = () => {
    return (
        <div className='chart'>
            <div className='chartcon'>
              <Filter/>
              <Chartdata/>
            </div>
        </div>
    );
};

export default Chart;