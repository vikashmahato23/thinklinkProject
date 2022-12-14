import React from "react";
import "./chartdata.css";
import Chartshow from "./chartshow/chartshow";
const Chartdata = () => {
  return (
    <div className="chartdata">
      <Chartshow />
      <div className="totalpro">
        <h4>Total Profit</h4>
        <h2>$125454.00</h2>
        <div className="grow2">
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 0L16.295 2.295L11.415 7.16999L7.41501 3.17001L0 10.585L1.41501 12L7.41501 5.99999L11.415 10L17.705 3.705L20 5.99999V0H14Z"
              fill="#2FCA72"
            />
          </svg>{" "}
          +21% from last week
        </div>
        <h4>Total Product sold</h4>
        <h3>329</h3>
      </div>
    </div>
  );
};

export default Chartdata;
