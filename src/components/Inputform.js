import React from 'react'

const Inputform = ({inputText,setInputText,translatedText,}) => {
    // console.log("rendering child:input form");
  return (
    <div className="text-input">
    <textarea
            
        className="from-text"
        placeholder="Enter text..."
        type="text" value={inputText} onChange={e => setInputText(e.target.value)}
      ></textarea>
       <textarea
     
      disabled
      className="to-text"
      placeholder="Translation..."
      value={translatedText}
      ></textarea>
  </div>
  )
}

export default Inputform;
