import React from 'react';
import "./filter.css"
const Filter = () => {
    return (
        <div className='filtercon'
        style={{
            background: "#FFFFFF",
            border: "1px solid #FFF2EE"
        }}
        >
            <div >
                <div >
                    <p>Total Slaes Overview</p>
                    <p>7-13 Aug ,2020</p>
                </div>
            </div>
            <div >
                <div className='filter'>
                    <label htmlFor="">Filter</label>
           <select name="" id="">
            <option value=""></option>
            <option value="today">Today</option>
            <option value="Yesterday">Yesterdat</option>
            <option value="week">this week</option>
            <option value="week">this month</option>
           </select>
           </div>
            </div>
        </div>
    );
};

export default Filter;