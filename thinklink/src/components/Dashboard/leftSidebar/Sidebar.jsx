import React, { useState } from "react";
import "./Sidebar.css";
import dash from "../../../Pictures/dash.png";
import cus from "../../../Pictures/cus.png";
import inv from "../../../Pictures/inv.png";
import report from "../../../Pictures/report.png";
import set from "../../../Pictures/settikng.png";
import order from "../../../Pictures/order.png";

const Sidebar = () => {
  const [data, setfirst] = useState([
    { img: dash, list: "Dashbord" },
    { img: inv, list: "Inventory" },
    ,
    { img: order, list: "orders" },
    { img: cus, list: "Customers" },
    { img: report, list: "Reports" },
    { img: set, list: "Settings" },
  ]);
  return (
    <div className="sidenav">
      {data.map((e, i) => {
        return (
          <div className="list" key={i}>
            <div>
              <img src={e.img} alt="" />
            </div>
            <div>
              <p>{e.list}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
