import React from 'react';
import * as echarts from "echarts"
import ReactEChart from "echarts-for-react"
import './chartshow.css'
const Chartshow = () => {

    const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '${value}k'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
     
          color:"green",
        dataZoom: [
                    {
                      show: true,
                      type: 'inside',
                      filterMode: 'none',
                      xAxisIndex: [0],
                      startValue: -20,
                      endValue: 20
                    },
                    {
                      show: true,
                      type: 'inside',
                      filterMode: 'none',
                      yAxisIndex: [0],
                  
                    }
                  ],
        series: [
          {
            data: [1, 2, 2, 15, 3, 2, 9,10,50,25],
            type: 'line'
          }
        ]
      };
  
    return (
        <div className='chartshow'>
             <div className='dollar'>

                <div>
                    <h1>
                        $74,729.00
                    </h1>
                    <div className='grow'>
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0L16.295 2.295L11.415 7.16999L7.41501 3.17001L0 10.585L1.41501 12L7.41501 5.99999L11.415 10L17.705 3.705L20 5.99999V0H14Z" fill="#2FCA72"/>
</svg>  +21% from last week

                    </div>
                </div>
                <div >
                    <div className='rev'>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.67656 6.67656C3.87188 6.87187 4.18844 6.87187 4.38375 6.67656L6 5.06063L8.64656 7.70719C8.84188 7.9025 9.15844 7.9025 9.35375 7.70719L12.7981 4.2625L13.7197 5.18437C14.1922 5.65687 15 5.32219 15 4.65406V1.5C15 1.22375 14.7763 1 14.5 1H11.3459C10.6778 1 10.3431 1.80781 10.8156 2.28031L11.7375 3.20188L9 5.93937L6.35344 3.29281C6.15812 3.0975 5.84156 3.0975 5.64625 3.29281L3.32312 5.61594C3.12781 5.81125 3.12781 6.12781 3.32312 6.32312L3.67656 6.67656V6.67656ZM15.5 10.5H1.5V0.5C1.5 0.22375 1.27625 0 1 0H0.5C0.22375 0 0 0.22375 0 0.5V11C0 11.5522 0.447812 12 1 12H15.5C15.7763 12 16 11.7763 16 11.5V11C16 10.7237 15.7763 10.5 15.5 10.5Z" fill="#2FCA72"/>
</svg> Highest revenue since 2 weeks
</div>
                   
                </div>
             </div>
             <div className='chartvis'>

             <ReactEChart 
             className="bar"
             option={option} 
             style={{
              height: '380px',
              width: '100%',
            
            }}
             />
             </div>
        </div>
    );
};

export default Chartshow;