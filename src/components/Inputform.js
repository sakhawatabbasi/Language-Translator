import React, { forwardRef } from "react";

const Inputform = forwardRef((props, ref) => {
  console.log("rendering child:input form");
  return (
    <div className="text-input">
      <textarea
        required
        ref={ref}
        className="from-text"
        placeholder="Enter text..."
        type="text"
        value={props.inputText}
      ></textarea>
      <textarea
        disabled
        className="to-text"
        placeholder="Translation..."
        value={props.translatedText}
      ></textarea>
    </div>
  );
});

export default Inputform;
