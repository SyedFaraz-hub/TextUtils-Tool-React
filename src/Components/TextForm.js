import React, { useState } from "react";

export default function TextForm(props) {

  document.title = "TextUtils - Home";  


  const [Text, setText] = useState("");

  const ToUppercase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Changed To UpperCase Successfully", "success")
  };

  const ToLowercase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Changed To LowerCase Successfully", "success")
  };

  const ToClearText = () => {
    let newText = ("");
    setText(newText);
    props.showAlert("Text Cleared Successfully", "success")
  };

  const HandleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container" style={{color: props.mode==='dark'?`white`:`black`}}>
      <h1 className="my-4">Welcome to TextUtils</h1>
      <div className="mb-3">
        <textarea
          style={{
          backgroundColor: props.mode === `dark`?`#212529`:`white`, 
          color: props.mode === `dark`?`white`:`black` }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={Text}
          onChange={HandleChange}
        ></textarea>
      </div>
      <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-2" onClick={ToUppercase}>
        Change to Uppercase
      </button>
      <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-2" onClick={ToLowercase}>
        Change to Lowercase
      </button>
      <button disabled={Text.length === 0} className="btn btn-primary mx-2 my-2" onClick={ToClearText}>
        Clear Text
      </button>
      
      <h4 className="my-3">Text Summery</h4>
      <p>{Text.split(/\s/).filter((element)=>{return element.length!==0}).length} Words , {Text.length} Character</p>
      <h4 >Preview</h4>
      <p>{Text.length>0?Text:`Nothing To Preview...`}</p>
    </div>
  );
}
