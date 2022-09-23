import React, { useState } from "react";
import "./table.css";
import { arr } from "./index";

console.log(arr);
const Table = () => {
  const [show, setShow] = useState(false);
  const [data, setdata] = useState(0);
  const [check, setcheck] = useState(false);
  const [tabledata, setArr] = useState(arr);

  return (
    <table>
      <thead>
        {tabledata ? (
          <tr>
            <th>
              <label className="checkbox">
                <input
                  type="checkbox"
                  defaultChecked={check}
                  onClick={() => {
                    if (check) {
                      setcheck(false);
                    } else {
                      setcheck(true);
                    }
                  }}
                />
              </label>
            </th>
            <th>PRODUCT</th>
            <th>RATING</th>
            <th>VINTAGE</th>
            <th>QTY</th>
            <th>VOLUME</th>
            <th>COST</th>
            <th>Price</th>
            <th></th>
          </tr>
        ) : null}
      </thead>
      <tbody>
        {tabledata.map((e, i) => {
          return (
            <React.Fragment key={e.id}>
              <tr>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" defaultChecked={check} />
                  </label>
                </td>
                <td className="imagetd">
                  <div className="wine">
                    <img src={e.img} alt="" />
                  </div>
                  <div className="winename">
                    <p>{e.title}</p>
                    <p>{e.country}</p>
                  </div>
                </td>
                <td>
                  <p>
                    RP95 <span>+{e.rating}</span>
                  </p>
                </td>
                <td>{e.vintage}</td>
                <td>{e.quant}</td>
                <td>standard(750ml)</td>
                <td>${e.cost}</td>
                <td>$ {e.price}</td>
                <td
                  onClick={(event) => {
                    console.log(e.id);
                    if (show) {
                      setShow(false);
                    } else {
                      setShow(true);
                      setdata(e.id);
                    }
                  }}
                >
                  {show && e.id == data ? (
                    <img
                      style={{ width: "10px" }}
                      src="https://cdn-icons-png.flaticon.com/128/130/130906.png"
                      alt=""
                    />
                  ) : (
                    <img
                      style={{ width: "10px" }}
                      src="https://cdn-icons-png.flaticon.com/128/32/32195.png"
                      alt=""
                    />
                  )}
                </td>
              </tr>
              {show && e.id == data ? (
                <tr
                  className={e.id}
                  style={{
                    width: "112px",
                  }}
                >
                  {/* <td></td> */}
                  <td>
                    <p></p>
                    <br />
                    <p style={{ marginTop: "28px" }}></p>
                    <div
                      style={{
                        width: "100%",
                        height: "150px",
                        borderTop: "1px solid gray",
                      }}
                    ></div>
                  </td>
                  <td className="reg">
                    <p>{e.title}</p>
                    <p>Region:{e.country}</p>
                    <div className="rate">
                      <div>
                        <p style={{ color: "gray" }}>Rating</p>
                        <p>jatiling</p>
                        <button
                          style={{
                            backgroundColor: "#F4F7FF",
                            border: "none",
                            borderRadius: "4px",
                          }}
                        >
                          R95{e.rating}
                        </button>
                      </div>
                      <div>
                        <p></p>
                        <br />
                        <p>Robert Parker</p>
                        <button
                          style={{
                            backgroundColor: "#F4F7FF",
                            border: "none",
                            borderRadius: "4px",
                          }}
                        >
                          R95{e.rating}
                        </button>
                      </div>
                      <div>
                        <p>Robert Parker</p>
                        <button
                          style={{
                            backgroundColor: "#F4F7FF",
                            border: "none",
                            borderRadius: "4px",
                          }}
                        >
                          R95{e.rating}
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p></p>
                    <br />
                    <p style={{ marginTop: "14px" }}>vintage:{e.vintage}</p>
                    <div
                      style={{
                        width: "100%",
                        height: "150px",
                        borderTop: "1px solid gray",
                      }}
                    ></div>
                  </td>
                  <td>
                    <p></p>
                    <br />
                    <p style={{ marginTop: "28px" }}></p>
                    <div
                      style={{
                        width: "100%",
                        height: "150px",
                        borderTop: "1px solid gray",
                      }}
                    ></div>
                  </td>
                  <td>
                    <p></p>
                    <br />
                    <p style={{ marginTop: "28px" }}></p>
                    <div
                      style={{
                        width: "100%",
                        height: "150px",
                        borderTop: "1px solid gray",
                      }}
                    ></div>
                  </td>
                  <td>
                    <p></p>
                    <br />
                    <p style={{ marginTop: "28px" }}></p>
                    <div
                      style={{
                        width: "100%",
                        height: "150px",
                        borderTop: "1px solid gray",
                      }}
                    ></div>
                  </td>
                  <td>
                    <p style={{ marginTop: "8px" }}></p>
                    <br />
                    <a>view wine</a>
                    <div
                      style={{
                        width: "100%",
                        height: "150px",
                        borderTop: "1px solid gray",
                      }}
                    ></div>
                  </td>
                  <td>
                    <p></p>
                    <br />
                    <svg
                      style={{ marginTop: "8px" }}
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.57 10.7789L13.5699 9.77904C13.7261 9.62281 13.9979 9.73217 13.9979 9.95714V14.5002C13.9979 15.3282 13.3262 16 12.4982 16H1.49978C0.671777 16 0 15.3282 0 14.5002V3.50183C0 2.67383 0.671777 2.00205 1.49978 2.00205H10.0454C10.2672 2.00205 10.3797 2.27076 10.2235 2.43011L9.22365 3.42997C9.17678 3.47683 9.11429 3.50183 9.04555 3.50183H1.49978V14.5002H12.4982V10.9539C12.4982 10.8882 12.5232 10.8258 12.57 10.7789ZM17.4631 4.47356L9.25802 12.6786L6.43343 12.9911C5.6148 13.0817 4.91803 12.3912 5.00864 11.5663L5.3211 8.74169L13.5261 0.53664C14.2417 -0.17888 15.3977 -0.17888 16.1101 0.53664L17.4599 1.88644C18.1755 2.60196 18.1755 3.76117 17.4631 4.47356V4.47356ZM14.376 5.43905L12.5607 3.62369L6.75526 9.43221L6.52717 11.4725L8.5675 11.2444L14.376 5.43905ZM16.4007 2.94879L15.0509 1.59898C14.9228 1.47088 14.7135 1.47088 14.5885 1.59898L13.623 2.56447L15.4384 4.37983L16.4038 3.41434C16.5288 3.28311 16.5288 3.07689 16.4007 2.94879V2.94879Z"
                        fill="#262730"
                      />
                    </svg>

                    <div
                      style={{
                        width: "100%",
                        height: "150px",
                        borderTop: "1px solid gray",
                      }}
                    ></div>
                  </td>
                  <td>
                    <p></p>
                    <br />

                    <svg
                      tyle={{ marginTop: "10px" }}
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        var newarr = [...tabledata];
                        newarr.splice(i, 1);
                        setArr([...newarr]);
                        setShow(false);
                      }}
                    >
                      <path
                        d="M13.375 17H14.125C14.2245 17 14.3198 16.9605 14.3902 16.8902C14.4605 16.8198 14.5 16.7245 14.5 16.625V9.875C14.5 9.77554 14.4605 9.68016 14.3902 9.60983C14.3198 9.53951 14.2245 9.5 14.125 9.5H13.375C13.2755 9.5 13.1802 9.53951 13.1098 9.60983C13.0395 9.68016 13 9.77554 13 9.875V16.625C13 16.7245 13.0395 16.8198 13.1098 16.8902C13.1802 16.9605 13.2755 17 13.375 17ZM18.5 6.5H15.9247L14.8622 4.72812C14.7288 4.50594 14.5402 4.32209 14.3147 4.19449C14.0892 4.06688 13.8344 3.99988 13.5753 4H10.4247C10.1657 3.99998 9.91106 4.06704 9.68566 4.19464C9.46025 4.32224 9.27172 4.50603 9.13844 4.72812L8.07531 6.5H5.5C5.36739 6.5 5.24021 6.55268 5.14645 6.64645C5.05268 6.74021 5 6.86739 5 7V7.5C5 7.63261 5.05268 7.75978 5.14645 7.85355C5.24021 7.94732 5.36739 8 5.5 8H6V18.5C6 18.8978 6.15804 19.2793 6.43934 19.5607C6.72064 19.842 7.10218 20 7.5 20H16.5C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2793 18 18.8978 18 18.5V8H18.5C18.6326 8 18.7598 7.94732 18.8536 7.85355C18.9473 7.75978 19 7.63261 19 7.5V7C19 6.86739 18.9473 6.74021 18.8536 6.64645C18.7598 6.55268 18.6326 6.5 18.5 6.5ZM10.37 5.59094C10.3867 5.56312 10.4104 5.54012 10.4386 5.52418C10.4669 5.50824 10.4988 5.49991 10.5312 5.5H13.4688C13.5011 5.49996 13.533 5.50832 13.5612 5.52426C13.5894 5.54019 13.613 5.56317 13.6297 5.59094L14.1753 6.5H9.82469L10.37 5.59094ZM16.5 18.5H7.5V8H16.5V18.5ZM9.875 17H10.625C10.7245 17 10.8198 16.9605 10.8902 16.8902C10.9605 16.8198 11 16.7245 11 16.625V9.875C11 9.77554 10.9605 9.68016 10.8902 9.60983C10.8198 9.53951 10.7245 9.5 10.625 9.5H9.875C9.77554 9.5 9.68016 9.53951 9.60984 9.60983C9.53951 9.68016 9.5 9.77554 9.5 9.875V16.625C9.5 16.7245 9.53951 16.8198 9.60984 16.8902C9.68016 16.9605 9.77554 17 9.875 17Z"
                        fill="#DADADB"
                      />
                    </svg>

                    {/* <p
             style={{marginTop:"28px"}}
             ></p> */}
                    <div
                      style={{
                        width: "100%",
                        height: "150px",
                        borderTop: "1px solid gray",
                      }}
                    ></div>
                  </td>
                </tr>
              ) : null}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
