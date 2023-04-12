import React, { useState, useRef, useCallback } from "react";
import countries from "../data";
import Inputform from "./Inputform";
import Options from "./Options";

const Translate = () => {
  // console.log("rendering parent:Translate");
  const [inputText, setInputText] = useState("");
  const [translateFrom, setTranslateFrom] = useState("en-GB");
  const [translateTo, setTranslateTo] = useState("ur-PK");
  const [translatedText, setTranslatedText] = useState("");

  const translatedTextRef = useRef("");

  const translateText = useCallback(() => {
    fetch(
      `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${translateFrom}|${translateTo}`
    )
      .then((response) => response.json())
      .then((data) => {
        translatedTextRef.current = data.responseData.translatedText;
        setTranslatedText(translatedTextRef.current);
      });
  }, [inputText, translateFrom, translateTo]);

  const handleExchangeClick = () => {
    setTranslateFrom(translateTo);
    setTranslateTo(translateFrom);
    setInputText(translatedTextRef.current);
    setTranslatedText("");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(translatedTextRef.current);
  };

  const DropOptions = () => {
    return Object.entries(countries).map(([code, name]) => (
      <option key={code} value={code}>
        {name}
      </option>
    ));
  };

  return (
    <>
      <div className="container rainbow">
        <div className="wrapper  ">
          <Inputform
            inputText={inputText}
            setInputText={setInputText}
            translatedText={translatedText}
          />
          <Options
            translateFrom={translateFrom}
            setTranslateFrom={setTranslateFrom}
            DropOptions={DropOptions}
            handleCopyClick={handleCopyClick}
            handleExchangeClick={handleExchangeClick}
            translateTo={translateTo}
            setTranslateTo={setTranslateTo}
          />
        </div>
        <button className="butn " onClick={translateText}>
          Translate
        </button>
      </div>
    </>
  );
};

export default Translate;
