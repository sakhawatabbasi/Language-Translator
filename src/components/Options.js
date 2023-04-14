import { React, memo } from "react";
import countries from "../data";

const Options = ({
  translateFrom,
  setTranslateFrom,
  handleCopyClick,
  handleExchangeClick,
  translateTo,
  setTranslateTo,
}) => {
  console.log("rendering child:options");
  return (
    <>
      {" "}
      <ul className="controls">
        <li className="row from">
          <select
            value={translateFrom}
            onChange={(e) => setTranslateFrom(e.target.value)}
          >
            {Object.entries(countries).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
          <div className="icons">
            <i id="from" className="fas fa-copy" onClick={handleCopyClick}></i>
          </div>
        </li>
        <li className="exchange" onClick={handleExchangeClick}>
          <i className="fas fa-exchange-alt"></i>
        </li>
        <li className="row to">
          <div className="icons">
            <i id="from" className="fas fa-copy" onClick={handleCopyClick}></i>
          </div>
          <select
            value={translateTo}
            onChange={(e) => setTranslateTo(e.target.value)}
          >
            {Object.entries(countries).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </>
  );
};

export default memo(Options);
