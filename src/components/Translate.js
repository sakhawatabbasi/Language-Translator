import React, { useState, useRef, useCallback } from "react";
import Inputform from "./Inputform";
import Options from "./Options";

const Translate = () => {
  // console.log("rendering parent:Translate");
  const [translateFrom, setTranslateFrom] = useState("en-GB");
  const [translateTo, setTranslateTo] = useState("ur-PK");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const translatedTextRef = useRef("");
  const inpuTextRef = useRef();

  const translateText = useCallback(() => {
    setIsLoading(true);

    fetch(
      `https://api.mymemory.translated.net/get?q=${inpuTextRef.current.value}&langpair=${translateFrom}|${translateTo}`
    )
      .then((response) => response.json())
      .then((data) => {
        translatedTextRef.current = data.responseData.translatedText;
        setTranslatedText(translatedTextRef.current);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [translateFrom, translateTo]);

  const handleExchangeClick = () => {
    setTranslateFrom(translateTo);
    setTranslateTo(translateFrom);
    inpuTextRef.current.value = translatedTextRef.current;
    setTranslatedText("");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(translatedTextRef.current);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inpuTextRef.current.value.trim() !== "") {
      translateText();
    }
  };

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <div className="container rainbow">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <Inputform
              ref={inpuTextRef}
              setInputText={inpuTextRef.current}
              translatedText={translatedText}
            />
            <Options
              translateFrom={translateFrom}
              setTranslateFrom={setTranslateFrom}
              handleCopyClick={handleCopyClick}
              handleExchangeClick={handleExchangeClick}
              translateTo={translateTo}
              setTranslateTo={setTranslateTo}
            />
            <button className=" rainbow1">Translate</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Translate;
